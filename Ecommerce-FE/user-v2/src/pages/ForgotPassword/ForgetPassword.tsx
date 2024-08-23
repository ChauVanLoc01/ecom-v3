import { yupResolver } from '@hookform/resolvers/yup'
import { Button as ButtonRadix, Flex, Text } from '@radix-ui/themes'
import { useMutation } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { useEffect, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { authFetching } from 'src/apis/authentication'
import Button from 'src/components/Button'
import Image from 'src/components/Image'
import Input from 'src/components/Input'
import Password from 'src/components/Password'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from 'src/components/Shadcn/input-otp'
import { route } from 'src/constants/route'
import { forgot_password_schema, ForgotPassword } from 'src/utils/auth.schema'
import Digits from '../ProductList/FlashSale/Countdown/Digits'

const ForgetPassword = () => {
    const [otp, setOtp] = useState<boolean>(false)
    const [time, setTime] = useState<number>(30)
    const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined)
    const navigate = useNavigate()
    const [code, setCode] = useState<number | undefined>(undefined)

    const {
        handleSubmit,
        register,
        formState: {
            errors: { email, password, confirm_password }
        },
        getValues
    } = useForm<ForgotPassword>({
        resolver: yupResolver(forgot_password_schema)
    })

    const { mutate: sendOTP } = useMutation({
        mutationFn: authFetching.sendOTP,
        onSuccess: () => {
            toast.success(
                'Mã xác nhận đã được gửi đến bạn. Vui lòng kiểm tra và tiến hành xác nhận để thay đổi mật khẩu'
            )
            setOtp(true)
            handleInterval()
        },
        onError: () => {
            toast.error('Gửi mã xác nhận thất bại. Vui lòng thử lại sau')
        }
    })

    const { mutate: submitOTP } = useMutation({
        mutationFn: authFetching.submitOTP,
        onSuccess: () => {
            toast.success('Khôi phục mật khẩu thành công. Vui lòng đăng nhập lại')
            navigate('login', { replace: true })
        },
        onError: (error) => {
            if (isAxiosError(error)) {
                toast.error(error.response?.data.message)
            }
        }
    })

    const handleInterval = () => {
        intervalRef.current = setInterval(() => {
            setTime((pre) => {
                if (pre) {
                    return pre - 1
                }
                return 0
            })
        }, 1000)
    }

    const handleSendOTP: SubmitHandler<ForgotPassword> = (data) => {
        let { email, password } = data
        sendOTP({ email, new_password: password })
    }

    const handleResendOTP = () => {
        sendOTP({ email: getValues('email'), new_password: getValues('password') })
    }

    const handleSubmitOTP = () => {
        if (!code) {
            toast.warning('Bạn chưa nhập mã xác nhận')
            return
        }
        submitOTP({ code })
    }

    useEffect(() => {
        return () => {
            if (time == 0) {
                window.clearInterval(intervalRef.current)
            }
        }
    }, [time])

    return (
        <>
            <div className='flex w-screen h-screen overflow-hidden'>
                <Image
                    src='https://ableproadmin.com/react/static/media/img-auth-sideimg.d011b7b8eab5547b4c21.png'
                    alt='img-authentication'
                    rootClassName='basis-3/5 object-cover flex-shrink-0'
                    className='object-cover'
                />
                <div className='w-[25%] mx-auto flex flex-col justify-center space-y-4'>
                    <Link to={'/'}>
                        <img
                            src='https://cdn-icons-png.flaticon.com/128/4151/4151729.png'
                            alt='logo'
                            className='object-cover w-20 h-2w-20 mx-auto'
                        />
                    </Link>
                    <section className='flex items-baseline justify-between'>
                        <h3 className='text-2xl font-semibold'>{otp ? 'Xác nhận mã OTP' : 'Khôi phục mật khẩu'}</h3>
                        <Link to={`/${route.register}`} className='text-blue-600 text-base'>
                            Về trang đăng nhập
                        </Link>
                    </section>
                    <Input
                        lable='Email'
                        htmlFor='email'
                        placeholder='Nhập email của bạn'
                        register={register('email')}
                        error={email?.message}
                        disabled={otp}
                    />
                    <Password
                        lable='Mật khẩu mới'
                        htmlFor='password'
                        placeholder='Nhập mật khẩu mới'
                        disabled={otp}
                        register={register('password')}
                        error={password?.message}
                    />
                    {!otp && (
                        <Password
                            lable='Nhập lại mật khẩu'
                            htmlFor='confirm_password'
                            placeholder='Nhập lại mật khẩu'
                            register={register('confirm_password')}
                            error={confirm_password?.message}
                        />
                    )}
                    {otp && (
                        <>
                            <Text className='text-[14px]'>Mã xác nhận</Text>
                            <div>
                                <Flex justify={'between'}>
                                    <InputOTP onChange={(value) => setCode(+value)} maxLength={6}>
                                        <InputOTPGroup>
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                        </InputOTPGroup>
                                        <InputOTPSeparator />
                                        <InputOTPGroup>
                                            <InputOTPSlot index={3} />
                                            <InputOTPSlot index={4} />
                                            <InputOTPSlot index={5} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                    <Flex gapX={'2'}>
                                        <Digits
                                            text_color='text-gray-500'
                                            value={time}
                                            classNames='bg-gray-100 text-gray-500'
                                        />
                                        <ButtonRadix
                                            size={'2'}
                                            className='h-full'
                                            color={time ? 'gray' : 'blue'}
                                            variant='soft'
                                            disabled={!time ? false : true}
                                            type='button'
                                            onClick={handleResendOTP}
                                        >
                                            Gửi lại mã
                                        </ButtonRadix>
                                    </Flex>
                                </Flex>
                            </div>
                        </>
                    )}
                    <section>
                        <Button
                            onClick={otp ? handleSubmitOTP : handleSubmit(handleSendOTP)}
                            text={otp ? 'Xác nhận thay đổi' : 'Gửi mã xác nhận'}
                            className='w-full mt-2'
                        />
                    </section>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword
