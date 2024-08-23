import { Flex, IconButton, Text } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import { user_api } from 'src/apis/user.api'
import AnalyticSelect from 'src/components/AnalyticState/AnalyticSelect'
import useAnalytic from 'src/hooks/useAnalytic'

const Customer = () => {
    const { type, setType } = useAnalytic()
    const widthRef = useRef<null | HTMLDivElement>(null)
    const [size, setSize] = useState<number>(0)

    const { data, refetch } = useQuery({
        queryKey: ['analytics_customer'],
        queryFn: user_api.analyticsOfUser(type),
        select: (result) => result.data.result,
        staleTime: 1000 * 60 * 5
    })

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
                        Người dùng
                    </Text>
                </Flex>
                <AnalyticSelect setAnalyticType={setType} />
            </Flex>
            <Flex gapX={'3'}>
                <Text>Tổng người dùng:</Text>
                <Text>{data?.total}</Text>
            </Flex>
            <div>
                {data && size && (
                    <BarChart
                        width={size}
                        height={250}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                        data={data.data}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='date' />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey='total' stackId='a' fill='#82ca9d' label={{ position: 'top' }} />
                    </BarChart>
                )}
            </div>
        </div>
    )
}

export default Customer
