import { OrderStatus } from 'src/constants/store.constants'
import { Return } from 'src/types/return.type'
import { StoreDetail, StoreQuery, Stores } from 'src/types/store.type'
import { http } from './http'

export const store_api = {
    getStores: (params: StoreQuery) => () => {
        return http.get<Stores>('/store/store/all-store', { params })
    },
    getDetail: (storeId: string) => () => {
        return http.get<StoreDetail>(`/store/store/admin/${storeId}`)
    },
    updateStatusOfStore: (storeId: string) => (body: { status: OrderStatus }) => {
        return http.put(`/store/store/admin/${storeId}`, body)
    },
    analyticStore: (type: string) => () => {
        return http.get<Return<{ data: { total: number; date: Date }[]; total: number }>>(
            `/store/store/analytic-store/${type}`
        )
    }
}
