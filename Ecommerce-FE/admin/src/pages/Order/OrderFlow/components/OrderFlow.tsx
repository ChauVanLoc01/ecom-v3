import { Avatar, Flex, Grid, Text, TextArea } from '@radix-ui/themes'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { BiSolidSortAlt } from 'react-icons/bi'
import { FaQuestion } from 'react-icons/fa6'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import SimpleScrollbar from 'simplebar-react'
import Table from 'src/components/Table'
import { formatDefault } from 'src/constants/date.constants'
import { order_next_flow, OrderFlowEnum, OrderFlowLable } from 'src/constants/order.status'
import { OrderDetailResponse, OrderRefund } from 'src/types/order.type'
import { cn } from 'src/utils/utils'
import OrderFlowForm from './OrderFlowForm'
import ProductRefundImage from './ProductRefundImage'
import CopyText from 'src/components/CopyText/CopyText'

type OrderFlowProps = {
    orderData: OrderDetailResponse
    orderRefunds: OrderRefund[]
    updateStatusOfOrder: (id: number, status: OrderFlowEnum, note?: string, orderRefundId?: string) => () => void
    updating: {
        id?: number
        isUpdating: boolean
    }
}

const OrderFlow = ({ orderData, updateStatusOfOrder, orderRefunds, updating }: OrderFlowProps) => {
    let { OrderFlow, ProductOrder, OrderRefund } = orderData

    let columns: ColumnDef<OrderDetailResponse['OrderRefund'][number]['ProductOrderRefund'][number]>[] = [
        {
            accessorKey: 'Image',
            header: () => {
                return (
                    <div className='flex items-center justify-center gap-x-1'>
                        Hình ảnh
                        <BiSolidSortAlt />
                    </div>
                )
            },
            cell: ({
                row: {
                    original: { productOrderId }
                }
            }) => (
                <Flex justify={'center'} align={'center'}>
                    <ProductRefundImage ProductOrder={ProductOrder} productOrderId={productOrderId} />
                </Flex>
            )
        },
        {
            accessorKey: 'Id',
            header: () => {
                return (
                    <div className='flex items-center justify-center gap-x-1'>
                        Mã sản phẩm
                        <BiSolidSortAlt />
                    </div>
                )
            },
            cell: ({
                row: {
                    original: { productOrderId }
                }
            }) => {
                let productId = ProductOrder.find((product) => product.id === productOrderId)?.productId
                return (
                    <Flex justify={'center'} align={'center'}>
                        <CopyText text={productId || ''} classNames='w-20' />
                    </Flex>
                )
            }
        },
        {
            accessorKey: 'Số lượng',
            header: () => {
                return (
                    <div className='flex items-center justify-center gap-x-1 mx-auto'>
                        Số lượng
                        <BiSolidSortAlt />
                    </div>
                )
            },
            cell: ({ row: { original } }) => (
                <Flex justify={'center'} align={'center'} className='text-center'>
                    <Text>{original.quantity}</Text>
                </Flex>
            )
        }
    ]

    return (
        <SimpleScrollbar style={{ maxHeight: `450px`, width: '100%' }} forceVisible={false}>
            <VerticalTimeline layout='1-column-left' lineColor='#7BB2DE' className='!py-2 !pr-5 !space-y-4'>
                {OrderFlow.sort((a, b) => (new Date(a.createdAt) as any) - (new Date(b.createdAt) as any)).map(
                    (flow, idx) => {
                        let isLast = OrderFlow.length === idx + 1
                        let isRequestRefund = flow.status === OrderFlowEnum.REQUEST_REFUND
                        let orderRefund = isRequestRefund
                            ? orderData?.OrderRefund.find((refund) => flow?.orderRefundId === refund.id)
                            : undefined
                        return (
                            <VerticalTimelineElement
                                key={flow.id}
                                className='vertical-timeline-element--work !mb-0'
                                position='right'
                                contentStyle={{ background: '#91A4D0', color: '#FBF9F9' }}
                                contentArrowStyle={{ borderRight: '7px solid  #91A4D0' }}
                                date={format(flow?.createdAt, formatDefault)}
                                dateClassName='!pb-0 text-[#FBF9F9]'
                                iconStyle={{
                                    background: isLast ? '#DE5B18' : '#91A4D0'
                                }}
                                iconClassName={cn(
                                    '!size-4 !translate-x-2/3 !translate-y-2/3 !flex justify-center items-center'
                                )}
                            >
                                <h3>{OrderFlowLable[flow.status as keyof typeof OrderFlowLable]}</h3>
                                {!isRequestRefund && (
                                    <div>
                                        <Text size={'2'}>Ghi Chú</Text>
                                        <TextArea
                                            value={flow?.note}
                                            autoComplete='none'
                                            translate='no'
                                            className='!bg-[#FAF9FA]'
                                            disabled
                                        />
                                    </div>
                                )}

                                {isRequestRefund && orderRefund && (
                                    <div className='space-y-3 mt-3'>
                                        <Flex direction={'column'} className='space-y-1'>
                                            <Text size={'2'}>Mô tả chi tiết</Text>
                                            <TextArea disabled value={orderRefund?.description} />
                                        </Flex>
                                        <Table<OrderDetailResponse['OrderRefund'][number]['ProductOrderRefund'][number]>
                                            columns={columns}
                                            data={orderRefund.ProductOrderRefund}
                                            className='bg-[#FAF9FA] rounded-6 overflow-hidden w-[500px]'
                                        />
                                        <Grid columns={'4'} gap={'3'}>
                                            {orderRefund.RefundMaterial.map(({ url }) => (
                                                <Avatar
                                                    fallback='Material'
                                                    src={url}
                                                    className='!w-full !h-auto object-cover flex-grow'
                                                />
                                            ))}
                                        </Grid>
                                    </div>
                                )}
                            </VerticalTimelineElement>
                        )
                    }
                )}
                {order_next_flow?.[OrderFlow[OrderFlow.length - 1].status as keyof typeof order_next_flow] &&
                    order_next_flow[OrderFlow[OrderFlow.length - 1].status as keyof typeof order_next_flow].map(
                        (new_flow, id) => (
                            <VerticalTimelineElement
                                key={new_flow}
                                className='vertical-timeline-element--work !mb-0'
                                position='right'
                                contentStyle={{ background: '#2989C3', color: '#FAF9FA' }}
                                contentArrowStyle={{ borderRight: '7px solid  #2989C3' }}
                                dateClassName='!pb-0 text-[#FAF9FA]'
                                iconStyle={{ background: 'white' }}
                                iconClassName={cn(
                                    '!size-4 !translate-x-1/2 !translate-y-1/2 !flex justify-center items-center'
                                )}
                                icon={<FaQuestion />}
                            >
                                <OrderFlowForm
                                    key={`next_flow_${id}`}
                                    id={id}
                                    new_flow={new_flow}
                                    orderRefunds={orderRefunds}
                                    updateStatusOfOrder={updateStatusOfOrder}
                                    updating={updating}
                                />
                            </VerticalTimelineElement>
                        )
                    )}
            </VerticalTimeline>
        </SimpleScrollbar>
    )
}

export default OrderFlow
