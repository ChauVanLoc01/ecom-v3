import { Socket } from 'socket.io-client'
import { LoginResponse } from './auth.type'
import { CategoryListResponse } from './category.type'

export type ProductOrderSale = ProductOrder & {
    sale: {
        salePromotionId: string
        productPromotionId: string
        currentQuantity: number
        priceAfter: number
    }
}

export type ProductOrder = {
    productId: string
    storeId: string
    name: string
    image: string
    priceAfter: number
    priceBefore?: number
    buy: number
    currentQuantity: number
    isChecked: boolean
    isExist: boolean
    category: string
    isBlock?: boolean
    original_quantity?: number
}

export type ProductCartSavingToLS = {
    total: number
    stores: Record<
        string,
        {
            store_name: string
            checked: number
            products: [string, ProductOrder | ProductOrderSale][]
        }
    >
}

export type ProductCart = {
    total: number
    stores: Record<
        string,
        {
            store_name: string
            checked: number
            products: Map<string, ProductOrder | ProductOrderSale>
        }
    >
}

export type StoreAndProductsId = {
    storeId: string
    productIds: string[]
}

export type Ids = {
    all_productIds: string[]
    checked_productIds: string[]
    all_storeIds: string[]
    checked_storeIds: string[]
    complexIds: StoreAndProductsId[]
}

export type AppContext = {
    profile?: LoginResponse
    setProfile: React.Dispatch<React.SetStateAction<LoginResponse | undefined>>
    products: ProductCart
    setProducts: React.Dispatch<React.SetStateAction<ProductCart>>
    previousPage: string
    setPreviousPage: React.Dispatch<React.SetStateAction<string>>
    ids?: Ids
    isCanOrder: boolean
    actionId: string
    socket?: Socket<any, any>
    toastIdRef?: string | number
    currentSaleId: string
    setCurrentSaleId: React.Dispatch<React.SetStateAction<string>>
    categories?: CategoryListResponse | undefined
    setToastId: (id: string | number) => void
    addToCart: (storeId: string, store_name: string, payload: ProductOrder) => void
}
