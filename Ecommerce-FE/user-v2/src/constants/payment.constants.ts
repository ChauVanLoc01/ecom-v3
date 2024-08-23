import { Payment } from 'src/types/payment.type'

export const payment_data: { key: Payment; lable: string }[] = [
    {
        key: 'cash',
        lable: 'Thanh toán khi nhận hàng'
    },
    {
        key: 'VNPAYQR',
        lable: 'App'
    },
    {
        key: 'VNBANK',
        lable: 'ATM'
    },
    {
        key: 'INTCARD',
        lable: 'VISA'
    }
]

export const payment_label = {
    cash: 'Thanh toán khi nhận hàng',
    VNPAYQR: 'App VNPay',
    VNBANK: 'ATM',
    INTCARD: 'VISA'
}
