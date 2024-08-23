import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common'
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices'
import {
    createCronJobToUpdateProductSale,
    refreshProductSale,
    updateProductSaleWhenCreatingOrder
} from 'common/constants/event.constant'
import { CurrentUser } from 'common/decorators/current_user.decorator'
import { Public } from 'common/decorators/public.decorator'
import {
    flashsale_permission,
    instance,
    Instance,
    Permission,
    Roles
} from 'common/decorators/roles.decorator'
import { Role } from 'common/enums/role.enum'
import { JwtGuard } from 'common/guards/jwt.guard'
import { CurrentStoreType } from 'common/types/current.type'
import { CreateProductSalePromotionDTO } from './dtos/create-product-sale.dto'
import { ProductSaleIds } from './dtos/product-sale-ids.dto'
import { ProductSaleQuery } from './dtos/product-sale-query.dto'
import { QuerySalePromotionDTO } from './dtos/query-promotion.dto'
import { CreateSpecialSaleDTO } from './dtos/special-sale.dto'
import { UpdateProductsSalePromotion } from './dtos/update-product-sale.dto'
import { SaleService } from './sale.service'

@UseGuards(JwtGuard)
@Controller('sale-promotion')
export class SaleController {
    constructor(private readonly saleService: SaleService) {}

    @Public()
    @Get('sale-promotion-in-day')
    getSalePromotionsInDay() {
        return this.saleService.getSalePromotionsInDay()
    }

    @Public()
    @Get('product-sale/:salePromotionId/product/:productId')
    getProductSaleDetail(
        @Param('salePromotionId') salePromotionId: string,
        @Param('productId') productId: string
    ) {
        return this.saleService.getProductSaleDetail(salePromotionId, productId)
    }

    @Public()
    @Get('current-sale/:salePromotionId')
    getCurrentSale(@Param('salePromotionId') salePromotionId: string) {
        return this.saleService.getCurrentSale(salePromotionId)
    }

    @Public()
    @Get('products/:salePromotionId')
    getProductListSaleDetail(
        @Param('salePromotionId') salePromotionId: string,
        @Query() query: ProductSaleIds
    ) {
        return this.saleService.getProductListSaleDetail(salePromotionId, query)
    }

    @Public()
    @MessagePattern(updateProductSaleWhenCreatingOrder)
    updateQuantityProductSaleWhenCreatingOrder(
        @Payload() payload: { productPromotionId: string; salePromotionId: string; buy: number }
    ) {
        return this.saleService.updateQuantityProductSaleWhenCreatingOrder(payload)
    }

    @Public()
    @MessagePattern(createCronJobToUpdateProductSale)
    createCronJobToUpdateProductSale(@Payload() payload: string[]) {
        return this.saleService.createCronJobToUpdateProductSale(payload)
    }

    @Public()
    @EventPattern()
    @Public()
    @Get(':salePromotionId/product')
    getAllProduct(
        @Param('salePromotionId') salePromotionId: string,
        @Query() query: ProductSaleQuery
    ) {
        return this.saleService.getAllProduct(salePromotionId, query)
    }

    @Get(':storePromotionId')
    getSalePromotionDetail(@Param('storePromotionId') storePromotionId: string) {
        return this.saleService.getSalePromotionDetail(storePromotionId)
    }

    @Get()
    getSalePromotion(@CurrentUser() user: CurrentStoreType, @Query() query: QuerySalePromotionDTO) {
        return this.saleService.getSalePromotion(user, query)
    }

    @Roles(Role.STORE_OWNER, Role.EMPLOYEE)
    @Instance(instance.flashsale)
    @Permission(flashsale_permission.join)
    @Post()
    addingProduct(
        @CurrentUser() user: CurrentStoreType,
        @Body() body: CreateProductSalePromotionDTO
    ) {
        console.log('adding product ccontroller')
        return this.saleService.addingProduct(user, body)
    }

    @Roles(Role.STORE_OWNER, Role.EMPLOYEE)
    @Instance(instance.flashsale)
    @Permission(flashsale_permission.update)
    @Put()
    updateProduct(
        @CurrentUser() user: CurrentStoreType,
        @Body() body: UpdateProductsSalePromotion
    ) {
        console.log('update product sale')
        return this.saleService.updateProduct(user, body)
    }

    // @Public()
    // @MessagePattern(getProductSaleEvent)
    // getProductSaleEvent(@Payload() productId: string) {
    //     return this.saleService.getProductSaleEvent(productId)
    // }

    @Public()
    @MessagePattern(refreshProductSale)
    refreshProductSale(@Payload() payload: { saleId: string; productIds: string[] }) {
        return this.saleService.refreshProductSale(payload)
    }

    @Roles(Role.ADMIN)
    @Post('special-sale')
    createSpecialSale(@CurrentUser() user: CurrentStoreType, @Body() body: CreateSpecialSaleDTO) {
        return this.saleService.createSpecialSale(user, body)
    }
}
