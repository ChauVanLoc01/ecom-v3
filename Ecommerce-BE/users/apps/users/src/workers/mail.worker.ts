import { MailerService } from '@nestjs-modules/mailer'
import { Process, Processor } from '@nestjs/bull'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject } from '@nestjs/common/decorators'
import { Job } from 'bull'
import { Cache } from 'cache-manager'
import { BackgroundAction, BackgroundName } from 'common/constants/background-job.constant'

export type EmailInfor = {
    to: string
    subject: string
    html: string
}

export type PasswordData = {
    username: string
    new_password: string
}

export type ResetPasswordType = PasswordData & {
    code: number
    email_infor: EmailInfor
}

@Processor(BackgroundName.mail)
export class MailConsummer {
    constructor(
        private readonly mailService: MailerService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) {}

    @Process(BackgroundAction.register)
    async register(job: Job<EmailInfor>) {
        await this.mailService.sendMail(job.data)
    }

    @Process(BackgroundAction.forgetPassword)
    async forgotPassword(job: Job<ResetPasswordType>) {
        try {
            console.log('cache', job)
            const { code, email_infor, ...rest } = job.data
            let result = await this.mailService.sendMail(email_infor)

            if (result) {
                await this.cacheManager.set(
                    `${code}_RESET_PASSWORD`,
                    JSON.stringify(rest),
                    1000 * 30
                )
            }
        } catch (err) {
            console.log('send mail error', err)
        }
    }
}
