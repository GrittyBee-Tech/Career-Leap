import learningIcon from "../../assets/Icons/learning-icon.svg";
import mentorshipIcon from "../../assets/Icons/mentorship-icon.svg";
import mentalHealthIcon from "../../assets/Icons/mental-health-icon.svg";
import appraisalIcon from "../../assets/Icons/appraisal-icon.svg";
import settingsIcon from "../../assets/Icons/settings-icon.svg";
import logoutIcon from "../../assets/Icons/logout-icon.svg";
import { MenuContextProvider } from '../../ContextApi/SideBarContext';
import { useEffect } from 'react';
import ChevronUpIcon from '../Icons/ChevronUpIcon';
import ChevronDownIcon from '../Icons/ChevronDownIcon';
import { NavLink } from 'react-router-dom';
import VideoIcon from '../Icons/VideoIcon';
import PDFIcon from '../Icons/PDFIcon';
import OverviewIcon from '../Icons/OverviewIcon';
import { useGeneralStore } from '../../ContextApi/GeneralContext';

const MobileSideBar = () => {
    const { toggleNav, setToggleNav, isLearningOpen, setIsLearningOpen } = MenuContextProvider();
    const { logout } = useGeneralStore();

    const toggleLearning = () => {
        setIsLearningOpen(!isLearningOpen);
    };

    useEffect(() => {
        setIsLearningOpen(false);
        setToggleNav(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <nav className={`fixed top-[54px] w-fit h-[calc(100vh-60px)] border-t z-50 shadow-lg shadow-gray-500 bg-white sm:hidden ${toggleNav ? "flex" : "hidden"} flex-col justify-between p-2 pt-0 transition-all duration-500`}>
            <ul className='flex flex-col gap-4 w-full'>
                <NavLink end to='/dashboard' className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                    <OverviewIcon />
                    <p>Overview</p>
                </NavLink>
                <li className='flex gap-4'>
                    <div className={`rounded-md p-2 ${location.pathname.includes('dashboard/learn') ? 'bg-[blue] text-white' : 'bg-white'} flex flex-col gap-6 w-full justify-start`}>
                        <div className='flex items-center gap-6' onClick={toggleLearning}>
                            <img src={learningIcon} alt="learning icon" className='' />Learning
                            <div>
                                {isLearningOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            </div>
                        </div>
                    </div>
                </li>
                {isLearningOpen && (
                    <div className=' ml-4 -mt-4'>
                        <ul>
                            <NavLink to="/dashboard/learn/courses/" className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                                <VideoIcon />
                                <p>Courses</p>
                            </NavLink>
                            <NavLink to="/dashboard/learn/ebooks" className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                                <PDFIcon />
                                <p >E-Books</p>
                            </NavLink>
                        </ul>
                    </div>
                )}
                <NavLink to="/dashboard/mentorship" className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                    <img src={mentorshipIcon} alt="mentorship icon" />
                    <p>Mentorship</p>
                </NavLink>
                <NavLink to='/dashboard/health' className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                    <img src={mentalHealthIcon} alt="mentalHealth icon" />
                    <p>Mental Health</p>
                </NavLink>
                <NavLink to='/dashboard/appraisal' className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                    <img src={appraisalIcon} alt="appraisal icon" />
                    <p>Appraisal</p>
                </NavLink>
                <NavLink to='/dashboard/Settings' className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                    <img src={settingsIcon} alt="settings icon" />
                    <p>Settings</p>
                </NavLink>
            </ul>
            <button className='flex mb-5' onClick={logout}>
                <img src={logoutIcon} alt="logout icon" className='ml-2 mr-4' />
                <p>Logout</p>
            </button>
        </nav>
    )
}

export default MobileSideBar
