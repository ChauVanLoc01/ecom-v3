import { yupResolver } from '@hookform/resolvers/yup'
import { AlertDialog, Button, Code, DataList, Flex, Select, Spinner, Text, TextArea, TextField } from '@radix-ui/themes'
import { QueryObserverResult, RefetchOptions, useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse, isAxiosError } from 'axios'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { ProductApi } from 'src/apis/product.api'
import { UploadApi } from 'src/apis/upload_file.api'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from 'src/components/Shadcn/carousel'
import { product_label } from 'src/constants/product.status'
import { Category, Product, ProductAnalyticResponse, ProductQueryAndPagination } from 'src/types/product.type'
import { update_product_schema, UpdateProductSchema } from 'src/utils/product.schema'
import { convertCurrentcy, formatCurrencyInput } from 'src/utils/utils'
import ProductUploadFile from './ProductUploadFile'

type ProductUpdateProps = {
    categories: { [key: string]: Category }
    analyticsRefetch: (
        options?: RefetchOptions
    ) => Promise<QueryObserverResult<AxiosResponse<ProductAnalyticResponse, any>, Error>>
    productListRefetch: (options?: RefetchOptions) => Promise<
        QueryObserverResult<
            {
                data: Product[]
                query: Omit<ProductQueryAndPagination, 'page'> & {
                    page: number
                    page_size: number
                }
            },
            Error
        >
    >
    open: boolean
    setOpenCreate: React.Dispatch<boolean>
    selectedProduct: Product
}

const ProductUpdate = ({
    categories,
    analyticsRefetch,
    productListRefetch,
    selectedProduct,
    open,
    setOpenCreate
}: ProductUpdateProps) => {
    const [openSubmit, setOpenSubmit] = useState<boolean>(false)
    const [files, setFiles] = useState<Record<string, { file: File; isNew: boolean }> | undefined>(undefined)
    const [data, setData] = useState<Product | undefined>(undefined)
    const [imagePrimary, setImagePrimary] = useState<string | undefined>(undefined)
    const [newQuantity, setNewQuantity] = useState<{ value: number; prefix: '+' | '-' }>({ value: 0, prefix: '+' })

    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm<UpdateProductSchema>({
        resolver: yupResolver(update_product_schema),
        defaultValues: selectedProduct
    })

    const { data: imgs, refetch: imgRefetch } = useQuery({
        queryKey: ['productDetail', selectedProduct.id],
        queryFn: ProductApi.getImageProductDetail(selectedProduct.id),
        select: (result) => result.data.result
    })

    const { mutateAsync: uploadImage } = useMutation({
        mutationFn: UploadApi.updateMultipleFile,
        onError: () => {
            toast.error('Có lỗi trong quá trình upload hình ảnh')
        }
    })

    const { mutate: updateProductMutate, isPending: isUpdating } = useMutation({
        mutationFn: ProductApi.updateProduct(selectedProduct.id),
        onSuccess: () => {
            analyticsRefetch()
            productListRefetch()
            setFiles(undefined)
            reset()
            setTimeout(() => {
                toast.success('Cập nhật sản phẩm thành công')
                setOpenSubmit(false)
            }, 500)
            setTimeout(() => {
                setOpenCreate(false)
            }, 500)
        },
        onError: () => {
            toast.error('Cập nhật sản phẩm thất bại')
            setOpenSubmit(false)
        }
    })

    const onSubmit: SubmitHandler<UpdateProductSchema> = async (data) => {
        try {
            let isUploadFile = false
            let formData = new FormData()
            Object.values(files || {}).forEach((item) => {
                let { file, isNew } = item
                if (isNew) {
                    isUploadFile = true
                }
                formData.append('files', file)
            })
            if (isUploadFile) {
                let urls = await uploadImage(formData)
                data = {
                    category: data?.category,
                    initQuantity: data?.initQuantity,
                    name: data?.name,
                    priceAfter: data?.priceAfter,
                    priceBefore: data?.priceBefore || 0,
                    status: data?.status
                }
                updateProductMutate({
                    ...data,
                    urls: urls.data.result
                })
            } else {
                updateProductMutate(data)
            }
        } catch (error) {
            if (isAxiosError(error)) {
                toast.error(error.response?.data?.msg || 'Lỗi không xác định')
            }
        }
    }

    return (
        <AlertDialog.Root open={open} onOpenChange={setOpenCreate}>
            <AlertDialog.Content maxWidth='600px' className='!rounded-8'>
                <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
                    <AlertDialog.Title>Cập nhật sản phẩm</AlertDialog.Title>
                    <Flex direction={'column'} gapY={'2'}>
                        {imgs && (
                            <Carousel className='w-full'>
                                <CarouselContent>
                                    {Array(10)
                                        .fill(0)
                                        .map((_, idx) => (
                                            <div key={idx} className='basis-1/3 mr-5 last:mr-0 flex-shrink-0'>
                                                <ProductUploadFile
                                                    setFiles={setFiles}
                                                    key={idx}
                                                    id={`file${idx + 1}`}
                                                    imagePrimary={imagePrimary}
                                                    setImagePrimary={setImagePrimary}
                                                    defaultUrls={
                                                        imgs.length ? imgs.map((e) => e.url) : [selectedProduct.image]
                                                    }
                                                />
                                            </div>
                                        ))}
                                </CarouselContent>
                                <CarouselPrevious type='button' />
                                <CarouselNext type='button' />
                            </Carousel>
                        )}
                        <Text size={'2'} color='gray'>
                            <Text color='red'>*</Text> Cần có ít nhất 1 hình ảnh sản phẩm (
                            <Text color={Object.keys(files || {}).length > 1 ? 'blue' : 'red'}>
                                {files ? Object.keys(files).length : 0}
                            </Text>
                            /10)
                        </Text>
                    </Flex>
                    <DataList.Root>
                        <DataList.Item align='start'>
                            <DataList.Label minWidth='180px'>
                                <Flex direction={'column'}>
                                    <Text>Tên sản phẩm</Text>
                                    {errors.name && (
                                        <Text color='red' size={'2'} align={'left'}>
                                            {errors.name.message}
                                        </Text>
                                    )}
                                </Flex>
                            </DataList.Label>
                            <DataList.Value>
                                <Controller
                                    control={control}
                                    name='name'
                                    render={({ field }) => (
                                        <TextArea
                                            color={errors.name ? 'red' : 'blue'}
                                            {...field}
                                            className='!flex-grow'
                                        />
                                    )}
                                />
                            </DataList.Value>
                        </DataList.Item>
                        <DataList.Item align='start'>
                            <DataList.Label minWidth='180px'>
                                <Flex direction={'column'}>
                                    <Text>Giá trước giảm</Text>
                                    {errors.priceBefore && (
                                        <Text color={errors.priceBefore ? 'red' : 'blue'} size={'2'} align={'left'}>
                                            {errors.priceBefore.message}
                                        </Text>
                                    )}
                                </Flex>
                            </DataList.Label>
                            <DataList.Value>
                                <Controller
                                    control={control}
                                    name='priceBefore'
                                    render={({ field }) => (
                                        <TextField.Root
                                            {...field}
                                            value={formatCurrencyInput(field?.value || 0)}
                                            onChange={(e) => {
                                                field.onChange(e.target.value.replace(/\D/gim, ''))
                                            }}
                                            color={errors.priceBefore ? 'red' : 'blue'}
                                            className='!flex-grow'
                                        />
                                    )}
                                />
                            </DataList.Value>
                        </DataList.Item>
                        <DataList.Item align='start'>
                            <DataList.Label minWidth='180px'>
                                <Flex direction={'column'}>
                                    <Text>Giá sau giảm</Text>
                                    {errors.priceAfter && (
                                        <Text color={errors.priceAfter ? 'red' : 'blue'} size={'2'} align={'left'}>
                                            {errors.priceAfter.message}
                                        </Text>
                                    )}
                                </Flex>
                            </DataList.Label>
                            <DataList.Value>
                                <Controller
                                    control={control}
                                    name='priceAfter'
                                    render={({ field }) => (
                                        <TextField.Root
                                            color={errors.priceAfter ? 'red' : 'blue'}
                                            value={formatCurrencyInput(field?.value || 0)}
                                            onChange={(e) => {
                                                field.onChange(e.target.value.replace(/\D/gim, ''))
                                            }}
                                            className='!flex-grow'
                                        />
                                    )}
                                />
                            </DataList.Value>
                        </DataList.Item>
                        <DataList.Item align='start'>
                            <DataList.Label minWidth='180px'>
                                <Flex direction={'column'}>
                                    <Text>Tổng số lượng</Text>
                                    {errors.initQuantity && (
                                        <Text color={errors.initQuantity ? 'red' : 'blue'} size={'2'} align={'left'}>
                                            {errors.initQuantity.message}
                                        </Text>
                                    )}
                                </Flex>
                            </DataList.Label>
                            <DataList.Value>
                                <Flex align={'center'} gapX={'4'}>
                                    <Controller
                                        control={control}
                                        name='initQuantity'
                                        render={({ field }) => (
                                            <TextField.Root
                                                {...field}
                                                color={errors.initQuantity ? 'red' : 'blue'}
                                                value={convertCurrentcy(field?.value || 0, false)}
                                                onChange={(e) => {
                                                    let value = e.target.value.replace(/\D/gim, '')
                                                    field.onChange(value)
                                                    let new_value = +value - selectedProduct.initQuantity
                                                    let prefix: (typeof newQuantity)['prefix'] =
                                                        new_value > 0 ? '+' : '-'
                                                    setNewQuantity({
                                                        value: +new_value.toString().replace(/\D/gim, ''),
                                                        prefix
                                                    })
                                                }}
                                                type='number'
                                                className='!flex-grow'
                                            />
                                        )}
                                    />
                                    <Flex gapX={'2'} align={'center'}>
                                        <Code size={'4'}>{selectedProduct.initQuantity}</Code>
                                        <Code size={'4'} color={newQuantity.prefix === '+' ? 'green' : 'red'}>
                                            {newQuantity.prefix}
                                            {newQuantity.value}
                                        </Code>
                                    </Flex>
                                </Flex>
                            </DataList.Value>
                        </DataList.Item>
                        <DataList.Item align='start'>
                            <DataList.Label minWidth='180px'>
                                <Flex direction={'column'}>
                                    <Text>Số lượng hiện có</Text>
                                </Flex>
                            </DataList.Label>
                            <DataList.Value>
                                <Flex align={'center'} gapX={'2'}>
                                    <Code size={'4'}>{selectedProduct.currentQuantity}</Code>
                                    <Code size={'4'} color={newQuantity.prefix === '+' ? 'green' : 'red'}>
                                        {newQuantity.prefix}
                                        {newQuantity.value}
                                    </Code>
                                </Flex>
                            </DataList.Value>
                        </DataList.Item>
                        <DataList.Item align='start'>
                            <DataList.Label minWidth='180px'>
                                <Flex direction={'column'}>
                                    <Text>Trạng thái</Text>
                                    {errors.status && (
                                        <Text color={errors.status ? 'red' : 'blue'} size={'2'} align={'left'}>
                                            {errors.status.message}
                                        </Text>
                                    )}
                                </Flex>
                            </DataList.Label>
                            <DataList.Value>
                                <Controller
                                    control={control}
                                    name='status'
                                    render={({ field }) => (
                                        <Select.Root onValueChange={field.onChange} {...field}>
                                            <Select.Trigger placeholder='Chọn trạng thái' />
                                            <Select.Content position='popper' className='!rounded-8'>
                                                {Object.keys(product_label).map((e) => (
                                                    <Select.Item value={e}>
                                                        {product_label[e as keyof typeof product_label]}
                                                    </Select.Item>
                                                ))}
                                            </Select.Content>
                                        </Select.Root>
                                    )}
                                />
                            </DataList.Value>
                        </DataList.Item>
                        <DataList.Item align='start'>
                            <DataList.Label minWidth='180px'>
                                <Flex direction={'column'}>
                                    <Text>Danh mục</Text>
                                    {errors.category && (
                                        <Text color={errors.category ? 'red' : 'blue'} size={'2'} align={'left'}>
                                            {errors.category.message}
                                        </Text>
                                    )}
                                </Flex>
                            </DataList.Label>
                            <DataList.Value>
                                <Controller
                                    control={control}
                                    name='category'
                                    render={({ field }) => (
                                        <Select.Root onValueChange={field.onChange} {...field}>
                                            <Select.Trigger placeholder='Chọn danh mục...' />
                                            <Select.Content align='start' position='popper' className='!rounded-8'>
                                                {Object.entries(categories).map(([key, value]) => (
                                                    <Select.Item value={key}>{value.name}</Select.Item>
                                                ))}
                                            </Select.Content>
                                        </Select.Root>
                                    )}
                                />
                            </DataList.Value>
                        </DataList.Item>
                    </DataList.Root>
                    <Flex gap='3' mt='4' justify='end'>
                        <AlertDialog.Cancel>
                            <Button type='button' variant='outline' color='red'>
                                Trở về
                            </Button>
                        </AlertDialog.Cancel>
                        <Button type='submit' className='bg-blue'>
                            {isUpdating && <Spinner />}
                            Xác nhận
                        </Button>
                    </Flex>
                </form>
            </AlertDialog.Content>
        </AlertDialog.Root>
    )
}

export default ProductUpdate
