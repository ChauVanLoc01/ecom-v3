import { PrismaServiceUser } from '@app/common/prisma/user_prisma.service'
import { MailerService } from '@nestjs-modules/mailer'
import { InjectQueue } from '@nestjs/bull'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import {
    BadRequestException,
    ForbiddenException,
    HttpException,
    Inject,
    Injectable,
    NotFoundException,
    UnauthorizedException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { ClientProxy } from '@nestjs/microservices'
import * as bcrypt from 'bcryptjs'
import { Queue } from 'bull'
import { Cache } from 'cache-manager'
import { BackgroundAction, BackgroundName } from 'common/constants/background-job.constant'
import { getStoreExist, sendMail } from 'common/constants/event.constant'
import { Role } from 'common/enums/role.enum'
import { Status } from 'common/enums/status.enum'
import { CurrentStoreType, CurrentUserType } from 'common/types/current.type'
import { Return } from 'common/types/result.type'
import { omit } from 'lodash'
import { firstValueFrom } from 'rxjs'
import { v4 as uuidv4 } from 'uuid'
import { Account, User } from '../../../../prisma/generated/user'
import { ChangePasswordType } from '../dtos/change_password.dto'
import { RegisterDTO } from '../dtos/register.dto'
import { ResetPasswordType as ResetPasswordDTOType } from '../dtos/reset_password.dto'
import { ResetPasswordForEmployee } from '../dtos/reset_password_for_employee.dto'
import { SendOtpType } from '../dtos/sendOTP.dto'
import { EmailInfor } from '../workers/mail.worker'

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly prisma: PrismaServiceUser,
        private readonly configService: ConfigService,
        @InjectQueue(BackgroundName.mail) private sendMailQueue: Queue,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        @Inject('STORE_SERVICE') private storeClient: ClientProxy,
        private readonly mailService: MailerService,
        @Inject('USER_SERVICE') private readonly user_client: ClientProxy
    ) {}

    createAccessToken(data: CurrentUserType | CurrentStoreType): Promise<string> {
        return this.jwtService.signAsync(data, {
            secret: this.configService.get<string>('app.access_token_secret_key'),
            expiresIn: this.configService.get<number>('app.access_token_expire_time')
        })
    }

    createRefreshToken(data: CurrentUserType | CurrentStoreType): Promise<string> {
        return this.jwtService.signAsync(data, {
            secret: this.configService.get<string>('app.refresh_token_secret_key'),
            expiresIn: this.configService.get<number>('app.refresh_token_expire_time')
        })
    }

    hashPassword(password: string): string {
        return bcrypt.hashSync(password, 10)
    }

    comparePassword(payload: { password: string; hash: string }): boolean {
        let { hash, password } = payload
        return bcrypt.compareSync(password, hash)
    }

    async verify(username: string, password: string): Promise<Account> {
        const accountExist = await this.prisma.account.findUnique({
            where: {
                username
            }
        })

        if (!accountExist) {
            throw new UnauthorizedException('Tài khoản không tồn tại')
        }
        const isTruePassword = this.comparePassword({ hash: accountExist.password, password })

        if (!isTruePassword) {
            throw new UnauthorizedException('Mật khẩu không đúng')
        }
        return accountExist
    }

    async validateUser(
        username: string,
        password: string
    ): Promise<User & { storeRoleId: string }> {
        const { userId, storeRoleId } = await this.verify(username, password)

        const userExist = await this.prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        if (userExist.status === Status.BLOCK) {
            throw new UnauthorizedException('Tài khoản đã bị khóa')
        }

        if ([Role.EMPLOYEE, Role.ADMIN].includes(userExist.role as any)) {
            throw new UnauthorizedException('Tài khoản không được phép mua hàng')
        }

        return {
            ...userExist,
            storeRoleId
        }
    }

    async validateStore(
        username: string,
        password: string
    ): Promise<{ currentStoreType: CurrentStoreType; user: User; store?: any }> {
        const accountExist = await this.verify(username, password)
        const userExist = await this.prisma.user.findUnique({
            where: {
                id: accountExist.userId
            }
        })

        if (userExist.status === Status.BLOCK) {
            throw new BadRequestException('Tài khoản đã bị khóa')
        }

        if (userExist.role === Role.ADMIN) {
            return {
                currentStoreType: {
                    role: Role.ADMIN,
                    storeId: null,
                    storeRoleId: null,
                    userId: userExist.id
                },
                user: userExist
            }
        }

        const storeRoleExist = await this.prisma.storeRole.findUnique({
            where: {
                id: accountExist.storeRoleId
            }
        })

        if (!accountExist.storeRoleId) {
            throw new ForbiddenException('Tài khoản không có quyền truy cập tài nguyên')
        }

        let storeExist = await firstValueFrom<{ msg: string; result: any }>(
            this.storeClient.send(getStoreExist, storeRoleExist.storeId)
        )

        if (!storeExist.result) {
            throw new UnauthorizedException('Cửa hàng không tồn tại')
        }

        if (userExist.role == Role.STORE_OWNER) {
            return {
                currentStoreType: {
                    role: storeRoleExist.role,
                    storeId: storeExist.result.id,
                    userId: userExist.id,
                    storeRoleId: storeRoleExist.id
                },
                user: userExist,
                store: storeExist
            }
        }
        const permission = await this.prisma.permission.findMany({
            where: {
                userId: userExist.id
            },
            select: {
                instance: true,
                permission: true
            }
        })
        let tmp = permission.reduce<Record<string, string[]>>((acum, item) => {
            let { instance, permission } = item
            if (!acum[instance]) {
                acum[instance] = [permission]
            } else {
                acum[instance].push(permission)
            }
            return acum
        }, {})
        return {
            currentStoreType: {
                role: storeRoleExist.role,
                storeId: storeExist.result.id,
                userId: userExist.id,
                storeRoleId: storeRoleExist.id,
                permission: tmp
            },
            user: userExist,
            store: storeExist.result
        }
    }

    async userLogin(user: CurrentUserType): Promise<Return> {
        const [access_token, refresh_token] = await Promise.all([
            this.createAccessToken(user),
            this.createRefreshToken(user)
        ])

        const userExist = await this.prisma.user.findUnique({
            where: {
                id: user.id
            }
        })

        return {
            msg: 'Đăng nhập thành công',
            result: {
                user: {
                    ...userExist,
                    storeRoleId: user.storeRoleId ?? undefined
                },
                access_token: `Bearer ${access_token}`,
                refresh_token: `Bearer ${refresh_token}`
            }
        }
    }

    async userRegister(registerDto: RegisterDTO): Promise<Return> {
        const { email, password, username, full_name } = registerDto

        const accountExist = await this.prisma.account.findUnique({
            where: {
                username
            }
        })

        if (accountExist) {
            throw new BadRequestException('User name đã tồn tại')
        }

        let hash_password = this.hashPassword(password)

        const [{ createdAt, status, ...rest }, { storeRoleId }] = await this.prisma.$transaction(
            async (tx) => {
                const userId = uuidv4()
                const [userCreated, accountCreated] = await Promise.all([
                    tx.user.create({
                        data: {
                            id: userId,
                            email,
                            role: Role.USER,
                            status: Status.ACTIVE,
                            full_name
                        }
                    }),
                    tx.account.create({
                        data: {
                            username,
                            password: hash_password,
                            userId: userId
                        }
                    })
                ])
                return [userCreated, accountCreated]
            }
        )

        const current_user = {
            id: rest.id,
            role: rest.role,
            storeRoleId
        } as CurrentUserType

        const [access_token, refresh_token] = await Promise.all([
            this.createAccessToken(current_user),
            this.createRefreshToken(current_user)
        ])

        this.sendMailQueue.add(
            BackgroundAction.register,
            {
                to: email,
                subject: 'Chúc mừng bạn đã đăng kí tài khoản thành công',
                html: `<p>Xin chào người dùng ${full_name}. Chúc bạn có trải nghiệm mua sắm thật tuyệt vời</p>`
            } as EmailInfor,
            {
                removeOnComplete: true
            }
        )

        return {
            msg: 'Đăng kí tài khoản thành công',
            result: {
                user: rest,
                access_token: `Bearer ${access_token}`,
                refresh_token: `Bearer ${refresh_token}`
            }
        }
    }

    async storeLogin(user: {
        currentStoreType: CurrentStoreType
        user: User
        store?: any
    }): Promise<Return> {
        const [access_token, refresh_token] = await Promise.all([
            this.createAccessToken(user.currentStoreType),
            this.createRefreshToken(user.currentStoreType)
        ])

        return {
            msg: 'Đăng nhập cửa hàng thành công',
            result: {
                role: user.currentStoreType.role,
                user: user.user,
                store: user.store,
                access_token: `Bearer ${access_token}`,
                refresh_token: `Bearer ${refresh_token}`
            }
        }
    }

    async employeeRegister(currentStore: CurrentStoreType, body: RegisterDTO): Promise<Return> {
        try {
            const { email, full_name, password, username } = body

            const accountExist = await this.prisma.account.findUnique({
                where: {
                    username
                }
            })

            if (accountExist) {
                throw new BadRequestException('User name đã tồn tại')
            }

            let hashPassword = this.hashPassword(password)

            const [createdUser, createdStoreRole, createdAccount] = await this.prisma.$transaction(
                async (tx) => {
                    const userId = uuidv4()
                    const storeRoleId = uuidv4()

                    const [createdUser, createdStoreRole, createdAccount] = await Promise.all([
                        tx.user.create({
                            data: {
                                email,
                                full_name,
                                id: userId,
                                role: Role.EMPLOYEE,
                                status: Status.ACTIVE
                            }
                        }),
                        tx.storeRole.create({
                            data: {
                                id: storeRoleId,
                                storeId: currentStore.storeId,
                                status: Status.ACTIVE,
                                role: Role.EMPLOYEE,
                                createdBy: currentStore.userId
                            }
                        }),
                        tx.account.create({
                            data: {
                                username,
                                password: hashPassword,
                                userId: userId,
                                storeRoleId: storeRoleId,
                                createdBy: currentStore.userId
                            }
                        })
                    ])

                    return [createdUser, createdStoreRole, createdAccount]
                }
            )

            return {
                msg: 'Tạo tài khoản thành công',
                result: {
                    user: createdUser,
                    storeRole: createdStoreRole,
                    account: omit(createdAccount, ['password'])
                }
            }
        } catch (error) {
            throw new BadRequestException(error.message)
        }
    }

    async resetPasswordForEmployee(
        store: CurrentStoreType,
        body: ResetPasswordForEmployee
    ): Promise<Return> {
        try {
            const employeeExist = await this.prisma.user.findUnique({
                where: {
                    id: body.employeeId,
                    role: Role.EMPLOYEE
                }
            })

            if (!employeeExist) {
                throw new NotFoundException('Nhân viên không tồn tại')
            }

            const accountExist = await this.prisma.account.findFirst({
                where: {
                    userId: body.employeeId,
                    StoreRole: {
                        storeId: store.storeId
                    }
                }
            })

            if (!accountExist) {
                throw new NotFoundException('Tài khoản không tồn tại')
            }

            let hashPassword = this.hashPassword(body.password)

            const updatedAccount = await this.prisma.account.update({
                where: {
                    username: accountExist.username
                },
                data: {
                    username: body.username,
                    password: hashPassword
                }
            })

            return {
                msg: 'Reset mật khẩu thành công',
                result: omit(updatedAccount, ['password'])
            }
        } catch (err) {
            console.log('error', err)
            throw new HttpException(err.messge, err.status)
        }
    }

    async changePassword(user: CurrentUserType, body: ChangePasswordType): Promise<Return> {
        try {
            let { current_password, new_password } = body

            if (current_password === new_password) {
                throw new BadRequestException('Mật khẩu mới phải khác mật khẩu cũ')
            }

            const accountExist = await this.prisma.account.findFirst({
                where: {
                    userId: user.id
                }
            })

            if (!accountExist) throw new BadRequestException('Tải khoản không tồn tại')
            let isMatching = this.comparePassword({
                hash: accountExist.password,
                password: current_password
            })

            if (!isMatching) {
                throw new BadRequestException('Mật khẩu hiện tại không đúng')
            } else {
                new_password = this.hashPassword(new_password)
            }

            const { password, ...rest } = await this.prisma.account.update({
                where: {
                    username: accountExist.username
                },
                data: {
                    password: new_password,
                    updatedAt: new Date(),
                    updatedBy: user.id
                }
            })

            return {
                msg: 'Thay đổi mật khẩu thành công',
                result: undefined
            }
        } catch (err) {
            throw new HttpException(err.message, err.status)
        }
    }

    async sendOtp({ email, new_password }: SendOtpType): Promise<Return> {
        const userExist = await this.prisma.user.findFirst({
            where: {
                email
            },
            include: {
                Account_Account_userIdToUser: true
            }
        })

        if (!userExist) {
            throw new UnauthorizedException('Người dùng không tồn tại')
        }

        const code = Math.floor(100000 + Math.random() * 900000)

        const email_infor: EmailInfor = {
            html: `<div>Mã xác nhận: <p style="color: red">${code}</p></div><div>Vui lòng không cung cấp mã xác nhận cho bất kỳ ai. Mã có thời hạn là 30 giây</div>`,
            subject: 'Mã xác nhận yêu cầu thay đổi mật khẩu',
            to: email
        }
        this.user_client.emit(sendMail, {
            code,
            username: userExist.Account_Account_userIdToUser[0].username,
            new_password,
            email_infor
        })

        return {
            msg: 'Mã xác nhận đã gửi đến mail của bạn',
            result: undefined
        }
    }

    async resetPassword({ code }: ResetPasswordDTOType): Promise<Return> {
        const fromCache = await this.cacheManager.get<string>(`${code}_RESET_PASSWORD`)

        if (!fromCache) {
            throw new BadRequestException('Mã xác nhận không đúng hoặc đã hết hạn')
        }

        let { new_password, username } = JSON.parse(fromCache) as {
            username: string
            new_password: string
        }

        console.log('fromCache', fromCache)

        const { password, ...rest } = await this.prisma.account.update({
            where: {
                username
            },
            data: {
                password: this.hashPassword(new_password),
                updatedAt: new Date().toISOString()
            }
        })

        return {
            msg: 'Thay đổi mật khẩu thành công',
            result: rest
        }
    }

    async sendMail(data: any) {
        const { code, email_infor, ...rest } = data
        let result = await this.mailService.sendMail(email_infor)

        if (result) {
            await this.cacheManager.set(`${code}_RESET_PASSWORD`, JSON.stringify(rest), 1000 * 30)
        }
    }

    async getUserName(id: string) {
        return await this.prisma.user.findUnique({
            where: {
                id
            },
            select: {
                full_name: true
            }
        })
    }
}
