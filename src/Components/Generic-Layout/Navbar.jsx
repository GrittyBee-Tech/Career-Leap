import { AiOutlineDingtalk } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import MobileNavbar from "./MobileNavbar"
import { useState } from "react"
import { Link } from "react-router-dom"
import RegisterModal from "./RegisterModal"

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav>
            <div className="container m-auto md:w-[85%] w-[94%] flex items-center justify-between md:gap-[80px] mt-4 md:border-none  border border-[#00F] rounded md:p-2 p-3">
                <div className="flex items-center">
                    <span className="text-[32px]  text-[#00F] font-normal  font-lobster ">
                        RisePath
                    </span>
                    <span className="text-[36px]  text-[#00F]">
                        <AiOutlineDingtalk />
                    </span>
                </div>

                <ul className="md:flex hidden gap-5 mt-2 text-[24px] text-[#0A0A29] font-plus-jakarta-sans font-semibold">
                    <li>
                        <Link to="/">
                            Home</Link></li>
                    <li>
                        <Link to="/#Appraisal">
                            Appraisal</Link></li>
                    <li>
                        <Link to="/#Mentorship"> Upskills</Link></li>
                    <li>Mentorship</li>
                    <li>Mental Health</li>
                </ul>
                <div className=" md:flex gap-4 hidden">
                    <p className="mt-2 text-[24px] text-[#0A0A29] font-plus-jakarta-sans font-semibold ">Log in</p>
                    <button onClick={() => setIsModalOpen(true)} className="bg-[#00F]  text-[#FFFF]  w-[138px] h-[50px] rounded  text-[24px] font-bold">Sign up</button>
                </div>
                <button onClick={toggleMenu} className="md:hidden flex ml-[84px] mt-4 text-[24px] text-[#00F]">
                    <GiHamburgerMenu />
                </button>


            </div>
            {isOpen && <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} setIsModalOpen={setIsModalOpen} />}
            <RegisterModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
        </nav>
    )
}

export default Navbar
