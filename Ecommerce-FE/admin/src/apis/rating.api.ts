import { RatingQuery, RatingReplyBody, RatingTableResponse } from 'src/types/rating.type'
import { Return } from 'src/types/return.type'
import { http } from './http'

export const RatingAPI = {
    getAllRating: (query: RatingQuery) => {
        return http.get<RatingTableResponse>('store/rating/store-rating', {
            params: query
        })
    },
    getProfileUserInRating: (userId: string) => () => {
        return http.get<Return<{ full_name: string; email: string; image: string; id: string }>>(
            `user/profile/user-profile/${userId}`
        )
    },
    createNewRating: () => {
        return http.post('store/rating')
    },
    getDetail: (ratingId: string) => () => {
        return http.get(`rating/rating-detail/${ratingId}/store`)
    },
    replyRating: (body: RatingReplyBody) => {
        return http.post('store/rating/reply', body)
    },
    getMaterialOfRating: (ratingId: string) => () => {
        return http.get<Return<string[]>>(`store/rating/material/${ratingId}`)
    },
    ratingAnalytic: (storeId: string) => () => {
        return http.get<{ total: number; reply: number; not_reply: number }>(`store/rating/rating-analytics/${storeId}`)
    },
    analyticRatingAdmin: (type: string) => () => {
        return http.get<
            Return<{
                one: number
                two: number
                three: number
                four: number
                five: number
                total: number
                average: number
            }>
        >(`/store/store/analytic-rating/${type}`)
    }
}
