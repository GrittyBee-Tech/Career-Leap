import { AiOutlineDingtalk } from "react-icons/ai"
import { RiCloseCircleFill } from "react-icons/ri"
import { HashLink } from "react-router-hash-link"


const MobileNavbar = ({ setIsOpen, setIsModalOpen }) => {
    return (
        <nav className="md:hidden  top-0  bg-[#BCE7FD] z-10 fixed h-screen w-full">
            <div className="flex flex-col p-4">
                <div className="flex">
                    <span className="text-[32px]  text-[#00F] font-normal font-lobster ">
                        Rise Path
                    </span>
                    <span className="text-[42px]  text-[#00F]">
                        <AiOutlineDingtalk />
                    </span>
                    <button onClick={() => setIsOpen(false)} className=" absolute top-[18px] left-[298px] text-[32px] text-[#00F] mt-2">
                        <RiCloseCircleFill />
                    </button>
                </div>

                <ul className="flex  flex-col gap-4 mt-[40px] text-[24px] text-[#0A0A29] font-plus-jakarta-sans font-semibold">
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
                <div className=" flex  flex-col gap-3 ">
                    <p className="mt-9 text-[24px] text-[#0A0A29] font-plus-jakarta-sans font-semibold">Log in</p>
                    <button onClick={() => setIsModalOpen(true)} className="bg-[black] w-[150px] p-3 text-[#FFFF] rounded mt-[18px]" >Sign up</button>
                </div>


            </div>

        </nav>
    )
}

export default MobileNavbar
