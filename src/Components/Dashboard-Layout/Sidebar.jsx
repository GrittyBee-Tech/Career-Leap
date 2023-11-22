import { NavLink } from 'react-router-dom'
import learningIcon from "../../assets/Icons/learning-icon.svg";
import mentorshipIcon from "../../assets/Icons/mentorship-icon.svg";
import mentalHealthIcon from "../../assets/Icons/mental-health-icon.svg";
import appraisalIcon from "../../assets/Icons/appraisal-icon.svg";
import settingsIcon from "../../assets/Icons/settings-icon.svg";
import logoutIcon from "../../assets/Icons/logout-icon.svg";
import OverviewIcon from '../Icons/OverviewIcon';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ChevronUpIcon from '../Icons/ChevronUpIcon';
import ChevronDownIcon from '../Icons/ChevronDownIcon';
import VideoIcon from '../Icons/VideoIcon';
import PDFIcon from '../Icons/PDFIcon';
import { MenuContextProvider } from '../../ContextApi/SideBarContext';
import { GeneralContext } from '../../ContextApi/GeneralContext';
import { useContext } from 'react';

const Sidebar = () => {
    const { isLearningOpen, setIsLearningOpen } = MenuContextProvider();
    const { logout } = useContext(GeneralContext);
    let location = useLocation();
    const [full, setFull] = useState(false);

    const toggleLearning = () => {
        setIsLearningOpen(!isLearningOpen);
    };

    useEffect(() => {
        setIsLearningOpen(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    window.addEventListener('scroll', () => {
        if (window.scrollY >= (60)) {
            setFull(true);
        } else {
            setFull(false);
        }
    });

    return (
        <aside className={`sticky top-0 h-50 left-0 md:w-52 z-10 md:flex hidden ${full ? "h-screen" : "h-[calc(100vh-60px)]"}`}>
            <div className='flex flex-col justify-between bg-white shadow-lg p-2 w-52 border-t'>
                <ul className='flex flex-col gap-5 w-full'>
                    <NavLink end to='/dashboard' className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                        <OverviewIcon />
                        <p>Overview</p>
                    </NavLink>
                    <div className='bg-white items-center flex gap-6 w-full cursor-pointer'>
                        <div className={`rounded-md p-2 ${location.pathname.includes('dashboard/learn') ? 'bg-[blue] text-white' : 'bg-white'} flex flex-col gap-6 w-full justify-start`}>
                            <div className='flex items-center gap-6' onClick={toggleLearning}>
                                <img src={learningIcon} alt="learning icon" className='' />Learning
                                <div>
                                    {isLearningOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                </div>
                            </div>
                        </div>
                    </div>
                    {isLearningOpen && (
                        <div className='ml-4 -mt-3'>
                            <NavLink to="/dashboard/learn/courses/" className={({ isActive }) => `p-2 mb-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                                <VideoIcon />
                                <p>Courses</p>
                            </NavLink>
                            <NavLink to="/dashboard/learn/ebooks" className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                                <PDFIcon />
                                <p >E-Books</p>
                            </NavLink>
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
                <button onClick={logout} className='p-2 rounded focus:bg-[blue] focus:text-white bg-white items-center flex gap-6 w-full'>
                    <img src={logoutIcon} alt="logout icon" />
                    <p>Logout</p>
                </button>
            </div>
        </aside>
    )
}

export default Sidebar
