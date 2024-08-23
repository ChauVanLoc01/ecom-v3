import { PrismaServiceStore } from '@app/common/prisma/store_prisma.service'
import {
    BadRequestException,
    HttpException,
    HttpStatus,
    Inject,
    Injectable,
    InternalServerErrorException,
    NotFoundException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ClientProxy } from '@nestjs/microservices'
import {
    checkRated,
    getOrderByRating,
    getProductOderByOrderId,
    getProductOrderByRating,
    updateRatedStore
} from 'common/constants/event.constant'
import { PaginationDTO } from 'common/decorators/pagination.dto'
import { CurrentStoreType, CurrentUserType } from 'common/types/current.type'
import { MessageReturn, Return } from 'common/types/result.type'
import { flatten, isUndefined, omitBy } from 'lodash'
import { firstValueFrom } from 'rxjs'
import { v4 as uuidv4 } from 'uuid'
import { Prisma } from '../../../../prisma/generated/store'
import { CreateRatingDto } from './dtos/create-rating.dto'
import { RatingQueryDTO } from './dtos/rating-query.dto'
import { CreateReplyRatingDTO } from './dtos/reply-rating.dto'

@Injectable()
export class RatingService {
    constructor(
        private readonly prisma: PrismaServiceStore,
        private readonly configService: ConfigService,
        @Inject('ORDER_SERVICE') private orderClient: ClientProxy,
        @Inject('PRODUCT_SERVICE') private productClient: ClientProxy,
        @Inject('USER_SERVICE') private userClient: ClientProxy
    ) {}

    // async getDetail(ratingId: string): Promise<Return> {
    //     const ratingExist = await this.prisma.rating.findUnique({
    //         where: {
    //             id: ratingId
    //         }
    //     })

    //     if (!ratingExist) {
    //         throw new NotFoundException('Đánh giá không tồn tại')
    //     }
    //     const materialsRating = await this.prisma.ratingMaterial.findMany({
    //         where: {
    //             ratingId: ratingExist.id
    //         }
    //     })

    //     const reply = await this.prisma.ratingReply.findMany({
    //         where: {
    //             ratingId: ratingExist.id
    //         }
    //     })

    //     const materialsReply = keyBy(
    //         await Promise.all(
    //             reply.map((re) =>
    //                 this.prisma.ratingMaterial.findMany({
    //                     where: {
    //                         ratingReplyId: re.id
    //                     }
    //                 })
    //             )
    //         ),
    //         'ratingReplyId'
    //     )

    //     return {
    //         msg: 'ok',
    //         result: {
    //             rating: ratingExist,
    //             ratingMaterial: materialsRating,
    //             reply: reply,
    //             replyMaterial: materialsReply
    //         }
    //     }
    // }

    async getAllRatingByProduct(
        productId: string,
        storeId: string,
        query: PaginationDTO
    ): Promise<Return> {
        try {
            let { limit, page } = query

            const storeRating = await this.prisma.storeRating.findFirst({
                where: {
                    storeId
                },
                omit: {
                    storeId: true,
                    id: true,
                    createdAt: true,
                    updatedAt: true
                }
            })

            if (!storeRating) {
                return {
                    msg: 'ok',
                    result: []
                }
            }

            const orderIdsRelatived = await firstValueFrom<MessageReturn>(
                this.orderClient.send(getProductOderByOrderId, productId)
            )

            const convertedStoreRating = orderIdsRelatived.result.map((e) => e.orderId)

            const take = limit || this.configService.get<number>('app.limit_default')
            page = (page || 1) - 1
            const skip = page * take

            const [ratings, count] = await Promise.all([
                this.prisma.rating.findMany({
                    where: {
                        orderId: {
                            in: convertedStoreRating
                        }
                    },
                    orderBy: {
                        createdAt: 'desc'
                    },
                    include: {
                        RatingReply: {
                            take: 1,
                            select: {
                                detail: true,
                                createdAt: true
                            }
                        }
                    },
                    take,
                    skip,
                    omit: {
                        updatedAt: true,
                        updatedBy: true,
                        storeId: true
                    }
                }),
                this.prisma.rating.count({
                    where: {
                        orderId: {
                            in: convertedStoreRating
                        }
                    }
                })
            ])

            return {
                msg: 'ok',
                result: {
                    data: {
                        summary: storeRating,
                        ratings
                    },
                    query: {
                        ...query,
                        page,
                        page_size: Math.ceil(count / take)
                    }
                }
            }
        } catch (err) {
            throw new InternalServerErrorException('Lỗi server')
        }
    }

    async moreRating(parentRatingId: string): Promise<Return> {
        return {
            msg: 'ok',
            result: await this.prisma.ratingReply.findMany({
                where: {
                    parentRatingId
                },
                orderBy: {
                    createdAt: 'asc'
                }
            })
        }
    }

    async ratingAnalytics(storeId: string) {
        const [total, reply, not_reply] = await Promise.all([
            this.prisma.rating.count({
                where: {
                    storeId
                }
            }),
            this.prisma.rating.count({
                where: {
                    storeId,
                    isReply: true
                }
            }),
            this.prisma.rating.count({
                where: {
                    storeId,
                    isReply: false
                }
            })
        ])
        return { total, reply, not_reply }
    }

    async getAllRatingByStore(store: CurrentStoreType, query: RatingQueryDTO): Promise<Return> {
        const { storeId } = store
        const { createdAt, endDate, startDate, limit, page, replier, reply } = query
        const limitExist = limit || this.configService.get<number>('app.limit_default')

        const storeRating = await this.prisma.storeRating.findFirst({
            where: {
                storeId
            }
        })

        if (!storeRating) {
            return {
                msg: 'ok',
                result: {
                    data: [],
                    query: {
                        page: 0,
                        page_size: 0
                    }
                }
            }
        }

        const [length, ratings] = await Promise.all([
            this.prisma.rating.count({
                where: {
                    createdAt: {
                        gte: startDate,
                        lte: endDate
                    },
                    storeId,
                    isReply: reply
                }
            }),
            this.prisma.rating.findMany({
                where: {
                    createdAt: {
                        gte: startDate,
                        lte: endDate
                    },
                    storeId,
                    isReply: reply
                },
                include: {
                    RatingReply: {
                        where: {
                            createdBy: replier
                        }
                    }
                },
                orderBy: {
                    createdAt
                },
                take: limitExist,
                skip: page && page > 1 ? (page - 1) * limitExist : 0
            })
        ])

        return {
            msg: 'ok',
            result: {
                data: ratings,
                query: omitBy(
                    {
                        ...query,
                        page: page || 1,
                        page_size: Math.ceil(length / limitExist)
                    },
                    isUndefined
                )
            }
        }
    }

    async createNewRating(user: CurrentUserType, body: CreateRatingDto): Promise<Return> {
        try {
            const { id } = user
            const { comment, orderId, stars, urls } = body
            const ratingId = uuidv4()
            const ratingExist = await this.prisma.rating.findFirst({
                where: {
                    orderId,
                    createdBy: id
                },
                select: {
                    id: true
                }
            })

            if (ratingExist) {
                throw new BadRequestException('Đã tồn tại đánh giá cho đơn hàng này')
            }

            await this.prisma.$transaction(async (tx) => {
                const orderExist = await firstValueFrom(this.orderClient.send(checkRated, orderId))

                if (!orderExist) {
                    throw new BadRequestException(
                        'Chưa đủ điều kiện để thực hiện đánh giá cho đơn hàng này'
                    )
                }

                const tmp: Record<number, keyof Prisma.StoreRatingCreateInput> = {
                    1: 'one',
                    2: 'two',
                    3: 'three',
                    4: 'four',
                    5: 'five'
                }

                const storeRating = await tx.storeRating.findFirst({
                    where: {
                        storeId: orderExist.storeId
                    },
                    omit: {
                        updatedAt: true,
                        createdAt: true
                    }
                })

                if (!storeRating) {
                    await tx.storeRating.create({
                        data: {
                            id: uuidv4(),
                            storeId: orderExist.storeId,
                            createdAt: new Date(),
                            [tmp[stars]]: 1,
                            average: stars,
                            total: 1
                        }
                    })
                } else {
                    await tx.storeRating.update({
                        where: {
                            id: storeRating.id
                        },
                        data: {
                            [tmp[stars]]: {
                                increment: 1
                            },
                            total: storeRating?.total + 1,
                            average: (storeRating.average + stars) / 2,
                            updatedAt: new Date()
                        }
                    })
                }

                await Promise.all([
                    tx.rating.create({
                        data: {
                            id: ratingId,
                            storeId: orderExist.storeId,
                            orderId,
                            stars,
                            comment,
                            createdAt: new Date(),
                            createdBy: id,
                            isReply: false
                        }
                    }),
                    firstValueFrom(this.orderClient.send(updateRatedStore, orderId))
                ])

                await tx.ratingMaterial.createMany({
                    data: urls.map(({ url, isPrimary }) => ({
                        id: uuidv4(),
                        isPrimary: isPrimary || false,
                        url,
                        ratingId
                    }))
                })
            })

            return {
                msg: 'ok',
                result: undefined
            }
        } catch (err) {
            throw new HttpException(
                err?.message || 'Đánh giá không thành công. Vui lòng thử lại sau',
                err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
            )
        }
    }

    async getMaterialOfRating(ratingId: string): Promise<Return> {
        const materials = await this.prisma.ratingMaterial.findMany({
            where: {
                ratingId
            },
            select: {
                url: true
            }
        })
        return {
            msg: 'ok',
            result: materials.map((e) => e.url)
        }
    }

    async replyRating(store: CurrentStoreType, body: CreateReplyRatingDTO): Promise<Return> {
        const { userId } = store
        const { detail, parentRatingId } = body
        const ratingExist = await this.prisma.rating.findUnique({
            where: {
                id: parentRatingId
            }
        })

        if (!ratingExist) {
            throw new NotFoundException(
                'Không thể tạo phản hồi khi đánh giá của khách hàng không tồn tại'
            )
        }

        const replyId = uuidv4()

        await this.prisma.$transaction(async (tx) => {
            return await Promise.all([
                tx.rating.update({
                    where: {
                        id: parentRatingId
                    },
                    data: {
                        isReply: true,
                        updatedAt: new Date()
                    }
                }),
                tx.ratingReply.create({
                    data: {
                        id: replyId,
                        createdAt: new Date(),
                        createdBy: userId,
                        detail,
                        parentRatingId
                    }
                })
            ])
        })

        return {
            msg: 'ok',
            result: undefined
        }
    }

    async ratingExist(user: CurrentUserType, productId: string): Promise<Return> {
        try {
            const orderIds = (
                await this.prisma.rating.findMany({
                    where: {
                        createdBy: user.id
                    }
                })
            ).map((e) => e.orderId)

            const orders = (
                (await firstValueFrom(
                    this.orderClient.send(getOrderByRating, { userId: user.id, orderIds })
                )) as any[]
            ).map((e) => {
                if (e) return e.id
            })

            if (!orders.length) {
                return {
                    msg: 'ok',
                    result: false
                }
            }

            const productOrders = flatten(
                await firstValueFrom(
                    this.productClient.send(getProductOrderByRating, { productId, orders })
                )
            )

            if (!productOrders.length) {
                return {
                    msg: 'ok',
                    result: false
                }
            }

            return {
                msg: 'ok',
                result: productOrders
            }
        } catch (err) {
            throw new BadRequestException('Lỗi BE')
        }
    }

    async getDetailRatingByStore(store: CurrentStoreType, ratingId: string) {
        try {
            const { storeId } = store

            const ratingExist = await this.prisma.rating.findUnique({
                where: {
                    id: ratingId,
                    storeId
                }
            })

            if (!ratingExist) {
                throw new NotFoundException('Đánh giá không tồn tại')
            }

            const ratingReply = await this.prisma.ratingReply.findFirst({
                where: {
                    parentRatingId: ratingId
                }
            })

            const [materialOfRating, materialOfReply] = await Promise.all([
                this.prisma.ratingMaterial.findMany({
                    where: {
                        ratingId
                    }
                }),
                this.prisma.ratingMaterial.findMany({
                    where: {
                        ratingReplyId: ratingReply.id
                    }
                })
            ])

            return {
                msg: 'ok',
                result: {
                    rating: ratingExist,
                    reply: ratingReply,
                    materialOfRating,
                    materialOfReply
                }
            }
        } catch (err) {
            throw new InternalServerErrorException('Lỗi Server')
        }
    }
}
