import overviewIcon from "../../assets/Icons/overview-icon.svg";
import learningIcon from "../../assets/Icons/learning-icon.svg";
import mentorshipIcon from "../../assets/Icons/mentorship-icon.svg";
import mentalHealthIcon from "../../assets/Icons/mental-health-icon.svg";
import appraisalIcon from "../../assets/Icons/appraisal-icon.svg";
import settingsIcon from "../../assets/Icons/settings-icon.svg";
import logoutIcon from "../../assets/Icons/logout-icon.svg";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className='relative md:w-52 z-10 md:flex hidden'>
            <div className='fixed left-0 top-[58px] flex flex-col justify-between bg-white shadow-lg p-2 h-[calc(100vh-58px)] w-52 border-t'>
                <ul className='flex flex-col gap-5 w-full'>
                    <NavLink end to='/dashboard' className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                        <img src={overviewIcon} alt="overview icon" />
                        <p>Overview</p>
                    </NavLink>
                    <NavLink end to='/dashboard/learn/courses' className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                        <img src={learningIcon} alt="learning icon" />
                        <Link>Learning</Link>
                    </NavLink>
                    <NavLink end to='/dashboard/mentorship' className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                        <img src={mentorshipIcon} alt="mentorship icon" />
                        <p>Mentorship</p>
                    </NavLink>
                    <NavLink end to='/dashboard/health' className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                        <img src={mentalHealthIcon} alt="mentalHealth icon" />
                        <p>Mental Health</p>
                    </NavLink>
                    <NavLink end to='/dashboard/appraisal' className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                        <img src={appraisalIcon} alt="appraisal icon" />
                        <p>Appraisal</p>
                    </NavLink>
                    <NavLink end to='/dashboard/settings' className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                        <img src={settingsIcon} alt="settings icon" />
                        <p>Settings</p>
                    </NavLink>
                </ul>
                <button className='p-2 rounded focus:bg-[blue] focus:text-white bg-white items-center flex gap-6 w-full'>
                    <img src={logoutIcon} alt="logout icon" />
                    <p>Logout</p>
                </button>
            </div>
        </nav>
    )
}

export default Sidebar
