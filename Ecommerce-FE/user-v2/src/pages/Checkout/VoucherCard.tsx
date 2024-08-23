import { ArrowBottomLeftIcon } from '@radix-ui/react-icons'
import { Avatar, Badge, DataList, Flex, Popover, RadioCards, Text } from '@radix-ui/themes'
import { useContext, useMemo, useState } from 'react'
import { voucher_type } from 'src/constants/voucher.constant'
import { AppContext } from 'src/contexts/AppContext'
import { Voucher, VoucherWithCondition } from 'src/types/voucher.type'
import { convertCurrentcy } from 'src/utils/utils.ts'

type VoucherCardProps = {
    storeId: string
    vouchers: VoucherWithCondition[]
    handleSelectVoucher: (storeId: string, voucher: VoucherWithCondition) => void
    select: Record<string, Voucher[]>
    selectedVoucher?: Record<string, Voucher[]>
}

const VoucherCard = ({ vouchers, storeId, handleSelectVoucher, select, selectedVoucher }: VoucherCardProps) => {
    const { products, categories } = useContext(AppContext)
    const [selected, setSelected] = useState<VoucherWithCondition | undefined>(undefined)
    const store_name = storeId === 'system' ? 'Giảm giá toàn bộ hệ thống' : products?.stores?.[storeId]?.store_name

    const handleHover = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let voucherId = e.currentTarget.getAttribute('data-id') as string
        setSelected(vouchers.find((item) => item.id == voucherId))
    }

    let in_ = useMemo(() => {
        let tmp: { inUse: boolean; inSelect: boolean }[] = []
        vouchers.map((voucher) => {
            let inUse: boolean
            let inSelect: boolean
            if (storeId === 'system') {
                inUse = !!Object.values(selectedVoucher || {})
                    .flatMap((e) => e)
                    .find((item) => item.id === voucher.id)
                inSelect = !!Object.values(select || {})
                    .flatMap((e) => e)
                    .find((item) => item.id === voucher.id)
            } else {
                inUse = !!selectedVoucher?.[storeId]?.find((e) => e.id === voucher.id)
                inSelect = !!select?.[storeId]?.find((e) => e.id === voucher.id)
            }
            tmp.push({ inSelect, inUse })
        })
        return tmp
    }, [select, selectedVoucher])

    return (
        <>
            {vouchers.length > 0 && (
                <Text color='gray' size={'2'}>
                    {store_name}
                </Text>
            )}
            <RadioCards.Root
                size={'1'}
                columns={{ initial: '1', sm: '2' }}
                defaultValue={selectedVoucher?.[storeId]?.find((voucher) => voucher.type === voucher_type.ACTIVE)?.id}
                onValueChange={(voucherId) =>
                    handleSelectVoucher(storeId, vouchers.find((item) => item.id === voucherId) as VoucherWithCondition)
                }
            >
                {vouchers.length ? (
                    vouchers.map((voucher, idx) => {
                        return (
                            <RadioCards.Item
                                key={voucher.id}
                                value={voucher.id}
                                disabled={!voucher.isOk || !voucher.currentQuantity || !!in_[idx].inUse}
                                data-id={voucher.id}
                                onMouseEnter={handleHover}
                                onMouseLeave={() => setSelected(undefined)}
                            >
                                <Popover.Root open={selected?.id === voucher.id}>
                                    <Popover.Trigger>
                                        <Flex direction='column' width='100%' className='relative'>
                                            <Text weight='bold' size={'3'}>
                                                {voucher.title}
                                            </Text>
                                            <Flex gapX={'2'}>
                                                <Flex align={'center'}>
                                                    <ArrowBottomLeftIcon />
                                                    <Text size={'1'}>{voucher.percent}%</Text>
                                                </Flex>
                                                <Text size={'1'}>Tối đa {convertCurrentcy(voucher.maximum)}</Text>
                                            </Flex>
                                            <Flex mt={'2'} justify={'between'} align={'center'}>
                                                <Flex align={'center'} gapX={'1'}>
                                                    <Text size={'1'}>Số lượng:</Text>
                                                    <Text color='yellow' size={'1'}>
                                                        {voucher.currentQuantity}
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                            {!voucher.isOk && (
                                                <Flex>
                                                    <Text color='red'>{voucher?.note}</Text>
                                                </Flex>
                                            )}
                                            {in_[idx].inUse && (
                                                <Badge className='absolute top-0 right-0' size={'1'}>
                                                    Đang sử dụng
                                                </Badge>
                                            )}
                                            {in_[idx].inSelect && (
                                                <Badge className='absolute top-0 right-0' color='red' size={'1'}>
                                                    Đang chọn
                                                </Badge>
                                            )}
                                        </Flex>
                                    </Popover.Trigger>
                                    <Popover.Content className='rounded-8'>
                                        <DataList.Root size={'1'} className='-space-y-2'>
                                            <DataList.Item align='center'>
                                                <DataList.Label>Danh mục</DataList.Label>
                                                <DataList.Value>
                                                    {categories?.find(
                                                        (item) =>
                                                            item.shortname ===
                                                            selected?.CategoryConditionVoucher?.categoryShortName
                                                    )?.name || 'không'}
                                                </DataList.Value>
                                            </DataList.Item>
                                            <DataList.Item align='center'>
                                                <DataList.Label>Sản phẩm phải lớn hơn</DataList.Label>
                                                <DataList.Value>
                                                    {convertCurrentcy(selected?.PriceConditionVoucher?.priceMin || 0)}
                                                </DataList.Value>
                                            </DataList.Item>
                                            <DataList.Item align='center'>
                                                <DataList.Label>Đơn hàng phải lớn hơn</DataList.Label>
                                                <DataList.Value>
                                                    {convertCurrentcy(selected?.PriceConditionVoucher?.totalMin || 0)}
                                                </DataList.Value>
                                            </DataList.Item>
                                        </DataList.Root>
                                    </Popover.Content>
                                </Popover.Root>
                            </RadioCards.Item>
                        )
                    })
                ) : (
                    <Flex justify={'center'} align={'center'}>
                        <Avatar
                            className='w-16 h-16'
                            fallback='empty_voucher'
                            src='https://cdn-icons-png.flaticon.com/512/11696/11696700.png'
                        />
                    </Flex>
                )}
            </RadioCards.Root>
        </>
    )
}

export default VoucherCard
