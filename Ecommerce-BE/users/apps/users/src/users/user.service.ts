import { PrismaServiceUser } from '@app/common/prisma/user_prisma.service'
import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    NotFoundException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { UserType } from 'common/constants/user.constants'
import { Role } from 'common/enums/role.enum'
import { Status } from 'common/enums/status.enum'
import { CurrentStoreType, CurrentUserType } from 'common/types/current.type'
import { MessageReturn, Return } from 'common/types/result.type'
import { Prisma } from '../../../../prisma/generated/user'
import { QueryAllUserProfileType } from '../dtos/all_user.dto'
import { UpdateStatusOfUserDTO } from '../dtos/update_status_of_user.dto'
import { UpdateUserProfileType } from '../dtos/update_user_profile.dto'
import {
    eachDayOfInterval,
    eachMonthOfInterval,
    eachWeekOfInterval,
    endOfDay,
    endOfMonth,
    endOfWeek,
    format,
    sub
} from 'date-fns'

@Injectable()
export class UserService {
    constructor(
        private readonly prisma: PrismaServiceUser,
        private readonly configService: ConfigService
    ) {}

    async findAllUserProfile(query: QueryAllUserProfileType): Promise<Return> {
        let { end_date, search_key, limit, page, role, start_date, status } = query

        let pre_page = page
        status = [Status.ACTIVE, Status.BLOCK].includes(status as any) ? status : undefined

        const take = limit || this.configService.get<number>('app.limit')
        page = (page || 1) - 1
        const skip = page * limit

        role = role || [UserType.STORE_OWNER, UserType.USER]

        const general_user_where: Prisma.UserWhereInput = {
            role: {
                in: role
            },
            status,
            createdAt: {
                gte: start_date,
                lte: end_date
            }
        }

        const where: Prisma.UserWhereInput = {
            OR: [
                {
                    full_name: {
                        contains: search_key
                    },
                    ...general_user_where
                },
                {
                    email: {
                        contains: search_key
                    },
                    ...general_user_where
                }
            ]
        }

        const [users, count] = await Promise.all([
            this.prisma.user.findMany({
                where,
                take,
                skip,
                omit: {
                    updatedAt: true,
                    rankId: true
                }
            }),
            this.prisma.user.count({ where })
        ])

        return {
            msg: 'ok',
            result: {
                data: users,
                query: {
                    ...query,
                    page: pre_page,
                    page_size: Math.ceil(count / limit)
                }
            }
        }
    }

    async getUserByRatingId(userId: string): Promise<Return> {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                full_name: true,
                image: true
            }
        })
        return {
            msg: 'ok',
            result: user
        }
    }

    async profileDetail(user: CurrentUserType): Promise<Return> {
        const userExist = await this.prisma.user.findUnique({
            where: {
                id: user.id
            }
        })

        if (!userExist) throw new NotFoundException('Người dùng không tồn tại')

        return {
            msg: 'Lấy thông tin người thành công',
            result: userExist
        }
    }

    async profileStoreDetail(user: CurrentStoreType): Promise<Return> {
        const profileExist = await this.prisma.user.findUnique({
            where: {
                id: user.userId
            }
        })

        if (!profileExist) {
            throw new BadRequestException('User không tồn tại')
        }

        return {
            msg: 'Lấy thông tin thành cônng',
            result: profileExist
        }
    }

    async userUpdateProfile(
        user: CurrentUserType | CurrentStoreType,
        body: UpdateUserProfileType
    ): Promise<Return> {
        const { birthday, email, full_name, address, image } = body

        let id = undefined
        if ('userId' in user) {
            id = user.userId
        } else {
            id = user.id
        }

        const updatedUser = await this.prisma.user.update({
            where: {
                id
            },
            data: {
                image,
                birthday,
                email,
                full_name,
                address
            }
        })

        return {
            msg: 'Cập nhật thành công',
            result: updatedUser
        }
    }

    async userStoreUpdateProfile(
        user: CurrentStoreType,
        body: UpdateUserProfileType
    ): Promise<Return> {
        const { birthday, email, full_name, address } = body

        const updatedUser = await this.prisma.user.update({
            where: {
                id: user.userId
            },
            data: {
                birthday,
                email,
                full_name,
                address
            }
        })

        return {
            msg: 'Cập nhật thành công',
            result: updatedUser
        }
    }

    async updateStoreRole(userId: string, storeRolePayload: any) {
        try {
            const accountExist = await this.prisma.account.findFirst({
                where: {
                    userId
                }
            })

            if (!accountExist) {
                throw new Error('Tài khoản không tồn tại')
            }

            await this.prisma.storeRole.create({
                data: storeRolePayload
            })

            return await Promise.all([
                this.prisma.account.update({
                    where: {
                        username: accountExist.username
                    },
                    data: {
                        storeRoleId: storeRolePayload.id
                    }
                })
            ])
        } catch (error) {
            return error.message
        }
    }

    async getInfoUserInRating(payload: string[]) {
        try {
            const users = await Promise.all(
                payload.map((id) =>
                    this.prisma.user.findUnique({
                        where: {
                            id,
                            role: Role.USER
                        },
                        select: {
                            full_name: true,
                            image: true
                        }
                    })
                )
            )

            return {
                msg: 'ok',
                action: true,
                result: payload.reduce((acum, e, idx) => {
                    return {
                        ...acum,
                        [e]: { ...users[idx] }
                    }
                }, {})
            }
        } catch (err) {
            return {
                msg: 'ok',
                action: false,
                result: null
            }
        }
    }

    async getProfileUser(userId: string) {
        try {
            const userExist = await this.prisma.user.findUnique({
                where: {
                    id: userId
                }
            })

            if (!userExist) {
                throw new NotFoundException('Người dùng không tồn tại')
            }

            let { email, full_name, image, id } = userExist

            return {
                msg: 'ok',
                result: {
                    email,
                    full_name,
                    image,
                    id
                }
            }
        } catch (err) {
            throw new InternalServerErrorException('Lỗi Server')
        }
    }

    async countEmployee(storeId: string): Promise<MessageReturn> {
        try {
            const count = await this.prisma.storeRole.count({
                where: {
                    role: UserType.EMPLOYEE,
                    storeId
                }
            })

            return {
                msg: 'ok',
                action: true,
                result: count
            }
        } catch (err) {
            return {
                msg: 'ok',
                action: false,
                result: null
            }
        }
    }

    async updateStatusOfUser(userId: string, body: UpdateStatusOfUserDTO): Promise<Return> {
        let { status } = body
        try {
            await this.prisma.$transaction(async (tx) => {
                await tx.account.findFirst({
                    where: {
                        userId
                    },
                    select: {
                        storeRoleId: true
                    }
                })
                await tx.user.update({
                    where: {
                        id: userId
                    },
                    data: {
                        status
                    }
                })
            })

            return {
                msg: 'ok',
                result: undefined
            }
        } catch (err) {
            throw new InternalServerErrorException('Cập nhật trạng thái người dùng thất bại')
        }
    }

    async emitUpdateStatusOfStore(body: {
        storeId: string
        status: string
    }): Promise<MessageReturn> {
        let { status, storeId } = body
        try {
            await this.prisma.$transaction(async (tx) => {
                const accountExist = await tx.account.findFirst({
                    where: {
                        StoreRole: {
                            storeId
                        }
                    },
                    select: {
                        userId: true,
                        storeRoleId: true
                    }
                })

                await Promise.all([
                    tx.user.update({
                        where: {
                            id: accountExist.userId
                        },
                        data: {
                            status
                        }
                    }),
                    tx.storeRole.update({
                        where: {
                            id: accountExist.storeRoleId
                        },
                        data: {
                            status
                        }
                    })
                ])
            })

            return {
                msg: 'ok',
                action: true,
                result: null
            }
        } catch (err) {
            return {
                msg: 'Lỗi',
                action: false,
                result: null
            }
        }
    }

    async analyticsUser(type: string): Promise<Return> {
        let time_wheres = []
        var end, start
        var times = []
        var tmp: { start: Date; end: Date }[] = []
        switch (type) {
            case 'day':
                end = new Date()
                start = sub(end, { days: 7 })
                times = eachDayOfInterval({ start, end })
                time_wheres = times.map((day) => {
                    let gte = day
                    let lte = endOfDay(day)
                    tmp.push({ start: gte, end: lte })
                    return {
                        createdAt: {
                            gte,
                            lte
                        }
                    }
                })
                break
            case 'week':
                end = new Date()
                start = sub(end, { weeks: 7 })
                times = eachWeekOfInterval({ start, end }, { weekStartsOn: 1 })
                time_wheres = times.map((day) => {
                    let gte = day
                    let lte = endOfWeek(day)
                    tmp.push({ start: gte, end: lte })
                    return {
                        createdAt: {
                            gte,
                            lte
                        }
                    }
                })
                break
            case 'month':
                end = new Date()
                start = sub(end, { months: 12 })
                times = eachMonthOfInterval({ start, end })
                time_wheres = times.map((day) => {
                    let gte = day
                    let lte = endOfMonth(day)
                    tmp.push({ start: gte, end: lte })
                    return {
                        createdAt: {
                            gte,
                            lte
                        }
                    }
                })
                break
            default:
                break
        }

        let user = await Promise.all(
            time_wheres.map((time) => {
                return this.prisma.user.count({
                    where: {
                        ...time
                    }
                })
            })
        )

        let total = await this.prisma.user.count({
            where: {}
        })

        return {
            msg: 'ok',
            result: {
                data: tmp.map(({ start }, idx) => ({
                    total: user[idx],
                    date: format(start, 'dd-LL')
                })),
                total
            }
        }
    }
}
