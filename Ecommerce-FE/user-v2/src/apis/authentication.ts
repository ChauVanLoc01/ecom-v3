import { AxiosResponse } from 'axios'
import { user } from 'src/constants/endpoints'
import { LoginBody, LoginResponse, RegisterBody, RegisterResponse, RegisterStoreResponse } from 'src/types/auth.type'
import { Return } from 'src/types/return.type'
import { RegisterStoreSchemaType } from 'src/utils/store.schema'
import { http } from './http'
import { method } from './method'

const { POST } = method(user)

export const authFetching = {
    login: (body: LoginBody) => {
        return POST<Return<LoginResponse>, LoginBody>('authentication/user-login', body)
    },
    register: (body: RegisterBody) => {
        return POST<Return<RegisterResponse>, RegisterBody>('authentication/user-register', body)
    },
    becomeStore: (body: RegisterStoreSchemaType & { image: string }) => {
        return http.post<RegisterStoreResponse, AxiosResponse<RegisterStoreResponse>, RegisterStoreSchemaType>(
            'store/store/register',
            body
        )
    },
    sendOTP: (body: { email: string; new_password: string }) => {
        return http.post('/user/authentication/otp', body)
    },
    submitOTP: (body: { code: number }) => {
        return http.post('/user/authentication/reset-password', body)
    },
    getUserName: (userId: string) => () => {
        return http.get<{ full_name: string }>(`user/authentication/name/${userId}`)
    }
}
