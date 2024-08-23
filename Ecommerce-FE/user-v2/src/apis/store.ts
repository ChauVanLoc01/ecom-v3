import { Return } from 'src/types/return.type'
import { RefreshStore, Store } from 'src/types/store.type'
import { http } from './http'

export const StoreFetching = {
    getStoreDetail: (storeId: string) => {
        return http.get<Return<Store>>(`/store/store/${storeId}`)
    },
    refreshStore: (body: string[]) => {
        return http.post<Return<RefreshStore>>('/store/store/user-store', { storesId: body })
    },
    userViewStore: (body: { userId?: string; storeId: string }) => () => {
        return http.post('/store/store/user-view-store', body)
    },
    isShopMall: (storeId: string) => () => {
        return http.get<boolean>(`store/store/store-mall/${storeId}`)
    },
    getStoreName: (storeId: string) => () => {
        return http.get<{ name: string; tax: string; location: string }>(`store/store/name/${storeId}`)
    }
}
