
import { Link } from 'react-router-dom'

import overviewIcon from "../../assets/Icons/overview-icon.svg";
import learningIcon from "../../assets/Icons/learning-icon.svg";
import mentorshipIcon from "../../assets/Icons/mentorship-icon.svg";
import mentalHealthIcon from "../../assets/Icons/mental-health-icon.svg";
import appraisalIcon from "../../assets/Icons/appraisal-icon.svg";
import settingsIcon from "../../assets/Icons/settings-icon.svg";
import logoutIcon from "../../assets/Icons/logout-icon.svg";
import { MenuContextProvider } from '../../ContextApi/SideBarContext';

const MobileSideBar = () => {
    const { toggleNav, setToggleNav } = MenuContextProvider();

    const closeSidebar = () => {
        if (toggleNav) {
            setToggleNav(true); // Close the sidebar when a link is clicked
        }
    };
    return (

        <nav className={`fixed top-[54px] w-fit h-[calc(100vh-54px)] border-t z-50 shadow-lg shadow-gray-500 bg-white sm:hidden flex flex-col justify-between p-2 pt-0`} onClick={() => setToggleNav(!toggleNav)}>
            <ul>
                <li className='flex mb-7 mt-2 py-2 bg-[blue] items-center' onClick={closeSidebar}>
                    <img src={overviewIcon} alt="overview icon" className='ml-2 mr-4' />
                    <Link to='/dashboard'>Overview</Link>
                </li>
                <li className='flex mb-7' onClick={closeSidebar}>
                    <img src={learningIcon} alt="learning icon" className='ml-2 mr-4' />
                    <Link to='/dashboard/learn'>Learning</Link>
                </li>
                <li className='flex mb-7' onClick={closeSidebar}>
                    <img src={mentorshipIcon} alt="mentorship icon" className='ml-2 mr-4' />
                    <Link to="/dashboard/Mentorship">Mentorship</Link>
                </li>
                <li className='flex mb-7' onClick={closeSidebar}>
                    <img src={mentalHealthIcon} alt="mentalHealth icon" className='ml-2 mr-4' />
                    <Link>Mental Health</Link>
                </li>
                <li className='flex mb-7' onClick={closeSidebar}>
                    <img src={appraisalIcon} alt="appraisal icon" className='ml-2 mr-4' />
                    <Link>Appraisal</Link>
                </li>
                <li className='flex mb-7' onClick={closeSidebar}>
                    <img src={settingsIcon} alt="settings icon" className='ml-2 mr-4' />
                    <Link to='/dashboard/Settings'>Settings</Link>
                </li>
            </ul>
            <button className='flex mb-5' onClick={closeSidebar}>
                <img src={logoutIcon} alt="logout icon" className='ml-2 mr-4' />
                <p>Logout</p>
            </button>
        </nav>
    )
}

export default MobileSideBar
