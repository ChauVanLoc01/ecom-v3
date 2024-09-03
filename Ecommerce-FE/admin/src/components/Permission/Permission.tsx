import { ReactNode, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { instance } from 'src/constants/role'
import { route } from 'src/constants/route'
import { AppContext } from 'src/contexts/AppContext'

type Props = {
    instance: instance
    children: ReactNode
}

const Permission = ({ children, instance }: Props) => {
    const { permission } = useContext(AppContext)
    let isValid = permission?.[instance]
    return <>{isValid ? children : <Navigate to={`/${route.permission}`} />}</>
}
export const AnalyticPermission = ({ children }: Pick<Props, 'children'>) => {
    return <Permission instance={instance.analytic}>{children}</Permission>
}
export const FlashSalePermission = ({ children }: Pick<Props, 'children'>) => {
    return <Permission instance={instance.flashsale}>{children}</Permission>
}
export const ProductPermission = ({ children }: Pick<Props, 'children'>) => {
    return <Permission instance={instance.product}>{children}</Permission>
}
export const OrderPermission = ({ children }: Pick<Props, 'children'>) => {
    return <Permission instance={instance.order}>{children}</Permission>
}
export const EmployeePermission = ({ children }: Pick<Props, 'children'>) => {
    return <Permission instance={instance.employee}>{children}</Permission>
}
export const RatingPermission = ({ children }: Pick<Props, 'children'>) => {
    return <Permission instance={instance.rating}>{children}</Permission>
}
export const VoucherPermission = ({ children }: Pick<Props, 'children'>) => {
    return <Permission instance={instance.voucher}>{children}</Permission>
}
export const OverViewPermission = ({ children }: Pick<Props, 'children'>) => {
    return <Permission instance={instance.overview}>{children}</Permission>
}
export const StorePermission = ({ children }: Pick<Props, 'children'>) => {
    return <Permission instance={instance.store}>{children}</Permission>
}
export const UserPermission = ({ children }: Pick<Props, 'children'>) => {
    return <Permission instance={instance.user}>{children}</Permission>
}
export const SubAdminPermission = ({ children }: Pick<Props, 'children'>) => {
    return <Permission instance={instance.sub_admin}>{children}</Permission>
}
