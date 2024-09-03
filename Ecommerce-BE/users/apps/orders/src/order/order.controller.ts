import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common'
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices'
import { ApiBearerAuth } from '@nestjs/swagger'
import {
    checkRated,
    commit_order,
    getOrderByRating,
    getProductOderByOrderId,
    processStepOneToCreatOrder,
    processStepTwoToCreateOrder,
    roll_back_order,
    updateRatedStore
} from 'common/constants/event.constant'
import { CurrentUser } from 'common/decorators/current_user.decorator'
import { Public } from 'common/decorators/public.decorator'
import {
    analytic_permission,
    instance,
    Instance,
    order_permission,
    overview_permission,
    Permission,
    product_permission,
    Roles
} from 'common/decorators/roles.decorator'
import { Role } from 'common/enums/role.enum'
import { JwtGuard } from 'common/guards/jwt.guard'
import { CurrentStoreType, CurrentUserType } from 'common/types/current.type'
import { CreateOrderPayload } from 'common/types/order_payload.type'
import { CreateOrderDTO } from '../../../../common/dtos/create_order.dto'
import {
    CreateOrderRefundDTO,
    ReOpenOrderRefundDTO,
    UpdateOrderRefundDTO,
    UpdateStatusOrderFlow
} from '../dtos/order_refund.dto'
import { QueryOrderDTO } from '../dtos/query-order.dto'
import { OrderService } from './order.service'

@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('order')
export class OrderController {
    constructor(private readonly ordersService: OrderService) {}

    @Public()
    @Get('done')
    doneTask() {
        return this.ordersService.doneTask()
    }

    @Roles(Role.USER)
    @Get('user-order')
    getAllOrderByUser(@CurrentUser() user: CurrentUserType, @Query() query: QueryOrderDTO) {
        return this.ordersService.getAllOrderByUser(user, query)
    }

    @Roles(Role.USER)
    @Get('user-order/:orderId')
    getOrderDetailByUser(@CurrentUser() user: CurrentUserType, @Param('orderId') orderId: string) {
        return this.ordersService.getOrderDetailByUser(user, orderId)
    }

    // Store management

    @Roles(Role.STORE_OWNER, Role.EMPLOYEE)
    @Instance(instance.order)
    @Permission(product_permission.detail)
    @Get('store-order')
    getAllOrderByStore(@CurrentUser() user: CurrentStoreType, @Query() query: QueryOrderDTO) {
        return this.ordersService.getAllOrderByStore(user, query)
    }

    @Roles(Role.STORE_OWNER, Role.EMPLOYEE)
    @Instance(instance.analytic)
    @Permission(analytic_permission.view)
    @Get('taking-analytic/:type')
    receiptAnalyticByDate(@CurrentUser() user: CurrentStoreType, @Param('type') type: string) {
        return this.ordersService.receiptAnalyticByDate(user, type)
    }

    @Roles(Role.STORE_OWNER, Role.EMPLOYEE)
    @Instance(instance.analytic)
    @Permission(analytic_permission.view)
    @Get('best-sell')
    bestSell(@CurrentUser() user: CurrentStoreType) {
        return this.ordersService.ratingOfBestSellProduct(user)
    }

    @Roles(Role.STORE_OWNER, Role.EMPLOYEE)
    @Instance(instance.analytic)
    @Permission(analytic_permission.view)
    @Get('customer-rate/:type')
    customerRating(@CurrentUser() user: CurrentStoreType, @Param('type') type: string) {
        return this.ordersService.customerRating(user, type)
    }

    @Roles(Role.STORE_OWNER, Role.EMPLOYEE)
    @Instance(instance.analytic)
    @Permission(analytic_permission.view)
    @Get('order-analytic/:type')
    orderStatistic(@CurrentUser() user: CurrentStoreType, @Param('type') type: string) {
        return this.ordersService.orderStatistic(user, type)
    }

    @Roles(Role.STORE_OWNER, Role.EMPLOYEE)
    @Instance('order')
    @Permission(order_permission.detail)
    @Get('store-order-status/:orderId')
    getOrderStatusByStore(
        @CurrentUser() user: CurrentStoreType,
        @Param('orderId') orderId: string
    ) {
        return this.ordersService.getOrderStatusByStore(user, orderId)
    }

    @Roles(Role.STORE_OWNER, Role.EMPLOYEE)
    @Instance(instance.analytic)
    @Permission(analytic_permission.view)
    @Get('best-sell')
    ratingOfBestSellProduct(@CurrentUser() user: CurrentStoreType) {
        return this.ordersService.ratingOfBestSellProduct(user)
    }

    @Roles(Role.EMPLOYEE, Role.STORE_OWNER)
    @Instance('order')
    @Permission(order_permission.detail)
    @Get('store-order/:orderId')
    getOrderDetailByStore(
        @CurrentUser() user: CurrentStoreType,
        @Param('orderId') orderId: string
    ) {
        return this.ordersService.getOrderDetailByStore(user, orderId)
    }

    @Roles(Role.EMPLOYEE, Role.STORE_OWNER)
    @Instance('order')
    @Permission(product_permission.detail)
    @Get('store-order-analytics')
    analyticOrderStore(@CurrentUser() user: CurrentStoreType) {
        return this.ordersService.analyticOrderStore(user)
    }

    // User Order
    @Roles(Role.USER)
    @Post('user-order')
    createOrder(@CurrentUser() user: CurrentUserType, @Body() body: CreateOrderDTO) {
        return this.ordersService.createOrder(user, body)
    }

    @Public()
    @EventPattern(processStepOneToCreatOrder)
    checkCache(@Payload() payload: CreateOrderPayload<'check_cache'>) {
        return this.ordersService.checkCache(payload.userId, payload.payload)
    }

    @Public()
    @EventPattern(processStepTwoToCreateOrder)
    processOrder(@Payload() data: CreateOrderPayload<'process_order'>) {
        return this.ordersService.processOrder(data.userId, data.payload)
    }

    @Public()
    @EventPattern(roll_back_order)
    rollbackOrder(@Payload() payload: CreateOrderPayload<'roll_back_order'>) {
        return this.ordersService.rollbackOrder(payload)
    }

    @Public()
    @EventPattern(commit_order)
    commitOrder(@Payload() payload: CreateOrderPayload<'commit_success'>) {
        return this.ordersService.commitOrder(payload)
    }

    @Roles(Role.USER, Role.EMPLOYEE, Role.STORE_OWNER)
    @Instance(instance.order)
    @Permission(order_permission.update)
    @Put(':orderId/status')
    updateStatusOfOrderFlow(
        @CurrentUser() user: CurrentUserType | CurrentStoreType,
        @Param('orderId') orderId: string,
        @Body() body: UpdateStatusOrderFlow
    ) {
        return this.ordersService.updateStatusOfOrderFlow(user, orderId, body)
    }

    @Roles(Role.USER)
    @Post(':orderId/refund')
    requestRefund(
        @CurrentUser() user: CurrentUserType,
        @Param('orderId') orderId: string,
        @Body() body: CreateOrderRefundDTO
    ) {
        return this.ordersService.requestRefund(user, orderId, body)
    }

    @Roles(Role.USER)
    @Put('user-order/:orderRefundId/refund')
    updateRequestRefund(
        @Param('orderRefundId') orderRefundId: string,
        @Body() body: UpdateOrderRefundDTO
    ) {
        return this.ordersService.updateRequestRefund(orderRefundId, body)
    }

    @Roles(Role.USER)
    @Post('user-order/:orderRefundId/refund/reopen')
    reopenOrderRefund(
        @Param('orderRefundId') orderRefundId: string,
        @Body() body: ReOpenOrderRefundDTO
    ) {
        return this.ordersService.reopenOrderRefund(orderRefundId, body)
    }

    // @Roles(Role.USER)
    // @Post('user-order/:orderId/complain')
    // requestComplain(@Param('orderId') orderId: string) {
    //     return this.
    // }

    // @Public()
    // @MessagePattern(checkVoucherExistInOrder)
    // checkVoucherInVoucher(@Payload() payload: string) {
    //   return this.ordersService.checkVoucherExistInVoucher(payload)
    // }

    @Public()
    @MessagePattern(getOrderByRating)
    getOrderValid(@Payload() payload: { userId: string; orderIds: string[] }) {
        return this.ordersService.orderWithoutRating(payload.userId, payload.orderIds)
    }

    @Public()
    @MessagePattern(getProductOderByOrderId)
    getProductOderByOrderId(@Payload() productId: string) {
        return this.ordersService.getProductOderByOrderId(productId)
    }

    @Public()
    @MessagePattern(checkRated)
    checkRated(@Payload() orderId: string) {
        return this.ordersService.checkRated(orderId)
    }

    @Public()
    @MessagePattern(updateRatedStore)
    updateRatedStore(@Payload() orderId: string) {
        return this.ordersService.updateRatedStore(orderId)
    }

    @Roles(Role.ADMIN)
    @Get('analytic-order/:type')
    analyticOrder(@Param('type') type: string) {
        return this.ordersService.analyticOrder(type)
    }
}
