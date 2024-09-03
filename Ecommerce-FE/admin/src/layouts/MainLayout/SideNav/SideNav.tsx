import { useContext } from 'react'
import { GoStarFill } from 'react-icons/go'
import { IoStorefront, IoTicket } from 'react-icons/io5'
import { MdFlashOn, MdManageAccounts, MdSupervisorAccount } from 'react-icons/md'
import { RiBillFill, RiBox3Fill } from 'react-icons/ri'
import { SiGoogleanalytics } from 'react-icons/si'
import Select from 'src/components/Select'
import { instance, SideNavData } from 'src/constants/role'
import { AppContext } from 'src/contexts/AppContext'
import { FaUserCog } from 'react-icons/fa'

const Icon = {
    MdFlashOn: <MdFlashOn />,
    RiBox3Fill: <RiBox3Fill />,
    RiBillFill: <RiBillFill />,
    MdManageAccounts: <MdManageAccounts />,
    GoStarFill: <GoStarFill />,
    SiGoogleanalytics: <SiGoogleanalytics />,
    MdSupervisorAccount: <MdSupervisorAccount />,
    IoStorefront: <IoStorefront />,
    IoTicket: <IoTicket />,
    FaUserCog: <FaUserCog />
}

const SideNav = () => {
    const { permission } = useContext(AppContext)
    return (
        <nav className='p-8 w-[280px] border-r border-r-text_2/30 border-dashed'>
            <section className='pt-3 pb-5'>
                <div className='flex items-center gap-x-2 w-fit mx-auto'>
                    <img
                        src='https://cdn-icons-png.flaticon.com/128/4151/4151729.png'
                        alt='logo'
                        className='object-cover w-10 h-10'
                    />
                    <span className='font-mono text-xl font-semibold text-transparent bg-gradient-to-tr from-blue to-[#CF1512] bg-clip-text'>
                        Trang quản lý
                    </span>
                </div>
            </section>
            <section>
                {Object.keys(permission || {}).map((key, idx) => {
                    let { icon, label, path } = SideNavData?.[key as instance]
                    return (
                        <Select
                            key={`side_nav_${idx}`}
                            icon={Icon[icon as keyof typeof Icon]}
                            parentData={{ title: label, path }}
                        />
                    )
                })}
            </section>
        </nav>
    )
}

export default SideNav
