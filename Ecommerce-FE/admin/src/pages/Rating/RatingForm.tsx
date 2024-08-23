import { AlertDialog, Avatar, Box, Button, Flex, Grid, Skeleton, Spinner, Text, TextArea } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { useContext } from 'react'
import { RatingAPI } from 'src/apis/rating.api'
import RatingReadOnly from 'src/components/Rating/RatingReadOnly'
import { formatDefault } from 'src/constants/date.constants'
import { rating_permission } from 'src/constants/role'
import { AppContext } from 'src/contexts/AppContext'
import { RatingTableType } from 'src/types/rating.type'

type ReplyRatingCreateProps = {
    rating: RatingTableType
    user: { full_name: string; email: string; image: string; id: string }
    openReplyRating: boolean
    setOpenReplyRating: React.Dispatch<React.SetStateAction<boolean>>
    handleComment: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    isCreating: boolean
    files: {
        files: Map<number, File>
        primary?: number
    }
    setFiles: React.Dispatch<
        React.SetStateAction<{
            files: Map<number, File>
            primary?: number
        }>
    >
    setUserId: React.Dispatch<React.SetStateAction<string>>
    onCreateReplyRating: () => void
}

function ReplyRatingCreate({
    openReplyRating,
    setOpenReplyRating,
    handleComment,
    files,
    setFiles,
    isCreating,
    setUserId,
    rating,
    user,
    onCreateReplyRating
}: ReplyRatingCreateProps) {
    const { isCan } = useContext(AppContext)
    const { data: urls } = useQuery({
        queryKey: ['rating_detail', rating.id],
        queryFn: RatingAPI.getMaterialOfRating(rating.id),
        select: (data) => data.data.result
    })
    let isDisable = !isCan.rating?.[rating_permission.reply]

    return (
        <AlertDialog.Root open={openReplyRating} onOpenChange={setOpenReplyRating}>
            <AlertDialog.Content maxWidth='600px' className='!rounded-8'>
                <form>
                    <div className='space-y-5'>
                        <AlertDialog.Title>Phản hồi đánh giá</AlertDialog.Title>
                        <Flex direction='column' gap='3'>
                            <Flex gap='3' align='center'>
                                <Avatar size='3' src={user.image} radius='full' fallback='T' />
                                <Box>
                                    <Text as='div' size='2' weight='bold'>
                                        {user.full_name}
                                    </Text>
                                    <Text as='div' size='2' color='gray'>
                                        {user.email}
                                    </Text>
                                </Box>
                            </Flex>
                            <Flex className='space-x-4 items-center'>
                                <RatingReadOnly ratingValue={rating.stars} />
                                <Text>{format(rating.createdAt, formatDefault)}</Text>
                            </Flex>
                            <TextArea disabled>{rating.comment}</TextArea>
                            <Grid columns={'4'}>
                                {urls
                                    ? urls.map((url, idx) => (
                                          <Avatar
                                              size={'7'}
                                              key={`rating_${idx}`}
                                              fallback={rating.userName}
                                              src={url}
                                          />
                                      ))
                                    : Array(4)
                                          .fill(0)
                                          .map((_) => (
                                              <Skeleton width={'100px'} height={'100px'} className='rounded-12' />
                                          ))}
                            </Grid>
                        </Flex>
                        <Flex direction='column' gap='3'>
                            <Text as='p'>Phản hồi khách hàng (có thể không cần phản hồi)</Text>
                            <Box maxWidth='100%'>
                                {
                                    [
                                        <TextArea
                                            onChange={handleComment}
                                            size='3'
                                            rows={4}
                                            placeholder='Thêm phản hồi'
                                        />,
                                        <TextArea
                                            disabled
                                            size='3'
                                            placeholder='Thêm phản hồi'
                                            defaultValue={rating.comment}
                                        />
                                    ][+rating.isReply]
                                }
                            </Box>
                        </Flex>
                        <Flex gap='3' mt='4' justify='end'>
                            <AlertDialog.Cancel>
                                <Button type='button' className='bg-red text-white' onClick={() => setUserId('')}>
                                    Trở về
                                </Button>
                            </AlertDialog.Cancel>
                            {!rating.isReply && (
                                <Button
                                    type='button'
                                    onClick={isDisable ? undefined : onCreateReplyRating}
                                    className='bg-blue text-white'
                                    hidden={isDisable}
                                >
                                    {isCreating && <Spinner />}
                                    Lưu Phản hồi
                                </Button>
                            )}
                        </Flex>
                    </div>
                </form>
            </AlertDialog.Content>
        </AlertDialog.Root>
    )
}

export default ReplyRatingCreate
