import { PrismaServiceStore } from '@app/common/prisma/store_prisma.service'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule'
import { Cache } from 'cache-manager'
import { currentSalePromotion, updateCurrentSalePromotionId } from 'common/constants/event.constant'
import { SalePromotion } from 'common/constants/sale-promotion.constant'
import { Status } from 'common/enums/status.enum'
import { CronJob } from 'cron'
import {
    add,
    eachDayOfInterval,
    eachHourOfInterval,
    endOfDay,
    endOfHour,
    endOfWeek,
    format,
    getDate,
    getMonth,
    setDefaultOptions,
    startOfDay,
    startOfHour,
    startOfWeek,
    sub
} from 'date-fns'
import { vi } from 'date-fns/locale'
import { chunk } from 'lodash'
import { v4 as uuidv4 } from 'uuid'

setDefaultOptions({ locale: vi })

@Injectable()
export class ScheduleService {
    constructor(
        private readonly prisma: PrismaServiceStore,
        private readonly scheduleRegister: SchedulerRegistry,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        @Inject('SOCKET_SERVICE') private readonly socket_client: ClientProxy
    ) {}

    calDate(payload: Date) {
        let start = add(
            startOfWeek(payload, {
                weekStartsOn: 1
            }),
            {
                hours: 7
            }
        )
        let end = endOfWeek(payload, {
            weekStartsOn: 1
        })
        let tmp: Date[] = []
        eachDayOfInterval({ start, end }).forEach((day) => {
            let dayInMonth = getDate(day)
            let month = getMonth(day) + 1
            if (month === dayInMonth) {
                tmp.push(add(day, { hours: 7 }))
                return
            }
            let hours = eachHourOfInterval({ start: startOfDay(day), end: endOfDay(day) }).map(
                (day) => add(day, { hours: 7 })
            )
            tmp.push(...hours)
        })
        return tmp
    }

    @Cron('1 49 * * * 1', {
        name: 'auto creating sale promotion'
    })
    async autoCreatingSalePromotion() {
        let tmp = this.calDate(new Date())
        chunk(tmp, 24).map((dates, idx) => this.createSalePromotion(uuidv4(), 4 * idx, dates))
    }

    async createSalePromotion(name: string, second: number, data: Date[]) {
        const cron_job = new CronJob(`${second} 50 * * * *`, async () => {
            await Promise.all(
                data.map((date) => {
                    let formatDate = format(sub(date, { hours: 7 }), 'HH:mm dd-MM-yyyy')
                    let title = `Daily Sale ${formatDate}`
                    let type = SalePromotion.NORMAL
                    let description = `Chương trình giảm giá hằng ngày kích cầu mua sắm ${formatDate}`
                    let dayInMonth = getDate(date)
                    let month = getMonth(date) + 1
                    if (month === dayInMonth) {
                        title = `Siêu sale hằng tháng ${formatDate}`
                        description = `Đại tiệc siêu sale hằng tháng ${formatDate}`
                        type = SalePromotion.SPEACIAL
                    }
                    return this.prisma.salePromotion.create({
                        data: {
                            id: uuidv4(),
                            title,
                            description,
                            startDate: date,
                            endDate: add(date, { hours: 1 }),
                            createdAt: new Date(),
                            status: Status.BLOCK,
                            type,
                            createdBy: 'system'
                        }
                    })
                })
            )
        })

        this.scheduleRegister.addCronJob(name, cron_job)

        cron_job.start()

        console.log('ok')
    }

    @Cron(CronExpression.EVERY_HOUR)
    async setCurrentSalePromotion() {
        let currentDate = add(startOfHour(new Date()), { hours: 7 }).toISOString()
        let process = async (tx: any) => {
            const current = await tx.salePromotion.findFirst({
                where: {
                    startDate: currentDate
                },
                select: {
                    id: true
                }
            })

            if (!current) {
                throw new Error('Event hiện tại không tồn tại')
            }

            const result = await Promise.all([
                this.cacheManager.set(currentSalePromotion, current.id),
                tx.salePromotion.update({
                    where: {
                        id: current.id
                    },
                    data: {
                        status: Status.ACTIVE,
                        updatedAt: new Date(),
                        updatedBy: 'system'
                    }
                })
            ])
            if (result) {
                this.socket_client.emit(updateCurrentSalePromotionId, current.id)
            }
        }

        let currentSaleId = await this.cacheManager.get<string>(currentSalePromotion)

        if (currentSaleId) {
            await this.prisma.$transaction(async (tx) => {
                await tx.salePromotion.update({
                    where: {
                        id: currentSaleId
                    },
                    data: {
                        status: Status.BLOCK,
                        updatedAt: new Date(),
                        updatedBy: 'system'
                    }
                })
                await process(tx)
            })
            return
        }
        await this.prisma.$transaction(async (tx) => {
            let preDate = add(startOfHour(new Date()), { hours: 6 }).toISOString()
            let preLastDate = add(endOfHour(new Date()), { hours: 7 }).toISOString()
            const preEvent = await tx.salePromotion.findFirst({
                where: {
                    startDate: {
                        gte: preDate
                    },
                    endDate: {
                        lte: preLastDate
                    }
                },
                select: {
                    id: true
                }
            })
            if (preEvent) {
                await tx.salePromotion.update({
                    where: {
                        id: preEvent.id
                    },
                    data: {
                        status: Status.BLOCK
                    }
                })
            }
            await process(tx)
        })
    }
}
