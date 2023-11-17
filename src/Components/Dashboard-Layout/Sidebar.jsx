import { Link } from 'react-router-dom'
import learningIcon from "../../assets/Icons/learning-icon.svg";
import mentorshipIcon from "../../assets/Icons/mentorship-icon.svg";
import mentalHealthIcon from "../../assets/Icons/mental-health-icon.svg";
import appraisalIcon from "../../assets/Icons/appraisal-icon.svg";
import settingsIcon from "../../assets/Icons/settings-icon.svg";
import logoutIcon from "../../assets/Icons/logout-icon.svg";
import OverviewIcon from '../Icons/OverviewIcon';
import { useLocation } from 'react-router-dom'; 

const Sidebar = () => {
    let location = useLocation(); 
    return (
        <nav className={`relative  w-4/5 md:w-1/5 lg:w-[15%] min-h-[653px] md:mt-[5rem] h-screen  z-50 shadow-lg bg-white lg:flex md:flex hidden`}>
            <ul>
                <li className={`items-center`}>
                    
                    <Link to='/dashboard' className={`${location.pathname == '/dashboard' ? 'bg-[blue] font-bold text-[white] pl-3': ''} flex rounded-md ml-2  mb-7 mt-2 py-2 gap-2 `}><OverviewIcon />Overview</Link>
                </li>
                <li className='ml-2 flex mb-7'>
                    <img src={learningIcon} alt="learning icon" className='ml-2 mr-4' />
                    <Link to='/dashboard/learn'>Learning</Link>
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