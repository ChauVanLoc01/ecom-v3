import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '../config/config.module'
import { PrismaServiceOrder } from './order_prisma.service'
import { PrismaServiceProduct } from './product_prisma.service'
import { PrismaServiceStore } from './store_prisma.service'
import { PrismaServiceUser } from './user_prisma.service'

@Global()
@Module({
    imports: [ConfigModule],
    providers: [PrismaServiceUser, PrismaServiceProduct, PrismaServiceOrder, PrismaServiceStore],
    exports: [PrismaServiceUser, PrismaServiceProduct, PrismaServiceStore, PrismaServiceOrder]
})
export class PrismaModule {}
