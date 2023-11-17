
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

        <nav className={`fixed top-[50px]  w-[50%] min-h-[653px]  z-50 shadow-lg bg-white lg:hidden md:hidden flex`} onClick={() => setToggleNav(!toggleNav)}>
            <ul>
                <li className='ml-2 flex mb-7 mt-2 py-2 bg-[blue] items-center' onClick={closeSidebar}>
                    <img src={overviewIcon} alt="overview icon" className='ml-2 mr-4' />
                    <Link to='/dashboard'>Overview</Link>
                </li>
                <li className='ml-2 flex mb-7' onClick={closeSidebar}>
                    <img src={learningIcon} alt="learning icon" className='ml-2 mr-4' />
                    <Link to='/dashboard/learn'>Learning</Link>
                </li>
                <li className='ml-2 flex mb-7' onClick={closeSidebar}>
                    <img src={mentorshipIcon} alt="mentorship icon" className='ml-2 mr-4' />
                    <Link to="/dashboard/Mentorship">Mentorship</Link>
                </li>
                <li className='ml-2 flex mb-7' onClick={closeSidebar}>
                    <img src={mentalHealthIcon} alt="mentalHealth icon" className='ml-2 mr-4' />
                    <Link>Mental Health</Link>
                </li>
                <li className='ml-2 flex mb-7' onClick={closeSidebar}>
                    <img src={appraisalIcon} alt="appraisal icon" className='ml-2 mr-4' />
                    <Link>Appraisal</Link>
                </li>
                <li className='ml-2 flex mb-7' onClick={closeSidebar}>
                    <img src={settingsIcon} alt="settings icon" className='ml-2 mr-4' />
                    <Link to='/dashboard/Settings'>Settings</Link>
                </li>
                <li className='ml-2 flex mb-5 absolute bottom-0' onClick={closeSidebar}>
                    <img src={logoutIcon} alt="logout icon" className='ml-2 mr-4' />
                    <Link>Logout</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MobileSideBar
