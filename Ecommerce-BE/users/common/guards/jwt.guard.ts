import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    HttpException,
    Injectable
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { PUBLIC_KEY } from 'common/decorators/public.decorator'
import {
    instance,
    INSTANCE_KEY,
    PERMISSION_KEY,
    ROLES_KEY
} from 'common/decorators/roles.decorator'
import { Role } from 'common/enums/role.enum'
import { CurrentStoreType, CurrentUserType } from 'common/types/current.type'
import { Request } from 'express'

@Injectable()
export class JwtGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private reflector: Reflector,
        private readonly configService: ConfigService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const request = context.switchToHttp().getRequest()
            const isPublic = this.reflector.getAllAndOverride<boolean>(PUBLIC_KEY, [
                context.getHandler(),
                context.getClass()
            ])
            if (isPublic) {
                return true
            }
            const token = this.extractTokenFromHeader(request)
            if (!token) {
                throw new ForbiddenException('Token không tồn tại')
            }
            const payload: CurrentUserType | CurrentStoreType = await this.jwtService.verifyAsync(
                token,
                {
                    secret: this.configService.get<string>('app.access_token_secret_key')
                }
            )
            const { role } = payload
            const roles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
                context.getHandler(),
                context.getClass()
            ])
            const instance = this.reflector.getAllAndOverride<instance>(INSTANCE_KEY, [
                context.getHandler(),
                context.getClass()
            ])
            const permission = this.reflector.getAllAndOverride<string>(PERMISSION_KEY, [
                context.getHandler(),
                context.getClass()
            ])
            // console.log('instance', instance)
            // console.log('permission', permission)
            // console.log('me', (payload as CurrentStoreType)?.permission)
            // console.log('roles.includes', roles.includes(role))
            // console.log(
            //     '(payload as CurrentStoreType).permission?.[instance]?.includes(permission)',
            //     (payload as CurrentStoreType).permission?.[instance]?.includes(permission)
            // )
            if (role === Role.USER && roles?.includes(role)) {
                request['user'] = payload
                return true
            }
            if (permission) {
                if (
                    role == Role.EMPLOYEE &&
                    !(payload as CurrentStoreType)?.permission?.[instance]?.includes(permission)
                ) {
                    throw new ForbiddenException('Không có quyền truy cập tài nguyên')
                } else if (
                    [Role.STORE_OWNER, Role.ADMIN].includes(payload.role as any) &&
                    !roles?.includes(role)
                ) {
                    throw new ForbiddenException('Không có quyền truy cập tài nguyên')
                }
            }

            request['user'] = payload
            return true
        } catch (err) {
            console.log('error', err)
            throw new HttpException(err.message, err.status)
        }
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? []
        return type === 'Bearer' ? token : undefined
    }
}
