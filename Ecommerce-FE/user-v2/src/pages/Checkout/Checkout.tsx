import { useContext, useEffect, useState } from 'react'

import { motion } from 'framer-motion'

import { Button } from '@radix-ui/themes'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { AppContext } from 'src/contexts/AppContext'
import useStep from 'src/hooks/useStep'
import { Delivery } from 'src/types/delivery.type'
import { OrderBody } from 'src/types/order.type'
import { Payment } from 'src/types/payment.type'
import { VoucherWithCondition } from 'src/types/voucher.type'
import { ls } from 'src/utils/localStorage'
import { isProductSale } from 'src/utils/utils.ts'
import CheckoutHeader from './CheckoutHeader'
import CheckoutSummary from './CheckoutSummary'
import CreateOrder from './CreateOrder'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import useDataCheckout from './useDataCheckout'

const CheckOutEmpty = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center gap-y-4'>
            <div className='w-1/4'>
                <img src='https://cdn-icons-png.flaticon.com/512/13637/13637462.png' className='object-cover' alt='' />
            </div>
            <Button variant='soft' size={'3'} onClick={() => navigate('/')}>
                Tiếp tục mua hàng
            </Button>
        </div>
    )
}

const Checkout = () => {
    const { products, ids, isCanOrder, actionId } = useContext(AppContext)

    if (!ids) {
        return <CheckOutEmpty />
    }
    const [address, setAddress] = useState<Delivery | undefined>(undefined)
    const { step, handleNextStep, handlePreviousStep, setStep } = useStep()
    const [orderSuccess, setOrderSuccess] = useState<boolean>(false)
    const [payment, setPayment] = useState<Payment>('VNBANK')
    const [searchParams, _] = useSearchParams()
    const navigate = useNavigate()
    let vnp_Params = Object.fromEntries(searchParams)
    const isOpen = vnp_Params?.['status']
    const [allVoucher, setAllVoucher] = useState<{
        [storeId: string]: VoucherWithCondition[]
    }>({})

    const {
        orderFn: { isPending, orderDataMutate, orderMutate },
        summary,
        selectedVoucher,
        setSelectedVoucher
    } = useDataCheckout({ setStep })

    const handleOrder = () => {
        if (!isCanOrder) {
            toast.warning('Hệ thống đang gặp lỗi!')
            return
        }
        let vouchers = ls.getItem('vouchers') as Record<string, string[]>
        const orders: OrderBody['orders'] = ids.checked_storeIds.map((storeId) => {
            let { discount, pay, total } = summary.detail[storeId]
            let productOrders: OrderBody['orders'][number]['productOrders'] = []
            let voucherIds: OrderBody['orders'][number]['voucherIds'] = []
            products.stores[storeId].products.forEach((product) => {
                if (!product.isChecked) return
                if (selectedVoucher?.[storeId]) {
                    voucherIds = selectedVoucher[storeId].map((item) => item.id)
                }
                let { priceAfter, buy, productId } = product
                if (isProductSale(product)) {
                    let {
                        sale: { salePromotionId, productPromotionId }
                    } = product
                    productOrders.push({
                        priceAfter: product.sale.priceAfter,
                        productId,
                        quantity: 1,
                        productPromotionId,
                        salePromotionId
                    })
                    productOrders.push({
                        priceAfter,
                        productId,
                        quantity: buy - 1
                    })
                } else {
                    productOrders.push({
                        priceAfter,
                        productId,
                        quantity: buy
                    })
                }
            })
            console.log('isOpen', isOpen, vouchers?.[storeId])
            return {
                storeId,
                total,
                discount,
                pay,
                voucherIds: isOpen ? vouchers?.[storeId] : voucherIds,
                productOrders
            }
        })
        console.log('payload', {
            orders,
            delivery_info: {
                address: address?.address || '',
                name: address?.full_name || ''
            },
            actionId,
            payment
        })
        orderMutate({
            orders,
            delivery_info: {
                address: address?.address || '',
                name: address?.full_name || ''
            },
            actionId,
            payment
        })
    }

    const handleRemoveVoucher = (storeId: string) => {
        if (selectedVoucher) {
            setSelectedVoucher((pre) => {
                delete pre?.[storeId]
                return { ...pre }
            })
        }
    }

    useEffect(() => {
        if (isOpen) {
            toast.success('Thanh toán thành công')
            navigate({
                pathname: window.location.pathname,
                search: ''
            })
            setTimeout(() => {
                handleOrder()
            }, 500)
        }
    }, [])

    return (
        <>
            <motion.section
                initial='hidden'
                animate='visible'
                exit='hidden'
                transition={{ duration: 0.8 }}
                variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 }
                }}
                className='space-y-4'
            >
                <>
                    <CheckoutHeader handlePreviousStep={handlePreviousStep} step={step} />
                    <div className='flex gap-2'>
                        <section className='basis-2/3'>
                            {
                                {
                                    1: (
                                        <Step1
                                            setAllVoucher={setAllVoucher}
                                            handleRemoveVoucher={handleRemoveVoucher}
                                        />
                                    ),
                                    2: <Step2 address={address} setAddress={setAddress} />,
                                    3: <Step3 payment={payment} setPayment={setPayment} />
                                }[step]
                            }
                        </section>
                        <CheckoutSummary
                            handleNextStep={handleNextStep}
                            handleOrder={handleOrder}
                            isPending={isPending}
                            step={step}
                            payment={payment}
                            selectedVoucher={selectedVoucher}
                            setSelectedVoucher={setSelectedVoucher}
                            summary={summary}
                            allVoucher={allVoucher}
                            setAllVoucher={setAllVoucher}
                        />
                    </div>
                </>
            </motion.section>
            <CreateOrder
                data={orderDataMutate?.data.result || []}
                setStep={setStep}
                open={orderSuccess}
                setOpen={setOrderSuccess}
            />
        </>
    )
}

export default Checkout
