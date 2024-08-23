import { AlertDialog, Avatar, Badge, Button, DataList, Flex, Text, Tooltip } from '@radix-ui/themes'
import { useQueries } from '@tanstack/react-query'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { useMemo } from 'react'
import { BiSolidSortAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { ProductApi } from 'src/apis/product.api'
import CopyText from 'src/components/CopyText/CopyText'
import Table from 'src/components/Table'
import { formatDefault } from 'src/constants/date.constants'
import { payment_label } from 'src/constants/order.constant'
import { OrderStatus } from 'src/constants/order.status'
import { OrderDetailResponse, OrderDetailTable } from 'src/types/order.type'
import { convertCurrentcy, removeSpecialCharacter } from 'src/utils/utils'

type OrderDetailProps = {
    data: OrderDetailResponse
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const OrderDetail = ({ open, setOpen, data }: OrderDetailProps) => {
    const productDetailList = useQueries({
        queries: data.ProductOrder.map((item) => {
            return {
                queryKey: ['productDetail', item.productId],
                queryFn: ProductApi.getProductDetail(item.productId)
            }
        }),
        combine: (result) =>
            result.map((item, idx) => {
                let productDetail = item.data?.data?.result
                let { id, orderId, ...rest } = data.ProductOrder[idx]
                return {
                    ...rest,
                    name: productDetail?.name || '',
                    image: productDetail?.image || ''
                }
            })
    })

    const columns: ColumnDef<OrderDetailTable>[] = useMemo(() => {
        return [
            {
                accessorKey: 'Hình ảnh',
                header: () => {
                    return (
                        <div className='flex items-center justify-evenly max-w-42'>
                            Hình ảnh
                            <BiSolidSortAlt />
                        </div>
                    )
                },
                cell: ({ row }) => (
                    <Flex justify={'center'}>
                        <Avatar loading='lazy' size={'5'} fallback={'product_detail_img'} src={row.original.image} />
                    </Flex>
                )
            },
            {
                accessorKey: 'Tên sản phẩm',
                header: () => {
                    return (
                        <div className='flex items-center justify-evenly max-w-56'>
                            Tên sản phẩm
                            <BiSolidSortAlt />
                        </div>
                    )
                },
                cell: ({ row }) => (
                    <Flex justify={'center'}>
                        <Link
                            to={`http://localhost:3000/${removeSpecialCharacter(row.original.name)}-0-${row.original.productId}`}
                            className='!max-w-32 line-clamp-3'
                            target='_blank'
                        >
                            {row.original.name}
                        </Link>
                    </Flex>
                )
            },
            {
                accessorKey: 'Mã đơn',
                header: () => {
                    return (
                        <div className='flex items-center justify-evenly max-w-42'>
                            Mã sản phẩm
                            <BiSolidSortAlt />
                        </div>
                    )
                },
                cell: ({
                    row: {
                        original: { productId }
                    }
                }) => (
                    <Flex justify={'center'} align={'center'}>
                        <CopyText text={productId} classNames='w-20' />
                    </Flex>
                )
            },
            {
                accessorKey: 'Số lượng mua',
                header: () => {
                    return (
                        <div className='flex items-center justify-evenly gap-x-2'>
                            Số lượng mua
                            <BiSolidSortAlt />
                        </div>
                    )
                },
                cell: ({ row }) => (
                    <div className='text-center'>
                        <Text>{row.original.quantity}</Text>
                    </div>
                )
            },
            {
                accessorKey: 'Giá trước giảm',
                header: () => {
                    return (
                        <div className='flex items-center justify-evenly gap-x-2'>
                            Giá trước giảm
                            <BiSolidSortAlt />
                        </div>
                    )
                },
                cell: ({ row }) => (
                    <div className='text-center'>
                        <Text>{row.original.priceBefore}</Text>
                    </div>
                )
            },
            {
                accessorKey: 'Giá mua sau cùng',
                header: () => {
                    return (
                        <div className='flex items-center justify-evenly gap-x-2'>
                            Giá mua sau cùng
                            <BiSolidSortAlt />
                        </div>
                    )
                },
                cell: ({ row }) => (
                    <div className='text-center'>
                        <Text>{convertCurrentcy(row.original.priceAfter)}</Text>
                    </div>
                )
            }
        ]
    }, [])

    return (
        <AlertDialog.Root open={open} onOpenChange={setOpen}>
            <AlertDialog.Content maxWidth='800px' className='!rounded-8 space-y-4'>
                <AlertDialog.Title>Thông tin chi tiết đơn hàng</AlertDialog.Title>
                <DataList.Root>
                    <DataList.Item align='center'>
                        <DataList.Label minWidth={'200px'}>Trạng thái</DataList.Label>
                        <DataList.Value>
                            <Badge color={(OrderStatus?.[data.status]?.color as any) || 'red'} size={'3'}>
                                {OrderStatus?.[data.status]?.label}
                            </Badge>
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label>Mã đơn</DataList.Label>
                        <DataList.Value>
                            <CopyText text={data.id} />
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label>Người nhận</DataList.Label>
                        <DataList.Value>{data.OrderShipping[0].name}</DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label>Địa chỉ giao hàng</DataList.Label>
                        <DataList.Value className='line-clamp-3'>{data.OrderShipping[0].address}</DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label>Hình thức thanh toán</DataList.Label>
                        <DataList.Value className='line-clamp-3'>
                            {payment_label?.[data.payment as keyof typeof payment_label]}
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label>Tổng tiền</DataList.Label>
                        <DataList.Value className='line-clamp-3'>{convertCurrentcy(data.total)}</DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label>Giảm giá</DataList.Label>
                        <DataList.Value className='line-clamp-3'>{convertCurrentcy(data.discount)}</DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label>Thực nhận</DataList.Label>
                        <DataList.Value className='line-clamp-3'>{convertCurrentcy(data.pay)}</DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label>Voucher ID</DataList.Label>
                        <DataList.Value>
                            {data?.OrderVoucher?.[0] ? (
                                <CopyText text={data?.OrderVoucher?.[0]?.voucherId} />
                            ) : (
                                <Text>_</Text>
                            )}
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label>Thời gian tạo</DataList.Label>
                        <DataList.Value className='line-clamp-3'>
                            {format(data.createdAt, formatDefault)}
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label>Cập nhật cuối</DataList.Label>
                        <DataList.Value className='line-clamp-3'>
                            {data?.updatedAt ? format(data.updatedAt, formatDefault) : '_'}
                        </DataList.Value>
                    </DataList.Item>
                </DataList.Root>
                <Table<OrderDetailTable> columns={columns} data={productDetailList} className='min-w-[1200px]' />
                <Flex gap='3' mt='4' justify='end'>
                    <AlertDialog.Cancel>
                        <Button variant='outline' color='blue'>
                            Trở về
                        </Button>
                    </AlertDialog.Cancel>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    )
}

export default OrderDetail
