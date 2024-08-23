import { PrismaServiceUser } from '@app/common/prisma/user_prisma.service'
import { Injectable, NotFoundException } from '@nestjs/common'
import { CurrentUserType } from 'common/types/current.type'
import { MessageReturn, Return } from 'common/types/result.type'
import { v4 as uuidv4 } from 'uuid'
import { CreateDeliveryDTO } from '../dtos/create_delivery.dto'
import { UpdateDeliveryDTO } from '../dtos/update_delivery.dto'

@Injectable()
export class DeliveryService {
    constructor(private readonly prisma: PrismaServiceUser) {}

    async getAllDelivery(user: CurrentUserType): Promise<Return> {
        return {
            msg: 'Lấy danh sách vận chuyển thành công',
            result: await this.prisma.deliveryInformation.findMany({
                where: {
                    userId: user.id
                }
            })
        }
    }

    async createDelivery(user: CurrentUserType, body: CreateDeliveryDTO): Promise<Return> {
        const createdDelivery = await this.prisma.$transaction(async (tx) => {
            const { isPrimary, ...rest } = body
            let arr = []
            arr.push(
                tx.deliveryInformation.create({
                    data: {
                        ...rest,
                        isPrimary,
                        userId: user.id,
                        id: uuidv4()
                    }
                })
            )
            if (isPrimary) {
                const hasPrimaryDelivery = await tx.deliveryInformation.findFirst({
                    where: {
                        userId: user.id,
                        isPrimary
                    }
                })
                if (hasPrimaryDelivery) {
                    arr.push(
                        tx.deliveryInformation.update({
                            where: {
                                id: hasPrimaryDelivery.id
                            },
                            data: {
                                isPrimary: false
                            }
                        })
                    )
                }
            }
            const [createdDelivery, _] = await Promise.all(arr)

            return createdDelivery
        })

        return {
            msg: 'Tạo thông tin vận chuyển thành công',
            result: createdDelivery
        }
    }

    async updateDelivery(
        user: CurrentUserType,
        id: string,
        body: UpdateDeliveryDTO
    ): Promise<Return> {
        const { isPrimary, ...rest } = body
        const deliveryExist = await this.prisma.deliveryInformation.findUnique({
            where: {
                id
            }
        })
        if (!deliveryExist) {
            throw new NotFoundException('Không tìm thấy thông tin vận chuyển')
        }
        let arr = []
        arr.push(
            this.prisma.deliveryInformation.update({
                where: {
                    id
                },
                data: {
                    ...rest,
                    isPrimary
                }
            })
        )
        if (isPrimary) {
            const deliveryHasPrimary = await this.prisma.deliveryInformation.findFirst({
                where: {
                    isPrimary: true
                }
            })
            if (deliveryHasPrimary && id !== deliveryHasPrimary.id) {
                arr.push(
                    this.prisma.deliveryInformation.update({
                        where: {
                            id: deliveryHasPrimary.id
                        },
                        data: {
                            isPrimary: false
                        }
                    })
                )
            }
        }
        const [result, _] = await Promise.all(arr)

        return {
            msg: 'Cập nhật thông tin vận chuyển thành công',
            result
        }
    }

    async deleteDelivery(user: CurrentUserType, id: string): Promise<Return> {
        console.log('user', user)
        console.log('id', id)
        const deliveryExist = await this.prisma.deliveryInformation.findUnique({
            where: {
                id,
                userId: user.id
            }
        })

        if (!deliveryExist) {
            throw new NotFoundException('Thông tin vận chuyển không tồn tại')
        }

        await this.prisma.deliveryInformation.delete({
            where: {
                id
            }
        })

        return {
            msg: 'Xóa thông tin vận chuyển thành công',
            result: {}
        }
    }

    async checkDeliveryInformationId(
        userId: string,
        deliveryInformationId: string
    ): Promise<MessageReturn> {
        const deliveryExist = await this.prisma.deliveryInformation.findUnique({
            where: {
                id: deliveryInformationId,
                userId
            }
        })

        if (!deliveryExist) {
            return {
                msg: 'Không tồn tại thông tin vận chuyển',
                action: false,
                result: null
            }
        }

        return {
            msg: 'ok',
            action: true,
            result: null
        }
    }
}
