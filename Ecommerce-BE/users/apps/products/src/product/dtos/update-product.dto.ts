/* eslint-disable prettier/prettier */
import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator'

export class UpdateProductDTO {
    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    name?: string

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    category?: string

    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    priceBefore?: number

    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    priceAfter?: number

    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    initQuantity?: number

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    description?: string

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    status?: string

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    urls: string[]
}

export type UpdateProductType = InstanceType<typeof UpdateProductDTO>
