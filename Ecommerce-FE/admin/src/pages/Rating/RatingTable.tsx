import { InfoCircledIcon, PaperPlaneIcon } from '@radix-ui/react-icons'
import { Badge, Flex, IconButton, Spinner, Text, Tooltip } from '@radix-ui/themes'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ColumnDef } from '@tanstack/react-table'
import { format, formatDistance } from 'date-fns'
import { vi } from 'date-fns/locale'
import { useContext, useRef, useState } from 'react'
import { BiSolidSortAlt } from 'react-icons/bi'
import { toast } from 'sonner'
import { RatingAPI } from 'src/apis/rating.api'
import CopyText from 'src/components/CopyText/CopyText'
import Table from 'src/components/Table'
import { RatingStatus } from 'src/constants/rating.constants'
import { rating_permission } from 'src/constants/role'
import { AppContext } from 'src/contexts/AppContext'
import { RatingTableType } from 'src/types/rating.type'
import ReplyRatingCreate from './RatingForm'

type RatingTableProps = {
    data: RatingTableType[]
    refetchDataAll: () => Promise<any>
}

const RatingTable = ({ data, refetchDataAll }: RatingTableProps) => {
    const { isCan } = useContext(AppContext)
    const [isReplyRating, setIsReplyRating] = useState<boolean>(false)
    const [userId, setUserId] = useState<string>('')
    const commentRef = useRef<() => void>()
    const [files, setFiles] = useState<{ files: Map<number, File>; primary?: number }>({ files: new Map() })
    const [openReplyRating, setOpenReplyRating] = useState<boolean>(false)
    const [isCreating, setIsCreating] = useState<boolean>(false)
    const [selectedRating, setSelectedRating] = useState<RatingTableType | undefined>(undefined)
    const [replyData, setReplyData] = useState<{ parentRatingId: string; comment: string }>({
        parentRatingId: '',
        comment: ''
    })

    const { data: userProfileDetail, isFetching } = useQuery({
        queryKey: ['user-profile-in-rating', userId],
        queryFn: RatingAPI.getProfileUserInRating(userId),
        enabled: !!userId,
        staleTime: 1000 * 60 * 3,
        select: (data) => data.data.result
    })

    const { refetch: ratingListRefetch } = useQuery({
        queryKey: ['ratingList', { limit: import.meta.env.VITE_LIMIT }],
        queryFn: () => RatingAPI.getAllRating({ limit: import.meta.env.VITE_LIMIT }),
        staleTime: 1000 * 60 * 2
    })

    const { mutate: createReplyRating } = useMutation({
        mutationFn: RatingAPI.replyRating,
        onSuccess: async () => {
            toast.success('Đánh giá thành công')
            setIsReplyRating(false)
            setTimeout(() => setOpenReplyRating(false), 500)
            await refetchDataAll()
        },
        onError: () => {
            setIsReplyRating(false)
            toast.error('Đã có lỗi xảy ra')
        }
    })

    const handleOpenReplyForm = (parentRatingId: string, row: RatingTableType) => () => {
        setOpenReplyRating(true)
        setReplyData((pre) => ({
            ...pre,
            parentRatingId
        }))
        setSelectedRating(row)
    }

    const handleChangeComment = (comment: string) => () => setReplyData((pre) => ({ ...pre, comment }))

    const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let value = e.target.value
        if (commentRef.current) {
            document.removeEventListener('focusout', commentRef.current)
        }
        commentRef.current = handleChangeComment(value)
        document.addEventListener('focusout', commentRef.current)
    }

    const onMouseEnter = (id: string) => () => setUserId(id)

    const onCreateReplyRating = () => {
        if (!replyData.comment) {
            toast.warning('Nhận xét là bắt buộc')
            return
        }
        setIsCreating(true)
        createReplyRating({ parentRatingId: replyData.parentRatingId, detail: replyData.comment })
    }

    const columns: ColumnDef<RatingTableType>[] = [
        {
            accessorKey: 'detail',
            header: () => {
                return (
                    <Flex align={'center'} justify={'center'} className='space-x-2'>
                        <Text>Nội dung</Text>
                        <BiSolidSortAlt />
                    </Flex>
                )
            },
            cell: ({ row }) => (
                <Flex justify={'center'}>
                    <div className='max-w-32 text-center'>
                        <Text className='mx-auto'>{row.original.comment}</Text>
                    </div>
                </Flex>
            )
        },
        {
            accessorKey: 'status',
            header: () => {
                return (
                    <Flex align={'center'} justify={'center'} className='space-x-2'>
                        <Text>Trạng thái</Text>
                        <BiSolidSortAlt />
                    </Flex>
                )
            },
            cell: ({ row }) => (
                <Flex justify={'center'} align={'center'}>
                    <Badge color={RatingStatus[Number(row.original.isReply)].color as any} className='mx-auto'>
                        {RatingStatus[Number(row.original.isReply)].lable}
                    </Badge>
                </Flex>
            )
        },
        {
            accessorKey: 'status',
            header: () => {
                return (
                    <Flex align={'center'} justify={'center'} className='space-x-2 max-w-32 mx-auto'>
                        <Text>Mã đơn hàng</Text>
                        <BiSolidSortAlt />
                    </Flex>
                )
            },
            cell: ({ row }) => (
                <Flex justify={'center'} align={'center'}>
                    <CopyText text={row.original.orderId} />
                </Flex>
            )
        },
        {
            accessorKey: 'createdAt',
            header: () => (
                <Flex align={'center'} justify={'center'} className='space-x-2'>
                    <Text>Thời gian tạo</Text>
                    <BiSolidSortAlt />
                </Flex>
            ),
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
            accessorKey: 'createdAt',
            header: () => (
                <Flex align={'center'} justify={'center'} className='space-x-2'>
                    <Text>Cập nhật lúc</Text>
                    <BiSolidSortAlt />
                </Flex>
            ),
            cell: ({ row }) => (
                <div className='lowercase flex flex-col items-center'>
                    {row.original?.updatedAt ? (
                        <div className='lowercase flex flex-col items-center'>
                            <span className='italic text-gray-400 text-[14px]'>
                                {formatDistance(row.original.updatedAt, new Date().toISOString(), {
                                    addSuffix: true,
                                    locale: vi
                                })}
                            </span>
                            <span>{format(row.original.updatedAt, 'hh:mm dd-MM-yyyy')}</span>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            )
        },
        {
            accessorKey: ' ',
            cell: ({ row }) => (
                <Flex gapX={'2'} align={'center'}>
                    <Tooltip content={['Phản hồi', 'Xem chi tiết'][+row.original.isReply]}>
                        <IconButton
                            variant='soft'
                            color={row.original.isReply ? 'green' : 'orange'}
                            onClick={handleOpenReplyForm(row.original.id, row.original)}
                            onMouseEnter={onMouseEnter(row.original.createdBy)}
                            disabled={!isCan?.rating?.[rating_permission.detail]}
                        >
                            {
                                [
                                    isFetching && row.original.id === replyData.parentRatingId ? (
                                        <Spinner />
                                    ) : (
                                        <PaperPlaneIcon />
                                    ),
                                    <InfoCircledIcon />
                                ][+row.original.isReply]
                            }
                        </IconButton>
                    </Tooltip>
                </Flex>
            )
        }
    ]

    return (
        <div>
            <Table<RatingTableType> columns={columns} data={data} tableMaxHeight='500px' className='w-[1500px]' />
            {selectedRating && userProfileDetail && (
                <ReplyRatingCreate
                    rating={selectedRating}
                    user={userProfileDetail}
                    openReplyRating={openReplyRating}
                    setOpenReplyRating={setOpenReplyRating}
                    handleComment={handleComment}
                    files={files}
                    setFiles={setFiles}
                    isCreating={isCreating}
                    setUserId={setUserId}
                    onCreateReplyRating={onCreateReplyRating}
                />
            )}
        </div>
    )
}

export default RatingTable
