import { Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '../../../../prisma/generated/store'

@Injectable()
export class PrismaServiceStore extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect()
    }
}
