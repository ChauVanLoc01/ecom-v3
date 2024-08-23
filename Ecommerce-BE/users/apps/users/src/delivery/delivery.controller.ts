import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'common/decorators/current_user.decorator'
import { Roles } from 'common/decorators/roles.decorator'
import { Role } from 'common/enums/role.enum'
import { JwtGuard } from 'common/guards/jwt.guard'
import { CurrentUserType } from 'common/types/current.type'
import { CreateDeliveryDTO } from '../dtos/create_delivery.dto'
import { UpdateDeliveryDTO } from '../dtos/update_delivery.dto'
import { DeliveryService } from './delivery.service'

@Controller('delivery')
@Roles(Role.USER, Role.STORE_OWNER)
@UseGuards(JwtGuard)
export class DeliveryController {
    constructor(private readonly deliveryService: DeliveryService) {}

    @Get()
    getAllDelivery(@CurrentUser() user: CurrentUserType) {
        return this.deliveryService.getAllDelivery(user)
    }

    @Post()
    createDelivery(@CurrentUser() user: CurrentUserType, @Body() body: CreateDeliveryDTO) {
        return this.deliveryService.createDelivery(user, body)
    }

    @Put(':id')
    updateDelivery(
        @CurrentUser() user: CurrentUserType,
        @Param('id') id: string,
        @Body() body: UpdateDeliveryDTO
    ) {
        return this.deliveryService.updateDelivery(user, id, body)
    }

    @Delete(':id')
    deleteDelivery(@CurrentUser() user: CurrentUserType, @Param('id') id: string) {
        return this.deliveryService.deleteDelivery(user, id)
    }
}
