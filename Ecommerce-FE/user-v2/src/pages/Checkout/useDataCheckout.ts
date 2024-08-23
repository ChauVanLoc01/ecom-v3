import { useMutation, useQuery } from '@tanstack/react-query'
import { cloneDeep, sumBy } from 'lodash'
import { useContext, useEffect, useMemo, useState } from 'react'
import { toast } from 'sonner'
import { OrderFetching } from 'src/apis/order'
import { productFetching } from 'src/apis/product'
import { sale_api } from 'src/apis/sale_promotion.api'
import { channel, join_room, leave_room, updateProductInCart } from 'src/constants/event'
import { product_status } from 'src/constants/product.constants'
import { AppContext } from 'src/contexts/AppContext'
import { SocketReturn, VoucherSocket } from 'src/types/socket.type'
import { VoucherWithCondition } from 'src/types/voucher.type'
import { isProductSale } from 'src/utils/utils.ts'

type UseDataCheckoutProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>
}

const useDataCheckout = ({ setStep }: UseDataCheckoutProps) => {
    const { setToastId, products, setProducts, ids, socket, currentSaleId } = useContext(AppContext)
    const [selectedVoucher, setSelectedVoucher] = useState<Record<string, VoucherWithCondition[]> | undefined>(
        undefined
    )
    const { data: productSaleList, refetch: productSaleRefetch } = useQuery({
        queryKey: ['product_sale_list', ids?.checked_productIds],
        queryFn: ({ signal }) => sale_api.getProductListSale(currentSaleId, ids?.complexIds || [], signal),
        enabled: !!currentSaleId && !!ids?.all_productIds,
        select: (result) => result.data.result,
        staleTime: 1000 * 60 * 2
    })
    const { data: refreshProducts } = useQuery({
        queryKey: ['refresh_product', ids?.all_productIds],
        queryFn: ({ signal }) => {
            return productFetching.refreshProduct({ ids: ids?.complexIds || [], saleId: currentSaleId }, signal)
        },
        staleTime: 1000 * 60,
        select: (result) => result.data.result
    })

    const {
        mutate: orderMutate,
        isPending,
        data: orderDataMutate
    } = useMutation({
        mutationFn: OrderFetching.order,
        onSuccess: () => {
            let toastId = toast.loading('Đơn hàng của bạn đang được xử lý', {
                duration: Infinity
            })
            setToastId(toastId)
            setStep(1)
        }
    })

    const summary = useMemo(() => {
        var summary = {
            total: 0,
            discount: 0,
            pay: 0
        }

        var detail: {
            [storeId: string]: {
                total: number
                discount: number
                pay: number
            }
        } = {}

        let total =
            ids?.checked_storeIds.map((storeId) =>
                sumBy([...products.stores?.[storeId]?.products.values()], (e) => {
                    if (e.isChecked) {
                        if (isProductSale(e)) {
                            return (e.buy - 1) * e.priceAfter + e.priceAfter
                        }
                        return e.buy * e.priceAfter
                    }
                    return 0
                })
            ) || []

        ids?.checked_storeIds.forEach((storeId, idx) => {
            detail = {
                ...detail,
                [storeId]: {
                    discount: 0,
                    pay: 0,
                    total: 0
                }
            }
            let vouchers = selectedVoucher?.[storeId] || []
            let store = products.stores[storeId]
            let productsMap = store.products
            if (vouchers.length) {
                detail[storeId].total = total[idx]
                let remainingMaximum: Record<string, number> = {}
                productsMap.forEach((product) => {
                    vouchers.forEach((voucher) => {
                        remainingMaximum = {
                            ...remainingMaximum,
                            [voucher.id]: voucher?.maximum
                        }
                        let isOk = true
                        let categoryCondition = voucher?.CategoryConditionVoucher
                        let priceCondition = voucher?.PriceConditionVoucher
                        if (product.isChecked) {
                            if (remainingMaximum?.[voucher.id] > 0) {
                                if (
                                    categoryCondition?.categoryShortName &&
                                    product.category !== categoryCondition.categoryShortName
                                ) {
                                    isOk = false
                                }
                                if (priceCondition?.priceMin && product?.priceAfter < priceCondition.priceMin) {
                                    isOk = false
                                }
                                if (priceCondition?.totalMin && total[idx] < priceCondition.totalMin) {
                                    isOk = false
                                }
                            }
                        }
                        if (isOk) {
                            let total_product = 0
                            if (isProductSale(product)) {
                                total_product = (product.buy - 1) * product.priceAfter + product.priceAfter
                            } else {
                                total_product = product.buy * product.priceAfter
                            }
                            let productDiscount = (total_product * voucher.percent) / 100
                            if (productDiscount <= remainingMaximum[voucher.id]) {
                                remainingMaximum[voucher.id] -= productDiscount
                                detail[storeId].discount += productDiscount
                            } else {
                                remainingMaximum[voucher.id] = 0
                                detail[storeId].discount += voucher.maximum - remainingMaximum[voucher.id]
                            }
                        }
                    })
                })
                detail[storeId].pay += detail[storeId].total - detail[storeId].discount
            } else {
                productsMap.forEach((product) => {
                    let tmp = 0
                    if (product.isChecked) {
                        if (isProductSale(product)) {
                            let { sale, buy, priceAfter } = product
                            let remaining_quantity = buy - 1
                            tmp = remaining_quantity * priceAfter + sale.priceAfter
                        } else {
                            let { buy, priceAfter } = product
                            tmp = buy * priceAfter
                        }
                        detail[storeId].total += tmp
                        detail[storeId].pay += tmp
                    }
                })
            }
            summary.total += detail[storeId].total
            summary.discount += detail[storeId].discount
            summary.pay += detail[storeId].pay
        })

        return {
            overview: summary,
            detail
        }
    }, [products, selectedVoucher, ids?.checked_productIds])

    useEffect(() => {
        if (socket && selectedVoucher && Object.values(selectedVoucher).length) {
            socket.on(channel.voucher, (res: SocketReturn<VoucherSocket>) => {
                if (res.action) {
                    let { voucherId, quantity } = res.result
                    setSelectedVoucher((pre) => {
                        Object.keys(pre || {}).forEach((storeId) => {
                            pre?.[storeId].forEach((voucher) => {
                                if (voucher.id === voucherId) {
                                    voucher.currentQuantity = quantity
                                }
                            })
                        })
                        return cloneDeep(pre)
                    })
                }
            })
            Object.values(selectedVoucher || {}).forEach((list) => {
                list.forEach(({ id }) => {
                    socket.emit(join_room, { type: channel.voucher, id })
                })
            })
        }

        return () => {
            if (socket && selectedVoucher) {
                socket.off(channel.voucher)
                Object.values(selectedVoucher).forEach((id) => {
                    socket.emit(leave_room, { type: channel.voucher, id })
                })
            }
        }
    }, [selectedVoucher])

    useEffect(() => {
        if (currentSaleId && ids?.checked_productIds.length) {
            productSaleRefetch()
        }
    }, [currentSaleId])

    useEffect(() => {
        if (refreshProducts) {
            setProducts((pre) => {
                Object.keys(refreshProducts).forEach((storeId) => {
                    let store = pre.stores?.[storeId]
                    let productsDB = refreshProducts[storeId]
                    if (store) {
                        Object.keys(productsDB).forEach((productId) => {
                            let products = store.products
                            let productInMap = products.get(productId)
                            if (productInMap) {
                                let { id, status, sold, description, ...rest } = refreshProducts[storeId][productId]
                                let isBlock = false
                                if (status == product_status.BLOCK) {
                                    isBlock = true
                                }
                                products.set(productId, {
                                    ...productInMap,
                                    ...rest,
                                    isBlock
                                })
                            }
                        })
                    }
                })
                return cloneDeep(pre)
            })
        }
    }, [refreshProducts])

    window.addEventListener(updateProductInCart, () => {
        setSelectedVoucher(undefined)
    })

    useEffect(() => {
        if (productSaleList) {
            setProducts((pre) => {
                ids?.all_storeIds.forEach((storeId) => {
                    let store = productSaleList?.[storeId]
                    let tmp = [...pre.stores[storeId].products.keys()]
                    let remaining = new Map<string, string>()
                    tmp.forEach((productId) => remaining.set(productId, productId))
                    if (store) {
                        Object.keys(store).forEach((productId) => {
                            let products = pre.stores[storeId].products
                            let product = products.get(productId)
                            if (product) {
                                remaining.delete(productId)
                                let { currentQuantity, id, priceAfter } = store[productId]
                                products.set(productId, {
                                    ...product,
                                    sale: {
                                        priceAfter,
                                        currentQuantity,
                                        productPromotionId: id,
                                        salePromotionId: currentSaleId
                                    }
                                })
                            }
                        })
                    } else {
                        let storeFromPre = pre.stores[storeId]
                        remaining.forEach((productId) => {
                            let products = storeFromPre.products
                            let product = products.get(productId)
                            if (product && isProductSale(product)) {
                                let { sale, ...rest } = product
                                products.set(productId, rest)
                            }
                        })
                    }
                })
                return cloneDeep(pre)
            })
        } else {
            setProducts((pre) => {
                let stores = pre.stores
                Object.keys(stores).forEach((storeId) => {
                    let store = stores[storeId]
                    let products = store.products
                    products.forEach((product) => {
                        let { productId } = product
                        let productMap = products.get(productId)
                        if (productMap && isProductSale(productMap)) {
                            let { sale, ...rest } = productMap
                            products.set(productId, rest)
                        }
                    })
                })
                return cloneDeep(pre)
            })
        }
    }, [productSaleList])

    return {
        orderFn: {
            orderMutate,
            orderDataMutate,
            isPending
        },
        summary,
        selectedVoucher,
        setSelectedVoucher
    }
}

export default useDataCheckout
