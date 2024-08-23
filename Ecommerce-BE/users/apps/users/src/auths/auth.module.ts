import { ConfigModule, PrismaModule } from '@app/common'
import { BullModule } from '@nestjs/bull'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { PassportModule } from '@nestjs/passport'
import { BackgroundName } from 'common/constants/background-job.constant'
import { QueueName } from 'common/constants/queue.constant'
import { StoreStrategy } from 'common/strategys/store.stategy'
import { LocalUserStrategy } from '../../../../common/strategys/local.stategy'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
    imports: [
        ClientsModule.registerAsync({
            isGlobal: true,
            clients: [
                {
                    name: 'USER_SERVICE',
                    imports: [ConfigModule],
                    useFactory: (configService: ConfigService) => ({
                        transport: Transport.RMQ,
                        options: {
                            urls: [configService.get<string>('rabbitmq.uri')],
                            queue: QueueName.user,
                            queueOptions: {
                                durable: true
                            }
                        }
                    }),
                    inject: [ConfigService]
                }
            ]
        }),
        BullModule.registerQueue({
            name: BackgroundName.mail
        }),
        ConfigModule,
        PrismaModule,
        PassportModule,
        JwtModule
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalUserStrategy, StoreStrategy, JwtService],
    exports: [AuthService]
})
export class AuthModule {}
