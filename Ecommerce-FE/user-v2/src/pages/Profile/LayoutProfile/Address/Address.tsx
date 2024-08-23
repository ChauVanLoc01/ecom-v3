import { yupResolver } from '@hookform/resolvers/yup'
import { AlertDialog, Button } from '@radix-ui/themes'
import { useMutation, useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { profileFetching } from 'src/apis/profile'
import Input from 'src/components/Input'
import { Checkbox } from 'src/components/Shadcn/checkbox'
import { Textarea } from 'src/components/Shadcn/textarea'
import AddressItem from 'src/pages/Checkout/Step2/AddressItem'
import { Delivery, DeliveryBody } from 'src/types/delivery.type'
import { delivery_schema, DeliverySchemaType } from 'src/utils/delivery.schema'
import LayoutProfile from '../LayoutProfile'
import AddressUpdate from './AddressUpdate'

const Address = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [primary, setPrimary] = useState<boolean>(false)
    const [openUpdate, setOpenUpdate] = useState<boolean>(false)
    const [selectedAddress, setSelectedAddress] = useState<Delivery | undefined>(undefined)
    const deliveries = useQuery({
        queryKey: ['delivery'],
        queryFn: profileFetching.getDeliveries,
        staleTime: Infinity,
        gcTime: Infinity,
        enabled: false
    })
    const {
        register,
        formState: {
            errors: { address, full_name, phone }
        },
        control,
        handleSubmit,
        reset
    } = useForm<DeliverySchemaType>({
        resolver: yupResolver(delivery_schema)
    })

    const createDeliveryQuery = useMutation({
        mutationFn: (body: DeliveryBody) => profileFetching.createDelivery(body),
        onSuccess: () => {
            toast.info('Tạo thành công thông tin vận chuyển')
            reset()
            deliveries.refetch()
            setOpen(false)
        },
        onError: () => {
            toast.error('Không thể tạo thông tin vận chuyển')
        }
    })

    const updateDelivery = useMutation({
        mutationFn: profileFetching.updateDelivery,
        onSuccess: () => {
            toast.info('Cập nhật thành công')
            deliveries.refetch()
        }
    })

    const deleteDelivery = useMutation({
        mutationFn: (deliveryId: string) => profileFetching.deleteDelivery(deliveryId),
        onSuccess: () => {
            toast.success('Xóa thông tin vận chuyển thành công')
            deliveries.refetch()
        },
        onError: () => {
            toast.error('Đã có lỗi xảy ra')
        }
    })

    const onSubmit: SubmitHandler<DeliverySchemaType> = (data) =>
        createDeliveryQuery.mutate({ ...data, isPrimary: primary })

    const handleDeleteAddress = (addressId: string) => () => deleteDelivery.mutate(addressId)

    const handleSetDefault = (addressId: string) => () => {
        updateDelivery.mutate({ id: addressId, body: { isPrimary: true } })
    }

    const handleUpdate = (id: string) => (body: Partial<DeliveryBody>) => updateDelivery.mutate({ id, body })

    const handleOpen = (delivery: Delivery) => () => {
        setOpenUpdate((pre) => !pre)
        setSelectedAddress(delivery)
    }

    return (
        <LayoutProfile title='Địa chỉ nhận hàng'>
            <div className='text-right'>
                <AlertDialog.Root open={open} onOpenChange={setOpen}>
                    <AlertDialog.Trigger>
                        <Button variant='outline' size={'2'}>
                            Thêm địa chỉ
                        </Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content className='!rounded-8'>
                        <AlertDialog.Title>Thêm mới địa chỉ nhận hàng</AlertDialog.Title>
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                            <div className='grid grid-cols-5'>
                                <h3 className='col-span-2'>Tên người nhận:</h3>
                                <Input
                                    rootClassName='col-start-3 col-span-3'
                                    register={register('full_name')}
                                    error={full_name?.message}
                                />
                            </div>
                            <div className='grid grid-cols-5'>
                                <h3 className='col-span-2'>Địa chỉ:</h3>
                                <Controller
                                    name='address'
                                    control={control}
                                    render={({ field }) => (
                                        <div className='col-start-3 col-span-3'>
                                            <div
                                                className={classNames('text-red-500', {
                                                    hidden: !address?.message
                                                })}
                                            >
                                                {address?.message}
                                            </div>
                                            <Textarea {...field} />
                                        </div>
                                    )}
                                />
                            </div>
                            <div className='grid grid-cols-5'>
                                <h3 className='col-span-2'>Số điện thoại:</h3>
                                <Input
                                    rootClassName='col-start-3 col-span-3'
                                    register={register('phone')}
                                    error={phone?.message}
                                />
                            </div>
                            <div className='grid grid-cols-5'>
                                <div className='col-start-3 col-span-3 flex items-center space-x-2'>
                                    <Checkbox id='terms' checked={primary} onCheckedChange={setPrimary as any} />
                                    <label
                                        htmlFor='terms'
                                        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                    >
                                        Đặt làm mặc định
                                    </label>
                                </div>
                            </div>
                            <div className='flex justify-end space-x-3'>
                                <AlertDialog.Cancel>
                                    <Button type='button' size={'2'} variant='outline' color='red'>
                                        Hủy
                                    </Button>
                                </AlertDialog.Cancel>
                                <AlertDialog.Action>
                                    <Button type='submit' size={'2'}>
                                        Thêm mới
                                    </Button>
                                </AlertDialog.Action>
                            </div>
                        </form>
                    </AlertDialog.Content>
                </AlertDialog.Root>
            </div>
            <div className='grid grid-cols-3 gap-4 mt-4'>
                {deliveries.data?.data.result.map((delivery) => (
                    <>
                        <AddressItem
                            handleDeleteAddress={handleDeleteAddress}
                            handleSetDefault={handleSetDefault}
                            delivery={delivery}
                            isDropdown
                            handleOpen={handleOpen(delivery)}
                        />
                    </>
                ))}
                {selectedAddress && (
                    <AddressUpdate
                        delivery={selectedAddress}
                        open={openUpdate}
                        handleUpdate={handleUpdate(selectedAddress.id)}
                        setOpenUpdate={setOpenUpdate}
                        setSelectedAddress={setSelectedAddress}
                    />
                )}
            </div>
        </LayoutProfile>
    )
}

export default Address
