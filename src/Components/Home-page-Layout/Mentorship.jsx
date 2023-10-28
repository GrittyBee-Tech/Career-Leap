import icon from "/src/assets/Images/Mentorship-icon.png"
import check from "/src/assets/Icons/check.png"

const Mentorship = () => {
    return (
        <section id="Mentorship" className="bg-[#EAF6FC] ">


            <div className="container mx-auto w-[85%] mt-11  lg:flex gap-[140px]">
                <div className="pt-11">
                    <img className="w-[550px]" src={icon} alt="icon" />
                </div>
                <div className="mt-8">
                    <h2 className="text-[#00F] text-[40px] md:text-[60px] font-plus-jakarta-sans font-semibold">Mentorship</h2>
                    <p className="text-[#0A0A29] md:text-[30px] text-[20px] font-medium font-plus-jakarta-sans md:mt-[30px]  mt-6">Connect different employees</p>

                    <div className="flex gap-3 md:mt-[30px] mt-8">
                        <img className="w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="w-[446px] h-[60px] text-[#0A0A29] md:text-[24px] font-normal font-plus-jakarta-sans"> Set goals for your employees and track their progress over time.</p>
                    </div>
                    <div className="flex gap-3  md:mt-7  mt-5 ">
                        <img className="w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="w-[446px] h-[60px] text-[#0A0A29] md:text-[24px] font-normal font-plus-jakarta-sans">Determine employee salary and benefits.</p>
                    </div>
                    <div className="flex gap-3 md:mt-7 mt-1 mb-11">
                        <img className="w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="w-[446px] h-[60px] text-[#0A0A29] md:text-[24px] font-normal font-plus-jakarta-sans">Set goals for your employees and track their progress over time.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Mentorship
