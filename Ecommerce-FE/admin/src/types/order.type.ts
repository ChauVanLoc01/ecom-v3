import { OrderFlowEnum } from 'src/constants/order.status'
import { Pagination } from './pagination.type'
import { Return } from './return.type'

export type Order = {
    id: string
    userId: string
    storeId: string
    total: number
    discount: number
    pay: number
    note?: string
    status: string
    createdAt: string
    updatedAt?: string
    isRated: boolean
    numberOfRefund: number
    payment: string
}

export type OrderQuery = {
    status?: string
    createdAt?: string
    total?: string
    start_date?: string
    end_date?: string
} & Pagination

export type OrderListReponse = Return<{
    data: Order[]
    query: Omit<OrderQuery, 'page'> & { page: number; page_size: number }
}>

export type OrderRefund = {
    id: string
    orderId: string
    status: string
    title: string
    description: string
    createdAt: Date
    createdBy: string
    updatedAt: null
    updatedBy: null
    ProductOrderRefund: ProductOrderRefund[]
    RefundMaterial: RefundMaterial[]
}

export type ProductOrderRefund = {
    id: string
    orderRefundId: string
    productOrderId: string
    quantity: number
    description: null
}

export type RefundMaterial = {
    id: string
    orderRefundId: string
    url: string
    type: string
    description: null
}

export type ProductOrder = {
    id: string
    productId: string
    quantity: number
    priceBefore?: number
    priceAfter: number
    orderId: string
}

export type OrderFlow = {
    id: string
    status: string
    note: string
    createdBy: string
    createdAt: string
    orderId: string
    orderRefundId?: string
}

export type OrderShipping = {
    id: string
    orderId: string
    name: string
    address: string
    type: string
    createdAt: string
    createdBy: string
    updatedAt?: string
}

export type OrderVoucher = {
    id: string
    orderId: string
    voucherId: string
    createdAt: string
}

export type OrderDetailResponse = Order & {
    OrderFlow: OrderFlow[]
    OrderShipping: OrderShipping[]
    OrderVoucher: OrderVoucher[]
    ProductOrder: ProductOrder[]
    OrderRefund: OrderRefund[]
}

export type UpdateOrderStatus = {
    status: OrderFlowEnum
    note?: string
    orderRefundId?: string
}

export type OrderDetailTable = Pick<ProductOrder, 'productId' | 'quantity' | 'priceBefore' | 'priceAfter'> & {
    name: string
    image: string
}
