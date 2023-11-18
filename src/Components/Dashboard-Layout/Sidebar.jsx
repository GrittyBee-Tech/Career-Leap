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
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const [isLearningOpen, setIsLearningOpen] = useState(false);
    let location = useLocation();

    const toggleLearning = () => {
        setIsLearningOpen(!isLearningOpen);
    };

    useEffect(() => {
        setIsLearningOpen(false);
    }, [location]);

    return (
        <aside className='sticky left-0 top-0 hidden sm:flex flex-col justify-between bg-white shadow-lg p-2  w-52 border-t'>
            <ul className='flex flex-col gap-5 w-full'>
                <NavLink end to='/dashboard' className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                    <OverviewIcon />
                    <p>Overview</p>
                </NavLink>
                <li className='bg-white items-center flex gap-6 w-full'>
                    <div className={`rounded-md p-2 ${location.pathname.includes('dashboard/learn') ? 'bg-[blue] text-white' : 'bg-white'} items-center flex flex-col gap-6 w-full`}>
                        <div className='flex items-center gap-6' onClick={toggleLearning}>
                            <img src={learningIcon} alt="learning icon" className='' />Learning
                            <div className='ml-2'>
                                {isLearningOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            </div>
                        </div>
                    </div>
                    {isLearningOpen && (
                        <div className='my-4 ml-4'>
                            <ul >
                                <NavLink to="/dashboard/learn/courses" className='ml-2 items-center gap-2 flex mb-2'>
                                    <VideoIcon />
                                    <p>Videos</p>
                                </NavLink>
                                <NavLink to="/dashboard/learn/ebooks" className='ml-2 items-center gap-2 flex mb-7'>
                                    <PDFIcon />
                                    <p>PDF</p>
                                </NavLink>
                            </ul>
                        </div>
                    )} 
                </li>
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
        </aside>
    )
}

export default Sidebar

