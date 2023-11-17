import { Link } from 'react-router-dom'
import learningIcon from "../../assets/Icons/learning-icon.svg";
import mentorshipIcon from "../../assets/Icons/mentorship-icon.svg";
import mentalHealthIcon from "../../assets/Icons/mental-health-icon.svg";
import appraisalIcon from "../../assets/Icons/appraisal-icon.svg";
import settingsIcon from "../../assets/Icons/settings-icon.svg";
import logoutIcon from "../../assets/Icons/logout-icon.svg";
import OverviewIcon from '../Icons/OverviewIcon';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import ChevronUpIcon from '../Icons/ChevronUpIcon';
import ChevronDownIcon from '../Icons/ChevronDownIcon';
import VideoIcon from '../Icons/VideoIcon';
import PDFIcon from '../Icons/PDFIcon';

const Sidebar = () => {

    const [isLearningOpen, setIsLearningOpen] = useState(false);
    let location = useLocation();

    const toggleLearning = () => {
        setIsLearningOpen(!isLearningOpen);
    };

    return (
        <nav className={`relative  w-4/5 md:w-1/5 lg:w-[15%] min-h-[653px] md:mt-[5rem] h-screen  z-50 shadow-lg bg-white lg:flex md:flex hidden`}>
            <ul>
                <li className={`items-center`}>
                    <Link to='/dashboard' className={`${location.pathname == '/dashboard' ? 'bg-[blue] font-bold text-[white] pl-3' : ''} flex rounded-md ml-2  mb-7 mt-2 py-2 gap-2 `}><OverviewIcon />Overview</Link>
                </li>
                <li className={`items-center  mb-7`}>
                    <Link to='/dashboard/learn' className={`${location.pathname == '/dashboard/learn' ? 'bg-[blue] font-bold text-[white] px-3' : ''} flex flex-col rounded-md ml-2  mb-0 mt-2 py-2 gap-2 `}>
                        <div className='flex items-center' onClick={toggleLearning}>
                            <img src={learningIcon} alt="learning icon" className='ml-2 mr-4' />Learning
                            <div className='ml-2'>
                                {isLearningOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            </div>
                        </div>
                    </Link>
                    {isLearningOpen && (
                        <div className='my-4 ml-4'>
                            <ul >
                                <li className='ml-2 items-center gap-2 flex mb-2'>
                                    <VideoIcon />
                                    <Link to="/dashboard/Mentorship">Videos</Link>
                                </li>
                                <li className='ml-2 items-center gap-2 flex mb-7'>
                                    <PDFIcon />
                                    <Link to="/dashboard/Mentorship">PDF</Link>
                                </li>
                            </ul>
                        </div>
                    )} 
                </li>
                <li className='ml-2 flex mb-7'>
                    <img src={mentorshipIcon} alt="mentorship icon" className='ml-2 mr-4' />
                    <Link to="/dashboard/Mentorship">Mentorship</Link>
                </li>
                <li className='ml-2 flex mb-7'>
                    <img src={mentalHealthIcon} alt="mentalHealth icon" className='ml-2 mr-4' />
                    <Link to={'/dashboard/health'}>Mental Health</Link>
                </li>
                <li className='ml-2 flex mb-7'>
                    <img src={appraisalIcon} alt="appraisal icon" className='ml-2 mr-4' />
                    <Link>Appraisal</Link>
                </li>
                <li className='ml-2 flex mb-7'>
                    <img src={settingsIcon} alt="settings icon" className='ml-2 mr-4' />
                    <Link to='/dashboard/Settings'>Settings</Link>
                </li>
                <li className='ml-2 flex mb-5 absolute bottom-0'>
                    <img src={logoutIcon} alt="logout icon" className='ml-2 mr-4' />
                    <Link>Logout</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar