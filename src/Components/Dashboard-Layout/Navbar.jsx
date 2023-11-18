import { FiBell, FiMail, FiSearch } from 'react-icons/fi';
import { AiOutlineDingtalk } from "react-icons/ai"

import { GiHamburgerMenu } from "react-icons/gi"

import avatar from '../../assets/Icons/avatar.svg';
import { MenuContextProvider } from '../../ContextApi/SideBarContext';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const { toggleNav, setToggleNav } = MenuContextProvider();

    return (
        <nav className="flex justify-between fixed w-full items-center lg:pl-5 pr-7 z-[9999] py-2 border-b border-b-[#ECECEC] bg-white">
            <div className='flex gap-2 '>
                < GiHamburgerMenu onClick={() => setToggleNav(!toggleNav)} className='lg:hidden md:hidden flex text-[24px mt-2]  text-primary ' />
                <h2 className="font-lobster text-primary lg:text-3xl md:text-3xl text-[20px] font-bold "><Link to='/'>Rise Path</Link></h2>
                <AiOutlineDingtalk className=' text-primary text-[30px] ' />
            </div>


            <div className="flex gap-5 items-center">
                <div className="relative lg:flex md:flex hidden ">
                    <input type="text" placeholder="Search anything" className="pr-4 pl-11 py-2 placeholder:text-slate-400 placeholder:text-lg border border-slate-400 outline-none rounded-lg" />
                    <FiSearch className='absolute left-4 top-3 text-xl' />
                </div>
                <button className='lg:flex md:flex hidden' >
                    <FiBell className='text-2xl' />
                </button>
                <button className='lg:flex md:flex hidden'>
                    <FiMail className='text-2xl' />
                </button>
                <h3 className='text-[#000000]'>Adekunle John</h3>
                <img src={avatar} width={36} height={36} className='rounded-full' alt="" />
            </div>
        </nav>
    )
}

export default NavBar
