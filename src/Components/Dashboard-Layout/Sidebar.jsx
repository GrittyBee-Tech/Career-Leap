import { Link, NavLink } from 'react-router-dom'
import learningIcon from "../../assets/Icons/learning-icon.svg";
import mentorshipIcon from "../../assets/Icons/mentorship-icon.svg";
import mentalHealthIcon from "../../assets/Icons/mental-health-icon.svg";
import appraisalIcon from "../../assets/Icons/appraisal-icon.svg";
import settingsIcon from "../../assets/Icons/settings-icon.svg";
import logoutIcon from "../../assets/Icons/logout-icon.svg";
import OverviewIcon from '../Icons/OverviewIcon';
import { useLocation } from 'react-router-dom';
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

    const toggleLearning = () => {
        setIsLearningOpen(!isLearningOpen);
    };

    return (
        <nav className='relative md:w-52 z-10 md:flex hidden'>
            <div className='fixed left-0 top-[58px] flex flex-col justify-between bg-white shadow-lg p-2 h-[calc(100vh-58px)] w-52 border-t'>
                <ul className='flex flex-col gap-5 w-full'>
                    <NavLink end to='/dashboard' className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                        <OverviewIcon />
                        <p>Overview</p>
                    </NavLink>
                    <div className='bg-white items-center flex gap-6 w-full'>
                        <div className={`rounded-md p-2 ${location.pathname.includes('dashboard/learn') ? 'bg-[blue] text-white' : 'bg-white'} items-center flex flex-col gap-6 w-full`}>
                            <div className='flex items-center gap-6' onClick={toggleLearning}>
                                <img src={learningIcon} alt="learning icon" className='' />Learning
                                <div className='ml-2'>
                                    {isLearningOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                </div>
                            </div>
                        </div>
                    </div>
                    {isLearningOpen && (
                        <div className='my-4 ml-4'>
                            <ul>
                                <li className='ml-2 items-center gap-2 flex mb-2'>
                                    <VideoIcon />
                                    <Link to="/dashboard/Mentorship">Courses</Link>
                                </li>
                                <li className='ml-2 items-center gap-2 flex mb-7'>
                                    <PDFIcon />
                                    <Link to="/dashboard/Mentorship">E-Books</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </ul>
                <NavLink  className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                    <img src={mentorshipIcon} alt="mentorship icon" className='ml-2 mr-4' />
                    <Link to="/dashboard/Mentorship">Mentorship</Link>
                </NavLink>
                <NavLink className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                    <img src={mentalHealthIcon} alt="mentalHealth icon" className='ml-2 mr-4' />
                    <Link to={'/dashboard/health'}>Mental Health</Link>
                </NavLink>
                <NavLink className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                    <img src={appraisalIcon} alt="appraisal icon" className='ml-2 mr-4' />
                    <Link>Appraisal</Link>
                </NavLink>
                <NavLink className={({ isActive }) => `p-2 rounded ${isActive ? 'bg-[blue] text-white' : 'bg-white'} items-center flex gap-6 w-full`}>
                    <img src={settingsIcon} alt="settings icon" className='ml-2 mr-4' />
                    <Link to='/dashboard/Settings'>Settings</Link>
                </NavLink>
                <button onClick={logout} className='ml-2 flex mb-5 absolute bottom-0 focus:bg-[blue]'>
                    <img src={logoutIcon} alt="logout icon" className='ml-2 mr-4' />
                    <Link>Logout</Link>
                </button>
            </div>
        </nav>
    )
}

export default Sidebar
