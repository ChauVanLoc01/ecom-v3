import { Outlet, useBeforeUnload, useLocation, useNavigate } from 'react-router-dom'

import { setDefaultOptions } from 'date-fns'
import { vi } from 'date-fns/locale'
import { useContext, useEffect } from 'react'
import 'react-vertical-timeline-component/style.min.css'
import { exitEvent } from 'src/constants/event.constants'
import { route } from 'src/constants/route'
import { AppContext } from 'src/contexts/AppContext'
import useLoadingFetching from 'src/hooks/useLoadingFetching'
import { queryClient } from 'src/routes/main.route'
import { ls } from 'src/utils/localStorage'
import { map_path } from 'src/constants/role'
import loadable from '@loadable/component'

setDefaultOptions({ locale: vi })

const Header = loadable(() => import('./Header'))
const SideNav = loadable(() => import('./SideNav'))

const MainLayout = () => {
    const { setProfile, setIsCan, setWho, setStore, profile, store, setPermission, who, isCan } = useContext(AppContext)
    const [loadingFetching] = useLoadingFetching()
    const location = useLocation()
    const navigate = useNavigate()

    window.addEventListener(exitEvent, () => {
        setProfile(undefined)
        setStore(undefined)
        ls.clearAll()
        queryClient.clear()
        setPermission(undefined)
        setWho(undefined)
        setIsCan({})
    })

    useBeforeUnload(() => {
        if (!/login/.test(location.pathname)) {
            ls.setItem('profile', profile)
            ls.setItem('store', store)
        }
    })

    useEffect(() => {
        let isLoged = ls.getItem('isLogined')
        if (!isLoged && Object.keys(isCan).length) {
            switch (who) {
                case 'ADMIN':
                    navigate(`/${route.over_view}`, { replace: true })
                    break
                case 'STORE_OWNER':
                    navigate(route.analytic)
                    break
                default:
                    let path = Object.keys(isCan)[0]
                    navigate(map_path?.[path as keyof typeof map_path])
                    break
            }
            ls.setItem('isLogined', true)
        }
    }, [isCan])

    return (
        <>
            <div className='h-screen flex bg-[#F8F9FA]'>
                <SideNav />
                <main className='px-48 py-8 basis-5/6'>
                    <Header />
                    <Outlet />
                </main>
            </div>
            {loadingFetching && (
                <div className='fixed inset-0 flex justify-center items-center z-50 bg-black/20'>
                    <div className='loader' />
                </div>
            )}
        </>
    )
}

export default MainLayout
