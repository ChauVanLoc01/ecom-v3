import { Checkbox, Flex, Text } from '@radix-ui/themes'
import { motion, Reorder } from 'framer-motion'
import { cloneDeep } from 'lodash'
import { useContext, useState } from 'react'
import { AppContext } from 'src/contexts/AppContext'
import { cn } from 'src/utils/utils.ts'
import ProductIncart from './ProductInCart'
import { VoucherWithCondition } from 'src/types/voucher.type'

type CartItemProps = {
    storeId: string
    handleRemoveVoucher: (storeId: string) => void
    setAllVoucher: React.Dispatch<
        React.SetStateAction<{
            [storeId: string]: VoucherWithCondition[]
        }>
    >
}

const CartItem = ({ storeId, handleRemoveVoucher, setAllVoucher }: CartItemProps) => {
    const { setProducts, products, ids } = useContext(AppContext)
    const [productOrder, setProductOrder] = useState<string[]>(ids?.all_productIds || [])

    const selectProduct = (productId: string, isChecked: boolean) => {
        setProducts((pre) => {
            let store = pre.stores[storeId]
            let productInCart = store.products.get(productId)
            if (productInCart) {
                if (isChecked) {
                    store.checked += 1
                } else {
                    store.checked -= 1
                    if (!store.checked) {
                        handleRemoveVoucher(storeId)
                        setAllVoucher((pre) => {
                            delete pre?.[storeId]
                            return cloneDeep(pre)
                        })
                    }
                }
                store.products.set(productId, {
                    ...productInCart,
                    isChecked
                })
            }
            return cloneDeep(pre)
        })
    }

    const selectedAllProduct = (isChecked: boolean) => {
        setProducts((pre) => {
            let store = pre.stores[storeId]
            store.products.forEach((item) => {
                if (!item?.isBlock) {
                    store.products.set(item.productId, { ...item, isChecked })
                }
            })
            if (isChecked) {
                store.checked = store.products.size
            } else {
                store.checked = 0
                handleRemoveVoucher(storeId)
                setAllVoucher((pre) => {
                    delete pre?.[storeId]
                    return cloneDeep(pre)
                })
            }
            return cloneDeep(pre)
        })
    }

    const handleChecked = (productId: string, checked: boolean) => () => {
        selectProduct(productId, checked)
    }

    const handleChangeQuantity = (productId: string, buy: number) => {
        setProducts((pre) => {
            let productInCart = pre.stores[storeId].products.get(productId)
            if (productInCart) {
                pre.stores[storeId].products.set(productId, {
                    ...productInCart,
                    buy
                })
            }
            return cloneDeep(pre)
        })
    }

    const handleDelete = (productId: string) => () => {
        setProducts((pre) => {
            let storeInCart = pre.stores[storeId]
            let productInCart = storeInCart.products.get(productId)
            if (productInCart) {
                if (storeInCart.products.size == 1) {
                    delete pre.stores[storeId]
                    handleRemoveVoucher(storeId)
                } else {
                    if (productInCart.isChecked) {
                        storeInCart.checked -= 1
                    }
                    storeInCart.products.delete(productId)
                }
                pre.total -= 1
            }
            return cloneDeep(pre)
        })
    }

    let isCheckedAll = () => {
        let store = products.stores[storeId]
        let productTmp = [...store.products.values()]
        if (productTmp.every((product) => !product.isBlock)) {
            return store.checked === store.products.size
        }
        if (!store.checked) {
            return false
        }
        return store.checked === productTmp.filter((item) => item.isChecked && !item.isBlock).length
    }

    return (
        <motion.div className={cn('bg-[#FFFFFF] rounded-8 hover:shadow-md border border-border/30')}>
            <motion.div key={storeId} className='border-b border-border/30 flex-shrink'>
                <Flex justify={'between'} align={'center'}>
                    <div className='p-24 space-x-5 flex items-center'>
                        <Checkbox id={storeId} checked={isCheckedAll()} onCheckedChange={selectedAllProduct} />
                        <Text as='label' htmlFor={storeId}>
                            {products.stores[storeId].store_name}
                        </Text>
                    </div>
                </Flex>
            </motion.div>
            <Reorder.Group as='ul' axis='y' values={productOrder} onReorder={setProductOrder}>
                {[...products.stores[storeId].products].map(([_, product]) => (
                    <Reorder.Item key={product.productId} value={product}>
                        <ProductIncart
                            product={product}
                            handleChecked={handleChecked}
                            handleChangeQuantity={handleChangeQuantity}
                            handleDelete={handleDelete}
                        />
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </motion.div>
    )
}

export default CartItem
