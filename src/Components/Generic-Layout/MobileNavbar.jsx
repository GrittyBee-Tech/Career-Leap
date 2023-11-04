import { AiOutlineDingtalk } from "react-icons/ai"
import { RiCloseCircleFill } from "react-icons/ri"
import { HashLink } from "react-router-hash-link"


const MobileNavbar = ({ setIsOpen, setIsModalOpen }) => {
    return (
        <nav className="md:hidden  top-0  bg-[#BCE7FD] fixed h-screen w-full z-10">
            <div className="flex flex-col p-4">
                <div className="flex">
                    <span className="text-[32px]  text-[#FFFF] font-normal">
                        Rise Path
                    </span>
                    <span className="text-[42px]  text-[#FFFF]">
                        <AiOutlineDingtalk />
                    </span>
                    <button onClick={() => setIsOpen(false)} className=" absolute top-[18px] left-[298px] text-[32px] text-[#FFFF]  mt-2">
                        <RiCloseCircleFill />
                    </button>
                </div>

                <ul className="flex  flex-col gap-4 mt-2 text-[24px] text-[#FFFF]">
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
                    <p className="mt-3 text-[24px] text-[#FFFF]">Log in</p>
                    <button onClick={() => setIsModalOpen(true)} className="bg-[black] w-[150px] p-3 text-[#FFFF] rounded" >Sign up</button>
                </div>
                <div className="">

                </div>

            </div>

        </nav>
    )
}

export default MobileNavbar
