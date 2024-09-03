import { PrismaServiceStore } from '@app/common/prisma/store_prisma.service'
import { BullModule } from '@nestjs/bull'
import { Module } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { BackgroundName } from 'common/constants/background-job.constant'
import { VoucherConsummer } from '../worker/voucher.worker'
import { VoucherController } from './voucher.controller'
import { VoucherService } from './voucher.service'

@Module({
    imports: [
        BullModule.registerQueue({
            name: BackgroundName.voucher,
            defaultJobOptions: {
                removeOnComplete: true,
                attempts: 3
            }
        })
    ],
    controllers: [VoucherController],
    providers: [VoucherService, PrismaServiceStore, JwtService, VoucherConsummer]
})
export class VoucherModule {}
