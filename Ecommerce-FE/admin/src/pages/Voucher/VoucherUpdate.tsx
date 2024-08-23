import { yupResolver } from '@hookform/resolvers/yup'
import { Pencil1Icon } from '@radix-ui/react-icons'
import {
    AlertDialog,
    Button,
    DataList,
    Flex,
    IconButton,
    Select,
    Spinner,
    Text,
    TextArea,
    TextField,
    Tooltip
} from '@radix-ui/themes'
import { useMutation, useQuery } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { useContext, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { ProductApi } from 'src/apis/product.api'
import { VoucherApi } from 'src/apis/voucher.api'
import { DatePicker } from 'src/components/Shadcn/datePicker'
import { OBJECT, voucher_permission } from 'src/constants/role'
import { voucher_type, VoucherType } from 'src/constants/voucher.constant'
import { AppContext } from 'src/contexts/AppContext'
import { Category } from 'src/types/category.type'
import { Voucher } from 'src/types/voucher.type'
import { convertCurrentcy } from 'src/utils/utils'
import { update_voucher_schema, UpdateVoucher } from 'src/utils/voucher.schema'

type VoucherUpdateProps = {
    refetchDataAll: () => Promise<void>
    voucher: Voucher
}

const VoucherUpdate = ({ refetchDataAll, voucher }: VoucherUpdateProps) => {
    const { isCan, who } = useContext(AppContext)
    const [open, setOpen] = useState<boolean>(false)

    let { PriceConditionVoucher, CategoryConditionVoucher, ...rest } = voucher

    const {
        control,
        formState: { errors },
        handleSubmit,
        resetField
    } = useForm<UpdateVoucher>({
        resolver: yupResolver(update_voucher_schema),
        defaultValues: {
            ...rest,
            totalMin: PriceConditionVoucher?.totalMin,
            priceMin: PriceConditionVoucher?.priceMin,
            category: CategoryConditionVoucher?.categoryShortName
        }
    })

    const { data: categoriesData } = useQuery({
        queryKey: ['categories'],
        queryFn: ProductApi.getAllCategories,
        select: (data) => data.data.result
    })

    const { mutate: updateVoucherMutate, isPending: isCreateVoucherPending } = useMutation({
        mutationFn: VoucherApi.updateVoucher(voucher.id),
        onSuccess: () => {
            refetchDataAll()
            setOpen(false)
            toast.success('Cập nhật mã giảm giá thành công')
        },
        onError: (err) => {
            if (isAxiosError(err)) {
                toast.error(err?.response?.data?.message || 'Cập nhật mã giảm giá thất bại')
                return
            }
            toast.error('Lỗi cập nhật mã giảm giá')
        }
    })

    const onSubmit: SubmitHandler<UpdateVoucher> = (data) => {
        if (data.category == 'none') {
            data.category = ''
        }
        updateVoucherMutate(data)
    }

    return (
        <>
            <Tooltip content='Chỉnh sửa'>
                <IconButton
                    hidden={!isCan?.voucher?.[voucher_permission.update]}
                    onClick={() => setOpen(!open)}
                    variant='soft'
                    color='orange'
                    disabled={['CANCEL', 'SUCCESS'].includes(voucher.status)}
                >
                    <Pencil1Icon />
                </IconButton>
            </Tooltip>
            <AlertDialog.Root open={open} onOpenChange={setOpen}>
                <AlertDialog.Content maxWidth='600px' className='!rounded-8'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <AlertDialog.Title>Cập nhật mã giảm giá</AlertDialog.Title>
                        <DataList.Root>
                            <DataList.Item align='start'>
                                <DataList.Label minWidth='180px'>
                                    <Flex direction={'column'}>
                                        <Text>Mã code</Text>
                                        {errors.code && (
                                            <Text className='w-[170px]' color='red' size={'2'} align={'left'}>
                                                {errors.code.message}
                                            </Text>
                                        )}
                                    </Flex>
                                </DataList.Label>
                                <DataList.Value>
                                    <Controller
                                        control={control}
                                        name='code'
                                        render={({ field }) => (
                                            <TextField.Root
                                                color={errors.code ? 'red' : 'blue'}
                                                {...field}
                                                className='!flex-grow uppercase'
                                            />
                                        )}
                                    />
                                </DataList.Value>
                            </DataList.Item>
                            <DataList.Item align='start'>
                                <DataList.Label minWidth='180px'>
                                    <Flex direction={'column'}>
                                        <Text>Tiêu đề</Text>
                                        {errors.title && (
                                            <Text color={errors.title ? 'red' : 'blue'} size={'2'} align={'left'}>
                                                {errors.title.message}
                                            </Text>
                                        )}
                                    </Flex>
                                </DataList.Label>
                                <DataList.Value>
                                    <Controller
                                        control={control}
                                        name='title'
                                        render={({ field }) => (
                                            <TextField.Root
                                                {...field}
                                                color={errors.title ? 'red' : 'blue'}
                                                className='!flex-grow'
                                            />
                                        )}
                                    />
                                </DataList.Value>
                            </DataList.Item>
                            <DataList.Item align='start'>
                                <DataList.Label minWidth='180px'>
                                    <Flex direction={'column'}>
                                        <Text>Mô tả</Text>
                                        {errors.description && (
                                            <Text color={errors.description ? 'red' : 'blue'} size={'2'} align={'left'}>
                                                {errors.description.message}
                                            </Text>
                                        )}
                                    </Flex>
                                </DataList.Label>
                                <DataList.Value>
                                    <Controller
                                        control={control}
                                        name='description'
                                        render={({ field }) => (
                                            <TextArea
                                                color={errors.description ? 'red' : 'blue'}
                                                {...field}
                                                className='!flex-grow'
                                            />
                                        )}
                                    />
                                </DataList.Value>
                            </DataList.Item>
                            <DataList.Item align='start'>
                                <DataList.Label minWidth='180px'>
                                    <Flex direction={'column'}>
                                        <Text>% giảm</Text>
                                        {errors.percent && (
                                            <Text color={errors.percent ? 'red' : 'blue'} size={'2'} align={'left'}>
                                                {errors.percent.message}
                                            </Text>
                                        )}
                                    </Flex>
                                </DataList.Label>
                                <DataList.Value>
                                    <Controller
                                        control={control}
                                        name='percent'
                                        render={({ field }) => (
                                            <TextField.Root
                                                {...field}
                                                color={errors.percent ? 'red' : 'blue'}
                                                type='number'
                                                className='!flex-grow'
                                            />
                                        )}
                                    />
                                </DataList.Value>
                            </DataList.Item>
                            <DataList.Item align='start'>
                                <DataList.Label minWidth='180px'>
                                    <Flex direction={'column'}>
                                        <Text>Giảm tối đa</Text>
                                        {errors.maximum && (
                                            <Text color={errors.maximum ? 'red' : 'blue'} size={'2'} align={'left'}>
                                                {errors.maximum.message}
                                            </Text>
                                        )}
                                    </Flex>
                                </DataList.Label>
                                <DataList.Value>
                                    <Controller
                                        control={control}
                                        name='maximum'
                                        render={({ field }) => (
                                            <TextField.Root
                                                {...field}
                                                color={errors.maximum ? 'red' : 'blue'}
                                                type='number'
                                                className='!flex-grow'
                                            />
                                        )}
                                    />
                                </DataList.Value>
                            </DataList.Item>
                            <DataList.Item align='start'>
                                <DataList.Label minWidth='180px'>
                                    <Flex direction={'column'}>
                                        <Text>Số lượng</Text>
                                        {errors.initQuantity && (
                                            <Text
                                                color={errors.initQuantity ? 'red' : 'blue'}
                                                size={'2'}
                                                align={'left'}
                                            >
                                                {errors.initQuantity.message}
                                            </Text>
                                        )}
                                    </Flex>
                                </DataList.Label>
                                <DataList.Value>
                                    <Controller
                                        control={control}
                                        name='initQuantity'
                                        render={({ field }) => (
                                            <TextField.Root
                                                {...field}
                                                color={errors.initQuantity ? 'red' : 'blue'}
                                                type='number'
                                                className='!flex-grow'
                                            />
                                        )}
                                    />
                                </DataList.Value>
                            </DataList.Item>
                            <DataList.Item align='start'>
                                <DataList.Label minWidth='180px'>
                                    <Flex direction={'column'}>
                                        <Text>Phân loại</Text>
                                        {errors.type && (
                                            <Text color={errors.type ? 'red' : 'blue'} size={'2'} align={'left'}>
                                                {errors.type.message}
                                            </Text>
                                        )}
                                    </Flex>
                                </DataList.Label>
                                <DataList.Value>
                                    <Controller
                                        control={control}
                                        name='type'
                                        render={({ field }) => (
                                            <Select.Root onValueChange={field.onChange} {...field}>
                                                <Select.Trigger placeholder='Loại voucher...' />
                                                <Select.Content position='popper' className='!rounded-8'>
                                                    {Object.keys(voucher_type?.[who as OBJECT]).map((key) => (
                                                        <Select.Item value={key}>
                                                            {voucher_type?.[who as OBJECT]?.[key as VoucherType]}
                                                        </Select.Item>
                                                    ))}
                                                </Select.Content>
                                            </Select.Root>
                                        )}
                                    />
                                </DataList.Value>
                            </DataList.Item>
                            <DataList.Item align='start'>
                                <DataList.Label minWidth='180px'>
                                    <Flex direction={'column'}>
                                        <Text>Trạng thái</Text>
                                        {errors.status && (
                                            <Text color={errors.status ? 'red' : 'blue'} size={'2'} align={'left'}>
                                                {errors.status.message}
                                            </Text>
                                        )}
                                    </Flex>
                                </DataList.Label>
                                <DataList.Value>
                                    <Controller
                                        control={control}
                                        name='status'
                                        render={({ field }) => (
                                            <Select.Root onValueChange={field.onChange} {...field}>
                                                <Select.Trigger placeholder='Trạng thái' />
                                                <Select.Content position='popper' className='!rounded-8'>
                                                    <Select.Item value={'ACTIVE'}>Mở</Select.Item>
                                                    <Select.Item value={'BLOCK'}>Khóa</Select.Item>
                                                </Select.Content>
                                            </Select.Root>
                                        )}
                                    />
                                </DataList.Value>
                            </DataList.Item>
                            <DataList.Item align='start'>
                                <DataList.Label minWidth='180px'>
                                    <Flex direction={'column'}>
                                        <Text>Bắt đầu</Text>
                                        {errors.startDate && (
                                            <Text color={errors.startDate ? 'red' : 'blue'} size={'2'} align={'left'}>
                                                {errors.startDate.message}
                                            </Text>
                                        )}
                                    </Flex>
                                </DataList.Label>
                                <DataList.Value>
                                    <Controller
                                        control={control}
                                        name='startDate'
                                        render={({ field }) => (
                                            <DatePicker
                                                resetField={() => resetField('startDate')}
                                                date={field.value}
                                                onSelect={field.onChange}
                                            />
                                        )}
                                    />
                                </DataList.Value>
                            </DataList.Item>
                            <DataList.Item align='start'>
                                <DataList.Label minWidth='180px'>
                                    <Flex direction={'column'}>
                                        <Text>Kết thúc</Text>
                                        {errors.endDate && (
                                            <Text
                                                className='max-w-[170px]'
                                                color={errors.endDate ? 'red' : 'blue'}
                                                size={'2'}
                                                align={'left'}
                                            >
                                                {errors.endDate.message}
                                            </Text>
                                        )}
                                    </Flex>
                                </DataList.Label>
                                <DataList.Value>
                                    <Controller
                                        control={control}
                                        name='endDate'
                                        render={({ field }) => (
                                            <DatePicker
                                                resetField={() => resetField('endDate')}
                                                date={field.value}
                                                onSelect={field.onChange}
                                            />
                                        )}
                                    />
                                </DataList.Value>
                            </DataList.Item>
                            <DataList.Item align='start'>
                                <DataList.Label minWidth='180px'>
                                    <Flex direction={'column'}>
                                        <Text>Điều kiện danh mục</Text>
                                        {errors.category && (
                                            <Text color={errors.category ? 'red' : 'blue'} size={'2'} align={'left'}>
                                                {errors.category.message}
                                            </Text>
                                        )}
                                    </Flex>
                                </DataList.Label>
                                <DataList.Value>
                                    <Controller
                                        control={control}
                                        name='category'
                                        render={({ field }) => (
                                            <Select.Root onValueChange={field.onChange} {...field}>
                                                <Select.Trigger placeholder='Chọn danh mục' />
                                                <Select.Content align='start' position='popper' className='!rounded-8'>
                                                    <Select.Item
                                                        key={'none'}
                                                        value={'none'}
                                                        className='text-red hover:bg-rose-500 hover:text-white'
                                                    >
                                                        Bỏ điều kiện danh mục
                                                    </Select.Item>
                                                    {Object.entries(categoriesData as Category[]).map(([_, value]) => (
                                                        <Select.Item key={value.shortname} value={value.shortname}>
                                                            {(value as any).name}
                                                        </Select.Item>
                                                    ))}
                                                </Select.Content>
                                            </Select.Root>
                                        )}
                                    />
                                </DataList.Value>
                            </DataList.Item>
                            <DataList.Item align='start'>
                                <DataList.Label minWidth='180px'>
                                    <Flex direction={'column'}>
                                        <Text className='w-[170px]'>Giá trị đơn hàng tối thiểu phải đạt</Text>
                                        {errors.totalMin && (
                                            <Text color={errors.totalMin ? 'red' : 'blue'} size={'2'} align={'left'}>
                                                {errors.totalMin.message}
                                            </Text>
                                        )}
                                    </Flex>
                                </DataList.Label>
                                <DataList.Value>
                                    <Controller
                                        control={control}
                                        name='totalMin'
                                        render={({ field }) => (
                                            <TextField.Root
                                                {...field}
                                                value={field.value ? convertCurrentcy(field.value) : ''}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value.replace(/\D/gim, '') || 0)
                                                }}
                                                color={errors.totalMin ? 'red' : 'blue'}
                                                className='!flex-grow'
                                            />
                                        )}
                                    />
                                </DataList.Value>
                            </DataList.Item>
                            <DataList.Item align='start'>
                                <DataList.Label minWidth='180px'>
                                    <Flex direction={'column'}>
                                        <Text className='w-[170px]'>Giá trị mỗi một sản phẩm phải đạt</Text>
                                        {errors.priceMin && (
                                            <Text color={errors.priceMin ? 'red' : 'blue'} size={'2'} align={'left'}>
                                                {errors.priceMin.message}
                                            </Text>
                                        )}
                                    </Flex>
                                </DataList.Label>
                                <DataList.Value>
                                    <Controller
                                        control={control}
                                        name='priceMin'
                                        render={({ field }) => (
                                            <TextField.Root
                                                {...field}
                                                value={field.value ? convertCurrentcy(field.value) : ''}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value.replace(/\D/gim, '') || 0)
                                                }}
                                                color={errors.priceMin ? 'red' : 'blue'}
                                                className='!flex-grow'
                                            />
                                        )}
                                    />
                                </DataList.Value>
                            </DataList.Item>
                        </DataList.Root>
                        <Flex gapX='3' mt='5' justify='end'>
                            <AlertDialog.Cancel>
                                <Button type='button' variant='outline' color='red'>
                                    Trở về
                                </Button>
                            </AlertDialog.Cancel>
                            <Button type='submit' className='bg-blue text-white'>
                                {isCreateVoucherPending && <Spinner />}
                                Cập nhật
                            </Button>
                        </Flex>
                    </form>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </>
    )
}

export default VoucherUpdate
