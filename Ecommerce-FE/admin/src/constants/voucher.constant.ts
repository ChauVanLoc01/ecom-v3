import { OBJECT } from './role'

export type VoucherType = 'STORE' | 'GLOBAL' | 'HIDDEN'

export const voucher_store: Partial<Record<VoucherType, string>> = {
    STORE: 'Normal Voucher',
    HIDDEN: 'Private Voucher'
}

export const voucher_admin: Partial<Record<VoucherType, string>> = {
    GLOBAL: 'Normal Voucher',
    HIDDEN: 'Private Voucher'
}

export const voucher_type: Record<OBJECT, Partial<Record<VoucherType, string>>> = {
    ADMIN: voucher_admin,
    STORE_OWNER: voucher_store,
    EMPLOYEE: voucher_store
}
