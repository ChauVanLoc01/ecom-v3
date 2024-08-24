import { PrismaServiceStore } from '@app/common/prisma/store_prisma.service'
import { InjectQueue } from '@nestjs/bull'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import {
    BadRequestException,
    HttpException,
    Inject,
    Injectable,
    InternalServerErrorException,
    NotFoundException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ClientProxy } from '@nestjs/microservices'
import { SchedulerRegistry } from '@nestjs/schedule'
import { Queue } from 'bull'
import { Cache } from 'cache-manager'
import { BackgroundAction, BackgroundName } from 'common/constants/background-job.constant'
import {
    rollbackUpdateQuantityProducts,
    update_voucher_whenCreatingOrder
} from 'common/constants/event.constant'
import { VoucherType } from 'common/constants/voucher.constant'
import { Status } from 'common/enums/status.enum'
import { CurrentStoreType, CurrentUserType } from 'common/types/current.type'
import { CreateOrderPayload } from 'common/types/order_payload.type'
import { MessageReturn, Return } from 'common/types/result.type'
import {
    commit_create_order_success,
    emit_roll_back_order,
    emit_update_quantity_of_voucher,
    emit_update_status_of_order,
    hash
} from 'common/utils/order_helper'
import { add, addHours, addMinutes, format } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'
import { Prisma } from '../../../../prisma/generated/store'
import { CreateVoucherDTO } from './dtos/CreateVoucher.dto'
import { VoucherQueryDTO } from './dtos/QueryVoucher.dto'
import { UpdateVoucherDTO } from './dtos/UpdateVoucher.dto'
import { QueryGlobalVoucherDTO } from './dtos/query_global_voucher.dto'
import { SearchCodeDTO } from './dtos/search-code.dto'

@Injectable()
export class VoucherService {
    constructor(
        private readonly prisma: PrismaServiceStore,
        @Inject('ORDER_SERVICE') private orderClient: ClientProxy,
        @Inject('STORE_SERVICE') private storeClient: ClientProxy,
        @Inject('PRODUCT_SERVICE') private productClient: ClientProxy,
        private readonly configService: ConfigService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        @Inject('SOCKET_SERVICE') private socketClient: ClientProxy,
        private schedulerRegistry: SchedulerRegistry,
        @InjectQueue(BackgroundName.voucher) private voucherBackgroundQueue: Queue
    ) {}

    async createVoucher(user: CurrentStoreType, body: CreateVoucherDTO): Promise<Return> {
        const exist = await this.prisma.voucher.findMany({
            where: {
                storeId: user.storeId,
                code: body.code,
                endDate: {
                    gte: new Date().toISOString()
                }
            }
        })

        if (exist.length > 0) {
            throw new BadRequestException('Tồn tại 1 mã giảm giá còn hiệu lực với mã code đó')
        }

        const {
            initQuantity,
            maximum,
            percent,
            title,
            type,
            category,
            code,
            description,
            priceMin,
            status,
            totalMin,
            endDate,
            startDate
        } = body

        const createdVoucher = await this.prisma.$transaction(async (tx) => {
            var createdPriceCondition, createdCategoryCondition
            if (totalMin || priceMin) {
                createdPriceCondition = await tx.priceConditionVoucher.create({
                    data: {
                        id: uuidv4(),
                        totalMin,
                        priceMin,
                        createdAt: new Date().toISOString(),
                        createdBy: user.userId
                    }
                })
            }

            if (category) {
                createdCategoryCondition = await tx.categoryConditionVoucher.create({
                    data: {
                        id: uuidv4(),
                        categoryShortName: category,
                        createdAt: new Date().toISOString(),
                        createdBy: user.userId
                    }
                })
            }

            const createdVoucher = await tx.voucher.create({
                data: {
                    id: uuidv4(),
                    code,
                    initQuantity,
                    currentQuantity: initQuantity,
                    startDate,
                    endDate,
                    status,
                    title,
                    type,
                    categoryConditionId: createdCategoryCondition
                        ? createdCategoryCondition.id
                        : undefined,
                    priceConditionId: createdPriceCondition ? createdPriceCondition.id : undefined,
                    description,
                    maximum,
                    percent,
                    storeId: user.storeId,
                    createdBy: user.userId,
                    createdAt: new Date().toISOString()
                }
            })

            return createdVoucher
        })

        return {
            msg: 'ok',
            result: createdVoucher
        }
    }

    async updateVoucher(
        user: CurrentStoreType,
        voucherId: string,
        body: UpdateVoucherDTO
    ): Promise<Return> {
        try {
            const {
                initQuantity,
                maximum,
                percent,
                status,
                title,
                category,
                code,
                description,
                endDate,
                priceMin,
                startDate,
                totalMin
            } = body
            const voucherExist = await this.prisma.voucher.findUnique({
                where: {
                    id: voucherId
                },
                include: {
                    CategoryConditionVoucher: {
                        select: {
                            categoryShortName: true
                        }
                    },
                    PriceConditionVoucher: true
                }
            })

            if (!voucherExist) {
                throw new NotFoundException('Mã giảm giá không tồn tại')
            }

            if (voucherExist.currentQuantity !== voucherExist.initQuantity) {
                throw new BadRequestException('Không thể cập nhật mã giảm giá đã sử dụng')
            }
            await this.prisma.$transaction(async (tx) => {
                let voucher_update = {
                    code,
                    title,
                    maximum,
                    initQuantity,
                    percent,
                    status,
                    description,
                    endDate,
                    startDate,
                    updatedAt: new Date(),
                    updatedBy: user.userId
                }
                let arr = []

                if (category) {
                    if (
                        voucherExist.categoryConditionId &&
                        voucherExist.CategoryConditionVoucher.categoryShortName !== category
                    ) {
                        arr.push(
                            tx.categoryConditionVoucher.update({
                                where: {
                                    id: voucherExist.categoryConditionId
                                },
                                data: {
                                    categoryShortName: category,
                                    updatedAt: new Date(),
                                    updatedBy: user.userId
                                }
                            })
                        )
                    } else {
                        let conditionalCategoryId = uuidv4()
                        await tx.categoryConditionVoucher.create({
                            data: {
                                id: conditionalCategoryId,
                                categoryShortName: category,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                                createdBy: user.userId
                            }
                        })
                        voucher_update['categoryConditionId'] = conditionalCategoryId
                    }
                } else {
                    if (voucherExist.categoryConditionId) {
                        arr.push(
                            tx.categoryConditionVoucher.delete({
                                where: { id: voucherExist.categoryConditionId }
                            })
                        )
                        voucher_update['categoryConditionId'] = null
                    }
                }

                if (priceMin || totalMin) {
                    if (voucherExist.priceConditionId) {
                        arr.push(
                            tx.priceConditionVoucher.update({
                                where: {
                                    id: voucherExist.priceConditionId
                                },
                                data: {
                                    priceMin,
                                    totalMin,
                                    updatedAt: new Date(),
                                    updatedBy: user.userId
                                }
                            })
                        )
                    } else {
                        let priceConditionId = uuidv4()
                        await tx.priceConditionVoucher.create({
                            data: {
                                id: priceConditionId,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                                createdBy: user.userId,
                                updatedBy: user.userId,
                                priceMin,
                                totalMin
                            }
                        })
                        voucher_update['priceConditionId'] = priceConditionId
                    }
                } else {
                    if (voucherExist.priceConditionId) {
                        arr.push(
                            tx.priceConditionVoucher.delete({
                                where: { id: voucherExist.priceConditionId }
                            })
                        )
                        voucher_update['priceConditionId'] = null
                    }
                }
                await tx.voucher.update({
                    where: {
                        id: voucherExist.id,
                        storeId: user.storeId
                    },
                    data: voucher_update
                })
                await Promise.all(arr)
            })

            return {
                msg: 'ok',
                result: undefined
            }
        } catch (err) {
            console.log('error', err)
            throw new HttpException(err?.message, err.status)
        }
    }

    async getDetail(user: CurrentStoreType, voucherId: string): Promise<Return> {
        const voucherExist = await this.prisma.voucher.findUnique({
            where: {
                id: voucherId,
                storeId: user.storeId
            },
            include: {
                CategoryConditionVoucher: true,
                PriceConditionVoucher: true
            }
        })

        if (!voucherExist) {
            throw new NotFoundException('Mã giảm giá không tồn tại')
        }

        return {
            msg: 'ok',
            result: voucherExist
        }
    }

    async getAllVoucher(user: CurrentStoreType, query: VoucherQueryDTO): Promise<Return> {
        const { storeId } = user
        let { endDate, limit, page, startDate, status, search_key, createdAt } = query

        const take = limit || this.configService.get('app.limit_default')
        const page_tmp = page || 1
        const skip = (page_tmp - 1) * take

        status = [Status.ACTIVE, Status.BLOCK].includes(status as Status) ? status : undefined

        let where: Prisma.VoucherWhereInput = {
            storeId,
            status,
            startDate: {
                gte: startDate
            },
            endDate: {
                lte: endDate
            }
        }

        let search_param: Prisma.StringNullableFilter = {
            contains: search_key
        }

        let search: Prisma.VoucherWhereInput = {
            OR: [
                {
                    ...where,
                    id: search_param
                },
                {
                    ...where,
                    code: search_param
                },
                { ...where, title: search_param },
                { ...where, description: search_param }
            ]
        }

        let [count, vouchers] = await Promise.all([
            this.prisma.voucher.count({
                where: search
            }),
            this.prisma.voucher.findMany({
                where: search,
                orderBy: {
                    createdAt: 'desc'
                },
                include: {
                    CategoryConditionVoucher: true,
                    PriceConditionVoucher: true
                },
                take,
                skip
            })
        ])

        vouchers = await Promise.all(
            vouchers.map(async (voucher) => {
                let hashValue = hash('voucher', voucher.id)
                let fromCache = await this.cacheManager.get<string>(hashValue)
                if (fromCache) {
                    let { quantity } = JSON.parse(fromCache) as { quantity: number }
                    voucher.currentQuantity = quantity
                }
                return voucher
            })
        )

        return {
            msg: 'ok',
            result: {
                data: vouchers,
                query: {
                    ...query,
                    page: page_tmp,
                    page_size: Math.ceil(count / take)
                }
            }
        }
    }

    async voucherAnalytics(user: CurrentStoreType): Promise<Return> {
        const { storeId } = user
        const [all, active, block] = await Promise.all([
            this.prisma.voucher.count({
                where: {
                    storeId
                }
            }),
            this.prisma.voucher.count({
                where: {
                    storeId,
                    status: 'ACTIVE'
                }
            }),
            this.prisma.voucher.count({
                where: {
                    storeId,
                    status: 'BLOCK'
                }
            })
        ])
        return {
            msg: 'ok',
            result: {
                all,
                active,
                block
            }
        }
    }

    async getUserVoucherByStore(user: CurrentUserType, storeId: string): Promise<Return> {
        const vouchersValid = await this.prisma.voucher.findMany({
            where: {
                storeId,
                status: Status.ACTIVE,
                currentQuantity: {
                    gt: 0
                },
                type: VoucherType.store,
                endDate: {
                    gt: addMinutes(new Date(), 1)
                }
            },
            include: {
                CategoryConditionVoucher: true,
                PriceConditionVoucher: true
            }
        })

        const result = await Promise.all(
            vouchersValid.map<Promise<(typeof vouchersValid)[number]>>(async (e) => {
                let hashValue = hash('voucher', e.id)
                let fromCache = await this.cacheManager.get<string>(hashValue)
                if (fromCache) {
                    let { quantity } = JSON.parse(fromCache) as { quantity: number }
                    return {
                        ...e,
                        currentQuantity: quantity
                    }
                }
                return e
            })
        )

        return {
            msg: 'ok',
            result: result
        }
    }

    // async getUserVoucherByGlobal(user: CurrentUserType): Promise<Return> {
    //     const userVouchers = await this.prisma.userVoucher.findMany({
    //         where: {
    //             userId: user.id
    //         }
    //     })

    //     const vouchersValid = await Promise.all(
    //         userVouchers.map((voucher) =>
    //             this.prisma.voucher.findUnique({
    //                 where: {
    //                     id: voucher.voucherId,
    //                     status: Status.ACTIVE,
    //                     currentQuantity: {
    //                         gte: 1
    //                     },
    //                     type: VoucherType.global
    //                 },
    //                 include: {
    //                     CategoryConditionVoucher: true,
    //                     PriceConditionVoucher: true
    //                 }
    //             })
    //         )
    //     )

    //     return {
    //         msg: 'ok',
    //         result: vouchersValid
    //     }
    // }

    async searchVoucherByCode(body: SearchCodeDTO): Promise<Return> {
        try {
            const { storesID, code } = body
            if (!storesID?.length || !body.code) {
                return {
                    msg: 'ok',
                    result: []
                }
            }
            let vouchers = await this.prisma.voucher.findMany({
                where: {
                    storeId: {
                        in: storesID
                    },
                    status: Status.ACTIVE,
                    type: Status.HIDDEN,
                    endDate: {
                        gt: add(addHours(new Date(), 7), { seconds: 30 })
                    },
                    code
                }
            })

            if (!vouchers.length) {
                return {
                    msg: 'ok',
                    result: []
                }
            }

            vouchers = await Promise.all(
                vouchers.map(async (voucher) => {
                    let hashValue = hash('voucher', voucher.id)
                    let fromCache = await this.cacheManager.get<string>(hashValue)
                    if (fromCache) {
                        let { quantity } = JSON.parse(fromCache) as { quantity: number }
                        voucher.currentQuantity = quantity
                    }
                    return voucher
                })
            )

            return {
                msg: 'ok',
                result: vouchers
            }
        } catch (err) {
            throw new InternalServerErrorException('Lỗi BE')
        }
    }

    async emitUpdateQuantityVoucherToSocket(voucherId: string, storeId: string, quantity: number) {
        console.log('emit quantity voucher')
        await this.cacheManager.set(
            hash('voucher', voucherId),
            JSON.stringify({ quantity, times: 3 })
        )
        this.socketClient.emit(update_voucher_whenCreatingOrder, {
            voucherId,
            storeId,
            quantity
        })
    }

    async rollbackCreateOrderFail(actionId: string, productActionId: string) {
        this.productClient.emit(rollbackUpdateQuantityProducts, { actionId, productActionId })
    }

    async updateVoucherWhenCreatingOrder(payload: CreateOrderPayload<'update_voucher'>) {
        let map = new Map<
            string,
            { voucherId: string; quantity: number; storeId: string; count: number }
        >()
        try {
            payload.payload.vouchers.forEach((voucher) => {
                let { id, storeId } = voucher
                let instance = map.get(id)
                if (instance) {
                    map.set(id, { ...instance, count: instance.count + 1 })
                } else {
                    map.set(id, { count: 1, quantity: 0, storeId, voucherId: id })
                }
            })
            const result = await Promise.all(
                [...map.values()].map(async ({ voucherId }) => {
                    if (!voucherId) {
                        return
                    }
                    let hashValue = hash('voucher', voucherId)
                    let fromCache = await this.cacheManager.get<string>(hashValue)
                    if (fromCache) {
                        let { quantity: quantityFromCache } = JSON.parse(fromCache) as {
                            quantity: number
                            times: number
                        }
                        if (quantityFromCache == 0) {
                            throw new Error('Voucher đã hết lượt sử dụng')
                        }
                        let instance = map.get(voucherId)
                        if (instance) {
                            map.set(voucherId, {
                                ...instance,
                                quantity: quantityFromCache - map.get(voucherId).count
                            })
                        }
                    } else {
                        const voucherExist = await this.prisma.voucher.findUnique({
                            where: {
                                id: voucherId,
                                status: Status.ACTIVE,
                                endDate: {
                                    gte: new Date()
                                }
                            },
                            select: {
                                currentQuantity: true
                            }
                        })
                        if (!voucherExist) {
                            throw new Error('Voucher không tồn tại')
                        }
                        if (voucherExist.currentQuantity == 0) {
                            throw new Error('Voucher đã hết lượt sử dụng')
                        }
                        let fromCache = await this.cacheManager.get<string>(hashValue)
                        if (fromCache) {
                            let { quantity: quantityFromCache } = JSON.parse(fromCache) as {
                                quantity: number
                                times: number
                            }
                            if (!quantityFromCache) {
                                throw new Error('Voucher đã hết lượt sử dụng')
                            }
                            let instance = map.get(voucherId)
                            if (instance) {
                                map.set(voucherId, {
                                    ...instance,
                                    quantity: quantityFromCache - map.get(voucherId).count
                                })
                            }
                        } else {
                            let instance = map.get(voucherId)
                            if (instance) {
                                map.set(voucherId, {
                                    ...instance,
                                    quantity:
                                        voucherExist.currentQuantity - map.get(voucherId).count
                                })
                            }
                        }
                    }
                    return this.cacheManager.set(
                        hashValue,
                        JSON.stringify({ quantity: map.get(voucherId).quantity, times: 3 })
                    )
                })
            )
            if (result) {
                console.log(
                    ':::::::::Success: Cập nhật vouher thành công ==> emit sự kiện commit tới product:::::::::::',
                    format(new Date(), 'hh:mm:ss:SSS dd/MM')
                )
                emit_update_status_of_order(this.socketClient, {
                    action: true,
                    id: payload.actionId,
                    msg: 'Đặt hàng thành công',
                    result: null
                })
                commit_create_order_success([this.orderClient, this.productClient], payload as any)
                console.log('::::::::::map::::::::::::', JSON.stringify([...map.values()]))
                map.forEach(({ quantity, storeId, voucherId }) => {
                    emit_update_quantity_of_voucher(this.socketClient, {
                        quantity,
                        storeId,
                        voucherId
                    })
                })
                await this.voucherBackgroundQueue.add(
                    BackgroundAction.createCronJobVoucherToUpdateQuanttiy,
                    [...map.values()].reduce((acum, e) => {
                        if (e) {
                            acum.push(e.voucherId)
                        }
                        return acum
                    }, [])
                )
            }
        } catch (err) {
            console.log(
                '*********Fail: Cập nhật voucher thất bại ==> Emit rollback tới product************',
                err
            )
            emit_update_status_of_order(this.socketClient, {
                action: false,
                id: payload.actionId,
                msg: err?.message,
                result: null
            })
            emit_roll_back_order([this.orderClient, this.productClient], payload as any)
            await this.voucherBackgroundQueue.add(
                BackgroundAction.resetValueVoucherWHenUpdateProductFail,
                payload.payload.vouchers.map((e) => e.id),
                {
                    attempts: 3,
                    removeOnComplete: true
                }
            )
        }
    }

    async updateVoucherWhenCancelOrder(payload: {
        storeId: string
        voucherIds: string[]
    }): Promise<MessageReturn> {
        let { storeId, voucherIds } = payload

        try {
            await this.prisma.$transaction(async (tx) => {
                try {
                    voucherIds.forEach(async (voucherId) => {
                        let hashValue = hash('voucher', voucherId)
                        let fromCache = await this.cacheManager.get<string>(hashValue)

                        if (fromCache) {
                            let { quantity } = JSON.parse(fromCache) as {
                                quantity: number
                                times: number
                            }
                            await this.emitUpdateQuantityVoucherToSocket(
                                voucherId,
                                storeId,
                                quantity + 1
                            )
                        } else {
                            const voucherExist = await tx.voucher.findUnique({
                                where: {
                                    id: voucherId
                                }
                            })

                            if (!voucherExist) {
                                throw new Error('Voucher không tồn tại')
                            }

                            await tx.voucher.update({
                                where: {
                                    id: voucherId
                                },
                                data: {
                                    currentQuantity: {
                                        increment: 1
                                    }
                                }
                            })
                        }
                    })
                } catch (err) {
                    throw new Error('Lỗi cập nhật voucher')
                }
            })
            return {
                msg: 'ok',
                action: true,
                result: null
            }
        } catch (err) {
            return {
                msg: err?.message || 'Lỗi cập nhật số lượng voucher',
                action: false,
                result: null
            }
        }
    }

    async rollbackUpdateVoucherWhenCancelOrdere(payload: {
        storeId: string
        voucherIds: string[]
    }) {
        let { storeId, voucherIds } = payload
        console.log('rollback voucher')
        let rollback = async (voucherId: string) => {
            let hashValue = hash('voucher', voucherId)
            let fromCache = await this.cacheManager.get<string>(hashValue)

            if (fromCache) {
                let { quantity } = JSON.parse(fromCache) as { quantity: number }
                await this.emitUpdateQuantityVoucherToSocket(voucherId, storeId, quantity - 1)
            }
            return {
                msg: 'ok',
                action: true,
                result: null
            }
        }

        try {
            await Promise.all(voucherIds.map((voucherId) => rollback(voucherId)))
        } catch (err) {
            console.log('error', err)
        }
    }

    async getGlobalVoucher(query: QueryGlobalVoucherDTO) {
        let { end_date, search_key, limit, page, start_date, status } = query

        let pre_page = page
        status = [Status.ACTIVE, Status.BLOCK].includes(status as any) ? status : undefined

        const take = limit || this.configService.get<number>('app.limit')
        page = (page || 1) - 1
        const skip = page * limit

        const general_user_where: Prisma.VoucherWhereInput = {
            type: VoucherType.global,
            createdAt: {
                gte: start_date,
                lte: end_date
            },
            status
        }

        const where: Prisma.VoucherWhereInput = {
            OR: [
                {
                    id: {
                        contains: search_key
                    },
                    ...general_user_where
                },
                {
                    title: {
                        contains: search_key
                    },
                    ...general_user_where
                },
                {
                    description: {
                        contains: search_key
                    },
                    ...general_user_where
                }
            ]
        }

        let [vouchers, count] = await Promise.all([
            this.prisma.voucher.findMany({
                where,
                take,
                skip
            }),
            this.prisma.voucher.count({ where })
        ])

        vouchers = await Promise.all(
            vouchers.map(async (voucher) => {
                let hashValue = hash('voucher', voucher.id)
                let fromCache = await this.cacheManager.get<string>(hashValue)
                if (fromCache) {
                    let { quantity } = JSON.parse(fromCache) as { quantity: number }
                    voucher.currentQuantity = quantity
                }
                return voucher
            })
        )

        return {
            msg: 'ok',
            result: {
                data: vouchers,
                query: {
                    ...query,
                    page: pre_page,
                    page_size: Math.ceil(count / limit)
                }
            }
        }
    }

    async getGlobalVoucherForUser(): Promise<Return> {
        const vouchers = await this.prisma.voucher.findMany({
            where: {
                type: VoucherType.global,
                currentQuantity: {
                    gt: 0
                },
                status: 'ACTIVE',
                endDate: {
                    gt: new Date()
                },
                startDate: {
                    lte: new Date()
                }
            },
            omit: {
                updatedAt: true,
                updatedBy: true,
                createdAt: true,
                createdBy: true,
                startDate: true,
                endDate: true
            }
        })
        return {
            msg: 'ok',
            result: vouchers
        }
    }

    async conditionalCategoryOfVoucher(conditionalCategoryId: string): Promise<Return> {
        const category = await this.prisma.categoryConditionVoucher.findUnique({
            where: {
                id: conditionalCategoryId
            },
            select: {
                categoryShortName: true
            }
        })

        return {
            msg: 'ok',
            result: category.categoryShortName
        }
    }

    async conditionalPriceOfVoucher(conditionalPriceId: string): Promise<Return> {
        const price = await this.prisma.priceConditionVoucher.findUnique({
            where: {
                id: conditionalPriceId
            },
            omit: {
                createdAt: true,
                createdBy: true,
                updatedAt: true,
                updatedBy: true,
                id: true
            }
        })

        return {
            msg: 'ok',
            result: price
        }
    }
}
