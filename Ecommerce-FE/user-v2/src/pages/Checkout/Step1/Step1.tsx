import SimpleBar from 'simplebar-react'

import { useContext, useState } from 'react'
import CartItem from './CartItem'

import { Reorder } from 'framer-motion'
import { AppContext } from 'src/contexts/AppContext'
import { VoucherWithCondition } from 'src/types/voucher.type'

type Step1Props = {
    handleRemoveVoucher: (storeId: string) => void
    setAllVoucher: React.Dispatch<
        React.SetStateAction<{
            [storeId: string]: VoucherWithCondition[]
        }>
    >
}

const Step1 = ({ handleRemoveVoucher, setAllVoucher }: Step1Props) => {
    const { ids, products } = useContext(AppContext)
    const [stores, setStores] = useState<string[]>(ids?.all_storeIds || [])

    return (
        <SimpleBar style={{ maxHeight: 680, paddingRight: 10, paddingBottom: 15 }}>
            <Reorder.Group as='ul' axis='y' values={stores} onReorder={setStores} className='space-y-4'>
                {ids?.all_storeIds.map((storeId) => {
                    return (
                        <Reorder.Item key={storeId} value={storeId}>
                            <CartItem
                                setAllVoucher={setAllVoucher}
                                handleRemoveVoucher={handleRemoveVoucher}
                                key={storeId}
                                storeId={storeId}
                            />
                        </Reorder.Item>
                    )
                })}
            </Reorder.Group>
        </SimpleBar>
    )
}

export default Step1
