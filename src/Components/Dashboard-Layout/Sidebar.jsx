import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import overviewIcon from "../../assets/Icons/overview-icon.svg";
import learningIcon from "../../assets/Icons/learning-icon.svg";
import mentorshipIcon from "../../assets/Icons/mentorship-icon.svg";
import mentalHealthIcon from "../../assets/Icons/mental-health-icon.svg";
import appraisalIcon from "../../assets/Icons/appraisal-icon.svg";
import settingsIcon from "../../assets/Icons/settings-icon.svg";
import logoutIcon from "../../assets/Icons/logout-icon.svg";


const Sidebar = () => {

  return (
    <nav className={`relative w-3/5 md:w-2/5 lg:w-1/5 min-h-[550px] mobile:w-[40%] bg-white`}>
        <ul>
            <li className='ml-2 flex mb-7 mt-2 py-2 bg-primary-orange items-center'>
                <img src={overviewIcon} alt="overview icon" className='ml-2 mr-4' />
                <Link>Overview</Link>
            </li>
            <li className='ml-2 flex mb-7'>
                <img src={learningIcon} alt="learning icon" className='ml-2 mr-4' />
                <Link>Learning</Link>
            </li>
            <li className='ml-2 flex mb-7'>
                <img src={mentorshipIcon} alt="mentorship icon" className='ml-2 mr-4' />
                <Link>Mentorship</Link>
            </li>
            <li className='ml-2 flex mb-7'>
                <img src={mentalHealthIcon} alt="mentalHealth icon" className='ml-2 mr-4' />
                <Link>Mental Health</Link>
            </li>
            <li className='ml-2 flex mb-7'>
                <img src={appraisalIcon} alt="appraisal icon" className='ml-2 mr-4' />
                <Link>Appraisal</Link>
            </li>
            <li className='ml-2 flex mb-7'>
                <img src={settingsIcon} alt="settings icon" className='ml-2 mr-4' />
                <Link>Settings</Link>
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