import { useQuery } from '@tanstack/react-query'
import { createContext, ReactNode, useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'
import { EmployeeApi } from 'src/apis/employee.api'
import { channel, exitEvent, join_room, leave_room } from 'src/constants/event.constants'
import {
    analytic_permission,
    employee_permission,
    flashsale_permission,
    instance,
    IsCan,
    OBJECT,
    order_permission,
    overview_permission,
    product_permission,
    rating_permission,
    store_permission,
    user_permission,
    voucher_permission
} from 'src/constants/role'
import { Store, User } from 'src/types/auth.type'
import { AppContext as AppContextType } from 'src/types/context.type'
import { ls } from 'src/utils/localStorage'

let profileLS = ls.getItem('profile')
let storeLS = ls.getItem('store')
let who = ls.getItem('who')

let profile = profileLS ? (profileLS as User) : undefined
let store = storeLS ? (storeLS as Store) : undefined

const defaultValueContext: AppContextType = {
    profile,
    setProfile: () => null,
    store,
    setStore: () => null,
    permission: undefined,
    setPermission: () => null,
    who: who ? (who as OBJECT) : undefined,
    setWho: () => null,
    isCan: {},
    firstLogin: false,
    setFirstLogin: () => null,
    setIsCan: () => null
}

export const AppContext = createContext<AppContextType>(defaultValueContext)

const ContextWrap = ({ children }: { children: ReactNode }) => {
    const [store, setStore] = useState<Store | undefined>(defaultValueContext.store)
    const [profile, setProfile] = useState<User | undefined>(defaultValueContext.profile)
    const [permission, setPermission] = useState<Partial<Record<instance, string[]>> | undefined>(undefined)
    const [isCan, setIsCan] = useState<IsCan>({})
    const [who, setWho] = useState<OBJECT | undefined>(defaultValueContext.who)
    const [firstLogin, setFirstLogin] = useState<boolean>(false)

    const { current: socket } = useRef(
        io(import.meta.env.VITE_SOCKET_ENPOINT, {
            autoConnect: false
        })
    )

    const { data: action } = useQuery({
        queryKey: ['permission_current_user', profile?.id],
        queryFn: EmployeeApi.getPermissionDetail(profile?.id || ''),
        enabled: who == 'EMPLOYEE' && !!profile?.id,
        select: (result) => result.data,
        staleTime: 1000 * 60
    })

    useEffect(() => {
        if (permission) {
            setIsCan((pre) => {
                Object.keys(permission).forEach((key) => {
                    pre[key as instance] = permission[key as instance]?.reduce((acum, action) => {
                        return {
                            ...acum,
                            [action]: true
                        }
                    }, {})
                })
                return { ...pre }
            })
        }
    }, [permission])

    useEffect(() => {
        switch (who) {
            case 'ADMIN':
                setPermission({
                    overview: [overview_permission.view],
                    store: [store_permission.detail, store_permission.update],
                    user: [user_permission.detail, user_permission.update],
                    voucher: [voucher_permission.create, voucher_permission.detail, voucher_permission.update]
                })
                break
            case 'STORE_OWNER':
                setPermission({
                    analytics: [analytic_permission.view],
                    flashsale: [flashsale_permission.join, flashsale_permission.update],
                    order: [order_permission.detail, order_permission.update],
                    product: [product_permission.detail, product_permission.create, product_permission.update],
                    voucher: [voucher_permission.create, voucher_permission.update],
                    rating: [rating_permission.detail, rating_permission.reply],
                    employee: [
                        employee_permission.detail,
                        employee_permission.create,
                        employee_permission.reset_password,
                        employee_permission.permission
                    ]
                })
                break
            default:
                if (action) {
                    let tmp: typeof permission = {}
                    Object.values(instance).forEach((value) => {
                        if (action[value]) {
                            tmp = {
                                ...tmp,
                                [value]: action[value]
                            }
                        }
                    })
                    setPermission(tmp)
                }
                break
        }
    }, [action, profile])

    useEffect(() => {
        socket.connect()
        return () => {
            socket.disconnect()
        }
    }, [])

    useEffect(() => {
        if (store && profile) {
            console.log('socket')
            socket.on(join_room, (res) => {
                console.log('join_room', res)
            })
            socket.on(channel.store, (res: { id: string }) => {
                if (profile.id === res.id) {
                    window.dispatchEvent(new Event(exitEvent))
                }
            })
            socket.emit(join_room, { type: channel.store, id: store.id })
            return () => {
                socket.off(channel.store)
                socket.emit(leave_room, { type: channel.store, id: store.id })
            }
        }
    }, [store])

    return (
        <AppContext.Provider
            value={{
                profile,
                setProfile,
                store,
                setStore,
                permission,
                setPermission,
                who,
                setWho,
                isCan,
                firstLogin,
                setFirstLogin,
                setIsCan
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default ContextWrap
