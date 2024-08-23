export type ProductSearchBody = Pick<any, 'id' | 'name' | 'description'> & { category: string }

export type ProductSearchResult = {
    _scroll_id: number
    hits: {
        total: {
            value: number
        }
        hits: {
            _source: ProductSearchBody
        }[]
    }
}
