import * as yup from 'yup'

export const delivery_schema = yup.object({
    full_name: yup.string().required('Không được bỏ trống').default(''),
    address: yup.string().required('Không được bỏ trống').default(''),
    phone: yup.string().max(12, 'Tối đa 12 kí tự').required('Không được bỏ trống').default('')
})

export const update_delivery = yup.object({
    full_name: yup.string().optional().default(''),
    address: yup.string().optional().default(''),
    phone: yup.string().min(10).max(11, 'Tối đa 12 kí tự').optional().default('')
})
export type UpdateDeliveryType = yup.InferType<typeof update_delivery>

export type DeliverySchemaType = yup.InferType<typeof delivery_schema>
