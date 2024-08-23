import { instance, OBJECT } from 'src/constants/role'
import { Store, User } from './auth.type'

export type AppContext = {
    store: Store | undefined
    setStore: React.Dispatch<React.SetStateAction<Store | undefined>>
    profile: User | undefined
    setProfile: React.Dispatch<React.SetStateAction<User | undefined>>
    permission: Partial<Record<instance, string[]>> | undefined
    setPermission: React.Dispatch<React.SetStateAction<Partial<Record<instance, string[]>> | undefined>>
    who: OBJECT | undefined
    setWho: React.Dispatch<React.SetStateAction<OBJECT | undefined>>
    isCan: Partial<Record<instance, Record<string, boolean>>>
    firstLogin: boolean
    setFirstLogin: React.Dispatch<React.SetStateAction<boolean>>
    setIsCan: React.Dispatch<React.SetStateAction<Partial<Record<instance, Record<string, boolean>>>>>
}
