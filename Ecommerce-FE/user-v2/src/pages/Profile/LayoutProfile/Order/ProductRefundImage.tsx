import { Avatar } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import { productFetching } from 'src/apis/product'
import { ProductOrder } from 'src/types/order.type'

type Props = {
    productOrderId: string
    ProductOrder: ProductOrder[]
}

const ProductRefundImage = ({ productOrderId, ProductOrder }: Props) => {
    let productId = ProductOrder.find((item) => item.id === productOrderId)?.productId
    const { data } = useQuery({
        queryKey: ['image_product_detail', productId],
        queryFn: productFetching.getImageProductDetail(productId || ''),
        select: (result) => result.data.result?.[0].url
    })
    return <Avatar size={'5'} src={data} fallback={`product_refund_${productId}`} />
}

export default ProductRefundImage
