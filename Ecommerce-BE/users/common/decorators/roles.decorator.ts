import { SetMetadata } from '@nestjs/common'
import e from 'express'

export const ROLES_KEY = 'roles'

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles)

export enum instance {
    overview = 'overview',
    flashsale = 'flashsale',
    product = 'product',
    order = 'order',
    employee = 'employee',
    rating = 'rating',
    voucher = 'voucher',
    analytic = 'analytics',
    store = 'store',
    user = 'user'
}

export enum analytic_permission {
    view = 'view'
}

export enum store_permission {
    detail = 'detail',
    update = 'update'
}

export enum user_permission {
    detail = 'detail',
    update = 'update'
}

export enum overview_permission {
    view = 'view'
}

// Permission cho Flash Sale
export enum flashsale_permission {
    detail = 'detail',
    join = 'join',
    update = 'update'
}

// Permission cho Product
export enum product_permission {
    create = 'create',
    detail = 'detail',
    update = 'update'
}

// Permission cho Order
export enum order_permission {
    detail = 'detail',
    update = 'update'
}

// Permission cho Employee
export enum employee_permission {
    detail = 'detail',
    create = 'create',
    permission = 'permission'
}

// Permission cho Rating
export enum rating_permission {
    detail = 'detail',
    reply = 'reply'
}

// Permission cho Voucher
export enum voucher_permission {
    create = 'create',
    update = 'update'
}

export const permission = {
    [instance.overview]: [overview_permission.view],
    [instance.flashsale]: [flashsale_permission.join, flashsale_permission.update],
    [instance.product]: [
        product_permission.create,
        product_permission.detail,
        product_permission.update
    ],
    [instance.order]: [order_permission.detail, order_permission.update],
    [instance.employee]: [employee_permission.create, employee_permission.permission],
    [instance.rating]: [rating_permission.detail, rating_permission.reply],
    [instance.voucher]: [voucher_permission.create, voucher_permission.update]
}

export const INSTANCE_KEY = 'instance_service'
export const Instance = (instance: string) => SetMetadata(INSTANCE_KEY, instance)

export const PERMISSION_KEY = 'permission_key'
export const Permission = (permission: string) => SetMetadata(PERMISSION_KEY, permission)

export const storeowner_tmp = [
    {
        instance: 'overview',
        permissions: [overview_permission.view]
    },
    {
        instance: 'flashsale',
        permissions: [flashsale_permission.join, flashsale_permission.update]
    },
    {
        instance: 'order',
        permissions: [order_permission.detail, order_permission.update]
    },
    {
        instance: 'product',
        permissions: [
            product_permission.detail,
            product_permission.create,
            product_permission.update
        ]
    },
    {
        instance: 'voucher',
        permissions: [voucher_permission.create, voucher_permission.update]
    },
    {
        instance: 'rating',
        permissions: [rating_permission.detail, rating_permission.reply]
    },
    {
        instance: 'employee',
        permissions: [
            employee_permission.detail,
            employee_permission.create,
            employee_permission.permission // Cập nhật cho đúng với tên permission
        ]
    }
]
