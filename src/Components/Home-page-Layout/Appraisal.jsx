
import Icon from "/src/assets/Images/Appraisal-icon.png"
import check from "/src/assets/Icons/check.png"

const Appraisal = () => {
    return (
        <section id="Appraisal" className="bg-[#EAF6FC]  md:h-auto h-[900px]">
            <div className="container mx-auto w-[85%] mt-11  lg:flex gap-[140px] ">
                <div className="">
                    <img className="w-[500px] mt-[90px]" src={Icon} alt="icon" />

                </div>
                <div className="md:mt-6 mt-3">
                    <h2 className="text-[#00F] text-[40px] md:text-[60px] font-plus-jakarta-sans font-semibold">
                        Appraisals
                    </h2>
                    <p className="text-[#0A0A29] md:text-[30px] text-[20px] font-medium font-plus-jakarta-sans md:mt-[30px]  mt-6"> Interactive Employee Appraisals</p>

                    <div className="flex gap-3 md:mt-[30px] mt-8">
                        <img className="w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="w-[446px] h-[60px] text-[#0A0A29] md:text-[24px] font-normal font-plus-jakarta-sans"> Set goals for your employees and track their progress over time.</p>
                    </div>
                    <div className="flex gap-3  md:mt-7  mt-5 ">
                        <img className="w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="w-[446px] h-[60px] text-[#0A0A29] md:text-[24px] font-normal font-plus-jakarta-sans">Determine employee salary and benefits.</p>
                    </div>
                    <div className="flex gap-3 md:mt-7 mt-1">
                        <img className="w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="w-[446px] h-[60px] text-[#0A0A29] md:text-[24px] font-normal font-plus-jakarta-sans">Set goals for your employees and track their progress over time.</p>
                    </div>
                    <div className="flex gap-3 md:mt-7 mt-3">
                        <img className="w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="w-[446px] h-[60px] text-[#0A0A29] md:text-[24px] font-normal font-plus-jakarta-sans">Identify employees who are ready for promotions or transfers.</p>
                    </div>
                    <div className="flex gap-3 md:mt-7 mb-11 mt-3">
                        <img className="w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="w-[446px] h-[60px] text-[#0A0A29] md:text-[24px] font-normal font-plus-jakarta-sans leading-7">Track employee progress over time to identify areas where employees may need additional support or training.</p>
                    </div>

                </div>


            </div>
        </section>

    )
}

export default Appraisal
