export type SocketReturn<T> = {
    msg: string
    action: boolean
    result: T
}

export type ProductSocket = {
    storeId: string
    productId: string
    quantity: number
    priceAfter: number
    name: string
    status?: string
}

export type ProductSaleSocket = {
    storeId: string
    productId: string
    productSaleId: string
    quantity: number
    saleId: string
}

export type VoucherSocket = {
    storeId: string
    voucherId: string
    quantity: number
}
