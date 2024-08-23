import { yupResolver } from '@hookform/resolvers/yup'
import { AlertDialog, Button, Checkbox } from '@radix-ui/themes'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Input from 'src/components/Input'
import { Textarea } from 'src/components/Shadcn/textarea'
import { Delivery, DeliveryBody } from 'src/types/delivery.type'
import { update_delivery, UpdateDeliveryType } from 'src/utils/delivery.schema'
import { cn } from 'src/utils/utils.ts'

type Props = {
    delivery: Delivery
    handleUpdate: (body: Partial<DeliveryBody>) => void
    open: boolean
    setOpenUpdate: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedAddress: React.Dispatch<React.SetStateAction<Delivery | undefined>>
}

const AddressUpdate = ({ delivery, handleUpdate, open, setOpenUpdate, setSelectedAddress }: Props) => {
    const [checked, setChecked] = useState<boolean>(delivery.isPrimary)
    const {
        control,
        handleSubmit,
        register,
        formState: {
            errors: { address, full_name, phone }
        },
        reset
    } = useForm({
        resolver: yupResolver(update_delivery),
        defaultValues: delivery
    })
    const onSubmit: SubmitHandler<UpdateDeliveryType> = (data) => {
        handleUpdate({ ...data, isPrimary: checked })
    }
    const handleClear = () => {
        reset()
        setSelectedAddress(undefined)
    }
    return (
        <AlertDialog.Root open={open} onOpenChange={() => setOpenUpdate((pre) => !pre)}>
            <AlertDialog.Content maxWidth='450px' className='rounded-8'>
                <AlertDialog.Title>Cập nhật địa chỉ nhận hàng</AlertDialog.Title>
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
                                        className={cn('text-red-500', {
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
                            <Checkbox
                                id={delivery.id}
                                checked={checked}
                                onCheckedChange={() => setChecked((pre) => !pre)}
                            />
                            <label
                                htmlFor={delivery.id}
                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            >
                                Đặt làm mặc định
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-end space-x-3 mt-5'>
                        <AlertDialog.Cancel>
                            <Button type='button' onClick={handleClear} size={'2'} variant='outline' color='red'>
                                Trở về
                            </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                            <Button type='submit' size={'2'} className='bg-blue-600 text-white'>
                                Cập nhật
                            </Button>
                        </AlertDialog.Action>
                    </div>
                </form>
            </AlertDialog.Content>
        </AlertDialog.Root>
    )
}

export default AddressUpdate
