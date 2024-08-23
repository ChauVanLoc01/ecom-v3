import { ApiPropertyOptional } from '@nestjs/swagger'
import { Transform } from 'class-transformer'
import { IsBoolean, IsDateString, IsEnum, IsOptional, IsString } from 'class-validator'
import { GreaterThanDate } from 'common/decorators/greater_than_date.decorator'
import { PaginationDTO } from 'common/decorators/pagination.dto'

export class RatingQueryDTO extends PaginationDTO {
    @ApiPropertyOptional()
    @IsEnum(['asc', 'desc'])
    @IsOptional()
    createdAt?: 'asc' | 'desc'

    @ApiPropertyOptional()
    @Transform(({ value }) => !!+value)
    @IsBoolean()
    @IsOptional()
    reply?: boolean

    @ApiPropertyOptional()
    @IsDateString()
    @IsOptional()
    startDate?: string

    @ApiPropertyOptional()
    @IsDateString()
    @IsOptional()
    @GreaterThanDate('startDate')
    endDate?: string

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    replier?: string
}
