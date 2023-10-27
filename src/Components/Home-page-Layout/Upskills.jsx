import icon from "/src/assets/Images/upskills-icon.png"
import check from "/src/assets/Icons/check.png"

const Upskills = () => {
    return (

        <section>

            <div className="container mx-auto w-[85%] mt-1  lg:flex gap-[140px]">

                <div className="mt-[60px]">
                    <h2 className="text-[#00F] text-[40px] md:text-[60px] font-plus-jakarta-sans font-semibold">Upskills</h2>
                    <p className="text-[#0A0A29] md:text-[30px] text-[20px] font-medium font-plus-jakarta-sans md:mt-[30px]  mt-6">Diverse Learning Opportunities</p>

                    <div className="flex gap-4  md:mt-7  mt-5 " >
                        <img className="w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="w-[446px] h-[60px] text-[#0A0A29] md:text-[24px] font-normal font-plus-jakarta-sans">Learn new skills and knowledge.</p>

                    </div>
                    <div className="flex gap-4  md:mt-2  mt-5 ">
                        <img className="w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="w-[446px] h-[60px] text-[#0A0A29] md:text-[24px] font-normal font-plus-jakarta-sans">Continuous process of learning and development.</p>

                    </div>
                    <div className="flex gap-4  md:mt-7  mt-5 ">
                        <img className="w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="w-[446px] h-[60px] text-[#0A0A29] md:text-[24px] font-normal font-plus-jakarta-sans">Personalized courses for individual's needs and goals. </p>

                    </div>
                    <div className="flex gap-4  md:mt-7  mt-5 ">
                        <img className="w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="w-[446px] h-[60px] text-[#0A0A29] md:text-[24px] font-normal font-plus-jakarta-sans">
                            Employees choose topics, courses, or activities based on their interests, curiosity or hobbies.
                        </p>

                    </div>
                    <div className="flex gap-3  md:mt-[60px]  mt-5  mb-11">
                        <img className="w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="w-[446px] h-[60px] text-[#0A0A29] md:text-[24px] font-normal font-plus-jakarta-sans">
                            Foster teamwork through shared knowledge and engaging discussions.
                        </p>

                    </div>

                </div>
                <div className="mt-[90px]">
                    <img className="w-[550px]" src={icon} alt="icon" />

                </div>


            </div>
        </section>

    )
}

export default Upskills
