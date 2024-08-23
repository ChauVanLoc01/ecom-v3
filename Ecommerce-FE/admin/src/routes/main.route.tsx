import loadable from '@loadable/component'
import { QueryClient } from '@tanstack/react-query'
import { useContext } from 'react'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import {
    AnalyticPermission,
    EmployeePermission,
    FlashSalePermission,
    OrderPermission,
    OverViewPermission,
    ProductPermission,
    RatingPermission,
    StorePermission,
    UserPermission,
    VoucherPermission
} from 'src/components/Permission/Permission'

import { route } from 'src/constants/route'
import { AppContext } from 'src/contexts/AppContext'
import { analyticsLoader } from 'src/loader/analytics.loader'
import { employeeLoader } from 'src/loader/employee.loader'
import { flashSaleLoader } from 'src/loader/flash-sale.loader'
import { orderLoader } from 'src/loader/order.loader'
import { productLoader } from 'src/loader/product.loader'
import { ratingLoader } from 'src/loader/rating.loader'
import { storeLoader } from 'src/loader/store.loader'
import { userLoader } from 'src/loader/user.loader'
import { voucherLoader } from 'src/loader/voucher.loader'

const MainLayout = loadable(() => import('src/layouts/MainLayout'))
const FlashSale = loadable(() => import('src/pages/FlashSale/FlashSale'))
const Analytic = loadable(() => import('src/pages/Analytic'))
const Profile = loadable(() => import('src/pages/Profile'))
const Password = loadable(() => import('src/pages/Profile/LayoutProfile/Password'))
const Overview = loadable(() => import('src/pages/Overview/Overview'))
const Product = loadable(() => import('src/pages/Product'))
const Order = loadable(() => import('src/pages/Order'))
const Employee = loadable(() => import('src/pages/Employee'))
const Rating = loadable(() => import('src/pages/Rating/Rating'))
const Voucher = loadable(() => import('src/pages/Voucher/Voucher'))
const Store = loadable(() => import('src/pages/Store/Store'))
const User = loadable(() => import('src/pages/User/User'))
const PageNotFound = loadable(() => import('src/pages/PageNotFound/PageNotFound'))
const Login = loadable(() => import('src/pages/Auth'))
const PersonalInformation = loadable(() => import('src/pages/Profile/LayoutProfile/PersonalInformation'))

const PrivateRoute = () => {
    const { profile } = useContext(AppContext)
    return profile ? <Outlet /> : <Navigate to={'/login'} />
}

const RejectRoute = () => {
    const { profile } = useContext(AppContext)
    return profile ? <Navigate to={route.login} /> : <Outlet />
}

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            networkMode: 'online',
            staleTime: 1000 * 30
        },
        mutations: {
            networkMode: 'online'
        }
    }
})

const routes = createBrowserRouter([
    {
        element: <PrivateRoute />,
        children: [
            {
                path: route.root,
                element: <MainLayout />,
                // errorElement: <Error />,
                children: [
                    {
                        path: route.profile,
                        element: <Profile />,
                        children: [
                            {
                                index: true,
                                element: <PersonalInformation />
                            },
                            {
                                path: route.changePassword,
                                element: <Password />
                            }
                        ]
                    },
                    {
                        path: route.over_view,
                        element: (
                            <OverViewPermission>
                                <Overview />
                            </OverViewPermission>
                        )
                    },
                    {
                        path: route.analytic,
                        element: (
                            <AnalyticPermission>
                                <Analytic />
                            </AnalyticPermission>
                        ),
                        loader: analyticsLoader
                    },
                    {
                        path: route.flashSale,
                        element: (
                            <FlashSalePermission>
                                <FlashSale />
                            </FlashSalePermission>
                        ),
                        loader: flashSaleLoader
                    },
                    {
                        path: route.product,
                        element: (
                            <ProductPermission>
                                <Product />
                            </ProductPermission>
                        ),
                        loader: productLoader
                    },
                    {
                        path: route.order,
                        element: (
                            <OrderPermission>
                                <Order />
                            </OrderPermission>
                        ),
                        loader: orderLoader
                    },
                    {
                        path: route.employee,
                        element: (
                            <EmployeePermission>
                                <Employee />
                            </EmployeePermission>
                        ),
                        loader: employeeLoader
                    },
                    {
                        path: route.rating,
                        element: (
                            <RatingPermission>
                                <Rating />
                            </RatingPermission>
                        ),
                        loader: ratingLoader
                    },
                    {
                        path: route.voucher,
                        element: (
                            <VoucherPermission>
                                <Voucher />
                            </VoucherPermission>
                        ),
                        loader: voucherLoader
                    },
                    {
                        path: route.store,
                        element: (
                            <StorePermission>
                                <Store />
                            </StorePermission>
                        ),
                        loader: storeLoader
                    },
                    {
                        path: route.user,
                        element: (
                            <UserPermission>
                                <User />
                            </UserPermission>
                        ),
                        loader: userLoader
                    },
                    {
                        path: route.permission,
                        element: <PageNotFound content='Bạn không có quyền truy cập' />
                    },
                    {
                        path: '*',
                        element: <PageNotFound />
                    }
                ]
            }
        ]
    },
    {
        element: <RejectRoute />,
        children: [
            {
                path: route.login,
                element: <Login />
            }
        ]
    },
    {
        path: 'test',
        element: <Overview />
    }
])

export default routes
