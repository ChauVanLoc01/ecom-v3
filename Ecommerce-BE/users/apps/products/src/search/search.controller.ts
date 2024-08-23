import { PrismaServiceProduct } from '@app/common/prisma/product_prisma.service'
import { Controller, Get, Query } from '@nestjs/common'
import { ElasticsearchService } from '@nestjs/elasticsearch'
import { Return } from 'common/types/result.type'
import { ProductSearchBody, ProductSearchResult } from 'common/types/search.type'
import { keyBy } from 'lodash'
import { ScrollInfinityDTO } from './dtos/scroll.query.dto'

@Controller('search-product')
export class SearchController {
    index = 'product'
    constructor(
        private readonly searchService: ElasticsearchService,
        private readonly prisma: PrismaServiceProduct
    ) {}

    async markIndex(product: ProductSearchBody) {
        return await this.searchService.index<ProductSearchBody>({
            index: this.index,
            body: product
        })
    }

    @Get('mark-index')
    async markIndexForAll() {
        const produtcs = await this.prisma.product.findMany()
        const category = keyBy(await this.prisma.category.findMany(), 'shortname')

        await Promise.all(
            produtcs.map((product) =>
                this.markIndex({ ...product, category: category[product.category].description })
            )
        )

        return {
            msg: 'ok'
        }
    }

    @Get()
    async scrollInfinity(@Query() queryBody: ScrollInfinityDTO): Promise<Return> {
        try {
            const { scroll, query, scroll_id } = queryBody
            let tmp = new Set<string>()
            let result = []
            if (!scroll_id) {
                const { body } = await this.searchService.search<ProductSearchResult>({
                    scroll,
                    index: this.index,
                    size: 9,
                    body: {
                        query: {
                            bool: {
                                should: [
                                    { match: { name: query } },
                                    { match: { description: query } },
                                    { match: { shortname: query } }
                                ],
                                minimum_should_match: 1 // Chỉ cần 1 trong số các điều kiện khớp
                            }
                        }
                    }
                })

                body.hits.hits.forEach((item, idx) => {
                    if (!idx) {
                        tmp.add(item._source.name)
                        result.push(item._source)
                        return
                    }
                    let check = tmp.has(item._source.name)
                    if (!check) {
                        result.push(item._source)
                    }
                })

                return {
                    msg: 'ok',
                    result: {
                        total: body.hits.total.value,
                        scroll_id: body._scroll_id,
                        data: result
                    }
                }
            }

            const { body } = await this.searchService.scroll<ProductSearchResult>({
                scroll_id,
                scroll
            })

            if (!body.hits.hits.length) {
                await this.searchService.clearScroll({
                    scroll_id
                })
            }

            body.hits.hits.forEach((item, idx) => {
                if (!idx) {
                    tmp.add(item._source.name)
                    result.push(item._source)
                    return
                }
                let check = tmp.has(item._source.name)
                if (!check) {
                    result.push(item._source)
                }
            })

            return {
                msg: 'ok',
                result: {
                    total: body.hits.total.value,
                    scroll_id: body._scroll_id,
                    data: result
                }
            }
        } catch (err) {
            return {
                msg: 'ok',
                result: 'Hết sản phẩm'
            }
        }
    }

    async updateProductSearch(product: ProductSearchBody) {
        const script = Object.entries(product).reduce((result, [key, value]) => {
            return `${result} ctx._source.${key}='${value}';`
        }, '')
        return await this.searchService.updateByQuery({
            index: this.index,
            body: {
                query: {
                    match: {
                        id: product.id
                    }
                },
                script: {
                    source: script
                }
            }
        })
    }
}
