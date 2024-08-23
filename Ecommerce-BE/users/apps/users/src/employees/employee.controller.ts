import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'common/decorators/current_user.decorator'
import {
    employee_permission,
    instance,
    Instance,
    Permission,
    Roles
} from 'common/decorators/roles.decorator'
import { Role } from 'common/enums/role.enum'
import { JwtGuard } from 'common/guards/jwt.guard'
import { CurrentStoreType } from 'common/types/current.type'
import { ChangeStatusEmployee } from '../dtos/change_status_employee.dto'
import { CreateEmployee } from '../dtos/employee.dto'
import { EmployeeQueryDTO } from '../dtos/employee_query.dto'
import { UpdateEmployee } from '../dtos/update_employee.dto'
import { UpdatePermissionDTO } from '../dtos/update_permission.dto'
import { UpdateUserProfileDTO } from '../dtos/update_user_profile.dto'
import { EmployeeService } from './employee.service'

@Controller('employee')
@UseGuards(JwtGuard)
@Instance(instance.employee)
export class EmployeeController {
    constructor(private readonly empService: EmployeeService) {}

    @Roles(Role.STORE_OWNER, Role.EMPLOYEE)
    @Permission(employee_permission.detail)
    @Get('permission/:id')
    getPermissionDetail(@Param('id') id: string) {
        return this.empService.getPermissionDetail(id)
    }

    @Roles(Role.STORE_OWNER, Role.EMPLOYEE)
    @Permission(employee_permission.permission)
    @Put('permission/:id')
    updatePermission(@Param('id') id: string, @Body() body: UpdatePermissionDTO) {
        return this.empService.updatePermission(id, body)
    }

    @Roles(Role.STORE_OWNER, Role.EMPLOYEE)
    @Permission(employee_permission.detail)
    @Get()
    getAllEmployee(@CurrentUser() store: CurrentStoreType, @Query() query: EmployeeQueryDTO) {
        return this.empService.getAll(store, query)
    }

    @Roles(Role.STORE_OWNER)
    @Post('employee-register')
    createNewEmployee(@CurrentUser() user: CurrentStoreType, @Body() body: CreateEmployee) {
        return this.empService.createNewEmployee(user, body)
    }

    @Roles(Role.USER)
    @UseGuards(JwtGuard)
    @Put('employee-profile')
    userUpdateProfile(@CurrentUser() store: CurrentStoreType, @Body() body: UpdateUserProfileDTO) {
        return this.empService.employeeUpdateProfile(store, body)
    }

    @Roles(Role.STORE_OWNER, Role.ADMIN)
    @Get('employee-analytics')
    analyticsEmployee(@CurrentUser() user: CurrentStoreType) {
        return this.empService.analyticsEmployee(user)
    }

    @Roles(Role.ADMIN, Role.STORE_OWNER)
    @Put('update-status')
    updateStatus(@CurrentUser() store: CurrentStoreType, @Body() body: UpdateEmployee) {
        return this.empService.updateStatus(store, body)
    }

    @Roles(Role.STORE_OWNER)
    @UseGuards(JwtGuard)
    @Delete('employee-profile/:employeeId')
    deleteEmployee(@Param('employeeId') employeeId: string, @Body() body: ChangeStatusEmployee) {
        return this.empService.deleteEmployee(employeeId, body)
    }
}
