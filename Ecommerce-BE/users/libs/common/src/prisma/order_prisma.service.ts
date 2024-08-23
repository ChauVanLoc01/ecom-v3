import { Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '../../../../prisma/generated/order'

@Injectable()
export class PrismaServiceOrder extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect()
    }
}
