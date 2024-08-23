import { useContext, useRef, useState } from 'react'

import classNames from 'classnames'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { HiOutlineInformationCircle } from 'react-icons/hi2'
import { IoSettingsOutline } from 'react-icons/io5'

import { LockClosedIcon } from '@radix-ui/react-icons'
import { Text } from '@radix-ui/themes'
import { useMutation } from '@tanstack/react-query'
import { resolvePath, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { profileFetching } from 'src/apis/profile'
import Button from 'src/components/Button'
import { OBJECT, OBJECT_LABEL } from 'src/constants/role'
import { route } from 'src/constants/route'
import { AppContext } from 'src/contexts/AppContext'
import { cn } from 'src/utils/utils'

type CardProps = {
    rootClassName?: string
}

const CardProfile = ({ rootClassName }: CardProps) => {
    const { setStore, store, who } = useContext(AppContext)
    const navigate = useNavigate()
    const [imgUrl, setImgUrl] = useState<string>(
        store?.image ?? 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png'
    )
    const fileRef = useRef<HTMLInputElement>(null)

    const { mutate, isPending } = useMutation({
        mutationFn: profileFetching.uploadImage,
        onError: () => {
            toast.error('Lỗi cập nhật hình ảnh')
            setImgUrl(store?.image ?? 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png')
        }
    })

    const handleOpenFile = () => {
        fileRef.current?.click()
    }

    const handleFileChaneg = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            if (!e.target.files[0].type.startsWith('image')) {
                console.log('1')
                toast.error('File không đúng định dạng Image/*')
                return
            }
            if (e.target.files[0].size > 500000) {
                toast.error('Dung lượng hình ảnh tối đa 500KB')
                return
            }
            setImgUrl(URL.createObjectURL(e.target.files[0]))
            const formData = new FormData()
            formData.append('file', e.target.files[0])
            mutate(formData)
        }
    }

    return (
        <div
            className={classNames(
                'p-24 border border-border/30 rounded-8 bg-white space-y-5 relative shrink-0',
                rootClassName
            )}
        >
            <section className='space-y-2 text-center'>
                <button
                    className={cn(
                        'w-20 h-20 rounded-full border border-dashed border-blue object-cover mx-auto overflow-hidden relative',
                        {
                            group: who == 'STORE_OWNER'
                        }
                    )}
                    onClick={who === 'STORE_OWNER' ? handleOpenFile : undefined}
                >
                    <img
                        src={store?.image}
                        alt='background'
                        className='group-hover:opacity-0 transition-all duration-100 ease-linear rounded-full'
                    />
                    <span className='opacity-0 absolute inset-0 flex justify-center items-center bg-white group-hover:opacity-100 transition-all duration-100 ease-linear rounded-full delay-100'>
                        <AiOutlineCloudUpload size={30} className='w-full hful text-blue' />
                    </span>
                </button>
                <input type='file' ref={fileRef} name='' id='' className='hidden' />
                <h4 className='font-semibold'>{store?.name}</h4>
                <Text>{OBJECT_LABEL[who as OBJECT]}</Text>
            </section>
            <section className='space-y-1'>
                <Button
                    iconLeft={<HiOutlineInformationCircle />}
                    text='Thông Tin Cửa Hàng'
                    type='outline'
                    rootClassNames={cn('text-gray-500 w-full', {
                        'bg-blue/20 text-blue': location.pathname === resolvePath(route.profile, route.root).pathname
                    })}
                    onClick={() => navigate(`/${route.profile}`)}
                />
                <Button
                    text='Thay Đổi Mật Khẩu'
                    type='outline'
                    iconLeft={<LockClosedIcon />}
                    rootClassNames={cn('text-gray-500 w-full', {
                        'bg-blue/20 text-blue': location.pathname === `/${route.profile}/${route.changePassword}`
                    })}
                    onClick={() => navigate(route.changePassword)}
                />
                <Button
                    iconLeft={<IoSettingsOutline />}
                    text='Cài Đặt Hệ Thống'
                    type='outline'
                    rootClassNames={cn('text-gray-500 w-full', {
                        'bg-blue/20 text-blue': location.pathname === `/${route.profile}/${route.setting}`
                    })}
                    onClick={() => navigate(route.setting)}
                />
            </section>
        </div>
    )
}

export default CardProfile
