import { AiOutlineDingtalk } from "react-icons/ai"

const Navbar = () => {
    return (
        <nav>
            <div className="container m-auto w-[85%] flex gap-[140px] mt-4 border rounded p-2">
                <div className="flex">
                    <span className="text-[32px]  text-[#00F] font-normal">
                        Career Leap
                    </span>
                    <span className="text-[42px]  text-[#00F]">
                        <AiOutlineDingtalk />
                    </span>
                </div>



                <ul className="flex gap-8 mt-2 text-[24px] text-[#0A0A29]">
                    <li>Home</li>
                    <li>Appraisal</li>
                    <li>Upskills</li>
                    <li>Mentorship</li>
                    <li>Mental Health</li>
                </ul>
                <div className="flex gap-3">
                    <p className="mt-3">Log in</p>
                    <button className="bg-[#00F] p-3 text-[#FFFF] rounded">Sign up</button>
                </div>


            </div>




        </nav>
    )
}

export default Navbar
