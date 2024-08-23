import { instance } from 'common/decorators/roles.decorator'

export type CurrentUserType = {
    id: string
    role: string
    storeRoleId?: string
    storeRole?: string
}

export type CurrentStoreType = {
    userId: string
    storeId: string
    storeRoleId: string
    role: string
    permission?: Partial<Record<instance, string[]>>
}
