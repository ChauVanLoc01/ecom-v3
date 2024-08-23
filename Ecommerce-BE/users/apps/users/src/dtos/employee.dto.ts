import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsArray, IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class PermissionEmployeeDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    instance: string

    @ApiProperty()
    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    permissions: string[]
}

export class CreateEmployee {
    @IsString()
    @IsNotEmpty()
    full_name: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    username: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsArray()
    @Type(() => PermissionEmployeeDTO)
    @IsNotEmpty()
    actions: PermissionEmployeeDTO[]
}
