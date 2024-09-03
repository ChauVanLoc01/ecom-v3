import { ConfigModule } from '@app/common'
import { PrismaServiceStore } from '@app/common/prisma/store_prisma.service'
import { BullModule } from '@nestjs/bull'
import { CacheModule } from '@nestjs/cache-manager'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { ScheduleModule } from '@nestjs/schedule'
import * as redisStore from 'cache-manager-redis-store'
import { QueueName } from 'common/constants/queue.constant'
import { RatingModule } from './Rating/rating.module'
import { SaleModule } from './Sale/sale.module'
import { StoreModule } from './Store/store.module'
import { VoucherModule } from './Voucher/voucher.module'
import { MailerModule } from '@nestjs-modules/mailer'

@Module({
    imports: [
        ClientsModule.registerAsync({
            isGlobal: true,
            clients: [
                {
                    name: 'SOCKET_SERVICE',
                    imports: [ConfigModule],
                    useFactory: (configService: ConfigService) => ({
                        transport: Transport.RMQ,
                        options: {
                            urls: [configService.get<string>('rabbitmq.uri')],
                            queue: QueueName.socket,
                            queueOptions: {
                                durable: true
                            }
                        }
                    }),
                    inject: [ConfigService]
                }
            ]
        }),
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
        ClientsModule.registerAsync({
            isGlobal: true,
            clients: [
                {
                    name: 'ORDER_SERVICE',
                    imports: [ConfigModule],
                    useFactory: (configService: ConfigService) => ({
                        transport: Transport.RMQ,
                        options: {
                            urls: [configService.get<string>('rabbitmq.uri')],
                            queue: QueueName.order,
                            queueOptions: {
                                durable: true
                            }
                        }
                    }),
                    inject: [ConfigService]
                }
            ]
        }),
        ClientsModule.registerAsync({
            isGlobal: true,
            clients: [
                {
                    name: 'PRODUCT_SERVICE',
                    imports: [ConfigModule],
                    useFactory: (configService: ConfigService) => ({
                        transport: Transport.RMQ,
                        options: {
                            urls: [configService.get<string>('rabbitmq.uri')],
                            queue: QueueName.product,
                            queueOptions: {
                                durable: true
                            }
                        }
                    }),
                    inject: [ConfigService]
                }
            ]
        }),
        ClientsModule.registerAsync({
            isGlobal: true,
            clients: [
                {
                    name: 'STORE_SERVICE',
                    imports: [ConfigModule],
                    useFactory: (configService: ConfigService) => ({
                        transport: Transport.RMQ,
                        options: {
                            urls: [configService.get<string>('rabbitmq.uri')],
                            queue: QueueName.store,
                            queueOptions: {
                                durable: true
                            }
                        }
                    }),
                    inject: [ConfigService]
                }
            ]
        }),
        CacheModule.registerAsync({
            isGlobal: true,
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                isGlobal: true,
                store: redisStore,
                host: configService.get<string>('bullqueue.host'),
                port: configService.get<number>('bullqueue.port')
            })
        }),
        ScheduleModule.forRoot(),
        BullModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                redis: {
                    host: configService.get<string>('bullqueue.host'),
                    port: configService.get<number>('bullqueue.port')
                }
            })
        }),
        MailerModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                transport: configService.get<string>('bullqueue.mail_transport'),
                defaults: {
                    from: configService.get<string>('bullqueue.my_mail')
                }
            })
        }),
        ConfigModule,
        StoreModule,
        VoucherModule,
        RatingModule,
        SaleModule
    ],
    controllers: [],
    providers: [PrismaServiceStore]
})
export class StoreMainModule {}
