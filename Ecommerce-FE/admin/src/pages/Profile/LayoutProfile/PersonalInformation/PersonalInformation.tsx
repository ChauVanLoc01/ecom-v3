import Input from 'src/components/Input'

import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Spinner } from '@radix-ui/themes'
import { useMutation } from '@tanstack/react-query'
import { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { profileFetching } from 'src/apis/profile'
import { DatePickerV2 } from 'src/components/Shadcn/datepicker copy'
import { Textarea } from 'src/components/Shadcn/textarea'
import { AppContext } from 'src/contexts/AppContext'
import { ls } from 'src/utils/localStorage'
import { profile_schema, ProfileSchemaType } from 'src/utils/profile.schema'
import LayoutProfile from '..'

const PersonalInformation = () => {
    const { profile, setProfile } = useContext(AppContext)
    const [date, setDate] = useState<Date | undefined>(profile?.birthday || undefined)
    const {
        register,
        handleSubmit,
        control,
        formState: {
            errors: { address, full_name, email }
        }
    } = useForm<ProfileSchemaType>({
        defaultValues: {
            address: profile?.address,
            email: profile?.email,
            full_name: profile?.full_name
        },
        resolver: yupResolver(profile_schema)
    })

    const { mutate, isPending } = useMutation({
        mutationFn: profileFetching.updateProfile,
        onSuccess: (e) => {
            ls.setItem('profile', e.data.result)
            setProfile(e.data.result)
            toast.info('Cập nhật thông tin thành công')
        },
        onError: () => {
            toast.error('Lỗi! Cập nhật thông tin thất bại')
        }
    })

    const onSubmit: SubmitHandler<ProfileSchemaType> = (e) => {
        console.log('date', date)
        mutate({
            ...e,
            birthday: date ? (date as any) : undefined
        })
    }

    return (
        <LayoutProfile title='Thông tin cá nhân'>
            <form>
                <div className='flex gap-x-10'>
                    <section className='basis-1/2 space-y-5'>
                        <section className='space-y-2'>
                            <div className='flex justify-between'>
                                <h4>Tên:</h4> <span className='text-red-600'>{full_name?.message}</span>
                            </div>
                            <Input register={register('full_name')} />
                        </section>
                        <section className='space-y-2'>
                            <section className='space-y-2'>
                                <h4>Ngày sinh:</h4>
                                <DatePickerV2 date={date} setDate={setDate} />
                            </section>
                        </section>
                    </section>
                    <section className='basis-1/2 space-y-5'>
                        <section className='space-y-2'>
                            <div className='flex justify-between'>
                                <h4>Email:</h4> <span className='text-red-600'>{email?.message}</span>
                            </div>
                            <Input register={register('email')} />
                        </section>
                        <section className='space-y-2 flex-grow-0'>
                            <div className='flex justify-between'>
                                <h4>Địa chỉ:</h4> <span className='text-red-600'>{address?.message}</span>
                            </div>
                            <Textarea {...register('address')} />
                        </section>
                    </section>
                </div>
                <section className='flex items-center justify-end space-x-4 mt-5'>
                    <Button variant='outline' color='red' type='reset' size={'3'}>
                        Hủy
                    </Button>
                    <Button onClick={handleSubmit(onSubmit)} type='submit' size={'3'} className='bg-blue text-white'>
                        {isPending && <Spinner />}
                        Lưu thay đổi
                    </Button>
                </section>
            </form>
        </LayoutProfile>
    )
}

export default PersonalInformation
