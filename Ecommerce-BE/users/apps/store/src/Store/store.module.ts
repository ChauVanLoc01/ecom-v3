import { ConfigModule } from '@app/common'
import { PrismaServiceStore } from '@app/common/prisma/store_prisma.service'
import { Module } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { MulterModule } from '@nestjs/platform-express'
import { StoreController } from './store.controller'
import { StoreService } from './store.service'

@Module({
    imports: [MulterModule, ConfigModule],
    controllers: [StoreController],
    providers: [JwtService, StoreService, PrismaServiceStore]
})
export class StoreModule {}
