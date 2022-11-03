import { FaFire, FaEnvira, FaFortAwesomeAlt, FaGrav } from 'react-icons/fa'

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white shadow-lg">

            <SideBarIcon icon={<FaFire size="28" />} />
            <SideBarIcon icon={<FaEnvira size="28" />} />
            <SideBarIcon icon={<FaFortAwesomeAlt size="28" />} />
            <SideBarIcon icon={<FaGrav size="28" />} />
        </div>
    )
}

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)

export default SideBar