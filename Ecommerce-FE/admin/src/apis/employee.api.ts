import {
    AnalyticsEmployee,
    CreateEmployeeResponse,
    EmployeeListResponse,
    EmployeeQuery,
    PermissionDetail
} from 'src/types/employee.type'
import { CreateEmployee } from 'src/utils/employee.schema'
import { http } from './http'

export const EmployeeApi = {
    getAllEmployee: (query: EmployeeQuery) => {
        return http.get<EmployeeListResponse>('user/employee', {
            params: query
        })
    },
    createEmployee: (body: CreateEmployee) => {
        return http.post<CreateEmployeeResponse>('user/employee/employee-register', body)
    },
    resetPassword: (body: { employeeId: string; username: string; password: string }) => {
        return http.put('user/authentication/employee/reset-password', body)
    },
    blockEmployee: (body: { employeeId: string; status: string }) => {
        return http.delete(`user/employee/employee-profile/${body.employeeId}`, {
            data: {
                status: body.status
            }
        })
    },
    employeeAnalytic: () => {
        return http.get<AnalyticsEmployee>('user/employee/employee-analytics')
    },
    getPermissionDetail: (employeeId: string) => () => {
        return http.get<PermissionDetail>(`user/employee/permission/${employeeId}`)
    },
    updatePermission:
        (employeeId: string) => (body: { actions: { instance: string; permissions: string[] }[]; storeId: string }) => {
            return http.put(`user/employee/permission/${employeeId}`, body)
        }
}
