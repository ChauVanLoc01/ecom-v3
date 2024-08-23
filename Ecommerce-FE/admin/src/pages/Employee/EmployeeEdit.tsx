import { yupResolver } from '@hookform/resolvers/yup'
import { AlertDialog, Button, DataList, Flex, Spinner, Text } from '@radix-ui/themes'
import { QueryObserverResult, RefetchOptions, useMutation } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { format } from 'date-fns'
import { useContext, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { EmployeeApi } from 'src/apis/employee.api'
import InputPassword from 'src/components/InputPassword'
import { employee_permission, instance } from 'src/constants/role'
import { EmployeeList, EmployeeQuery, PermissionDetail } from 'src/types/employee.type'
import { edit_employee_schema, EditEmployee } from 'src/utils/employee.schema'
import EmployeePermission from './EmployeePermission'
import InputPasswordV2 from 'src/components/InputPasswordV2/InputPasswordV2'
import { AppContext } from 'src/contexts/AppContext'
import { cn } from 'src/utils/utils'

type EmployeeEditProps = {
    permission_default: PermissionDetail
    data: EmployeeList
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    refetch: (options?: RefetchOptions) => Promise<
        QueryObserverResult<
            {
                data: EmployeeList[]
                query: Omit<EmployeeQuery, 'page'> & {
                    page_size: number
                    page: number
                }
            },
            Error
        >
    >
}

const EmployeeEdit = ({ open, setOpen, data, refetch, permission_default }: EmployeeEditProps) => {
    const { store, isCan } = useContext(AppContext)
    const [permission, setPermission] = useState<Partial<Record<instance, string[]>> | undefined>(undefined)
    const { control, handleSubmit } = useForm<EditEmployee>({
        resolver: yupResolver(edit_employee_schema)
    })

    const { mutate, isPending } = useMutation({
        mutationFn: EmployeeApi.resetPassword,
        onSuccess: () => {
            setOpen(false)
            refetch()
            setTimeout(() => {
                toast.success('Tạo lại mật khẩu cho nhân viên thành công')
            }, 300)
        },
        onError: () => {
            toast.success('Lỗi! Tạo lại mật khẩu không thành công')
        }
    })

    const { mutate: updatePermission } = useMutation({
        mutationFn: EmployeeApi.updatePermission(data.userId),
        onSuccess: () => {
            setOpen(false)
            refetch()
            setTimeout(() => {
                toast.success('Cập nhật phân quyền thành công')
            }, 300)
        },
        onError: (err) => {
            if (isAxiosError(err)) {
                toast.error(err.response?.data?.message)
            }
        }
    })

    const handleUpdatePermission = () => {
        let tmp = Object.keys(permission || {}).map<{ instance: instance; permissions: string[] }>((key) => {
            return { instance: key, permissions: permission?.[key] }
        })
        updatePermission({ actions: tmp, storeId: store?.id || '' })
    }

    const onSubmitResetPassword: SubmitHandler<EditEmployee> = (dataForm) => {
        mutate({ employeeId: data.userId, password: dataForm.password, username: data.username })
    }

    useEffect(() => {
        if (permission_default) {
            setPermission(permission_default)
        }
    }, [permission_default])

    return (
        <AlertDialog.Root open={open} onOpenChange={setOpen}>
            <AlertDialog.Content maxWidth='550px' className='!rounded-8'>
                <AlertDialog.Title>Cập nhật nhân viên</AlertDialog.Title>
                <DataList.Root className='space-y-2'>
                    <DataList.Item align='center'>
                        <DataList.Label minWidth='150px'>Họ tên</DataList.Label>
                        <DataList.Value>
                            <Text>{data.User_Account_userIdToUser.full_name}</Text>
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item align='center'>
                        <DataList.Label minWidth='150px'>Email</DataList.Label>
                        <DataList.Value>
                            <Text>{data.User_Account_userIdToUser.email}</Text>
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item align='end'>
                        <DataList.Label minWidth='150px'>Tài khoản</DataList.Label>
                        <DataList.Value>
                            <Text>{data.username}</Text>
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item align='center'>
                        <DataList.Label minWidth='150px'>Mật khẩu</DataList.Label>
                        <DataList.Value>
                            <form
                                onSubmit={
                                    isCan.employee?.[employee_permission.reset_password]
                                        ? handleSubmit(onSubmitResetPassword)
                                        : undefined
                                }
                            >
                                <Flex gapX={'3'}>
                                    <Controller
                                        control={control}
                                        name='password'
                                        render={({ field, fieldState: { error } }) => (
                                            <Flex direction={'column'}>
                                                {error && (
                                                    <Text color='red' size={'3'}>
                                                        {error.message}
                                                    </Text>
                                                )}
                                                <InputPasswordV2 field={field} />
                                            </Flex>
                                        )}
                                    />
                                    <Button
                                        className={cn('bg-blue text-white', {
                                            'bg-gray-200': !isCan.employee?.[employee_permission.reset_password]
                                        })}
                                        type='submit'
                                        size={'3'}
                                        disabled={!isCan.employee?.[employee_permission.reset_password]}
                                    >
                                        Lưu
                                    </Button>
                                </Flex>
                            </form>
                        </DataList.Value>
                    </DataList.Item>
                    <EmployeePermission setPermission={setPermission} permission={permission || {}} />
                    <DataList.Item align='end'>
                        <DataList.Label minWidth='150px'>Thời gian tạo</DataList.Label>
                        <DataList.Value>
                            <span>{format(data.createdAt, 'hh:mm dd-MM-yyyy')}</span>
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item align='end'>
                        <DataList.Label minWidth='150px'>Cập nhật</DataList.Label>
                        <DataList.Value>
                            <span>{data.updatedAt ? format(data.updatedAt, 'hh:mm dd-MM-yyyy') : '_'}</span>
                        </DataList.Value>
                    </DataList.Item>
                </DataList.Root>
                <Flex gap='3' mt='4' justify='end'>
                    <AlertDialog.Cancel>
                        <Button size={'3'} variant='outline' color='red' type='button'>
                            Hủy
                        </Button>
                    </AlertDialog.Cancel>
                    <Button
                        size={'3'}
                        onClick={isCan.employee?.[employee_permission.permission] ? handleUpdatePermission : undefined}
                        className={cn('bg-blue text-white', {
                            'bg-gray-200': !isCan.employee?.[employee_permission.permission]
                        })}
                        disabled={!isCan.employee?.[employee_permission.permission]}
                    >
                        {isPending && <Spinner />}
                        Cập nhật phân quyền
                    </Button>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    )
}

export default EmployeeEdit
