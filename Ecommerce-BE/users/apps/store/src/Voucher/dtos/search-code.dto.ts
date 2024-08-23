import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class SearchCodeDTO {
    @ApiPropertyOptional()
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    storesID?: string[]

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    code: string
}
