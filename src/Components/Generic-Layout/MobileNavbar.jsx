import { AiOutlineDingtalk } from "react-icons/ai"
import { RiCloseCircleFill } from "react-icons/ri"


const MobileNavbar = ({ isOpen, setIsOpen, setIsModalOpen }) => {
    return (
        <nav className="md:hidden absolute top-0 bg-[#00F] h-screen">
            <div className="flex flex-col p-4">
                <div className="flex">
                    <span className="text-[32px]  text-[#FFFF] font-normal">
                        Career Leap
                    </span>
                    <span className="text-[42px]  text-[#FFFF]">
                        <AiOutlineDingtalk />
                    </span>
                    <button onClick={() => setIsOpen(false)} className="text-[32px] text-[#FFFF]  mt-2">
                        <RiCloseCircleFill />
                    </button>
                </div>

                <ul className="flex  flex-col gap-4 mt-2 text-[24px] text-[#FFFF]">
                    <li>Home</li>
                    <li>Appraisal</li>
                    <li>Upskills</li>
                    <li>Mentorship</li>
                    <li>Mental Health</li>
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
