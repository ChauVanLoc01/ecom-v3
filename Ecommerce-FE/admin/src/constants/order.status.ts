export const OrderStatus: { [key: string]: { label: string; color: string; key: string } } = {
    WAITING_CONFIRM: {
        label: 'Chờ xác nhận',
        color: 'orange',
        key: 'WAITING_CONFIRM'
    },
    CLIENT_CANCEL: {
        label: 'Khách hàng hủy',
        color: 'red',
        key: 'CLIENT_CANCEL'
    },
    REQUEST_CANCEL: {
        label: 'Yêu cầu hủy đơn với khách hàng',
        color: 'red',
        key: 'REQUEST_CANCEL'
    },
    ACCEPT_CANCEL: {
        label: 'Khách hàng đồng ý hủy đơn',
        color: 'red',
        key: 'ACCEPT_CANCEL'
    },
    CONFIRM_AND_SHIPPING: {
        label: 'Xác nhận và đang giao hàng',
        color: 'yellow',
        key: 'CONFIRM_AND_SHIPPING'
    },
    SHIPING_SUCCESS: {
        label: 'Giao hàng thành công',
        color: 'green',
        key: 'SHIPING_SUCCESS'
    },
    REQUEST_REFUND: {
        label: 'Yêu cầu hoàn đổi',
        color: 'blue',
        key: 'REQUEST_REFUND'
    },
    UPDATE_REFUND: {
        label: 'Cập nhật hoàn đổi',
        color: 'blue',
        key: 'UPDATE_REFUND'
    },
    CANCEL_REFUND: {
        label: 'Hủy hoàn đổi',
        color: 'blue',
        key: 'CANCEL_REFUND'
    },
    ACCEPT_REFUND_AND_SHIPPING: {
        label: 'Đồng ý hoàn đổi và đang giao hàng',
        color: 'purple',
        key: 'ACCEPT_REFUND_AND_SHIPPING'
    },
    REFUND_SHIPPING_SUCCESS: {
        label: 'Giao đơn hoàn đổi thành công',
        color: 'purple',
        key: 'REFUND_SHIPPING_SUCCESS'
    },
    RE_OPEN_REFUND: {
        label: 'Mở lại yêu cầu hoàn đổi',
        color: 'blue',
        key: 'RE_OPEN_REFUND'
    },
    CLOSE_REFUND: {
        label: 'Đóng yêu cầu hoàn đổi',
        color: 'blue',
        key: 'CLOSE_REFUND'
    },
    FINISH: {
        label: 'Hoàn thành',
        color: 'green',
        key: 'FINISH'
    },
    REJECT_CANCEL: {
        label: 'Khách hàng không đồng ý hủy',
        color: 'purple',
        key: 'REJECT_CANCEL'
    },
    NOT_RECEIVED: {
        label: 'Khách hàng khiếu nại',
        color: 'orange',
        key: 'NOT_RECEIVED'
    }
}

export const UserStatus: { [key: string]: { lable: string; color: string } } = {
    ACTIVE: {
        lable: 'Đang hoạt động',
        color: 'blue'
    },
    BLOCK: {
        lable: 'Đã bị khóa',
        color: 'red'
    }
}

export enum OrderStatusWithoutColor {
    WAITING_CONFIRM = 'WAITING_CONFIRM',
    SHIPING = 'SHIPING',
    SUCCESS = 'SUCCESS',
    CANCEL = 'CANCEL'
}

export enum OrderFlowEnum {
    WAITING_CONFIRM = 'WAITING_CONFIRM',
    CLIENT_CANCEL = 'CLIENT_CANCEL',
    REQUEST_CANCEL = 'REQUEST_CANCEL',
    ACCEPT_CANCEL = 'ACCEPT_CANCEL',
    CONFIRM_AND_SHIPPING = 'CONFIRM_AND_SHIPPING',
    SHIPING_SUCCESS = 'SHIPING_SUCCESS',
    REQUEST_REFUND = 'REQUEST_REFUND',
    UPDATE_REFUND = 'UPDATE_REFUND',
    CANCEL_REFUND = 'CANCEL_REFUND',
    ACCEPT_REFUND_AND_SHIPPING = 'ACCEPT_REFUND_AND_SHIPPING',
    REFUND_SHIPPING_SUCCESS = 'REFUND_SHIPPING_SUCCESS',
    RE_OPEN_REFUND = 'RE_OPEN_REFUND',
    CLOSE_REFUND = 'CLOSE_REFUND',
    FINISH = 'FINISH',
    REJECT_CANCEL = 'REJECT_CANCEL',
    NOT_RECEIVED = 'NOT_RECEIVED',
    ACCEPT_COMPLAIN = 'ACCEPT_COMPLAIN',
    REJECT_COMPLAIN = 'REJECT_COMPLAIN',
    CREATE_ORDER_COMPLAIN = 'CREATE_ORDER_COMPLAIN'
}

export const order_next_flow = {
    [OrderFlowEnum.WAITING_CONFIRM]: [OrderFlowEnum.REQUEST_CANCEL, OrderFlowEnum.CONFIRM_AND_SHIPPING],
    [OrderFlowEnum.CONFIRM_AND_SHIPPING]: [OrderFlowEnum.SHIPING_SUCCESS],
    [OrderFlowEnum.REQUEST_REFUND]: [OrderFlowEnum.ACCEPT_REFUND_AND_SHIPPING, OrderFlowEnum.CANCEL_REFUND],
    [OrderFlowEnum.ACCEPT_REFUND_AND_SHIPPING]: [OrderFlowEnum.REFUND_SHIPPING_SUCCESS],
    [OrderFlowEnum.REJECT_CANCEL]: [OrderFlowEnum.CONFIRM_AND_SHIPPING],
    [OrderFlowEnum.NOT_RECEIVED]: [OrderFlowEnum.ACCEPT_COMPLAIN, OrderFlowEnum.REJECT_COMPLAIN],
    [OrderFlowEnum.ACCEPT_COMPLAIN]: [OrderFlowEnum.CREATE_ORDER_COMPLAIN],
    [OrderFlowEnum.REJECT_COMPLAIN]: [OrderFlowEnum.FINISH],
    [OrderFlowEnum.CREATE_ORDER_COMPLAIN]: [OrderFlowEnum.SHIPING_SUCCESS]
}

export const OrderFlowLable = {
    [OrderFlowEnum.WAITING_CONFIRM]: 'Đơn hàng chờ xác nhận',
    [OrderFlowEnum.CLIENT_CANCEL]: 'Khách hàng đã hủy đơn',
    [OrderFlowEnum.REQUEST_CANCEL]: 'Bạn đã yêu cầu hủy đơn hàng với khách hàng',
    [OrderFlowEnum.ACCEPT_CANCEL]: 'Khách hàng xác nhận cho phép cửa hàng hủy đơn',
    [OrderFlowEnum.REJECT_CANCEL]: 'Khách hàng không đồng ý hủy đơn',
    [OrderFlowEnum.CONFIRM_AND_SHIPPING]: 'Đơn hàng đang trong quá trình giao đến khách hàng',
    [OrderFlowEnum.SHIPING_SUCCESS]: 'Đơn hàng đã giao đến khách hàng',
    [OrderFlowEnum.REQUEST_REFUND]: 'Khách hàng đã yêu cầu hoàn đổi sản phẩm',
    [OrderFlowEnum.UPDATE_REFUND]: 'Khách hàng đã cập nhật đơn hoàn đổi sản phẩm',
    [OrderFlowEnum.ACCEPT_REFUND_AND_SHIPPING]:
        'Cửa hàng của bạn đã chấp nhận hoàn đổi sản phẩm và đang tiến hành gửi sản phẩm khác đến khách hàng',
    [OrderFlowEnum.REFUND_SHIPPING_SUCCESS]: 'Đơn hoàn đổi sản phẩm đã giao đến khách hàng',
    [OrderFlowEnum.CANCEL_REFUND]: 'Khách hàng đã hủy đơn hoàn đổi',
    [OrderFlowEnum.RE_OPEN_REFUND]: 'Sản phẩm hoàn đổi không đạt yêu cầu. Khách hàng yêu cầu hoàn đổi lại',
    [OrderFlowEnum.CLOSE_REFUND]: 'Sản phẩm hoàn đổi đạt yêu cầu. Đơn hoàn đổi đóng',
    [OrderFlowEnum.FINISH]: 'Đơn hàng hoàn thành',
    [OrderFlowEnum.NOT_RECEIVED]: 'Khách hàng khiếu nại vẫn chưa nhận được hàng!',
    [OrderFlowEnum.ACCEPT_COMPLAIN]: 'Bạn đã đồng ý giải quyết khiếu nại',
    [OrderFlowEnum.REJECT_COMPLAIN]: 'Bạn đã từ chối giải quyết khiếu nại',
    [OrderFlowEnum.CREATE_ORDER_COMPLAIN]: 'Bạn đã tạo đơn giao lại cho cho khách hàng'
}

export const OrderNextFlowLable = {
    [OrderFlowEnum.WAITING_CONFIRM]: 'Đơn hàng chờ xác nhận',
    [OrderFlowEnum.CLIENT_CANCEL]: 'Khách hàng đã hủy đơn',
    [OrderFlowEnum.REQUEST_CANCEL]: 'Bạn muốn yêu cầu hủy đơn với khách hàng?',
    [OrderFlowEnum.ACCEPT_CANCEL]: 'Khách hàng xác nhận cho phép cửa hàng hủy đơn',
    [OrderFlowEnum.CONFIRM_AND_SHIPPING]: 'Xác nhận và tiến hành giao hàng',
    [OrderFlowEnum.SHIPING_SUCCESS]: 'Đơn hàng đã giao đến khách hàng',
    [OrderFlowEnum.REQUEST_REFUND]: 'Khách hàng đã yêu cầu hoàn đổi sản phẩm',
    [OrderFlowEnum.UPDATE_REFUND]: 'Khách hàng đã cập nhật đơn hoàn đổi sản phẩm',
    [OrderFlowEnum.ACCEPT_REFUND_AND_SHIPPING]: 'Bạn chấp nhận hoàn đổi sản phẩm với khách hàng',
    [OrderFlowEnum.REFUND_SHIPPING_SUCCESS]: 'Đơn hoàn đổi sản phẩm đã giao đến khách hàng',
    [OrderFlowEnum.CANCEL_REFUND]: 'Bạn muốn từ chối đổi sản phẩm mới cho khách hàng',
    [OrderFlowEnum.RE_OPEN_REFUND]: 'Sản phẩm hoàn đổi không đạt yêu cầu. Khách hàng yêu cầu hoàn đổi lại',
    [OrderFlowEnum.CLOSE_REFUND]: 'Sản phẩm hoàn đổi đạt yêu cầu. Đơn hoàn đổi đóng',
    [OrderFlowEnum.FINISH]: 'Đơn hàng hoàn thành',
    [OrderFlowEnum.REJECT_CANCEL]: 'Hủy đơn',
    [OrderFlowEnum.REJECT_COMPLAIN]: 'Bạn muốn từ chối giải quyết khiếu nại',
    [OrderFlowEnum.ACCEPT_COMPLAIN]: 'Bạn muốn tiếp nhận giải quyết đơn khiếu nại',
    [OrderFlowEnum.CREATE_ORDER_COMPLAIN]: 'Lên đơn hàng để giao lại cho khách'
}
