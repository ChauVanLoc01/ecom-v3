import { Body, Controller, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common'
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices'
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger'
import { getEmailStore, sendMail } from 'common/constants/event.constant'
import { CurrentUser } from 'common/decorators/current_user.decorator'
import { Public } from 'common/decorators/public.decorator'
import { Roles } from 'common/decorators/roles.decorator'
import { Role } from 'common/enums/role.enum'
import { JwtGuard } from 'common/guards/jwt.guard'
import { StoreGuard } from 'common/guards/store.guard'
import { CurrentStoreType, CurrentUserType } from 'common/types/current.type'
import { Request } from 'express'
import { LocalUserGuard } from '../../../../common/guards/local.guard'
import { User } from '../../../../prisma/generated/user'
import { ChangePasswordDTO } from '../dtos/change_password.dto'
import { LoginDTO } from '../dtos/login.dto'
import { RegisterDTO } from '../dtos/register.dto'
import { ResetPasswordDTO } from '../dtos/reset_password.dto'
import { ResetPasswordForEmployee } from '../dtos/reset_password_for_employee.dto'
import { SendOtpDTO } from '../dtos/sendOTP.dto'
import { AuthService } from './auth.service'

@ApiTags('authentication')
@Controller('authentication')
export class AuthController {
    constructor(private authService: AuthService) {}

    @ApiResponse({ status: 200 })
    @Roles(Role.USER)
    @UseGuards(LocalUserGuard)
    @Post('user-login')
    userLogin(@CurrentUser() user: CurrentUserType, @Body() _: LoginDTO) {
        return this.authService.userLogin(user)
    }

    @ApiResponse({ status: 201 })
    @Post('user-register')
    userRegister(@Body() registerDTO: RegisterDTO) {
        return this.authService.userRegister(registerDTO)
    }

    @UseGuards(StoreGuard)
    @Post('store-login')
    storeLogin(
        @Req()
        req: Request & { user: { currentStoreType: CurrentStoreType; user: User; store?: any } },
        @Body() _: LoginDTO
    ) {
        return this.authService.storeLogin(req.user)
    }

    @UseGuards(JwtGuard)
    @Roles(Role.STORE_OWNER)
    @Post('employee-register')
    employeeRegister(@CurrentUser() store: CurrentStoreType, @Body() body: RegisterDTO) {
        return this.authService.employeeRegister(store, body)
    }

    @UseGuards(JwtGuard)
    @Roles(Role.ADMIN, Role.STORE_OWNER)
    @Put('employee/reset-password')
    resetPasswordForEmployee(
        @CurrentUser() store: CurrentStoreType,
        @Body() body: ResetPasswordForEmployee
    ) {
        return this.authService.resetPasswordForEmployee(store, body)
    }

    @UseGuards(JwtGuard)
    @ApiBearerAuth()
    @Put('change-password')
    changePassword(@CurrentUser() user: CurrentUserType, @Body() body: ChangePasswordDTO) {
        return this.authService.changePassword(user, body)
    }

    @Post('otp')
    sendOtp(@Body() body: SendOtpDTO) {
        return this.authService.sendOtp(body)
    }

    @Post('reset-password')
    resetPassword(@Body() body: ResetPasswordDTO) {
        return this.authService.resetPassword(body)
    }

    @Public()
    @EventPattern(sendMail)
    sendMail(@Payload() payload: any) {
        this.authService.sendMail(payload)
    }

    @Get('name/:id')
    getUserName(@Param('id') id: string) {
        return this.authService.getUserName(id)
    }

    @Public()
    @MessagePattern(getEmailStore)
    getEmailStore(@Payload() payload: string) {
        return this.authService.getEmailStore(payload)
    }
}
