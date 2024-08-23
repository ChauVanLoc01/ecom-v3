import { AxiosResponse } from 'axios'
import { Return } from 'src/types/return.type'
import { ChangePasswordSchemaType, ProfileSchemaType } from 'src/utils/profile.schema'
import { http } from './http'
import { User } from 'src/types/auth.type'

export const profileFetching = {
    getProfile: () => {
        return http.get('/user/profile/user-profile')
    },
    uploadImage: (formData: FormData) => {
        return http.postForm<Return<string>, AxiosResponse<Return<string>>, FormData>(
            '/store/store/upload-single-file',
            formData
        )
    },
    updateProfile: (body: ProfileSchemaType & { image?: string; birthday?: string }) => {
        return http.put<Return<User>>('/user/profile/user-profile', body)
    },
    changePassword: (body: Omit<ChangePasswordSchemaType, 'confirm_new_password'>) => {
        return http.put('/user/authentication/change-password', body)
    }
}
