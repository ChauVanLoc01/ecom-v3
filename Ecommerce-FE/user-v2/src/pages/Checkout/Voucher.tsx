import { ArrowBottomLeftIcon, Cross2Icon } from '@radix-ui/react-icons'
import { AlertDialog, Avatar, Badge, Button, Card, Flex, IconButton, Text, TextField, Tooltip } from '@radix-ui/themes'
import { useQueries, useQuery } from '@tanstack/react-query'
import { cloneDeep } from 'lodash'
import { useContext, useEffect, useState } from 'react'
import SimpleBar from 'simplebar-react'
import { VoucherFetching } from 'src/apis/voucher.api'
import { AppContext } from 'src/contexts/AppContext'
import { Voucher as VoucherType, VoucherWithCondition } from 'src/types/voucher.type'
import { convertCurrentcy } from 'src/utils/utils.ts'
import SearchVoucher from './SearchVoucher'
import VoucherCard from './VoucherCard'

const VoucherNotFound = (
    <Flex justify={'center'} align={'center'} className='py-10'>
        <Avatar
            className='w-20 h-20'
            fallback='voucher_empty'
            src='https://cdn-icons-png.flaticon.com/512/11696/11696700.png'
        />
    </Flex>
)

type VoucherProps = {
    selectedVoucher?: Record<string, VoucherType[]>
    setSelectedVoucher: React.Dispatch<React.SetStateAction<Record<string, VoucherWithCondition[]> | undefined>>
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
    allVoucher: {
        [storeId: string]: VoucherWithCondition[]
    }
    setAllVoucher: React.Dispatch<
        React.SetStateAction<{
            [storeId: string]: VoucherWithCondition[]
        }>
    >
}

const Voucher = ({ selectedVoucher, setSelectedVoucher, summary, allVoucher, setAllVoucher }: VoucherProps) => {
    const { ids, products } = useContext(AppContext)
    const [open, setOpen] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')
    const handleFocus = () => setTimeout(() => setOpen(true), 150)
    const [voucher, setVoucher] = useState<Record<string, VoucherWithCondition[]> | undefined>(undefined)
    const [isSearching, setIsSearching] = useState<boolean>(false)
    const [selected, setSelected] = useState<VoucherWithCondition | undefined>(undefined)

    const { data: globalVouchers } = useQuery({
        queryKey: ['global_vouchers'],
        queryFn: VoucherFetching.getGlobalVoucher,
        staleTime: 1000 * 30,
        select: (result) => result.data.result
    })

    const voucherQuery = useQueries({
        queries: (ids?.checked_storeIds || []).map((storeId) => ({
            queryKey: ['storeVoucher', storeId],
            queryFn: () => VoucherFetching.getVoucherByStoreId(storeId),
            refetchInterval: 1000 * 30
        })),
        combine: (result) => {
            if (!result.filter(Boolean).length) return undefined
            return result.reduce<Record<string, VoucherWithCondition[]>>((acum, data, idx) => {
                if (!data.data?.data?.result?.length) {
                    return acum
                }
                let storeId = ids?.checked_storeIds[idx] as string
                let tmp = data.data.data.result
                return {
                    ...acum,
                    [storeId]: tmp
                }
            }, {})
        }
    })

    const {
        refetch: refetchSearchVoucher,
        isSuccess,
        data: voucherSearch
    } = useQuery({
        queryKey: ['voucher_search', search],
        queryFn: VoucherFetching.searchVoucher({
            code: search,
            storesID: ids?.checked_storeIds
        }),
        enabled: false,
        select: (result) => result.data.result
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

    const handleSearch = () => {
        refetchSearchVoucher()
        setIsSearching(true)
    }

    const handleSelectVoucher = (storeId: string, voucher: VoucherWithCondition) => {
        if (storeId == 'system') {
            setVoucher((pre) => {
                pre = pre || {}
                ids?.checked_storeIds.forEach((storeId) => {
                    let valid = checkCondition(storeId, voucher)
                    if (valid) {
                        let tmp: VoucherWithCondition[] = []
                        if (pre?.[storeId]?.length) {
                            tmp = pre[storeId].filter((item) => item.type !== 'GLOBAL')
                        }
                        let global_voucher = globalVouchers?.find((item) => voucher.id === item.id)
                        if (global_voucher) {
                            tmp.push(global_voucher)
                        }
                        pre = {
                            ...pre,
                            [storeId]: tmp
                        }
                    }
                })
                return cloneDeep(pre)
            })
            return
        }
        setVoucher((pre) => {
            let tmp = pre?.[storeId]?.filter((item) => ['GLOBAL', 'HIDDEN'].includes(item.type)) || []
            tmp.push(voucher)
            return {
                ...pre,
                [storeId]: tmp
            }
        })
    }

    const handleSelectGlobalVoucher = (voucher: VoucherWithCondition) => {
        let storeId = voucher?.storeId || 'system'
        if (storeId == 'system') {
            setVoucher((pre) => {
                pre = pre || {}
                ids?.checked_storeIds.forEach((storeId) => {
                    let valid = checkCondition(storeId, voucher)
                    if (valid) {
                        let tmp: VoucherWithCondition[] = []
                        if (pre?.[storeId]?.length) {
                            tmp = pre[storeId].filter((item) => item.type !== 'GLOBAL')
                        }
                        let search_voucher = voucherSearch?.find((item) => voucher.id === item.id)
                        if (search_voucher) {
                            tmp.push(search_voucher)
                        }
                        pre = {
                            ...pre,
                            [storeId]: tmp
                        }
                    }
                })
                return cloneDeep(pre)
            })
            return
        }
        setVoucher((pre) => {
            let tmp = pre?.[storeId]?.filter((item) => ['GLOBAL', 'HIDDEN'].includes(item.type)) || []
            tmp.push(voucher)
            return {
                ...pre,
                [storeId]: tmp
            }
        })
    }

    const handleConfirm = () => {
        if (voucher) {
            setVoucher(undefined)
            setSelectedVoucher((pre) => {
                Object.keys(voucher).forEach((storeId) => {
                    pre = pre ? pre : {}
                    let tmp: VoucherWithCondition[] = []
                    if (voucher[storeId].length) {
                        let type = voucher[storeId].map((e) => e.type)
                        tmp = pre?.[storeId]?.filter((item) => !type.includes(item.type)) || []
                        tmp.push(...voucher[storeId])
                    } else {
                        tmp = pre?.[storeId]
                    }
                    pre = {
                        ...pre,
                        [storeId]: tmp
                    }
                })
                return cloneDeep(pre)
            })
            setOpen(false)
        }
    }

    const handleRemoveVoucher = (storeId: string, voucherId: string) => () => {
        setSelectedVoucher((pre) => {
            let vouchers = pre?.[storeId]
            if (vouchers?.length == 1) {
                delete selectedVoucher?.[storeId]
            } else {
                pre = {
                    ...pre,
                    [storeId]: vouchers?.filter((item) => item.id !== voucherId) || []
                }
            }
            if (!Object.keys(pre as any).length) {
                return undefined
            }
            return cloneDeep(pre)
        })
    }

    const checkCondition = (storeId: string, voucher: VoucherWithCondition) => {
        let category_condition = voucher.CategoryConditionVoucher
        let price_condition = voucher?.PriceConditionVoucher
        let isOk = 0
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

    useEffect(() => {
        if (globalVouchers?.length) {
            setAllVoucher((pre) => {
                let vouchers: VoucherWithCondition[] = []
                globalVouchers.forEach((voucher) => {
                    let category_condition = voucher.CategoryConditionVoucher
                    let price_condition = voucher?.PriceConditionVoucher
                    let isOk = 0
                    let note = ''
                    Object.values(products.stores).forEach(({ products }) => {
                        products.forEach((product) => {
                            let isMatch = true
                            let count = 0
                            if (category_condition && category_condition?.categoryShortName !== product.category) {
                                isMatch = false
                                count++
                                note = 'không thõa điều kiện danh mục'
                            }
                            if (price_condition?.priceMin && price_condition?.priceMin > product.priceAfter) {
                                isMatch = false
                                count++
                                note = 'giá nhỏ nhất không thõa điều kiện'
                            }
                            if (
                                price_condition?.totalMin &&
                                summary.detail[product.storeId].total < price_condition.totalMin
                            ) {
                                isMatch = false
                            }

                            if (isMatch) {
                                isOk++
                            }
                            if (!isMatch && count > 1) {
                                note = 'không đủ điều kiện'
                            }
                        })
                    })
                    if (!isOk) {
                        voucher = { ...voucher, isOk: !!isOk, note }
                    } else {
                        voucher = { ...voucher, isOk: true }
                    }
                    vouchers.push(voucher)
                })
                pre['system'] = vouchers
                return cloneDeep(pre)
            })
        }
    }, [globalVouchers, ids?.checked_productIds])

    useEffect(() => {
        if (voucherQuery) {
            setAllVoucher((pre) => {
                Object.keys(voucherQuery).forEach((storeId) => {
                    let vouchers: VoucherWithCondition[] = []
                    voucherQuery[storeId].forEach((voucher) => {
                        let isOk = checkCondition(storeId, voucher)
                        if (!isOk) {
                            voucher = { ...voucher, isOk, note: 'không đủ điều kiện' }
                        } else {
                            voucher = { ...voucher, isOk: true }
                        }
                        vouchers.push(voucher)
                    })
                    pre[storeId] = vouchers
                })
                return cloneDeep(pre)
            })
        }
    }, [voucherQuery, ids?.checked_productIds])

    useEffect(() => {
        if (isSuccess) {
            setIsSearching(true)
        }
    }, [isSuccess])

    useEffect(() => {
        refetchSearchVoucher()
    }, [ids?.checked_storeIds])

    useEffect(() => {
        if (selectedVoucher) {
            setSelectedVoucher((pre) => {
                ids?.checked_storeIds.forEach((storeId) => {
                    let voucher_remaining: VoucherWithCondition[] = []
                    if (pre?.[storeId]) {
                        pre[storeId].forEach((voucher) => {
                            let isValid = checkCondition(storeId, voucher)
                            if (isValid) {
                                voucher_remaining.push(voucher)
                            }
                        })
                        pre[storeId] = voucher_remaining
                    }
                })
                return cloneDeep(pre)
            })
        }
    }, [ids?.checked_productIds, ids?.checked_storeIds])

    return (
        <>
            <div className='p-24 rounded-8 border border-border/30 bg-[#FFFFFF] space-y-4'>
                <h3 className='font-semibold'>Bạn có mã giảm giá?</h3>
                <div className='flex justify-between items-center gap-x-2'>
                    <TextField.Root
                        className='flex-grow'
                        placeholder='Nhập mã giảm giá'
                        size={'3'}
                        onFocus={handleFocus}
                    />
                    <Button size={'3'} onClick={handleFocus}>
                        Áp dụng
                    </Button>
                </div>
                <div className='space-y-4'>
                    {!!selectedVoucher &&
                        Object.keys(selectedVoucher).map((storeId) => {
                            let voucherNode = selectedVoucher?.[storeId].map((voucher) => (
                                <Card key={`voucher_card_${voucher.id}`}>
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
                                                <Text size={'2'}>Số lượng:</Text>
                                                <Text color='yellow' size={'2'}>
                                                    {voucher.currentQuantity}
                                                </Text>
                                            </Flex>
                                        </Flex>
                                        <Flex className='absolute top-0 right-0 space-x-1'>
                                            <Badge size={'2'}>Đang sử dụng</Badge>
                                            <Tooltip content='Xóa'>
                                                <IconButton
                                                    variant='soft'
                                                    color='red'
                                                    size={'1'}
                                                    onClick={handleRemoveVoucher(storeId, voucher.id)}
                                                >
                                                    <Cross2Icon />
                                                </IconButton>
                                            </Tooltip>
                                        </Flex>
                                    </Flex>
                                </Card>
                            ))
                            return (
                                <div>
                                    <Text>{products.stores[storeId].store_name}</Text>
                                    <div className='space-y-2'>{voucherNode}</div>
                                </div>
                            )
                        })}
                </div>
            </div>
            <AlertDialog.Root open={open} onOpenChange={setOpen}>
                <AlertDialog.Content maxWidth='600px' className='!rounded-8 space-y-4'>
                    <div className='space-y-1'>
                        <AlertDialog.Title>Mã giảm giá</AlertDialog.Title>
                        <div className='flex justify-between items-center gap-x-2'>
                            <TextField.Root
                                size={'3'}
                                className='flex-grow uppercase'
                                placeholder='Nhập mã giảm giá'
                                onChange={handleChange}
                                value={search}
                                type='text'
                            />
                            <Button size={'3'} onClick={handleSearch}>
                                Áp dụng
                            </Button>
                        </div>
                    </div>
                    <SearchVoucher
                        vouchers={voucherSearch || []}
                        search={search}
                        handleSelectGlobalVoucher={handleSelectGlobalVoucher}
                        select={voucher || {}}
                        summary={summary}
                        selectedVoucher={selectedVoucher}
                    />
                    {Object.keys(allVoucher).length ? (
                        <SimpleBar style={{ maxHeight: '317px', paddingBottom: '5px' }}>
                            <div className='space-y-4'>
                                {Object.keys(allVoucher).map((storeId, idx) => {
                                    return (
                                        <div className='space-y-1' key={`voucher_card_${idx}`}>
                                            <VoucherCard
                                                key={`voucher_${storeId}_${idx}`}
                                                vouchers={allVoucher[storeId]}
                                                storeId={storeId}
                                                handleSelectVoucher={handleSelectVoucher}
                                                select={voucher || {}}
                                                selectedVoucher={selectedVoucher}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </SimpleBar>
                    ) : (
                        VoucherNotFound
                    )}
                    <Flex justify={'end'} gapX={'4'}>
                        <AlertDialog.Cancel>
                            <Button type='button' variant='outline' color='red' onClick={() => setVoucher(undefined)}>
                                Trở về
                            </Button>
                        </AlertDialog.Cancel>
                        <Button
                            type='button'
                            className='bg-blue text-white'
                            onClick={handleConfirm}
                            disabled={!voucher}
                        >
                            Xác nhận
                        </Button>
                    </Flex>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </>
    )
}

export default Voucher
