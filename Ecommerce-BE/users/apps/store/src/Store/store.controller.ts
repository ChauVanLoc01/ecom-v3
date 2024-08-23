import {
    BadRequestException,
    Body,
    Controller,
    FileTypeValidator,
    Get,
    MaxFileSizeValidator,
    Param,
    ParseFilePipe,
    Post,
    Put,
    Query,
    Request,
    UploadedFile,
    UploadedFiles,
    UseGuards,
    UseInterceptors
} from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express'
import { checkStoreExist, getStoreDetail, getStoreExist } from 'common/constants/event.constant'
import { CurrentUser } from 'common/decorators/current_user.decorator'
import { Public } from 'common/decorators/public.decorator'
import { Roles } from 'common/decorators/roles.decorator'
import { Role } from 'common/enums/role.enum'
import { JwtGuard } from 'common/guards/jwt.guard'
import { CurrentStoreType, CurrentUserType } from 'common/types/current.type'
import { AllStoreQueryDTO } from './dtos/all-store.dto'
import { CreateStoreDTO } from './dtos/create-store.dto'
import { StoreByUserDTO } from './dtos/store-by-user.dto'
import { UpdateStatusOfStoreDTO, UpdateStoreDTO } from './dtos/update-store.dto'
import { UserViewStoreDTO } from './dtos/view-store.dto'
import { StoreService } from './store.service'

@UseGuards(JwtGuard)
@Controller('store')
export class StoreController {
    constructor(private readonly storeService: StoreService) {}

    @Public()
    @Post('upload-single-file')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(
        @UploadedFile(
            new ParseFilePipe({
                exceptionFactory(_) {
                    throw new BadRequestException('File phải có kiểu là image/* và tối đa 5MB')
                },
                validators: [
                    new MaxFileSizeValidator({ maxSize: 5000000 }),
                    new FileTypeValidator({ fileType: 'image/*' })
                ],
                fileIsRequired: true
            })
        )
        file: Express.Multer.File,
        @Request() req: Express.Request
    ) {
        return this.storeService.upload(file, req)
    }

    @Public()
    @Post('upload-multiple-file')
    @UseInterceptors(FilesInterceptor('files', 10))
    uploadMultipleFile(
        @UploadedFiles(
            new ParseFilePipe({
                exceptionFactory(_) {
                    throw new BadRequestException('File phải có kiểu là image/* và tối đa 5MB')
                },
                validators: [
                    new MaxFileSizeValidator({ maxSize: 5000000 }),
                    new FileTypeValidator({ fileType: 'image/*' })
                ],
                fileIsRequired: true
            })
        )
        files: Array<Express.Multer.File>,
        @Request() req: Express.Request
    ) {
        return this.storeService.uploadMultipleFile(files, req)
    }

    @UseInterceptors(FileInterceptor('image'))
    @Roles(Role.USER)
    @Post('register')
    registerStore(@CurrentUser() user: CurrentUserType, @Body() body: CreateStoreDTO) {
        return this.storeService.registerStore(user, body)
    }

    @Public()
    @Post('user-view-store')
    userViewStore(@Body() body: UserViewStoreDTO) {
        return this.storeService.viewStore(body)
    }

    @Roles(Role.STORE_OWNER)
    @Get('count-view/:type')
    countUserViewStore(@CurrentUser() store: CurrentStoreType, @Param('type') type: string) {
        return this.storeService.countUserViewStore(store, type)
    }

    @UseInterceptors(FileInterceptor('image'))
    @Roles(Role.STORE_OWNER)
    @Put('update')
    updateStore(
        @CurrentUser() user: CurrentStoreType,
        @Body() body: UpdateStoreDTO,
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new FileTypeValidator({ fileType: 'image/*' }),
                    new MaxFileSizeValidator({ maxSize: 5000000 })
                ],
                exceptionFactory(error) {
                    throw new BadRequestException(
                        'File tải lên phải có kiểu image/* và dung lượng maxmimum 5MB'
                    )
                },
                fileIsRequired: false
            })
        )
        file: Express.Multer.File
    ) {
        return this.storeService.updateStore(user, body, file?.filename)
    }

    @MessagePattern(checkStoreExist)
    @Public()
    checkStoreExist(@Payload() payload: string[]) {
        return this.storeService.checkStoreExist(payload)
    }

    @MessagePattern(getStoreDetail)
    @Public()
    getStoresDetailWithMP(@Payload() payload: string[]) {
        return this.storeService.getStoresDetail(payload)
    }

    @Public()
    @Post('user-store')
    getStoreByUser(@Body() body: StoreByUserDTO) {
        return this.storeService.getStoreByUser(body)
    }

    @Roles(Role.ADMIN)
    @Get('all-store')
    getAllStore(@Query() query: AllStoreQueryDTO) {
        return this.storeService.getAllStore(query)
    }

    @Roles(Role.ADMIN)
    @Get('admin/:storeId')
    getStoreDetailByAdmin(@Param('storeId') storeId: string) {
        return this.storeService.getStoreDetailByAdmin(storeId)
    }

    @Public()
    @Get(':storeId')
    getStoreDetail(@Param('storeId') storeId: string) {
        return this.storeService.getStoreDetail(storeId)
    }

    @Public()
    @MessagePattern(getStoreExist)
    getStoreExist(@Payload() id: string) {
        return this.storeService.getStoreDetail(id)
    }

    @Roles(Role.ADMIN)
    @Put('admin/:storeId')
    updateStatusOfStore(@Param('storeId') storeId: string, @Body() body: UpdateStatusOfStoreDTO) {
        return this.storeService.updateStatusOfStore(storeId, body)
    }

    @Roles(Role.ADMIN)
    @Get('admin/is-there-store/:userId')
    isThereStore(@Param('userId') userId: string) {
        return this.storeService.isThereStore(userId)
    }

    @Roles(Role.USER)
    @Get('store-mall/:storeId')
    checkStoreMall(@Param('storeId') storeId: string) {
        return this.storeService.checkStoreMall(storeId)
    }

    @Roles(Role.USER)
    @Get('name/:id')
    getStoreName(@Param('id') id: string) {
        return this.storeService.getStoreName(id)
    }

    @Roles(Role.ADMIN)
    @Get('analytic-store/:type')
    analyticsStore(@Param('type') type: string) {
        return this.storeService.analyticStore(type)
    }

    @Roles(Role.ADMIN)
    @Get('analytic-rating/:type')
    analyticRating(@Param('type') type: string) {
        return this.storeService.analyticRating(type)
    }
}
