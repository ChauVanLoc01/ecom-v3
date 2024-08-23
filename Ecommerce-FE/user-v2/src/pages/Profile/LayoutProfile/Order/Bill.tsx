import { ClipboardIcon } from '@radix-ui/react-icons'
import { AlertDialog, Button, Flex, IconButton, Text, Tooltip } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { useMemo, useState } from 'react'
import { authFetching } from 'src/apis/authentication'
import { StoreFetching } from 'src/apis/store'
import Table from 'src/components/Table'
import { payment_label } from 'src/constants/payment.constants'
import { OrderDetailResponse, ProductOrder } from 'src/types/order.type'
import { convertCurrentcy } from 'src/utils/utils.ts'
import html2pdf from 'html2pdf.js'
import { OrderFlowEnum } from 'src/constants/order-status'

type Props = {
    storeId: string
    orderId: string
    orderDetailData?: OrderDetailResponse
}

const Bill = ({ storeId, orderDetailData, orderId }: Props) => {
    const [open, setOpen] = useState<boolean>(false)
    const { data: isMall } = useQuery({
        queryKey: ['shop_mall', storeId],
        queryFn: StoreFetching.isShopMall(storeId),
        select: (result) => result.data,
        staleTime: 1000 * 60 * 3
    })
    console.log('isMall', !isMall)
    const { data: store } = useQuery({
        queryKey: ['store_name', orderDetailData?.storeId],
        queryFn: StoreFetching.getStoreName(orderDetailData?.storeId || ''),
        select: (result) => result.data,
        staleTime: 1000 * 60 * 3,
        enabled: open
    })
    const { data: customer } = useQuery({
        queryKey: ['user_order', orderDetailData?.userId],
        queryFn: authFetching.getUserName(orderDetailData?.userId || ''),
        enabled: open,
        select: (result) => result.data
    })

    let date = format(orderDetailData?.createdAt || new Date(), 'dd/LL/y').split('/')
    let createdAt = `Ngày ${date[0]} tháng ${date[1]} năm ${date[2]}`

    let isReady = orderDetailData && customer && store

    const columns: ColumnDef<ProductOrder>[] = useMemo(() => {
        return [
            {
                accessorKey: 'Tên sản phẩm',
                header: () => {
                    return (
                        <Flex justify={'center'}>
                            <div>Tên sản phẩm</div>
                        </Flex>
                    )
                },
                cell: ({ row }) => (
                    <Flex justify={'center'}>
                        <div className='w-48'>
                            <Text className='w-full'>{row.original.name}</Text>
                        </div>
                    </Flex>
                )
            },
            {
                accessorKey: 'Tổng tiền',
                header: () => {
                    return <div className='flex items-center justify-center gap-x-2'>Số lượng</div>
                },
                cell: ({ row }) => <div className='capitalize text-center'>{row.original.quantity}</div>
            },
            {
                accessorKey: 'Giảm giá',
                header: () => {
                    return <div className='flex justify-center items-center gap-x-2'>Đơn giá</div>
                },
                cell: ({ row }) => (
                    <div className='capitalize text-center'>{convertCurrentcy(row.original.priceAfter)}</div>
                )
            },
            {
                accessorKey: 'Số tiền cần trả',
                header: () => {
                    return <div className='flex items-center gap-x-2 justify-center'>Thành tiền</div>
                },
                cell: ({ row }) => (
                    <div className='capitalize text-center'>
                        {convertCurrentcy(row.original.priceAfter * row.original.quantity)}
                    </div>
                )
            }
        ]
    }, [])

    const handleDownloadPDF = async () => {
        let bill = document.getElementById('order_bill')
        const options = {
            filename: 'HoaDonBanHang.pdf',
            margin: 1,
            image: { type: 'pdf', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: {
                unit: 'in',
                format: 'letter',
                orientation: 'portrait'
            }
        }
        html2pdf().set(options).from(bill).save()
    }

    return (
        <AlertDialog.Root open={open} onOpenChange={setOpen}>
            {isMall && orderDetailData?.status === OrderFlowEnum.FINISH && (
                <AlertDialog.Trigger>
                    <IconButton variant='soft' color='green'>
                        <ClipboardIcon />
                    </IconButton>
                </AlertDialog.Trigger>
            )}
            <AlertDialog.Content maxWidth='850px' className='rounded-8' id='order_bill'>
                <AlertDialog.Title
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        marginBottom: '8px'
                    }}
                >
                    HÓA ĐƠN GIÁ TRỊ GIA TĂNG
                </AlertDialog.Title>
                {isReady && (
                    <div className='space-y-5'>
                        <div className='space-y-3'>
                            <Flex justify={'center'}>
                                <Text
                                    size={'2'}
                                    style={{
                                        fontStyle: 'initial'
                                    }}
                                >
                                    {createdAt}
                                </Text>
                            </Flex>
                            <Flex align={'center'}>
                                <Text
                                    style={{
                                        marginRight: '8px'
                                    }}
                                >
                                    Đơn vị bán hàng:
                                </Text>
                                <Text>{store?.name}</Text>
                            </Flex>
                            <Flex align={'center'}>
                                <Text
                                    style={{
                                        marginRight: '8px'
                                    }}
                                >
                                    Mã số thuế:
                                </Text>
                                <Text>{store?.tax}</Text>
                            </Flex>
                            <Flex align={'center'}>
                                <Text
                                    style={{
                                        marginRight: '8px'
                                    }}
                                >
                                    Địa chỉ:
                                </Text>
                                <Text>{store?.location}</Text>
                            </Flex>
                            <Flex align={'center'}>
                                <Text
                                    style={{
                                        marginRight: '8px'
                                    }}
                                >
                                    Họ tên người mua hàng:
                                </Text>
                                <Text>{customer?.full_name}</Text>
                            </Flex>
                            <Flex align={'center'}>
                                <Text
                                    style={{
                                        marginRight: '8px'
                                    }}
                                >
                                    Địa chỉ nhận hàng:
                                </Text>
                                <Text>{orderDetailData?.OrderShipping?.[0].address}</Text>
                            </Flex>
                            <Flex align={'center'}>
                                <Text
                                    style={{
                                        marginRight: '8px'
                                    }}
                                >
                                    Hình thức thanh toán:
                                </Text>
                                <Text>{payment_label?.[orderDetailData?.payment as keyof typeof payment_label]}</Text>
                            </Flex>
                        </div>
                        <Table<ProductOrder>
                            columns={columns}
                            data={orderDetailData?.ProductOrder || []}
                            className='w-full text-[16px]'
                            isBill
                        />
                        <Flex
                            justify={'end'}
                            className='space-x-2'
                            style={{
                                marginTop: '20px',
                                marginBottom: '20px'
                            }}
                        >
                            <Text>Tổng tiền thanh toán:</Text>
                            <Text>{convertCurrentcy(orderDetailData?.total || 0)}</Text>
                        </Flex>
                        <Flex justify={'end'} className='space-x-28'>
                            <Flex direction={'column'} justify={'center'} align={'center'}>
                                <Text>Người mua hàng</Text>
                                <Text className='italic text-gray-400 text-sm'>(Ký, ghi rõ họ, tên)</Text>
                            </Flex>
                            <Flex direction={'column'} justify={'center'} align={'center'}>
                                <Text>Người bán hàng</Text>
                                <Text className='italic text-gray-400 text-sm'>(Ký, ghi rõ họ, tên)</Text>
                            </Flex>
                        </Flex>
                        <Flex gap='3' mt='4' justify='end' data-html2canvas-ignore>
                            <AlertDialog.Cancel>
                                <Button variant='soft' color='gray'>
                                    Trở về
                                </Button>
                            </AlertDialog.Cancel>
                            <Button variant='solid' color='blue' onClick={handleDownloadPDF}>
                                Tải hóa đơn
                            </Button>
                        </Flex>
                    </div>
                )}
            </AlertDialog.Content>
        </AlertDialog.Root>
    )
}

export default Bill
