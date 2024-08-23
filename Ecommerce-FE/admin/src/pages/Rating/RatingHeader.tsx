import { Flex, Kbd, Text } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { RatingAPI } from 'src/apis/rating.api'
import { AppContext } from 'src/contexts/AppContext'

const RatingHeader = () => {
    const { store } = useContext(AppContext)
    const { data: analytics } = useQuery({
        queryKey: ['rating-analytics'],
        queryFn: RatingAPI.ratingAnalytic(store?.id || ''),
        select: (result) => result.data,
        staleTime: 1000 * 60 * 5
    })
    return (
        <Flex gapX={'5'} align={'center'}>
            <Text>
                Tổng: <Kbd className='ml-2'>{analytics?.total}</Kbd>
            </Text>
            <Text>
                Đã phản hồi: <Kbd className='ml-2'>{analytics?.reply}</Kbd>
            </Text>
            <Text>
                Chờ phản hồi: <Kbd className='ml-2'>{analytics?.not_reply}</Kbd>
            </Text>
        </Flex>
    )
}

export default RatingHeader
