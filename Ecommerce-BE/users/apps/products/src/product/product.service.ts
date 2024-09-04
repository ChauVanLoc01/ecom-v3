import { RedisClient } from '@app/common/cache/redis.provider'
import { PrismaServiceProduct } from '@app/common/prisma/product_prisma.service'
import { MailerService } from '@nestjs-modules/mailer'
import { InjectQueue } from '@nestjs/bull'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import {
    BadRequestException,
    Inject,
    Injectable,
    InternalServerErrorException,
    NotFoundException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ClientProxy } from '@nestjs/microservices'
import { SchedulerRegistry } from '@nestjs/schedule'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { Queue } from 'bull'
import { Cache } from 'cache-manager'
import { BackgroundAction, BackgroundName } from 'common/constants/background-job.constant'
import {
    createCronJobToUpdateProductSale,
    emit_update_product_whenCreatingOrder,
    getEmailStore,
    getStoreDetail,
    updateProductSaleWhenCreatingOrder,
    updateQuantityProductSalePromotion
} from 'common/constants/event.constant'
import { Status } from 'common/enums/status.enum'
import { CurrentStoreType } from 'common/types/current.type'
import {
    CreateOrderPayload,
    RollbackOrder,
    Update_Product_WhenCreatingOrderPayload
} from 'common/types/order_payload.type'
import { MessageReturn, Return } from 'common/types/result.type'
import {
    commit_create_order_success,
    emit_roll_back_order,
    emit_update_quantity_of_product,
    emit_update_status_of_order,
    hash,
    voucher_next_step
} from 'common/utils/order_helper'
import { isProductSale } from 'common/utils/utils'
import { format } from 'date-fns'
import { isUndefined, keyBy, omitBy } from 'lodash'
import { firstValueFrom } from 'rxjs'
import { v4 as uuidv4 } from 'uuid'
import { Prisma, PrismaClient, Product } from '../../../../prisma/generated/product'
import { CreateUserAddProductToCartDTO } from './dtos/create-product-add-to-cart.dto'
import { CreateUserViewProductDto } from './dtos/create-product-view.dto'
import { CreateProductType } from './dtos/create-product.dto'
import { QueryProductType } from './dtos/query-product.dto'
import { RefreshCartDTO } from './dtos/refresh-cart.dto'
import { UpdateProductType } from './dtos/update-product.dto'

@Injectable()
export class ProductService {
    constructor(
        private readonly prisma: PrismaServiceProduct,
        @Inject('SOCKET_SERVICE') private readonly socket_client: ClientProxy,
        @Inject('STORE_SERVICE') private readonly store_client: ClientProxy,
        @Inject('PRODUCT_SERVICE') private readonly product_client: ClientProxy,
        @Inject('ORDER_SERVICE') private readonly order_client: ClientProxy,
        @Inject('USER_SERVICE') private readonly user_client: ClientProxy,
        private readonly configService: ConfigService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private schedulerRegistry: SchedulerRegistry,
        @InjectQueue(BackgroundName.product) private productBackgroundQueue: Queue,
        private readonly mailService: MailerService,
        @Inject('REDIS_CLIENT') private readonly redis: RedisClient
    ) {}

    async getALlProductForUser(query: QueryProductType): Promise<Return> {
        try {
            const {
                category,
                createdAt,
                price_max,
                price_min,
                sold,
                price,
                limit,
                page,
                max_date,
                min_date
            } = query

            if (
                Object.keys(
                    omitBy(
                        {
                            createdAt,
                            sold,
                            price
                        },
                        isUndefined
                    )
                ).length > 1
            ) {
                throw new BadRequestException('Tối đa 1 field order')
            }

            const [productAllLength, products] = await Promise.all([
                this.prisma.product.count({
                    where: {
                        category,
                        priceAfter: {
                            lte: price_max,
                            gte: price_min
                        },
                        status: 'ACTIVE',
                        createdAt: {
                            gte: min_date,
                            lte: max_date
                        },
                        currentQuantity: {
                            gt: 0
                        }
                    }
                }),
                this.prisma.product.findMany({
                    where: {
                        category,
                        priceAfter: {
                            lte: price_max,
                            gte: price_min
                        },
                        status: 'ACTIVE',
                        createdAt: {
                            gte: min_date,
                            lte: max_date
                        },
                        currentQuantity: {
                            gt: 0
                        }
                    },
                    orderBy: {
                        createdAt,
                        sold,
                        priceAfter: price
                    },
                    take: limit || this.configService.get<number>('app.limit_default'),
                    skip:
                        page && page > 0
                            ? (page - 1) *
                              (limit || this.configService.get<number>('app.limit_default'))
                            : 0
                })
            ])

            const storeIdList = products.map((product) => product.storeId)

            const storeList = await firstValueFrom<MessageReturn>(
                this.store_client.send(getStoreDetail, storeIdList)
            )

            if (!storeList.action) {
                throw new Error(storeList.msg)
            }

            const result = products.map((product) => {
                return {
                    ...product,
                    store: storeList.result[product.storeId]
                }
            })

            return {
                msg: 'Lấy danh sách sản phẩm thành công',
                result: {
                    data: result,
                    query: omitBy(
                        {
                            ...query,
                            page: page || 1,
                            page_size: Math.ceil(
                                productAllLength /
                                    (limit || this.configService.get<number>('app.limit_default'))
                            )
                        },
                        isUndefined
                    )
                }
            }
        } catch (err) {
            console.log('error', err)
            throw new InternalServerErrorException(err.message)
        }
    }

    async getProductByProductOrder(productsId: string[]): Promise<MessageReturn> {
        try {
            const products = await Promise.all(
                productsId.map((id) =>
                    this.prisma.product.findUnique({
                        where: {
                            id
                        }
                    })
                )
            )

            return {
                msg: 'ok',
                action: true,
                result: keyBy(products, 'id')
            }
        } catch (err) {
            return {
                msg: 'Lỗi server',
                action: false,
                result: null
            }
        }
    }

    async getALlProductForStore(storeId: string, query: QueryProductType): Promise<Return> {
        try {
            const {
                category,
                createdAt,
                price_max,
                price_min,
                sold,
                price,
                limit,
                page,
                max_date,
                min_date,
                status,
                search_key
            } = query

            if (
                Object.keys(
                    omitBy(
                        {
                            createdAt,
                            sold,
                            price
                        },
                        isUndefined
                    )
                ).length > 1
            ) {
                throw new BadRequestException('Tối đa 1 field order')
            }

            let page_tmp = page || 1
            let take = limit || this.configService.get<number>('app.limit_default')
            let skip = (page_tmp - 1) * take

            let search_params: Prisma.StringNullableFilter = {
                contains: search_key
            }

            let search: Prisma.ProductWhereInput = {
                OR: [
                    {
                        id: search_params
                    },
                    {
                        name: search_params
                    },
                    {
                        description: search_params
                    },
                    {
                        Category: {
                            name: search_params
                        }
                    }
                ]
            }

            let where: Prisma.ProductWhereInput = {
                storeId,
                status,
                category,
                createdAt: {
                    gte: min_date,
                    lte: max_date
                },
                currentQuantity: {
                    gt: 0
                },
                priceAfter: {
                    lte: price_max,
                    gte: price_min
                }
            }

            const [count, products] = await Promise.all([
                this.prisma.product.count({
                    where: {
                        ...where,
                        ...search
                    }
                }),
                this.prisma.product.findMany({
                    where: {
                        ...where,
                        ...search
                    },
                    orderBy: {
                        createdAt,
                        sold,
                        priceAfter: price
                    },
                    take,
                    skip
                })
            ])

            return {
                msg: 'ok',
                result: {
                    data: products,
                    query: {
                        ...query,
                        page: page_tmp,
                        page_size: Math.ceil(count / take)
                    }
                }
            }
        } catch (err) {
            console.log('errrororro', err)
        }
    }

    // async getAllProductOrderByOrderId(orderId: string): Promise<Return> {
    //     return {
    //         msg: 'ok',
    //         result: await this.prisma.productOrder.findMany({
    //             where: {
    //                 orderId
    //             },
    //             include: {
    //                 Product: true
    //             }
    //         })
    //     }
    // }

    async getProductDetail(productId: string): Promise<Return> {
        const [productExist, cached, imgs] = await Promise.all([
            this.prisma.product.findUnique({
                where: {
                    id: productId,
                    status: Status.ACTIVE,
                    currentQuantity: {
                        gt: 0
                    }
                }
            }),
            this.cacheManager.get<string>(hash('product', productId)),
            this.prisma.productImage.findMany({
                where: {
                    productId
                }
            })
        ])

        if (!productExist) throw new NotFoundException('Sản phẩm không tồn tại')

        return {
            msg: 'Lấy thông tin chi tiết sản phẩm thành công',
            result: {
                ...productExist,
                productImages: imgs,
                currentQuantity: cached ? JSON.parse(cached).quantity : productExist.currentQuantity
            } as Product
        }
    }

    async getProductDetailForOrder(productId: string): Promise<Return> {
        const productExist = await this.prisma.product.findUnique({
            where: {
                id: productId
            },
            select: {
                name: true,
                image: true
            }
        })
        if (!productExist) {
            throw new NotFoundException('Không tìm thấy sản phẩm')
        }
        return {
            msg: 'ok',
            result: productExist
        }
    }

    async analyticsProduct(store: CurrentStoreType): Promise<Return> {
        const [all, active, block, deleted] = await Promise.all([
            this.prisma.product.count({
                where: {
                    storeId: store.storeId
                }
            }),
            this.prisma.product.count({
                where: {
                    isDelete: false,
                    status: 'ACTIVE',
                    storeId: store.storeId
                }
            }),
            this.prisma.product.count({
                where: {
                    isDelete: false,
                    status: 'BLOCK',
                    storeId: store.storeId
                }
            }),
            this.prisma.product.count({
                where: {
                    isDelete: true,
                    storeId: store.storeId
                }
            })
        ])

        return {
            msg: 'Lấy thông tin thành công',
            result: {
                all,
                active,
                block,
                deleted
            }
        }
    }

    async createProduct(user: CurrentStoreType, body: CreateProductType): Promise<Return> {
        const { storeId, userId } = user

        const {
            name,
            initQuantity,
            priceAfter,
            priceBefore,
            description,
            status,
            category,
            productImages,
            imagePrimary
        } = body

        const createdProduct = await this.prisma.product.create({
            data: {
                id: uuidv4(),
                name,
                currentQuantity: initQuantity,
                initQuantity,
                priceBefore: priceBefore || 0,
                priceAfter: priceAfter,
                description,
                image: imagePrimary,
                status: status || Status.ACTIVE,
                storeId,
                createdBy: userId,
                category
            }
        })

        await Promise.all(
            productImages.map((img) =>
                this.prisma.productImage.create({
                    data: {
                        id: uuidv4(),
                        url: img,
                        createdAt: new Date(),
                        createdBy: user.userId,
                        productId: createdProduct.id
                    }
                })
            )
        )

        return {
            msg: 'Tạo sản phẩm thành công',
            result: {
                ...createdProduct,
                productImages
            }
        }
    }

    async createViewProduct(body: CreateUserViewProductDto): Promise<Return> {
        const result = await this.prisma.userViewProduct.create({
            data: {
                id: uuidv4(),
                userId: body.userId,
                productId: body.productId,
                storeId: body.storeId,
                createdAt: new Date().toISOString()
            }
        })

        return {
            msg: 'ok',
            result
        }
    }

    async createUserAddProductToCart(body: CreateUserAddProductToCartDTO): Promise<Return> {
        const { productId, quantity } = body

        const result = await this.prisma.userAddProductToCart.create({
            data: {
                id: uuidv4(),
                productId,
                quantity,
                userId: body.userId,
                createdAt: new Date().toISOString()
            }
        })

        return {
            msg: 'ok',
            result
        }
    }

    async updateProduct(
        user: CurrentStoreType,
        productId: string,
        body: UpdateProductType
    ): Promise<Return> {
        const { userId, storeId } = user
        const productExist = await this.prisma.product.findUnique({
            where: {
                id: productId,
                storeId
            },
            select: {
                id: true,
                initQuantity: true,
                currentQuantity: true,
                storeId: true
            }
        })
        if (!productExist) throw new NotFoundException('Sản phẩm không tồn tại')
        const { category, description, initQuantity, name, priceAfter, priceBefore, status, urls } =
            body
        let new_quantity = initQuantity - productExist.initQuantity
        this.socket_client.emit(emit_update_product_whenCreatingOrder, {
            priceAfter,
            productId,
            quantity: productExist.currentQuantity + new_quantity,
            storeId: productExist.storeId,
            currentSaleId: undefined,
            status,
            name
        } as Update_Product_WhenCreatingOrderPayload)
        let arr = []
        if (urls?.length) {
            arr.push(
                this.prisma.productImage.createMany({
                    data: urls.map((url) => ({
                        id: uuidv4(),
                        createdAt: new Date(),
                        createdBy: userId,
                        productId,
                        url
                    }))
                })
            )
        }
        arr.push(
            this.prisma.product.update({
                where: {
                    id: productId,
                    storeId
                },
                data: {
                    category,
                    initQuantity,
                    currentQuantity: new_quantity
                        ? {
                              increment: new_quantity
                          }
                        : {
                              decrement: new_quantity
                          },
                    name,
                    description,
                    priceAfter,
                    priceBefore,
                    status
                }
            })
        )
        await this.prisma.$transaction(arr)

        return {
            msg: 'Cập nhật sản phẩm thành công',
            result: undefined
        }
    }

    async productImages(productId: string) {
        let result = await this.prisma.productImage.findMany({
            where: {
                productId
            },
            select: {
                url: true
            }
        })
        let tmp = undefined
        if (!result.length) {
            tmp = await this.prisma.product.findUnique({
                where: {
                    id: productId
                },
                select: {
                    image: true
                }
            })
        }
        return {
            msg: 'ok',
            result: tmp ? [{ url: tmp.image }] : result
        }
    }

    async deleteProduct(user: CurrentStoreType, productId: string): Promise<Return> {
        const { userId } = user

        const productExist = await this.prisma.product.update({
            where: {
                id: productId
            },
            data: {
                deletedAt: new Date(),
                deletedBy: userId
            }
        })

        if (!productExist) throw new NotFoundException('Sản phẩm không tồn tại')

        return {
            msg: 'Xóa sản phẩm thành công',
            result: undefined
        }
    }

    async emitUpdateProductToSocket(
        storeId: string,
        productId: string,
        quantity: number,
        priceAfter: number,
        times = 2
    ) {
        try {
            await this.cacheManager.set(
                hash('product', productId),
                JSON.stringify({ quantity, priceAfter, times })
            )
            this.socket_client.emit(emit_update_product_whenCreatingOrder, {
                productId,
                storeId,
                quantity,
                priceAfter
            })
        } catch (err) {
            throw new Error('Lỗi cập nhật dữ liệu')
        }
    }

    async updateProductWhenCreatingOrder(body: CreateOrderPayload<'update_product'>) {
        let { userId, payload, actionId } = body
        let map = new Map<
            number,
            CreateOrderPayload<'update_product'>['payload']['products'][number]
        >()
        try {
            console.log(
                ':::::::::Tiến hàng cập nhật product::::::::::',
                format(new Date(), 'hh:mm:ss:SSS dd/MM')
            )
            const result = await Promise.all(
                payload.products.map(async (product, idx) => {
                    if (isProductSale(product)) {
                        console.log(':::::::::product sale ==> Cập nhật product sale:::::::::')
                        let { productPromotionId, salePromotionId, buy } = product
                        let hashValue = hash('product', productPromotionId)
                        let fromCache = await this.redis.exists(hashValue)
                        map.set(idx, undefined)
                        if (!fromCache) {
                            const productSale = await firstValueFrom<
                                MessageReturn<{
                                    remaining_quantity: number
                                    original_quantity: number
                                    salePromotionId: string
                                    productPromotionId: string
                                }>
                            >(
                                this.store_client.send(updateProductSaleWhenCreatingOrder, {
                                    productPromotionId,
                                    salePromotionId: salePromotionId,
                                    buy
                                })
                            )
                            if (!productSale.action) {
                                throw new Error(productSale.msg)
                            }
                            if (productSale) {
                                let {
                                    result: { original_quantity, remaining_quantity }
                                } = productSale
                                map.set(idx, { ...product, original_quantity, remaining_quantity })
                            }
                        } else {
                            let remaining_quantity = await this.redis.decr(hashValue)
                            if (remaining_quantity < 0) {
                                throw new Error('Sản phẩm sale đã hết hàng')
                            } else {
                                map.set(idx, {
                                    ...product,
                                    original_quantity: remaining_quantity + 1,
                                    remaining_quantity
                                })
                            }
                        }
                        return true
                    } else {
                        let { buy, id: productId } = product
                        let hashValue = hash('product', productId)
                        let fromCache = await this.redis.exists(hashValue)
                        if (fromCache) {
                            console.log('Trường hợp CÓ cache')
                            let remaining_quantity = await this.redis.decrby(hashValue, buy)
                            if (remaining_quantity < 0) {
                                await this.redis.incrby(hashValue, buy)
                                throw new Error('Sản phẩm không đủ số lượng')
                            } else {
                                map.set(idx, {
                                    ...product,
                                    remaining_quantity,
                                    original_quantity: remaining_quantity + buy
                                })
                            }
                        } else {
                            console.log('Trường hợp KHÔNG CÓ cache')
                            map.set(idx, undefined)
                            const productExist = await this.prisma.product.findUnique({
                                where: {
                                    id: productId
                                },
                                select: {
                                    currentQuantity: true,
                                    priceAfter: true
                                }
                            })

                            if (!productExist) {
                                map.delete(idx)
                                throw new Error('Sản phẩm không tồn tại')
                            }
                            if (productExist.currentQuantity == 0) {
                                map.delete(idx)
                                throw new Error('Sản phẩm đã hết hàng')
                            }
                            if (productExist.currentQuantity < buy) {
                                map.delete(idx)
                                throw new Error('Sản phẩm không đủ số lượng')
                            }
                            if (productExist) {
                                let fromCache_inner = await this.redis.exists(hashValue)
                                if (!fromCache_inner) {
                                    await this.redis.setnx(hashValue, productExist.currentQuantity)
                                }
                                let remaining_quantity = await this.redis.decrby(hashValue, buy)
                                if (remaining_quantity < 0) {
                                    await this.redis.incrby(hashValue, buy)
                                    throw new Error('Sản phẩm không đủ số lượng')
                                } else {
                                    map.set(idx, {
                                        ...product,
                                        remaining_quantity,
                                        original_quantity: remaining_quantity + buy
                                    })
                                }
                            }
                        }
                        return true
                    }
                })
            )

            if (result) {
                try {
                    console.log(
                        ':::::::::Cập nhật product thành công::::::::::::::',
                        format(new Date(), 'hh:mm:ss:SSS dd/MM')
                    )
                    let payloadTmp: CreateOrderPayload<'commit_success'> = {
                        ...body,
                        payload: {
                            ...payload,
                            products: [...map.values()]
                        }
                    }
                    if (body.payload.vouchers.length) {
                        console.log(':::::::::Bước kế tiếp: gọi cập nhật VOUCHER:::::::::::')
                        voucher_next_step(this.store_client, {
                            actionId,
                            payload,
                            userId
                        })
                    } else {
                        console.log(
                            ':::::::::Đơn hàng không sử dụng voucher ==> Commit order thành công:::::::::'
                        )
                        emit_update_status_of_order(this.socket_client, {
                            action: true,
                            id: actionId,
                            msg: 'Đặt hàng thành công',
                            result: null
                        })
                        commit_create_order_success([this.order_client], payloadTmp)
                        let tmp_ids: { product: string[]; product_sale: string[] } = {
                            product: [],
                            product_sale: []
                        }
                        payload.products.forEach((product) => {
                            let { productPromotionId, id } = product
                            if (isProductSale(product)) {
                                tmp_ids.product_sale.push(productPromotionId)
                            } else {
                                tmp_ids.product.push(id)
                            }
                        })
                        if (tmp_ids.product.length) {
                            await this.productBackgroundQueue.add(
                                BackgroundAction.createCronJobToUpdateProduct,
                                tmp_ids.product,
                                {
                                    attempts: 3,
                                    removeOnComplete: true
                                }
                            )
                        }
                        if (tmp_ids.product_sale.length) {
                            this.store_client.emit(
                                createCronJobToUpdateProductSale,
                                tmp_ids.product_sale
                            )
                        }
                    }
                    // Emit cập nhật số lượng và cache cho từng sản phẩm
                    payloadTmp.payload.products.forEach((product) => {
                        let {
                            id,
                            price_after,
                            storeId,
                            salePromotionId,
                            remaining_quantity,
                            productPromotionId,
                            original_quantity
                        } = product
                        emit_update_quantity_of_product(this.socket_client, {
                            priceAfter: price_after,
                            productId: productPromotionId || id,
                            quantity: remaining_quantity,
                            storeId,
                            currentSaleId: salePromotionId
                        })
                        if (isProductSale(product)) {
                            this.socket_client.emit(updateQuantityProductSalePromotion, {
                                saleId: salePromotionId,
                                productId: product.id,
                                productSaleId: productPromotionId,
                                quantity: remaining_quantity,
                                storeId
                            })
                        }
                    })
                } catch (err) {
                    console.log('******Lỗi lỗi ở bước tạo cập nhật thành công product********', err)
                }
            }
        } catch (err) {
            try {
                let payloadTmp: CreateOrderPayload<'roll_back_order'> = {
                    ...body,
                    payload: {
                        ...payload,
                        products: [...map.values()]
                    }
                }
                console.log('********Cập nhật product thất bại********', err)
                emit_roll_back_order([this.order_client], payloadTmp)
                emit_update_status_of_order(this.socket_client, {
                    action: false,
                    id: actionId,
                    msg: err?.message,
                    result: null
                })
                if (payloadTmp.payload.products.length) {
                    await this.productBackgroundQueue.add(
                        BackgroundAction.resetValueCacheWhenUpdateProductFail,
                        payloadTmp.payload.products.filter((product) => {
                            if (product) {
                                console.log('product nè', product)
                                let { id, price_after, original_quantity, productPromotionId } =
                                    product
                                return {
                                    original_quantity,
                                    price_after,
                                    id: productPromotionId || id
                                }
                            }
                        }) as Pick<
                            RollbackOrder['products'][number],
                            'id' | 'price_after' | 'original_quantity'
                        >[],
                        {
                            attempts: 3,
                            removeOnComplete: true
                        }
                    )
                }
            } catch (err) {
                console.log('*****Lỗi trong try catch*******', err)
            }
        }
    }

    async rollbackUpdateQuantityProduct(payload: CreateOrderPayload<'roll_back_order'>) {
        console.log(
            '*******Roll back product khi cập nhật voucher thất bại***********',
            format(new Date(), 'hh:mm:ss:SSS dd/MM')
        )
        try {
            await this.productBackgroundQueue.add(
                BackgroundAction.resetValueCacheWhenUpdateProductFail,
                payload.payload.products.map(
                    ({ id, price_after, original_quantity, productPromotionId }) => ({
                        original_quantity,
                        price_after,
                        id: productPromotionId || id
                    })
                ) as Pick<
                    RollbackOrder['products'][number],
                    'id' | 'price_after' | 'original_quantity'
                >[]
            )
            payload.payload.products.forEach((product) => {
                let {
                    id,
                    productPromotionId,
                    salePromotionId,
                    remaining_quantity,
                    price_after,
                    storeId,
                    buy,
                    original_quantity
                } = product
                emit_update_quantity_of_product(this.socket_client, {
                    priceAfter: price_after,
                    productId: productPromotionId || id,
                    quantity: original_quantity,
                    storeId,
                    currentSaleId: salePromotionId
                })
                if (isProductSale(product)) {
                    this.socket_client.emit(updateQuantityProductSalePromotion, {
                        saleId: salePromotionId,
                        productId: productPromotionId,
                        productSaleId: product.productPromotionId,
                        quantity: original_quantity,
                        storeId
                    })
                }
            })
        } catch (err) {
            console.log('*****Có lỗi trong roll back product********', err)
        }
    }

    async commitUpdateQuantityProduct(payload: CreateOrderPayload<'commit_success'>) {
        try {
            console.log(
                '*********commit cập nhật voucher thành công ==> product emit đến order thành công********',
                format(new Date(), 'hh:mm:ss:SSS dd/MM')
            )
            let tmp: { product: string[]; product_sale: string[] } = {
                product: [],
                product_sale: []
            }
            payload.payload.products.forEach((product) => {
                let { productPromotionId, id } = product
                if (isProductSale(product)) {
                    tmp.product_sale.push(productPromotionId)
                } else {
                    tmp.product.push(id)
                }
            })
            if (tmp.product.length) {
                console.log('::::::::commit order - update PRODUCT:::::::::::')
                await this.productBackgroundQueue.add(
                    BackgroundAction.createCronJobToUpdateProduct,
                    tmp.product
                )
            }
            if (tmp.product_sale.length) {
                console.log('::::::::commit order - update PRODUCT SALE:::::::::::')
                this.store_client.emit(createCronJobToUpdateProductSale, tmp.product_sale)
            }
        } catch (err) {
            console.log('******Bước 2: Lỗi commit product (LINE 829) *******')
        }
    }

    // async updateQuantity(productId: string, storeId: string, buy: number): Promise<Mess> {
    //     const hashValue = hash('product', productId)

    //     const fromCache = await this.cacheManager.get<string>(hashValue)

    //     if (fromCache) {
    //         const { quantity, priceAfter } = JSON.parse(fromCache) as {
    //             quantity: number
    //             priceAfter: number
    //         }
    //         if (quantity === buy) {
    //             await Promise.all([
    //                 this.cacheManager.set(
    //                     hashValue,
    //                     JSON.stringify({ quantity: 0, priceAfter }),
    //                     1000 * 60 * 5
    //                 ),
    //                 this.prisma.product.update({
    //                     where: {
    //                         id: productId
    //                     },
    //                     data: {
    //                         currentQuantity: 0
    //                     }
    //                 })
    //             ])
    //             this.emitUpdateProductToSocket(productId, 0, priceAfter)
    //             this.schedulerRegistry.deleteCronJob(hashValue)
    //             return {
    //                 msg: 'ok',
    //                 action: true,
    //                 result: null
    //             }
    //         }

    //         let remainingQuantity = quantity - buy

    //         await this.cacheManager.set(
    //             hashValue,
    //             JSON.stringify({ quantity: remainingQuantity, priceAfter } as {
    //                 quantity: number
    //                 priceAfter: number
    //             })
    //         )

    //         this.emitUpdateProductToSocket(productId, remainingQuantity, priceAfter)

    //         return {
    //             msg: 'ok',
    //             action: true,
    //             result: null
    //         }
    //     } else {
    //         const productExist = await this.prisma.product.findUnique({
    //             where: {
    //                 id: productId,
    //                 storeId
    //             }
    //         })

    //         if (!productExist) {
    //             throw new Error('Sản phẩm không tồn tại')
    //         }

    //         if (productExist.currentQuantity < buy) {
    //             throw new Error(`Sản phẩm ${productId} không đủ số lượng`)
    //         }

    //         if (productExist.currentQuantity === buy) {
    //             await Promise.all([
    //                 this.cacheManager.set(
    //                     hashValue,
    //                     JSON.stringify({
    //                         quantity: 0,
    //                         priceAfter: productExist.priceAfter
    //                     })
    //                 ),
    //                 this.prisma.product.update({
    //                     where: {
    //                         id: productId
    //                     },
    //                     data: {
    //                         currentQuantity: 0
    //                     }
    //                 })
    //             ])

    //             this.emitUpdateProductToSocket(productId, 0, productExist.priceAfter)

    //             return {
    //                 msg: 'ok',
    //                 action: true,
    //                 result: null
    //             }
    //         }

    //         let remainingQuantity = productExist.currentQuantity - buy

    //         await this.cacheManager.set(
    //             hashValue,
    //             JSON.stringify({ quantity: remainingQuantity, priceAfter: productExist.priceAfter })
    //         )

    //         this.emitUpdateProductToSocket(productId, remainingQuantity, productExist.priceAfter)

    //         const updateQuantityJob = new CronJob(CronExpression.EVERY_5_MINUTES, async () => {
    //             const [fromCache, productIn] = await Promise.all([
    //                 this.cacheManager.get<string>(hashValue),
    //                 this.prisma.product.findUnique({
    //                     where: {
    //                         id: productId
    //                     }
    //                 })
    //             ])
    //             let { quantity } = JSON.parse(fromCache) as { quantity: number; priceAfter: number }
    //             let tmp = []
    //             if (quantity === productIn.currentQuantity) {
    //                 tmp.push(this.cacheManager.del(hashValue))
    //             }
    //             await Promise.all([
    //                 this.prisma.product.update({
    //                     where: {
    //                         id: productId,
    //                         storeId
    //                     },
    //                     data: {
    //                         currentQuantity: quantity
    //                     }
    //                 }),
    //                 ...tmp
    //             ])

    //             if (tmp.length) {
    //                 this.schedulerRegistry.deleteCronJob(hashValue)
    //             }
    //         })

    //         this.schedulerRegistry.addCronJob(hashValue, updateQuantityJob)

    //         updateQuantityJob.start()

    //         return {
    //             msg: 'ok',
    //             action: true,
    //             result: null
    //         }
    //     }
    // }

    async updateQuantiyProductsWhenCancelOrder(payload: {
        storeId: string
        products: { productId: string; quantity: number }[]
    }): Promise<MessageReturn> {
        let { storeId, products } = payload
        let process = async (
            tx: Omit<
                PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
                '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'
            >,
            productId: string,
            quantity: number
        ) => {
            try {
                let hashValue = hash('product', productId)
                let fromCache = await this.cacheManager.get<string>(hashValue)

                if (fromCache) {
                    let { quantity: quantityFromCache, priceAfter } = JSON.parse(fromCache) as {
                        quantity: number
                        priceAfter: number
                    }
                    await this.emitUpdateProductToSocket(
                        storeId,
                        productId,
                        quantity + quantityFromCache,
                        priceAfter
                    )
                    return {
                        msg: 'ok',
                        action: true,
                        result: null
                    }
                }
                return tx.product.update({
                    where: {
                        id: productId
                    },
                    data: {
                        currentQuantity: {
                            increment: quantity
                        }
                    }
                })
            } catch (err) {
                console.log('error process', err)
                Promise.reject('Lỗi cập nhật số lượng sản phẩm')
            }
        }

        try {
            await this.prisma.$transaction(async (tx) => {
                try {
                    await Promise.all(
                        products.map(({ productId, quantity }) => process(tx, productId, quantity))
                    )
                } catch (err) {
                    console.log('error transaction', err)
                    throw new Error('Lỗi Cập nhật sản phẩm')
                }
            })
            return {
                msg: 'ok',
                action: true,
                result: null
            }
        } catch (err) {
            console.log('error update all', err)
            await this.rollbackUpdateQuantityWhenCancelOrder({ storeId, products })
            return {
                msg: err?.message || 'Cập nhật lại số lượng sản phẩm không thành công',
                action: false,
                result: null
            }
        }
    }

    async rollbackUpdateQuantityWhenCancelOrder(payload: {
        storeId: string
        products: { productId: string; quantity: number }[]
    }) {
        let { products, storeId } = payload

        let rollback = async (
            tx: Omit<
                PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
                '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'
            >,
            product: { quantity: number; productId: string }
        ) => {
            try {
                let { productId, quantity: buy } = product
                let hashValue = hash('product', productId)
                let fromCache = await this.cacheManager.get<string>(hashValue)
                if (fromCache) {
                    let { quantity: quantityFromCache, priceAfter } = JSON.parse(fromCache) as {
                        quantity: number
                        priceAfter: number
                    }
                    this.emitUpdateProductToSocket(
                        storeId,
                        productId,
                        quantityFromCache - 1,
                        priceAfter
                    )
                    return {
                        msg: 'ok',
                        action: true,
                        result: null
                    }
                }
                return tx.product.update({
                    where: {
                        id: productId
                    },
                    data: {
                        currentQuantity: {
                            decrement: buy
                        }
                    }
                })
            } catch (err) {
                console.log('rollback one', err)
                return Promise.reject('Lỗi rollback sản phẩm')
            }
        }

        try {
            await this.prisma.$transaction(async (tx) => {
                try {
                    await Promise.all(products.map((product) => rollback(tx, product)))
                } catch (err) {
                    throw new Error('Lỗi rollback sản phẩm')
                }
            })
        } catch (err) {
            console.log('rollback all', err)
            throw new Error('Lỗi rollback sản phẩm')
        }
    }

    // async createProductOrder(
    //     data: {
    //         orderId: string
    //         productId: string
    //         priceAfter: number
    //         priceBefore: number
    //         quantity: number
    //     }[]
    // ) {
    //     try {
    //         const orders = await Promise.all(
    //             data.map((e) =>
    //                 this.prisma.order.findUnique({
    //                     where: {
    //                         id: e.orderId
    //                     }
    //                 })
    //             )
    //         )

    //         const result = await Promise.all(
    //             data.map((e) =>
    //                 this.prisma.productOrder.create({
    //                     data: {
    //                         id: uuidv4(),
    //                         priceAfter: e.priceAfter,
    //                         priceBefore: e.priceBefore,
    //                         quantity: e.quantity,
    //                         orderId: e.orderId,
    //                         productId: e.productId
    //                     }
    //                 })
    //             )
    //         )

    //         return result
    //     } catch (err) {
    //         return 'Lỗi tạo product-order'
    //     }
    // }

    async updateData() {
        const products = await this.prisma.product.findMany()

        await Promise.all(
            products.map((product) =>
                this.prisma.productImage.create({
                    data: {
                        id: uuidv4(),
                        url: product.image,
                        productId: product.id,
                        createdAt: new Date(),
                        createdBy: product.createdBy
                    }
                })
            )
        )

        return {
            msg: 'ok'
        }
    }

    async top10ProductView(user: CurrentStoreType) {
        const { storeId } = user
        const result = await this.prisma.userViewProduct.groupBy({
            by: ['productId'],
            _count: {
                _all: true
            },
            where: {
                storeId
            },
            orderBy: {
                _count: {
                    productId: 'desc'
                }
            },
            take: 10
        })
        const convert = await this.prisma.product.findMany({
            where: {
                id: {
                    in: result.map((item) => item.productId)
                }
            },
            select: {
                id: true,
                name: true,
                image: true
            }
        })
        return convert.map((item, idx) => ({
            ...item,
            productId: item.id,
            count: result[idx]._count._all
        }))
    }

    async getProductDetailInBestSell(id: string) {
        const product = await this.prisma.product.findUnique({
            where: {
                id
            },
            select: {
                name: true,
                image: true
            }
        })
        return product
    }

    // async getProductOrderByRating(productId: string, orders: string[]) {
    //     return await Promise.all(
    //         orders.map((orderId) =>
    //             this.prisma.productOrder.findMany({
    //                 where: {
    //                     orderId,
    //                     productId
    //                 }
    //             })
    //         )
    //     )
    // }

    async refreshCart(body: RefreshCartDTO): Promise<Return> {
        let { ids } = body

        let result = await Promise.all(
            ids.map((item) => {
                let { productIds, storeId } = item
                return this.prisma.product.findMany({
                    where: {
                        storeId,
                        id: {
                            in: productIds
                        },
                        isDelete: false,
                        currentQuantity: {
                            gt: 0
                        }
                    },
                    omit: {
                        createdAt: true,
                        createdBy: true,
                        updatedAt: true,
                        updatedBy: true,
                        deletedAt: true,
                        deletedBy: true,
                        description: true,
                        rate: true
                    }
                })
            })
        )

        result = await Promise.all(
            result.map(async (products) => {
                return await Promise.all(
                    products.map(async (product) => {
                        let hashValue = hash('product', product.id)
                        let fromCache = await this.cacheManager.get<string>(hashValue)
                        let quantity = product.currentQuantity
                        if (fromCache) {
                            let { quantity: quantity_from_cache } = JSON.parse(fromCache) as {
                                quantity: number
                            }
                            quantity = quantity_from_cache
                        }
                        return { ...product, currentQuantity: quantity }
                    })
                )
            })
        )

        let revert = result.reduce<{
            [storeId: string]: {
                [productId: string]: (typeof result)[number][number]
            }
        }>((acum, item) => {
            if (!item.length) {
                return acum
            }
            return {
                ...acum,
                [item[0].storeId]: keyBy(item, 'id')
            }
        }, {})

        return {
            msg: 'ok',
            result: revert
        }
    }

    async findProductUnique(id: string): Promise<Product | undefined> {
        try {
            const [product, cached] = await Promise.all([
                this.prisma.product.findUnique({
                    where: {
                        id,
                        status: Status.ACTIVE,
                        currentQuantity: {
                            gt: 0
                        }
                    }
                }),
                this.cacheManager.get<string>(hash('product', id))
            ])

            if (!product) {
                return undefined
            }

            return {
                ...product,
                currentQuantity: cached ? JSON.parse(cached).quantity : product.currentQuantity
            }
        } catch (error) {
            throw new BadRequestException('Lỗi')
        }
    }

    async getAllProductBySalePromotion(productIds: string[]) {
        try {
            const products = await Promise.all(
                productIds.map((id) =>
                    this.prisma.product.findUnique({
                        where: {
                            id,
                            status: Status.ACTIVE,
                            currentQuantity: {
                                gt: 0
                            },
                            isDelete: false
                        },
                        select: {
                            id: true,
                            name: true,
                            priceAfter: true,
                            priceBefore: true,
                            currentQuantity: true
                        }
                    })
                )
            )

            return {
                msg: 'ok',
                action: true,
                result: products
            }
        } catch (_) {
            return {
                msg: 'Lỗi Server',
                action: false,
                result: null
            }
        }
    }

    async getProductImageByProductSalePromotion(productIds: string[]) {
        try {
            const products = await Promise.all(
                productIds.map((id) =>
                    this.prisma.product.findUnique({
                        where: {
                            id
                        },
                        select: {
                            name: true,
                            image: true
                        }
                    })
                )
            )

            return {
                msg: 'ok',
                action: true,
                result: products
            }
        } catch (err) {
            return {
                msg: 'Lỗi lấy dữ liệu từ product',
                action: false,
                result: null
            }
        }
    }

    async testing() {
        // const cache = await firstValueFrom(this.product_client.send('testing', { msg: 'ok' }))
        return {
            msg: 'ok',
            result: await this.testingPattern()
        }
    }

    async testingPattern() {
        const cache = await this.cacheManager.get('testing')
        const tmp = cache ? +cache - 1 : 100 - 1
        await this.cacheManager.set('testing', tmp)
        return await this.cacheManager.get('testing')
    }

    async countProduct(storeId: string): Promise<MessageReturn> {
        try {
            const product_count = await this.prisma.product.count({
                where: {
                    storeId
                }
            })
            return {
                msg: 'ok',
                action: true,
                result: product_count
            }
        } catch (err) {
            return {
                msg: 'ok',
                action: false,
                result: null
            }
        }
    }

    async addingProductToSale(
        userId: string,
        body: { productId: string; quantity: number }[]
    ): Promise<MessageReturn> {
        try {
            console.log('sub quantity')
            await this.prisma.$transaction(async (tx) => {
                await Promise.all(
                    body.map((product) => {
                        return tx.product.update({
                            where: {
                                id: product.productId
                            },
                            data: {
                                currentQuantity: {
                                    decrement: product.quantity
                                },
                                updatedAt: new Date(),
                                updatedBy: userId
                            }
                        })
                    })
                )
            })
            return {
                msg: 'ok',
                action: true,
                result: null
            }
        } catch (err) {
            return {
                msg: 'ok',
                action: false,
                result: null
            }
        }
    }

    async rollbackAddingProductToSale(payload: {
        userId: string
        body: { productId: string; quantity: number }[]
    }) {
        this.productBackgroundQueue.add(BackgroundAction.rollbackAddingProductToSale, payload, {
            attempts: 3,
            removeOnComplete: true
        })
    }

    async updatingProductToSale(payload: {
        userId: string
        body: { productId: string; quantity: number }[]
    }): Promise<MessageReturn> {
        let { body, userId } = payload
        try {
            await this.prisma.$transaction(async (tx) => {
                await Promise.all(
                    body.map((data) => {
                        let { productId, quantity } = data
                        let isGt0 = quantity > 0
                        let currentQuantity: Prisma.ProductUpdateInput['currentQuantity'] = isGt0
                            ? {
                                  decrement: data.quantity
                              }
                            : {
                                  increment: data.quantity
                              }
                        return tx.product.update({
                            where: {
                                id: productId
                            },
                            data: {
                                currentQuantity,
                                updatedAt: new Date(),
                                updatedBy: userId
                            }
                        })
                    })
                )
            })
            return {
                msg: 'ok',
                action: true,
                result: null
            }
        } catch (err) {
            return {
                msg: 'fail',
                action: false,
                result: null
            }
        }
    }

    async updateQuantityAfterSale(
        products: { productId: string; currentQuantity: number }[],
        storeId: string
    ) {
        let html = `<div>
                        <h3>Quá trình hoàn lại số lượng sau chương trình Flash Sale thất bại. Vui lòng cập nhật lại số lượng sản phẩm như bảng bên dưới.</h3>
                        <table>
                            <tr>
                                <th>Mã sản phẩm</th>
                                <th>Số lượng còn lại</th>
                            </tr>`
        let result = await Promise.allSettled(
            products.map((product) => {
                return this.prisma.product.update({
                    where: {
                        id: product.productId
                    },
                    data: {
                        currentQuantity: {
                            increment: product.currentQuantity
                        }
                    }
                })
            })
        )

        let email = await firstValueFrom(this.user_client.send(getEmailStore, storeId))
        result.forEach((item, idx) => {
            if (item.status === 'rejected') {
                html.concat(`<tr>
                                <td>${products[idx].productId}</td>
                                <td>${products[idx].currentQuantity}</td>
                            </tr>`)
            }
        })

        html.concat('</table></div>')

        const email_infor = {
            html,
            subject: 'Cập nhật số lượng sản phẩm sau chương trình FlashSale',
            to: email
        }
        this.mailService.sendMail(email_infor)
    }
}
