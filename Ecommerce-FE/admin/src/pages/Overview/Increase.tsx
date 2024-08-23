import { Flex, IconButton, Text } from '@radix-ui/themes'
import { useEffect, useRef, useState } from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import AnalyticSelect from 'src/components/AnalyticState/AnalyticSelect'
import useAnalytic from 'src/hooks/useAnalytic'

const data = [
    {
        month: 'Tháng 1',
        percent: 3.2
    },
    {
        month: 'Tháng 2',
        percent: 2.8
    },
    {
        month: 'Tháng 3',
        percent: 4.0
    },
    {
        month: 'Tháng 4',
        percent: 3.5
    },
    {
        month: 'Tháng 5',
        percent: 5.0
    },
    {
        month: 'Tháng 6',
        percent: 4.3
    },
    {
        month: 'Tháng 7',
        percent: 3.9
    },
    {
        month: 'Tháng 8',
        percent: 4.1
    },
    {
        month: 'Tháng 9',
        percent: 3.7
    },
    {
        month: 'Tháng 10',
        percent: 4.5
    },
    {
        month: 'Tháng 11',
        percent: 4.0
    },
    {
        month: 'Tháng 12',
        percent: 5.2
    }
]

const Increase = () => {
    const { type, setType } = useAnalytic()
    const widthRef = useRef<null | HTMLDivElement>(null)
    const [size, setSize] = useState<number>(300)
    useEffect(() => {
        if (widthRef?.current) {
            setSize(widthRef.current?.clientWidth)
        }
    }, [widthRef])

    return (
        <div className='bg-white p-[16px] rounded-8 border-border/20 border shadow-sm space-y-3'>
            <Flex justify={'between'} align={'center'}>
                <Flex align={'center'} gapX={'4'}>
                    <IconButton variant='soft'>
                        <svg
                            className='w-5 h-5 stroke-2'
                            viewBox='0 0 15 15'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z'
                                fill='currentColor'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                            ></path>
                        </svg>
                    </IconButton>
                    <Text weight={'medium'} size={'4'}>
                        Đơn Hàng
                    </Text>
                </Flex>
                <AnalyticSelect setAnalyticType={setType} />
            </Flex>
            <LineChart
                width={500}
                height={200}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='month' />
                <YAxis yAxisId='left' />
                <YAxis yAxisId='right' orientation='right' />
                <Tooltip />
                <Line yAxisId='left' type='monotone' dataKey='percent' stroke='#8884d8' activeDot={{ r: 8 }} />
                <Line yAxisId='right' type='monotone' dataKey='percent' stroke='#82ca9d' />
            </LineChart>
        </div>
    )
}

export default Increase
