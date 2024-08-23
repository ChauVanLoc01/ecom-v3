import { Flex, IconButton, Text } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'
import { Cell, Pie, PieChart, Tooltip } from 'recharts'
import { RatingAPI } from 'src/apis/rating.api'
import AnalyticSelect from 'src/components/AnalyticState/AnalyticSelect'
import useAnalytic from 'src/hooks/useAnalytic'
import { convertCurrentcy } from 'src/utils/utils'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}

const Rating = () => {
    const { type, setType } = useAnalytic()
    const widthRef = useRef<null | HTMLDivElement>(null)
    const [size, setSize] = useState<number>(300)

    const { data, refetch } = useQuery({
        queryKey: ['analytics_rating'],
        queryFn: RatingAPI.analyticRatingAdmin(type),
        select: (result) => {
            let { total, average, ...rest } = result.data.result
            return {
                data: Object.keys(rest).map((key) => ({ label: key, value: rest[key as keyof typeof rest] })),
                total,
                average
            }
        },
        staleTime: 1000 * 60 * 5
    })

    console.log('rating', data)

    useEffect(() => {
        if (widthRef.current) {
            setSize(widthRef.current.offsetWidth - 32)
        }
    }, [])

    useEffect(() => {
        refetch()
    }, [type])

    return (
        <div className='bg-white p-[16px] rounded-8 border-border/20 border shadow-sm space-y-3' ref={widthRef}>
            <Flex justify={'between'} align={'center'}>
                <Flex align={'center'} gapX={'4'}>
                    <IconButton variant='soft'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='w-5 h-5 stroke-2'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z'
                            />
                        </svg>
                    </IconButton>
                    <Text weight={'medium'} size={'4'}>
                        Đánh giá
                    </Text>
                </Flex>
                <AnalyticSelect setAnalyticType={setType} />
            </Flex>
            <Flex gapX={'6'}>
                <Flex gapX={'3'}>
                    <Text>Tổng đánh giá:</Text>
                    <Text>{convertCurrentcy(data?.total || 0, false)}</Text>
                </Flex>
                <Flex gapX={'3'}>
                    <Text>Trung bình:</Text>
                    <Text>{(data?.average || 0).toFixed(2)}</Text>
                </Flex>
            </Flex>
            <div>
                {data && size && (
                    <PieChart width={size} height={250}>
                        <Pie
                            data={data.data}
                            cx='50%'
                            cy='50%'
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill='#8884d8'
                            dataKey='value'
                        >
                            {data.data.map((_, index) => (
                                <Cell key={`rating-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip key='label' />
                    </PieChart>
                )}
            </div>
        </div>
    )
}

export default Rating
