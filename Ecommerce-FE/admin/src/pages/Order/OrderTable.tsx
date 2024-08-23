import { CounterClockwiseClockIcon, InfoCircledIcon } from '@radix-ui/react-icons'
import { Badge, Flex, IconButton, Text, Tooltip } from '@radix-ui/themes'
import { QueryObserverResult, RefetchOptions, useMutation, useQuery } from '@tanstack/react-query'
import { ColumnDef } from '@tanstack/react-table'
import { isAxiosError } from 'axios'
import { format, formatDistance } from 'date-fns'
import { vi } from 'date-fns/locale'
import { useContext, useEffect, useState } from 'react'
import { BiSolidSortAlt } from 'react-icons/bi'
import { toast } from 'sonner'
import { OrderApi } from 'src/apis/order.api'
import CopyText from 'src/components/CopyText/CopyText'
import Table from 'src/components/Table'
import { OrderFlowEnum, OrderStatus } from 'src/constants/order.status'
import { order_permission } from 'src/constants/role'
import { AppContext } from 'src/contexts/AppContext'
import { Order, OrderQuery } from 'src/types/order.type'
import { convertCurrentcy } from 'src/utils/utils'
import OrderDetail from './OrderDetail'
import OrderChangeStatus from './OrderFlow/OrderStatus'

type OrderTableProps = {
    data: Order[]
    orderListRefetch: (options?: RefetchOptions) => Promise<
        QueryObserverResult<
            {
                data: Order[]
                query: Omit<OrderQuery, 'page'> & {
                    page: number
                    page_size: number
                }
            },
            Error
        >
    >
    analyticOrderStoreRefetching: (options?: RefetchOptions) => Promise<
        QueryObserverResult<
            {
                all: number
                success: number
                waiting_confirm: number
                shipping: number
                cancel: number
            },
            Error
        >
    >
}

const OrderTable = ({ data, orderListRefetch, analyticOrderStoreRefetching }: OrderTableProps) => {
    const { isCan } = useContext(AppContext)
    const [openDetail, setOpenDetail] = useState<boolean>(false)
    const [openChangeStatus, setOpenChangeStatus] = useState<boolean>(false)
    const [choosedProduct, setChoosedProduct] = useState<string>('')
    const [updating, setUpdating] = useState<{ id?: number; isUpdating: boolean }>({ isUpdating: false })

    const { refetch: orderDetailRefetch, data: orderDetailData } = useQuery({
        queryKey: ['orderDetail', choosedProduct],
        queryFn: () => OrderApi.getOrderDetail(choosedProduct),
        staleTime: 1000 * 60 * 3,
        select: (data) => data.data.result
    })

    const { mutateAsync: updateOrderStatusMutation } = useMutation({
        mutationFn: OrderApi.updateStatusOrder(choosedProduct),
        onSuccess: () => {
            toast.success('Cập nhật trạng thái đơn hàng thành công')
            handleFetchAll()
        },
        onError: (err) => {
            if (isAxiosError(err)) {
                toast.error(err.response?.data?.message || 'Cập nhật thất bại')
            }
        }
    })

    const updateStatusOfOrder = (id: number, status: OrderFlowEnum, note?: string, orderRefundId?: string) => () => {
        setUpdating({ id, isUpdating: true })
        updateOrderStatusMutation({
            status,
            note,
            orderRefundId
        }).then(() => setUpdating({ id, isUpdating: false }))
    }

    const handleChooseProduct = (id: string) => () => {
        setChoosedProduct(id)
    }

    const handleOpenOrderStatus = (type: 'DETAIL' | 'STATUS') => () => {
        switch (type) {
            case 'DETAIL':
                setOpenDetail(true)
                break
            default:
                setOpenChangeStatus(true)
                break
        }
    }

    const handleFetchData = async () => await Promise.all([orderDetailRefetch()])

    const handleFetchAll = async () => {
        await Promise.all([orderListRefetch(), orderDetailRefetch(), analyticOrderStoreRefetching()])
    }

    const columns: ColumnDef<Order>[] = [
        {
            accessorKey: 'Mã đơn',
            header: () => {
                return (
                    <Flex justify={'center'} align={'center'}>
                        <div className='flex justify-center items-center gap-x-2'>
                            Mã đơn
                            <BiSolidSortAlt />
                        </div>
                    </Flex>
                )
            },
            cell: ({ row }) => (
                <Flex justify={'center'} align={'center'}>
                    <CopyText text={row.original.id} />
                </Flex>
            )
        },
        {
            accessorKey: 'Trạng thái',
            header: () => {
                return (
                    <div className='text-center'>
                        <Flex className='space-x-2 inline-flex items-center'>
                            <Text>Trạng thái</Text>
                            <BiSolidSortAlt />
                        </Flex>
                    </div>
                )
            },
            cell: ({ row }) => (
                <div className='text-center'>
                    <Badge color={(OrderStatus?.[row.original.status]?.color as any) || 'red'} size={'3'}>
                        {OrderStatus?.[row.original.status]?.label}
                    </Badge>
                </div>
            )
        },
        {
            accessorKey: 'Tổng tiền',
            header: () => {
                return (
                    <div className='flex items-center justify-evenly gap-x-2'>
                        Tổng tiền
                        <BiSolidSortAlt />
                    </div>
                )
            },
            cell: ({ row }) => (
                <div className='text-center'>
                    <Text>{convertCurrentcy(row.original.total)}</Text>
                </div>
            )
        },
        {
            accessorKey: 'Giảm giá',
            header: () => {
                return (
                    <div className='flex items-center justify-evenly gap-x-2'>
                        Giảm giá
                        <BiSolidSortAlt />
                    </div>
                )
            },
            cell: ({ row }) => (
                <div className='text-center'>
                    <Text>{convertCurrentcy(row.original.discount)}</Text>
                </div>
            )
        },
        {
            accessorKey: 'Tổng thanh toán',
            header: () => {
                return (
                    <div className='flex items-center justify-evenly gap-x-2'>
                        Tổng thanh toán
                        <BiSolidSortAlt />
                    </div>
                )
            },
            cell: ({ row }) => (
                <div className='text-center'>
                    <Text>{convertCurrentcy(row.original.pay)}</Text>
                </div>
            )
        },
        {
            accessorKey: 'Thời gian tạo',
            header: () => {
                return (
                    <div className='flex items-center justify-evenly gap-x-2'>
                        Thời gian tạo
                        <BiSolidSortAlt />
                    </div>
                )
            },
            cell: ({ row }) => (
                <div className='lowercase flex flex-col items-center'>
                    <span className='italic text-gray-400 text-[14px]'>
                        {formatDistance(row.original.createdAt, new Date().toISOString(), {
                            addSuffix: true,
                            locale: vi
                        })}
                    </span>
                    <span>{format(row.original.createdAt, 'hh:mm dd-MM-yyyy')}</span>
                </div>
            )
        },
        {
            accessorKey: ' ',
            cell: ({ row }) => (
                <Flex gapX={'2'} align={'center'}>
                    <Tooltip content='Xem chi tiết'>
                        <IconButton
                            hidden={!isCan?.order?.[order_permission.detail]}
                            variant='soft'
                            onMouseOver={handleChooseProduct(row.original.id)}
                            onClick={handleOpenOrderStatus('DETAIL')}
                        >
                            <InfoCircledIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip content='Trạng thái đơn hàng'>
                        <IconButton
                            hidden={!isCan?.order?.[order_permission.update]}
                            variant='soft'
                            color='yellow'
                            onMouseEnter={handleChooseProduct(row.original.id)}
                            onClick={handleOpenOrderStatus('STATUS')}
                        >
                            <CounterClockwiseClockIcon />
                        </IconButton>
                    </Tooltip>
                </Flex>
            )
        }
    ]

    useEffect(() => {
        if (choosedProduct) {
            handleFetchData()
        }
    }, [choosedProduct])

    useEffect(() => {
        choosedProduct && orderDetailRefetch()
    }, [JSON.stringify(data)])

    return (
        <>
            <Table<Order> columns={columns} data={data} tableMaxHeight='500px' className='w-[1500px]' />
            {orderDetailData && openDetail && (
                <OrderDetail open={openDetail} setOpen={setOpenDetail} data={orderDetailData} />
            )}
            {orderDetailData && openChangeStatus && (
                <OrderChangeStatus
                    open={openChangeStatus}
                    setOpen={setOpenChangeStatus}
                    handleFetchAll={handleFetchAll as any}
                    orderDetailData={orderDetailData}
                    updateStatusOfOrder={updateStatusOfOrder}
                    updating={updating}
                />
            )}
        </>
    )
}

export default OrderTable
