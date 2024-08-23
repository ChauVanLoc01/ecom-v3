import { PrismaServiceUser } from '@app/common/prisma/user_prisma.service'
import {
    BadRequestException,
    Inject,
    Injectable,
    InternalServerErrorException,
    NotFoundException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Role } from 'common/enums/role.enum'
import { Status } from 'common/enums/status.enum'
import { CurrentStoreType } from 'common/types/current.type'
import { Return } from 'common/types/result.type'
import { isUndefined, omitBy } from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import { AuthService } from '../auths/auth.service'
import { ChangeStatusEmployee } from '../dtos/change_status_employee.dto'
import { CreateEmployee } from '../dtos/employee.dto'
import { EmployeeQueryDTO } from '../dtos/employee_query.dto'
import { UpdateEmployee } from '../dtos/update_employee.dto'
import { UpdatePermissionDTO } from '../dtos/update_permission.dto'
import { UpdateUserProfileDTO } from '../dtos/update_user_profile.dto'
import { ClientProxy } from '@nestjs/microservices'
import { forceEmployeeLogin } from 'common/constants/event.constant'

@Injectable()
export class EmployeeService {
    constructor(
        private readonly prisma: PrismaServiceUser,
        private readonly configService: ConfigService,
        private readonly authService: AuthService,
        @Inject('SOCKET_SERVICE') private readonly socket_client: ClientProxy
    ) {}

    async profileDetail(userId: string) {
        return await this.prisma.user.findUnique({
            where: {
                id: userId
            }
        })
    }

    async getAll(store: CurrentStoreType, query: EmployeeQueryDTO): Promise<Return> {
        const { createdAt, end_date, limit, page, start_date, status } = query
        const take = limit | this.configService.get('app.limit_default')

        const [length, employees] = await Promise.all([
            this.prisma.account.count({
                where: {
                    StoreRole: {
                        storeId: store.storeId,
                        role: Role.EMPLOYEE
                    }
                }
            }),
            this.prisma.account.findMany({
                where: {
                    StoreRole: {
                        storeId: store.storeId,
                        role: Role.EMPLOYEE,
                        status
                    },
                    createdAt: {
                        gte: start_date,
                        lte: end_date
                    }
                },
                orderBy: {
                    createdAt
                },
                include: {
                    StoreRole: true,
                    User_Account_userIdToUser: true
                },
                take,
                skip: page && page > 1 ? (page - 1) * take : 0
            })
        ])

        return {
            msg: 'Lấy danh sách nhân viên thành công',
            result: {
                data: await Promise.all(
                    employees.map((emp) => {
                        const { password, ...rest } = emp
                        return Promise.resolve(rest)
                    })
                ),
                query: omitBy(
                    {
                        ...query,
                        page: page || 1,
                        page_size: Math.ceil(length / take)
                    },
                    isUndefined
                )
            }
        }
    }

    async getPermissionDetail(userId: string) {
        const permission = await this.prisma.permission.findMany({
            where: {
                userId
            },
            select: {
                instance: true,
                permission: true
            }
        })
        return permission.reduce<Record<string, string[]>>((acum, item) => {
            let { instance, permission } = item
            if (!acum[instance]) {
                acum[instance] = [permission]
            } else {
                acum[instance].push(permission)
            }
            return acum
        }, {})
    }

    async updatePermission(userId: string, body: UpdatePermissionDTO) {
        try {
            await this.prisma.$transaction(async (tx) => {
                await tx.permission.deleteMany({
                    where: {
                        userId
                    }
                })
                await tx.permission.createMany({
                    data: body.actions.reduce((acum, action) => {
                        let { instance, permissions } = action
                        let arr = permissions.map((permission) => {
                            return {
                                id: uuidv4(),
                                createdBy: userId,
                                instance,
                                permission,
                                createdAt: new Date(),
                                userId,
                                updatedAt: new Date()
                            }
                        })
                        acum.push(...arr)
                        return acum
                    }, [])
                })
            })
            this.socket_client.emit(forceEmployeeLogin, { storeId: body.storeId, userId })
            return {
                msg: 'ok',
                result: undefined
            }
        } catch (err) {
            throw new InternalServerErrorException('Lỗi hệ thống')
        }
    }

    async createNewEmployee(user: CurrentStoreType, body: CreateEmployee): Promise<Return> {
        const { email, full_name, password, username, actions } = body
        const { userId, storeId } = user
        const [empId, empStoreRoleId] = [uuidv4(), uuidv4()]

        const accountExist = await this.prisma.account.findUnique({
            where: {
                username
            }
        })

        if (accountExist) {
            throw new BadRequestException('Tài khoản đã tồn tại')
        }

        const hashPassword = await this.authService.hashPassword(password)

        const [newEmp, newStoreRole, newAccount] = await this.prisma.$transaction(async (tx) => {
            const result = await Promise.all([
                tx.user.create({
                    data: {
                        id: empId,
                        email,
                        full_name,
                        role: Role.EMPLOYEE,
                        status: Status.ACTIVE
                    }
                }),
                tx.storeRole.create({
                    data: {
                        id: empStoreRoleId,
                        role: Role.EMPLOYEE,
                        status: Status.ACTIVE,
                        storeId,
                        createdBy: userId
                    }
                })
            ])
            let created_account = await tx.account.create({
                data: {
                    username,
                    password: hashPassword,
                    userId: empId,
                    storeRoleId: empStoreRoleId,
                    createdBy: userId
                }
            })
            await tx.permission.createMany({
                data: actions.reduce((acum, action) => {
                    let { instance, permissions } = action
                    let arr = permissions.map((permission, idx) => {
                        console.log(`userId ${idx}`, userId)
                        return {
                            id: uuidv4(),
                            createdBy: userId,
                            instance,
                            permission,
                            createdAt: new Date(),
                            userId: result[0].id
                        }
                    })
                    acum.push(...arr)
                    return acum
                }, [])
            })

            return [...result, created_account]
        })

        return {
            msg: 'Ok',
            result: undefined
        }
    }

    async updateStatus(store: CurrentStoreType, body: UpdateEmployee): Promise<Return> {
        const { status, employeeId } = body

        const employeeExist = await this.prisma.user.findUnique({
            where: {
                id: employeeId
            }
        })

        if (!employeeExist) {
            throw new NotFoundException('Nhân viên không tồn tại')
        }

        const [updatedUser, _] = await this.prisma.$transaction([
            this.prisma.user.update({
                where: {
                    id: employeeId
                },
                data: {
                    status,
                    updatedAt: new Date().toISOString()
                }
            }),
            this.prisma.storeRole.update({
                where: {
                    id: store.storeRoleId
                },
                data: {
                    status,
                    updatedAt: new Date().toISOString(),
                    updatedBy: store.userId
                }
            })
        ])

        return {
            msg: 'Cập nhật trạng thái nhân viên thành công',
            result: updatedUser
        }
    }

    async employeeUpdateProfile(store: CurrentStoreType, body: UpdateUserProfileDTO) {
        const { birthday, email, full_name, address, image } = body

        const updatedUser = await this.prisma.user.update({
            where: {
                id: store.userId
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

    async deleteEmployee(employeeId: string, body: ChangeStatusEmployee): Promise<Return> {
        const { status } = body
        const accountExist = await this.prisma.account.findFirst({
            where: {
                userId: employeeId
            }
        })

        if (!accountExist) {
            throw new NotFoundException('Nhân viên không tồn tại')
        }

        await Promise.all([
            this.prisma.user.update({
                where: {
                    id: employeeId
                },
                data: {
                    status
                }
            }),
            this.prisma.storeRole.update({
                where: {
                    id: accountExist.storeRoleId
                },
                data: {
                    status
                }
            })
        ])

        return {
            msg: 'ok',
            result: undefined
        }
    }

    async analyticsEmployee(user: CurrentStoreType): Promise<Return> {
        const [all, actives, blocks] = await Promise.all([
            this.prisma.storeRole.count({
                where: {
                    storeId: user.storeId,
                    role: Role.EMPLOYEE
                }
            }),
            this.prisma.storeRole.count({
                where: {
                    storeId: user.storeId,
                    status: 'ACTIVE',
                    role: Role.EMPLOYEE
                }
            }),
            this.prisma.storeRole.count({
                where: {
                    storeId: user.storeId,
                    status: 'BLOCK',
                    role: Role.EMPLOYEE
                }
            })
        ])

        return {
            msg: 'ok',
            result: {
                all,
                actives,
                blocks
            }
        }
    }
}
