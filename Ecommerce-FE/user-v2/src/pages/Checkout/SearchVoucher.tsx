import { ArrowBottomLeftIcon } from '@radix-ui/react-icons'
import { Badge, DataList, Flex, Popover, RadioCards, Text } from '@radix-ui/themes'
import { useContext, useMemo, useState } from 'react'
import { AppContext } from 'src/contexts/AppContext'
import { Voucher, VoucherWithCondition } from 'src/types/voucher.type'
import { convertCurrentcy } from 'src/utils/utils.ts'

type VoucherCardProps = {
    vouchers: VoucherWithCondition[]
    select: Record<string, VoucherWithCondition[]>
    selectedVoucher?: Record<string, Voucher[]>
    search: string
    handleSelectGlobalVoucher: (voucher: VoucherWithCondition) => void
    summary: {
        overview: {
            total: number
            discount: number
            pay: number
        }
        detail: {
            [storeId: string]: {
                total: number
                discount: number
                pay: number
            }
        }
    }
}

const SearchVoucher = ({ vouchers, select, selectedVoucher, handleSelectGlobalVoucher, summary }: VoucherCardProps) => {
    const { categories, ids, products } = useContext(AppContext)
    const [selected, setSelected] = useState<VoucherWithCondition | undefined>(undefined)

    const handleHover = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let voucherId = e.currentTarget.getAttribute('data-id') as string
        setSelected(vouchers.find((item) => item.id == voucherId))
    }

    const checkCondition = (voucher: VoucherWithCondition) => {
        let category_condition = voucher.CategoryConditionVoucher
        let price_condition = voucher?.PriceConditionVoucher
        let isOk = 0
        let storeId = voucher?.storeId || 'system'
        products.stores?.[storeId].products.forEach((product) => {
            let { category, priceAfter } = product
            let isMatch = true
            if (category_condition?.categoryShortName && category_condition.categoryShortName !== category) {
                isMatch = false
            }
            if (price_condition?.priceMin && price_condition.priceMin > priceAfter) {
                isMatch = false
            }
            if (price_condition?.totalMin && summary.detail[storeId].total < price_condition.totalMin) {
                isMatch = false
            }
            if (isMatch) {
                isOk++
            }
        })
        return !!isOk
    }

    const validVoucher = useMemo(() => {
        let valids: boolean[] = []
        if (vouchers.length) {
            valids = vouchers.map((voucher) => checkCondition(voucher))
        }
        return valids
    }, [vouchers, ids])

    return (
        <>
            <Flex align={'center'} className='space-x-2'>
                <Text color='red' size={'2'}>
                    {vouchers.length}
                </Text>
                <Text size={'2'}>kết quả tìm được</Text>
            </Flex>
            {!!vouchers.length && (
                <RadioCards.Root
                    size={'1'}
                    columns={{ initial: '1', sm: '2' }}
                    onValueChange={(voucherId) =>
                        handleSelectGlobalVoucher(
                            vouchers.find((item) => item.id === voucherId) as VoucherWithCondition
                        )
                    }
                >
                    {vouchers.map((voucher, idx) => {
                        let inUse = Object.values(selectedVoucher || {})
                            .flatMap((e) => e)
                            .find((item) => item.id === voucher.id)
                        return (
                            <RadioCards.Item
                                key={voucher.id}
                                value={voucher.id}
                                disabled={!validVoucher[idx] || !voucher.currentQuantity || !!inUse}
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
                                            {inUse && (
                                                <Badge className='absolute top-0 right-0' size={'1'}>
                                                    Đang sử dụng
                                                </Badge>
                                            )}
                                            {select?.[voucher.storeId]?.find((item) => item.id === voucher.id) && (
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
                    })}
                </RadioCards.Root>
            )}
        </>
    )
}

export default SearchVoucher
