import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { route } from 'src/constants/route'
import { LoginResponse } from 'src/types/auth.type'
import { Return } from 'src/types/return.type'
import { ls } from 'src/utils/localStorage'

class Http {
    private instance: AxiosInstance
    private access_token = ls.getItem('access_token')
    constructor() {
        this.instance = axios.create({
            baseURL: import.meta.env.VITE_ENDPOINT,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: this.access_token
            } as any
        })
        this.middlewareRequest()
        this.middlewareResponse()
    }
    getInstanceAxios() {
        return this.instance
    }
    middlewareRequest() {
        this.instance.interceptors.request.use((config) => {
            config.headers.Authorization = this.access_token
            return config
        })
    }
    middlewareResponse() {
        this.instance.interceptors.response.use(
            (response: AxiosResponse<Return<any>>) => {
                const { config, status, data } = response
                if (status === 201 && config.url?.endsWith(route.login)) {
                    this.access_token = (data.result as LoginResponse).access_token
                }
                return response
            },
            (error: AxiosError<{ error: string; message: string; statusCode: number }>) => {
                console.log('errorr', error)
                return Promise.reject(error)
            }
        )
    }
}

export const http = new Http().getInstanceAxios()

export const abort_controller = new AbortController()
