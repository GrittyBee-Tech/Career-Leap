import { AiOutlineDingtalk } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import MobileNavbar from "./MobileNavbar"
import { useState } from "react"
import { HashLink } from "react-router-hash-link"
import RegisterModal from "./RegisterModal"

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="bg-[#BCE7FD] shadow">
            <div className="container m-auto md:w-[94%] w-[94%]  lg:w-[85%] flex items-center justify-between lg:gap-[80px] md:gap-[20px]  lg:p-3 md:p-2 p-3">
                <div className="flex items-center">
                    <span className=" md:text-[25px] text-[35px] md:mb-4 lg:text-[32px] lg:mt-3 text-[#00F] font-normal  font-lobster ">
                        RisePath
                    </span>
                    <span className="lg:text-[36px] md:text-[25px]  text-[35px] md:mb-5 text-[#00F]">
                        <AiOutlineDingtalk />
                    </span>
                </div>

                <ul className="md:flex hidden  md:mb-6 lg:mb-0 lg:gap-8 md:gap-2 mt-1 text-[17px] lg:text-[16px] text-[#0A0A29] font-plus-jakarta-sans font-semibold">
                    <li>
                        <HashLink to="/">
                            Home</HashLink></li>
                    <li>
                        <HashLink to="/#Appraisal">
                            Appraisal</HashLink></li>
                    <li>
                        <HashLink to="/#Upskills"> Upskills</HashLink></li>
                    <li><HashLink to="/#Mentorship">Mentorship</HashLink></li>
                    <li><HashLink to="/#Health">Mental Health</HashLink></li>
                </ul>
                <div className=" md:flex lg:gap-4  md:gap-4 hidden lg:mb-1 mb-2">
                    <p className="lg:mt-2 lg:mb-0  lg:text-[16px] md:text-[17px] text-[#0A0A29] font-plus-jakarta-sans font-semibold ">Log in</p>
                    <button onClick={() => setIsModalOpen(true)} className="bg-[#00F]  text-[#FFFF]  lg:mb-0 mb-1  md:w-[90px] lg:w-[138px] lg:h-[50px] md:h-[35px] rounded md:text-[18px] lg:text-[24px] font-bold">Sign up</button>
                </div>
                <button onClick={toggleMenu} className="md:hidden flex ml-[84px]  text-[24px] text-[#00F]">
                    <GiHamburgerMenu />
                </button>


            </div>
            {isOpen && <MobileNavbar className="fixed" isOpen={isOpen} setIsOpen={setIsOpen} setIsModalOpen={setIsModalOpen} />}
            <RegisterModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
        </nav>
    )
}

export default Navbar
