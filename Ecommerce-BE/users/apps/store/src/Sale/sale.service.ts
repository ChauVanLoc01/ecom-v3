import { PrismaServiceStore } from '@app/common/prisma/store_prisma.service'
import { InjectQueue } from '@nestjs/bull'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import {
    BadGatewayException,
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
import { Queue } from 'bull'
import { Cache } from 'cache-manager'
import { BackgroundAction, BackgroundName } from 'common/constants/background-job.constant'
import {
    addingProductToSale,
    currentSalePromotion,
    rollbackAddingProductToSale,
    rollbackUpdatingProductToSale,
    updatingProductToSale
} from 'common/constants/event.constant'
import { SalePromotion } from 'common/constants/sale-promotion.constant'
import { Status } from 'common/enums/status.enum'
import { CurrentStoreType } from 'common/types/current.type'
import { MessageReturn, Return } from 'common/types/result.type'
import { hash } from 'common/utils/order_helper'
import { add, endOfHour, endOfWeek, format, startOfHour, startOfWeek, sub } from 'date-fns'
import { keyBy, omit } from 'lodash'
import { firstValueFrom } from 'rxjs'
import { v4 as uuidv4 } from 'uuid'
import { CreateProductSalePromotionDTO } from './dtos/create-product-sale.dto'
import { ProductSaleIds } from './dtos/product-sale-ids.dto'
import { ProductSaleQuery } from './dtos/product-sale-query.dto'
import { QuerySalePromotionDTO } from './dtos/query-promotion.dto'
import { CreateSpecialSaleDTO } from './dtos/special-sale.dto'
import { UpdateProductsSalePromotion } from './dtos/update-product-sale.dto'

@Injectable()
export class SaleService {
    constructor(
        private readonly prisma: PrismaServiceStore,
        private readonly configService: ConfigService,
        @Inject('PRODUCT_SERVICE') private productClient: ClientProxy,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        @InjectQueue(BackgroundName.product_sale) private productSaleBackground: Queue
    ) {}

    async getSalePromotionDetail(storePromotionId: string): Promise<Return> {
        const storePromotion = await this.prisma.storePromotion.findUnique({
            where: {
                id: storePromotionId
            }
        })

        if (!storePromotion) {
            throw new BadRequestException('Cửa hàng chưa tham gia sự kiện này')
        }

        const productPromotions = await this.prisma.productPromotion.findMany({
            where: {
                storePromotionId: storePromotion.id
            }
        })

        return {
            msg: 'ok',
            result: productPromotions
        }
    }

    async getSalePromotion(user: CurrentStoreType, query: QuerySalePromotionDTO): Promise<Return> {
        try {
            const { storeId } = user
            let { date } = query
            console.log(
                'startOfWeek',
                sub(date, { hours: 8 }),
                startOfWeek(date, { weekStartsOn: 1 })
            )
            console.log(
                'endOfWeek',
                add(date, { hours: 7 }),
                add(endOfWeek(date, { weekStartsOn: 1 }), { hours: 8 })
            )
            const promotions = await this.prisma.salePromotion.findMany({
                where: {
                    startDate: {
                        gt: startOfWeek(sub(date, { hours: 8 }), { weekStartsOn: 1 })
                    },
                    endDate: {
                        lt: add(endOfWeek(date, { weekStartsOn: 1 }), { hours: 8 })
                    }
                }
            })

            const storePromotions = await this.prisma.storePromotion.findMany({
                where: {
                    salePromotionId: {
                        in: promotions.map(({ id }) => id)
                    },
                    storeId
                },
                include: {
                    ProductPromotion: {
                        where: {
                            isDelete: false
                        }
                    }
                }
            })

            return {
                msg: 'ok',
                result: {
                    promotions,
                    storePromotions
                }
            }
        } catch (err) {
            console.log('error', err)
            throw new InternalServerErrorException('Lỗi Server')
        }
    }

    async addingProduct(
        user: CurrentStoreType,
        body: CreateProductSalePromotionDTO
    ): Promise<Return> {
        const { userId, storeId } = user
        const { salePromotionId, products, storePromotionId } = body
        let payload = products.map(({ productId, quantity }) => ({
            productId,
            quantity
        }))
        try {
            let id = uuidv4()
            await this.prisma.$transaction(async (tx) => {
                try {
                    const result = await firstValueFrom(
                        this.productClient.send<MessageReturn>(addingProductToSale, {
                            userId,
                            body: payload
                        })
                    )
                    if (!result.action) {
                        throw new BadGatewayException('Dữ liệu không đúng')
                    }
                    if (!storePromotionId) {
                        await tx.storePromotion.create({
                            data: {
                                id,
                                salePromotionId,
                                storeId,
                                createdAt: new Date(),
                                status: Status.ACTIVE,
                                createdBy: userId
                            }
                        })
                    }
                    await tx.productPromotion.createMany({
                        data: products.map((product) => {
                            let { image, name, priceAfter, productId, quantity, category } = product
                            return {
                                id: uuidv4(),
                                storePromotionId: storePromotionId || id,
                                productId,
                                isDelete: false,
                                createdAt: new Date(),
                                priceAfter,
                                quantity,
                                createdBy: userId,
                                salePromotionId,
                                image,
                                name,
                                currentQuantity: quantity,
                                category
                            }
                        })
                    })
                } catch (err) {
                    console.log('error in prisma', err)
                    throw new InternalServerErrorException(err?.message)
                }
            })
            return {
                msg: 'ok',
                result: undefined
            }
        } catch (err) {
            console.log('errror', err)
            this.productClient.emit(rollbackAddingProductToSale, { userId, body: payload })
            throw new InternalServerErrorException(err.message)
        }
    }

    async updateProduct(
        user: CurrentStoreType,
        body: UpdateProductsSalePromotion
    ): Promise<Return> {
        const { productPromotions } = body
        let payload: {
            userId: string
            body: { productId: string; quantity: number }[]
        } = { userId: user.userId, body: [] }
        try {
            const productsPromotionExist = await Promise.all(
                productPromotions.map((product) => {
                    return this.prisma.productPromotion.findUnique({
                        where: {
                            id: product.productPromotionId
                        },
                        select: {
                            productId: true,
                            quantity: true
                        }
                    })
                })
            )

            if (!productPromotions.length) {
                throw new NotFoundException('Danh sách sản phẩm giảm giá không tồn tại')
            }

            productsPromotionExist.forEach((product, idx) => {
                let quantity = productPromotions[idx]?.quantity - product.quantity
                productPromotions[idx] = {
                    ...productPromotions[idx],
                    quantity
                }
                payload.body.push({
                    productId: product.productId,
                    quantity
                })
            })

            await this.prisma.$transaction(async (tx) => {
                const result = await firstValueFrom(
                    this.productClient.send<MessageReturn>(updatingProductToSale, payload)
                )

                if (!result.action) {
                    throw new InternalServerErrorException('Lỗi cập nhật lại số lượng product')
                }

                try {
                    await Promise.all(
                        productPromotions.map(
                            ({ productPromotionId, isDelete, priceAfter, quantity }) =>
                                tx.productPromotion.update({
                                    where: {
                                        id: productPromotionId
                                    },
                                    data: {
                                        quantity:
                                            quantity > 0
                                                ? {
                                                      increment: quantity
                                                  }
                                                : {
                                                      decrement: quantity
                                                  },
                                        priceAfter,
                                        isDelete,
                                        updatedAt: new Date(),
                                        updatedBy: user.userId
                                    }
                                })
                        )
                    )
                } catch (err) {
                    throw new BadRequestException('Lỗi cập nhật product sale')
                }
            })

            return {
                msg: 'ok',
                result: undefined
            }
        } catch (err) {
            console.log('update error', err)
            if (err.statusCode == 400) {
                this.productClient.emit(rollbackUpdatingProductToSale, payload)
            }
            throw new HttpException(err.message, err.statusCode)
        }
    }

    async getAllProduct(promotionId: string, query: ProductSaleQuery): Promise<Return> {
        try {
            let { limit, page, search, category } = query

            let take = 15
            page = Math.max(page || 0, 1)
            let skip = (page - 1) * take

            const promotionExist = await this.prisma.salePromotion.findUnique({
                where: {
                    id: promotionId,
                    startDate: {
                        gte: endOfHour(new Date())
                    }
                },
                select: {
                    id: true,
                    title: true,
                    description: true,
                    startDate: true,
                    endDate: true,
                    type: true
                }
            })

            if (!promotionExist) {
                throw new BadRequestException('Chương trình giảm giá không tồn tại')
            }

            let where = {
                salePromotionId: promotionId,
                isDelete: false,
                quantity: {
                    gt: 0
                },
                category,
                name: {
                    contains: search
                }
            }

            let [count, products] = await Promise.all([
                this.prisma.productPromotion.count({
                    where
                }),
                this.prisma.productPromotion.findMany({
                    where,
                    take,
                    skip,
                    select: {
                        id: true,
                        name: true,
                        productId: true,
                        bought: true,
                        quantity: true,
                        image: true,
                        priceAfter: true
                    }
                })
            ])

            products = await Promise.all(
                products.map(async (product) => {
                    let hashValue = hash('product', product.id)
                    let fromCache = await this.cacheManager.get<string>(hashValue)
                    if (fromCache) {
                        let { quantity } = JSON.parse(fromCache) as { quantity: number }
                        product.bought = product.quantity - quantity
                    }
                    return product
                })
            )

            return {
                msg: 'ok',
                result: {
                    data: {
                        salePromotion: promotionExist,
                        productPromotions: products
                    },
                    query: {
                        ...query,
                        page,
                        page_size: Math.ceil(count / take)
                    }
                }
            }
        } catch (err) {
            throw new HttpException(
                (err?.message as string).length > 70 ? 'Lỗi Server' : err.message,
                err.status || HttpStatus.INTERNAL_SERVER_ERROR
            )
        }
    }

    async getProductListSaleDetail(
        salePromotionId: string,
        query: ProductSaleIds
    ): Promise<Return> {
        const result = await Promise.all(
            query.ids.map((item) => {
                let { productIds, storeId } = item
                return this.prisma.productPromotion.findMany({
                    where: {
                        productId: {
                            in: productIds
                        },
                        currentQuantity: {
                            gt: 0
                        },
                        salePromotionId,
                        isDelete: false,
                        StorePromotion: {
                            storeId
                        }
                    },
                    select: {
                        productId: true,
                        id: true,
                        currentQuantity: true,
                        priceAfter: true,
                        StorePromotion: {
                            select: {
                                storeId: true
                            }
                        }
                    }
                })
            })
        )

        let convert = result.reduce((acum, item) => {
            if (!item.length) {
                return acum
            }
            return {
                ...acum,
                [item[0].StorePromotion.storeId]: keyBy(omit(item, 'StorePromotion'), 'productId')
            }
        }, {})

        return {
            msg: 'ok',
            result: convert || null
        }
    }

    async updateQuantityProductSaleWhenCreatingOrder(payload: {
        productPromotionId: string
        salePromotionId: string
        buy: number
    }): Promise<MessageReturn> {
        try {
            console.log(
                ':::::::::::Cập nhật số lượng [PRODUCT::SALE]:::::::::::',
                format(new Date(), 'hh:mm dd/MM')
            )
            let { productPromotionId, salePromotionId, buy } = payload
            let remaining_quantity = 0
            let origin_quantity = 0
            let hashValue = hash('product', productPromotionId)
            let fromCache = await this.cacheManager.get<string>(hashValue)
            if (fromCache) {
                let { quantity, times, ...rest } = JSON.parse(fromCache) as {
                    quantity: number
                    times: number
                }
                if (!quantity) {
                    throw new Error('Sản phẩm đã hết hàng')
                }
                if (buy > quantity) {
                    throw new Error('Sản phẩm không đủ số lượng')
                }
                origin_quantity = quantity
                quantity = quantity - buy
                await this.cacheManager.set(
                    hashValue,
                    JSON.stringify({ quantity, times: 3, ...rest })
                )
                remaining_quantity = quantity
            } else {
                const product_promotion = await this.prisma.productPromotion.findUnique({
                    where: {
                        id: productPromotionId,
                        salePromotionId,
                        isDelete: false
                    },
                    select: {
                        currentQuantity: true,
                        priceAfter: true
                    }
                })
                let { currentQuantity, priceAfter } = product_promotion
                if (!product_promotion) {
                    throw new Error('Sản phẩm không tồn tại')
                }
                if (!currentQuantity) {
                    throw new Error('Sản phẩm đã hết hàng')
                }
                if (currentQuantity < buy) {
                    throw new Error('Sản phẩm không đủ số lượng')
                }
                if (product_promotion) {
                    let fromCache = await this.cacheManager.get<string>(hashValue)
                    if (fromCache) {
                        let { quantity, times, ...rest } = JSON.parse(fromCache) as {
                            quantity: number
                            times: number
                        }
                        if (!quantity) {
                            throw new Error('Sản phẩm đã hết hàng')
                        }
                        if (buy > quantity) {
                            throw new Error('Sản phẩm không đủ số lượng')
                        }
                        origin_quantity = quantity
                        quantity = quantity - buy
                        await this.cacheManager.set(
                            hashValue,
                            JSON.stringify({ quantity, times: 3, ...rest })
                        )
                        remaining_quantity = quantity
                    } else {
                        await this.cacheManager.set(
                            hashValue,
                            JSON.stringify({
                                quantity: currentQuantity - buy,
                                priceAfter,
                                times: 3
                            })
                        )
                        origin_quantity = currentQuantity
                        remaining_quantity = currentQuantity - buy
                    }
                }
            }
            console.log(
                ':::::::::product sale quantity ',
                JSON.stringify({
                    remaining_quantity: remaining_quantity,
                    original_quantity: origin_quantity,
                    salePromotionId,
                    productPromotionId
                }),
                ':::::::::::::::'
            )
            return {
                msg: 'Cập nhật số lượng product sale thành công',
                action: true,
                result: {
                    remaining_quantity: remaining_quantity,
                    original_quantity: origin_quantity,
                    salePromotionId,
                    productPromotionId
                }
            }
        } catch (err) {
            return {
                msg: err?.message,
                action: false,
                result: null
            }
        }
    }

    async createCronJobToUpdateProductSale(productPromotionIds: string[]) {
        console.log('Yêu cầu tạo cron job để cập nhật product sale')
        this.productSaleBackground.add(
            BackgroundAction.createCronJobToUpdateProductSale,
            productPromotionIds,
            { attempts: 3, removeOnComplete: true }
        )
    }

    async getProductSaleDetail(salePromotionId: string, productId: string): Promise<Return> {
        let productSale = await this.prisma.productPromotion.findFirst({
            where: {
                productId,
                salePromotionId,
                currentQuantity: {
                    gt: 0
                },
                StorePromotion: {
                    status: Status.ACTIVE
                }
            },
            select: {
                currentQuantity: true,
                priceAfter: true,
                id: true
            }
        })
        let hashValue = hash('product', productSale.id)
        let fromCache = await this.cacheManager.get<string>(hashValue)
        if (fromCache) {
            let { quantity } = JSON.parse(fromCache) as { quantity: number }
            productSale.currentQuantity = quantity
        }

        return {
            msg: 'ok',
            result: productSale || null
        }
    }

    async getSalePromotionsInDay(): Promise<Return> {
        try {
            let current = add(startOfHour(new Date()), { hours: 7 })

            const saleIds = await this.prisma.salePromotion.findMany({
                where: {
                    startDate: {
                        gte: current
                    }
                },
                orderBy: {
                    startDate: 'asc'
                },
                select: {
                    id: true,
                    startDate: true,
                    endDate: true,
                    title: true
                },
                take: 24
            })

            return {
                msg: 'ok',
                result: saleIds
            }
        } catch (err) {
            throw new HttpException(
                err.message || 'Lỗi server',
                err.status || HttpStatus.INTERNAL_SERVER_ERROR
            )
        }
    }

    async getCurrentSale(salePromotionId: string) {
        try {
            console.log('current sale')
            const current = add(startOfHour(new Date()), { hours: 7 })

            const salePromotion = await this.prisma.salePromotion.findFirst({
                where: {
                    id: salePromotionId
                },
                omit: {
                    createdAt: true,
                    createdBy: true,
                    updatedAt: true,
                    updatedBy: true,
                    status: true
                }
            })

            if (!salePromotion) {
                throw new NotFoundException('Chương trình giảm giá không tồn tại')
            }

            let products = await this.prisma.productPromotion.findMany({
                where: {
                    salePromotionId: salePromotion.id,
                    isDelete: false,
                    quantity: {
                        gt: 0
                    }
                },
                omit: {
                    createdAt: true,
                    createdBy: true,
                    isDelete: true,
                    updatedAt: true,
                    updatedBy: true
                },
                take: 20
            })

            products = await Promise.all(
                products.map(async (product) => {
                    let hashValue = hash('product', product.id)
                    const quantityFromCache = await this.cacheManager.get<string>(hashValue)
                    if (quantityFromCache) {
                        let { quantity } = JSON.parse(quantityFromCache) as { quantity: number }
                        product.currentQuantity = quantity
                        product.bought = product.quantity - product.currentQuantity
                        console.log('sale products', JSON.stringify(product))
                    }
                    return product
                })
            )

            return {
                msg: 'ok',
                result: {
                    salePromotion,
                    productPromotions: products
                }
            }
        } catch (err) {
            throw new HttpException(err.message || 'Lỗi Server', err.status || 500)
        }
    }

    async getProductSaleEvent(productId: string): Promise<MessageReturn> {
        try {
            const fromCache = await this.cacheManager.get<string>(currentSalePromotion)

            let currentSaleId = ''
            console.log('fromCache', fromCache)
            if (fromCache) {
                currentSaleId = fromCache
            } else {
                const currentSale = await this.prisma.salePromotion.findFirst({
                    where: {
                        startDate: {
                            gte: add(startOfHour(new Date()), { hours: 7 })
                        },
                        endDate: {
                            lte: add(endOfHour(new Date()), { hours: 7 })
                        },
                        status: Status.ACTIVE
                    },
                    select: {
                        id: true
                    }
                })
                currentSaleId = currentSale.id
            }

            if (!currentSaleId) {
                return {
                    msg: 'ok',
                    action: false,
                    result: null
                }
            }

            const productSaleExist = await this.prisma.productPromotion.findFirst({
                where: {
                    productId,
                    quantity: {
                        gt: 0
                    },
                    salePromotionId: currentSaleId
                },
                select: {
                    id: true,
                    quantity: true,
                    bought: true,
                    productId: true,
                    priceAfter: true
                }
            })

            if (!productSaleExist) {
                return {
                    msg: 'ok',
                    action: false,
                    result: null
                }
            }

            if (productSaleExist.quantity === productSaleExist.bought) {
                return {
                    msg: 'ok',
                    action: false,
                    result: null
                }
            }

            return {
                msg: 'ok',
                action: true,
                result: productSaleExist
            }
        } catch (err) {
            return {
                msg: 'ok',
                action: false,
                result: null
            }
        }
    }

    async refreshProductSale(payload: {
        saleId: string
        productIds: string[]
    }): Promise<MessageReturn> {
        try {
            let { productIds, saleId } = payload

            const productSales = await this.prisma.productPromotion.findMany({
                where: {
                    salePromotionId: saleId,
                    productId: {
                        in: productIds.map((productId) => productId)
                    },
                    isDelete: false,
                    quantity: {
                        gt: 0
                    }
                },
                select: {
                    quantity: true,
                    bought: true,
                    priceAfter: true,
                    productId: true,
                    salePromotionId: true,
                    id: true
                }
            })

            if (!productSales.length) {
                return {
                    action: true,
                    msg: 'ok',
                    result: null
                }
            }

            return {
                action: true,
                msg: 'ok',
                result: productSales.reduce<Record<string, (typeof productSales)[number]>>(
                    (acum, item) => {
                        if (!item) return acum
                        return {
                            ...acum,
                            [item.productId]: item
                        }
                    },
                    {}
                )
            }
        } catch (err) {
            return {
                msg: err?.message,
                action: false,
                result: null
            }
        }
    }

    async createSpecialSale(user: CurrentStoreType, body: CreateSpecialSaleDTO) {
        try {
            let { end_date, start_date, title, description } = body
            await this.prisma.$transaction([
                this.prisma.salePromotion.create({
                    data: {
                        id: uuidv4(),
                        title,
                        description,
                        startDate: start_date,
                        endDate: end_date,
                        createdAt: new Date(),
                        createdBy: user.userId,
                        status: Status.ACTIVE,
                        type: SalePromotion.SPEACIAL
                    }
                })
            ])
        } catch (err) {}
    }
}
