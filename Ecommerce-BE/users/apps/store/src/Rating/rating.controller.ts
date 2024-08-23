import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'common/decorators/current_user.decorator'
import { PaginationDTO } from 'common/decorators/pagination.dto'
import { Public } from 'common/decorators/public.decorator'
import {
    instance,
    Instance,
    Permission,
    rating_permission,
    Roles
} from 'common/decorators/roles.decorator'
import { Role } from 'common/enums/role.enum'
import { JwtGuard } from 'common/guards/jwt.guard'
import { CurrentStoreType, CurrentUserType } from 'common/types/current.type'
import { CreateRatingDto } from './dtos/create-rating.dto'
import { RatingQueryDTO } from './dtos/rating-query.dto'
import { CreateReplyRatingDTO } from './dtos/reply-rating.dto'
import { RatingService } from './rating.service'

@UseGuards(JwtGuard)
@Instance(instance.rating)
@Controller('rating')
export class RatingController {
    constructor(private readonly ratingService: RatingService) {}

    @Roles(Role.USER)
    @Post()
    createNewRating(@CurrentUser() user: CurrentUserType, @Body() body: CreateRatingDto) {
        return this.ratingService.createNewRating(user, body)
    }

    @Get('material/:ratingId')
    getMaterialOfRating(@Param('ratingId') ratingId: string) {
        return this.ratingService.getMaterialOfRating(ratingId)
    }

    @Roles(Role.STORE_OWNER, Role.EMPLOYEE)
    @Permission(rating_permission.reply)
    @Post('reply')
    updateRating(@CurrentUser() store: CurrentStoreType, @Body() body: CreateReplyRatingDTO) {
        return this.ratingService.replyRating(store, body)
    }

    @Roles(Role.STORE_OWNER, Role.EMPLOYEE)
    @Permission(rating_permission.detail)
    @Get('store-rating')
    getAllRatingByStore(@CurrentUser() store: CurrentStoreType, @Query() query: RatingQueryDTO) {
        return this.ratingService.getAllRatingByStore(store, query)
    }

    @Roles(Role.STORE_OWNER, Role.EMPLOYEE)
    @Permission(rating_permission.detail)
    @Get('rating-detail/:ratingId/store')
    getDetailRatingByStore(
        @CurrentUser() store: CurrentStoreType,
        @Param('ratingId') ratingId: string
    ) {
        return this.ratingService.getDetailRatingByStore(store, ratingId)
    }

    @Public()
    @Get('product-rating/:productId/store/:storeId')
    getAllRatingByProduct(
        @Param('productId') productId: string,
        @Param('storeId') storeId: string,
        @Query() query: PaginationDTO
    ) {
        return this.ratingService.getAllRatingByProduct(productId, storeId, query)
    }

    @Roles(Role.USER)
    @Get('is-can-create-rating/:productId')
    ratingExist(@CurrentUser() user: CurrentUserType, @Param('productId') productId: string) {
        return this.ratingService.ratingExist(user, productId)
    }

    @Roles(Role.USER)
    @Get('more-rating/:parentRatingId')
    moreRating(@Param('parentRatingId') parentRatingId: string) {
        return this.ratingService.moreRating(parentRatingId)
    }

    @Roles(Role.STORE_OWNER, Role.EMPLOYEE)
    @Instance(instance.rating)
    @Permission(rating_permission.detail)
    @Get('rating-analytics/:storeId')
    ratingAnalytics(@Param('storeId') storeId: string) {
        return this.ratingService.ratingAnalytics(storeId)
    }

    // @Public()
    // @Get(':ratingId')
    // getDetail(@Param('ratingId') ratingId: string) {
    //     return this.ratingService.getDetail(ratingId)
    // }
}
