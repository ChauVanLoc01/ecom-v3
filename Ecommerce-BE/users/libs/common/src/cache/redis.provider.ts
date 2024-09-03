import { Provider } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import Redis from 'ioredis'
import { ConfigModule } from '../config/config.module'

export type RedisClient = Redis

export const RedisProvider: Provider = {
    inject: [ConfigModule],
    useFactory: (config: ConfigService): RedisClient => {
        return new Redis({
            host: config.get<string>('bullqueue.host'),
            port: config.get<number>('bullqueue.port')
        })
    },
    provide: 'REDIS_CLIENT'
}
