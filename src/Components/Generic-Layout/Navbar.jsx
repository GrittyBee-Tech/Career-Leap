import { AiOutlineDingtalk } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import MobileNavbar from "./MobileNavbar"
import { useState } from "react"



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {

        setIsOpen(!isOpen)
    }

    return (
        <nav >
            <div className="container m-auto md:w-[85%] w-[94%] flex  md:gap-[80px] mt-4 md:border-none  border border-[#00F] rounded md:p-2 p-3">
                <div className="flex">
                    <span className="text-[32px]  text-[#00F] font-normal  font-lobster z-1000">
                        Career Leap
                    </span>
                    <span className="text-[42px]  text-[#00F]">
                        <AiOutlineDingtalk />
                    </span>
                </div>



                <ul className="md:flex  hidden  gap-8 mt-2 text-[24px] text-[#0A0A29] font-plus-jakarta-sans">
                    <li>Home</li>
                    <li>Appraisal</li>
                    <li>Upskills</li>
                    <li>Mentorship</li>
                    <li>Mental Health</li>
                </ul>
                <div className=" md:flex gap-4 hidden">
                    <p className="mt-2 text-[24px] ">Log in</p>
                    <button className="bg-[#00F]  text-[#FFFF]  w-[138px] h-[50px] rounded  text-[24px] font-bold">Sign up</button>
                </div>
                <button onClick={toggleMenu} className="md:hidden flex ml-[84px] mt-4 text-[24px] text-[#00F]">
                    <GiHamburgerMenu />
                </button>


            </div>
            {isOpen && <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />}





        </nav>
    )
}

export default Navbar
