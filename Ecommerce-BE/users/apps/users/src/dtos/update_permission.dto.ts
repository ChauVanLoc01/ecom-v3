import { Type } from 'class-transformer'
import { IsArray, IsNotEmpty, IsString } from 'class-validator'
import { PermissionEmployeeDTO } from './employee.dto'

export class UpdatePermissionDTO {
    @IsArray()
    @Type(() => PermissionEmployeeDTO)
    @IsNotEmpty()
    actions: PermissionEmployeeDTO[]

    @IsString()
    @IsNotEmpty()
    storeId: string
}
