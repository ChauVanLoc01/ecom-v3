import { route } from './route'

export enum SERVICE {
    'Overview' = 'Overview',
    'Analytics' = 'Analytics',
    'FlashSale' = 'FlashSale',
    'Product' = 'Product',
    'Order' = 'Order',
    'Employee' = 'Employee',
    'Rating' = 'Rating',
    'Voucher' = 'Voucher',
    'Store' = 'Store',
    'User' = 'User'
}

export type ACTION = 'Detail' | 'Create' | 'Update' | 'Delete' | 'Full' | 'ADMIN'

export type OBJECT = 'STORE_OWNER' | 'EMPLOYEE' | 'ADMIN'

export const OBJECT_LABEL: Record<OBJECT, string> = {
    ADMIN: 'Quản trị viên',
    EMPLOYEE: 'Nhân viên',
    STORE_OWNER: 'Chủ cửa hàng'
}

export type RoleType = Record<OBJECT, Record<Partial<SERVICE>, ACTION[]>>

export const ROLE: RoleType = {
    ADMIN: {
        Overview: ['ADMIN'],
        Analytics: [],
        FlashSale: [],
        Product: [],
        Order: [],
        Employee: [],
        Rating: [],
        Voucher: ['ADMIN'],
        Store: ['ADMIN'],
        User: ['ADMIN']
    },
    STORE_OWNER: {
        Overview: [],
        Analytics: ['Full'],
        FlashSale: ['Full'],
        Product: ['Full'],
        Order: ['Full'],
        Employee: ['Full'],
        Rating: ['Full'],
        Voucher: ['Full'],
        Store: [],
        User: []
    },
    EMPLOYEE: {
        Overview: [],
        Analytics: [],
        FlashSale: ['Create', 'Delete', 'Update'],
        Product: ['Create', 'Delete', 'Update'],
        Order: ['Update'],
        Employee: [],
        Rating: ['Update'],
        Voucher: ['Create', 'Delete', 'Update'],
        Store: [],
        User: []
    }
}

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
    user = 'user',
    sub_admin = 'sub_admin'
}

export const map_path = {
    [instance.overview]: route.over_view,
    [instance.flashsale]: route.flashSale,
    [instance.product]: route.product,
    [instance.order]: route.order,
    [instance.employee]: route.employee,
    [instance.rating]: route.rating,
    [instance.voucher]: route.voucher,
    [instance.analytic]: route.analytic,
    [instance.store]: route.store,
    [instance.user]: route.user
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
    reset_password = 'reset_password',
    permission = 'permission'
}

// Permission cho Rating
export enum rating_permission {
    detail = 'detail',
    reply = 'reply'
}

// Permission cho Voucher
export enum voucher_permission {
    detail = 'detail',
    create = 'create',
    update = 'update'
}

export type IsCan = Partial<Record<instance, Record<string, boolean>>>

export const SideNavData: Record<instance, { label: string; path: string; icon: string }> = {
    [instance.overview]: {
        label: 'Tổng quan',
        path: `/${route.over_view}`,
        icon: 'SiGoogleanalytics'
    },
    [instance.analytic]: {
        label: 'Tổng quan',
        path: `/${route.analytic}`,
        icon: 'SiGoogleanalytics'
    },
    [instance.flashsale]: {
        label: 'Flash Sale',
        path: `/${route.flashSale}`,
        icon: 'MdFlashOn'
    },
    [instance.product]: {
        label: 'Sản phẩm',
        path: route.product,
        icon: 'RiBox3Fill'
    },
    [instance.order]: {
        label: 'Đơn hàng',
        path: route.order,
        icon: 'RiBillFill'
    },
    [instance.employee]: {
        label: 'Nhân viên',
        path: route.employee,
        icon: 'MdManageAccounts'
    },
    [instance.rating]: {
        label: 'Đánh giá',
        path: route.rating,
        icon: 'GoStarFill'
    },
    [instance.voucher]: {
        label: 'Mã giảm giá',
        path: route.voucher,
        icon: 'IoTicket'
    },
    [instance.store]: {
        label: 'Cửa hàng',
        path: route.store,
        icon: 'IoStorefront'
    },
    [instance.user]: {
        label: 'Người dùng',
        path: route.user,
        icon: 'MdSupervisorAccount'
    },
    [instance.sub_admin]: {
        label: 'Quản trị',
        path: route.sub_admin,
        icon: 'FaUserCog'
    }
}
