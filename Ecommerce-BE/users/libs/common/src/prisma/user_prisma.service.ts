import { Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '../../../../prisma/generated/user'

@Injectable()
export class PrismaServiceUser extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect()
    }
}
