import { Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '../../../../prisma/generated/product'

@Injectable()
export class PrismaServiceProduct extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect()
    }
}
