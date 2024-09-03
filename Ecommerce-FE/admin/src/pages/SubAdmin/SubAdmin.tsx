import { CheckboxGroup, DataList, Grid } from '@radix-ui/themes'
import {
    analytic_permission,
    employee_permission,
    flashsale_permission,
    instance,
    order_permission,
    product_permission,
    rating_permission,
    voucher_permission
} from 'src/constants/role'

type Props = {
    permission: Partial<Record<instance, string[]>>
    setPermission?: React.Dispatch<React.SetStateAction<Partial<Record<instance, string[]>> | undefined>>
    disable?: boolean
}

const SubAdmin = ({ setPermission, disable = false, permission }: Props) => {
    const handleChecked = (instance: instance) => (value: string[]) => {
        setPermission &&
            setPermission((pre) => {
                pre = pre || {}
                if (value.length) {
                    pre[instance] = value
                } else {
                    delete pre?.[instance]
                }
                return { ...pre }
            })
    }

    return (
        <>
            <DataList.Item align='end' className='flex flex-col items-start'>
                <DataList.Label className='font-bold'>Tổng Quan</DataList.Label>
                <DataList.Value>
                    <CheckboxGroup.Root
                        disabled={disable}
                        name={instance?.analytic}
                        value={permission?.analytics}
                        onValueChange={handleChecked(instance?.analytic)}
                    >
                        <Grid columns={'2'}>
                            <CheckboxGroup.Item value={analytic_permission?.view} className='flex items-center'>
                                Xem thống kê
                            </CheckboxGroup.Item>
                        </Grid>
                    </CheckboxGroup.Root>
                </DataList.Value>
            </DataList.Item>
            <DataList.Item align='end' className='flex flex-col items-start'>
                <DataList.Label className='font-bold'>Flash Sale</DataList.Label>
                <DataList.Value>
                    <CheckboxGroup.Root
                        disabled={disable}
                        name={instance?.flashsale}
                        value={permission?.flashsale}
                        onValueChange={handleChecked(instance.flashsale)}
                    >
                        <Grid columns={'3'} gap={'5'}>
                            <CheckboxGroup.Item value={flashsale_permission.join} className='flex items-center'>
                                Tham gia
                            </CheckboxGroup.Item>
                            <CheckboxGroup.Item value={flashsale_permission.update} className='flex items-center'>
                                Cập nhật
                            </CheckboxGroup.Item>
                        </Grid>
                    </CheckboxGroup.Root>
                </DataList.Value>
            </DataList.Item>
            <DataList.Item align='end' className='flex flex-col items-start'>
                <DataList.Label className='font-bold'>Sản phẩm</DataList.Label>
                <DataList.Value>
                    <CheckboxGroup.Root
                        disabled={disable}
                        name={instance?.product}
                        value={permission?.product}
                        onValueChange={handleChecked(instance.product)}
                    >
                        <Grid columns={'3'} gap={'5'}>
                            <CheckboxGroup.Item value={product_permission.detail} className='flex items-center'>
                                Chi tiết
                            </CheckboxGroup.Item>
                            <CheckboxGroup.Item value={product_permission.create} className='flex items-center'>
                                Tạo mới
                            </CheckboxGroup.Item>
                            <CheckboxGroup.Item value={product_permission.update} className='flex items-center'>
                                Cập nhật
                            </CheckboxGroup.Item>
                        </Grid>
                    </CheckboxGroup.Root>
                </DataList.Value>
            </DataList.Item>
            <DataList.Item align='end' className='flex flex-col items-start'>
                <DataList.Label className='font-bold'>Đơn hàng</DataList.Label>
                <DataList.Value>
                    <CheckboxGroup.Root
                        disabled={disable}
                        name={instance?.order}
                        value={permission?.order}
                        onValueChange={handleChecked(instance.order)}
                    >
                        <Grid columns={'3'} gap={'5'}>
                            <CheckboxGroup.Item value={order_permission.detail} className='flex items-center'>
                                Chi tiết
                            </CheckboxGroup.Item>
                            <CheckboxGroup.Item value={order_permission.update} className='flex items-center'>
                                Cập nhật
                            </CheckboxGroup.Item>
                        </Grid>
                    </CheckboxGroup.Root>
                </DataList.Value>
            </DataList.Item>
            <DataList.Item align='end' className='flex flex-col items-start'>
                <DataList.Label className='font-bold'>Nhân viên</DataList.Label>
                <DataList.Value>
                    <CheckboxGroup.Root
                        disabled={disable}
                        name={instance?.employee}
                        value={permission?.employee}
                        onValueChange={handleChecked(instance.employee)}
                    >
                        <Grid columns={'3'} gapY={'3'} gapX={'1'}>
                            <CheckboxGroup.Item value={employee_permission.detail} className='flex items-center'>
                                Chi tiết
                            </CheckboxGroup.Item>
                            <CheckboxGroup.Item value={employee_permission.create} className='flex items-center'>
                                Tạo NV
                            </CheckboxGroup.Item>
                            <CheckboxGroup.Item
                                value={employee_permission.reset_password}
                                className='flex items-center'
                            >
                                Reset Pass
                            </CheckboxGroup.Item>
                            <CheckboxGroup.Item value={employee_permission.permission} className='flex items-center'>
                                Phân quyền
                            </CheckboxGroup.Item>
                        </Grid>
                    </CheckboxGroup.Root>
                </DataList.Value>
            </DataList.Item>
            <DataList.Item align='end' className='flex flex-col items-start'>
                <DataList.Label>Đánh giá</DataList.Label>
                <DataList.Value>
                    <CheckboxGroup.Root
                        disabled={disable}
                        name={instance?.rating}
                        value={permission?.rating}
                        onValueChange={handleChecked(instance.rating)}
                    >
                        <Grid columns={'3'} gap={'5'}>
                            <CheckboxGroup.Item value={rating_permission.detail} className='flex items-center'>
                                Chi tiết
                            </CheckboxGroup.Item>
                            <CheckboxGroup.Item value={rating_permission.reply} className='flex items-center'>
                                Phản hồi
                            </CheckboxGroup.Item>
                        </Grid>
                    </CheckboxGroup.Root>
                </DataList.Value>
            </DataList.Item>
            <DataList.Item align='end' className='flex flex-col items-start'>
                <DataList.Label>Mã giảm giá</DataList.Label>
                <DataList.Value>
                    <CheckboxGroup.Root
                        disabled={disable}
                        name={instance?.voucher}
                        value={permission?.voucher}
                        onValueChange={handleChecked(instance.voucher)}
                    >
                        <Grid columns={'3'} gap={'5'}>
                            <CheckboxGroup.Item value={voucher_permission.detail} className='flex items-center'>
                                Chi tiết
                            </CheckboxGroup.Item>
                            <CheckboxGroup.Item value={voucher_permission.create} className='flex items-center'>
                                Tạo mới
                            </CheckboxGroup.Item>
                            <CheckboxGroup.Item value={voucher_permission.update} className='flex items-center'>
                                Cập nhật
                            </CheckboxGroup.Item>
                        </Grid>
                    </CheckboxGroup.Root>
                </DataList.Value>
            </DataList.Item>
        </>
    )
}

export default SubAdmin
