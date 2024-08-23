import { ConfigModule } from '@app/common'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { QueueName } from 'common/constants/queue.constant'
import { AuthModule } from '../auths/auth.module'
import { EmployeeController } from './employee.controller'
import { EmployeeService } from './employee.service'

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
        JwtModule,
        AuthModule
    ],
    controllers: [EmployeeController],
    providers: [EmployeeService]
})
export class EmployeeModule {}
