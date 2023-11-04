import icon from "/src/assets/Images/upskills-icon.png"
import check from "/src/assets/Icons/check.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Upskills = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (

        <section id="Upskills" className="overflow-x-clip">

            <div className="container mx-auto w-[85%] md:h-auto mt-1 md:flex md:flex-row lg:flex-row md:gap-[30px] lg:flex lg:gap-[140px] flex flex-col-reverse gap-[0px]">

                <div className="mt-[60px]" data-aos="fade-right">
                    <h2 className="text-[#00F] text-[40px]  lg:text-[60px] md:text-[30px] font-plus-jakarta-sans font-semibold">Upskills</h2>
                    <p className="text-[#0A0A29] lg:text-[30px] md:text-[18px] text-[20px] font-medium font-plus-jakarta-sans md:mt-[30px]  mt-6">Diverse Learning Opportunities</p>

                    <div className="flex gap-4 lg:gap-4 md:gap-2 md:mt-7  mt-5 " data-aos="fade-right" >
                        <img className="lg:w-[45px] md:w-[25px] md:h-[25px] lg:h-[45px] w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="lg:w-[446px] lg:h-[60px] md:w-[326px] md:h-[30px] w-[446px] h-[60px] text-[#0A0A29] md:mt-0 mt-2 lg:text-[24px] md:text-[18px] font-normal font-plus-jakarta-sans">Learn new skills and knowledge.</p>

                    </div>
                    <div className="flex gap-4 lg:gap-4  md:gap-2 md:mt-2  mt-1 " data-aos="fade-right">
                        <img className="lg:w-[45px] md:w-[25px] md:h-[25px] lg:h-[45px] w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="lg:w-[446px] lg:h-[60px] md:w-[326px] md:h-[30px] w-[446px] h-[60px] text-[#0A0A29]  lg:text-[24px] md:text-[18px] font-normal font-plus-jakarta-sans">Continuous process of learning and development.</p>

                    </div>
                    <div className="flex gap-4  lg:gap-4  md:gap-2 md:mt-7  mt-5 " data-aos="fade-right">
                        <img className="lg:w-[45px] md:w-[25px] md:h-[25px] lg:h-[45px] w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="lg:w-[446px] lg:h-[60px] md:w-[326px] md:h-[30px] w-[446px] h-[60px] text-[#0A0A29]  lg:text-[24px] md:text-[18px] font-normal font-plus-jakarta-sans">Personalized courses for individual's needs and goals. </p>

                    </div>
                    <div className="flex gap-4  lg:gap-4  md:gap-2 md:mt-7  mt-5 " data-aos="fade-right">
                        <img className="lg:w-[45px] md:w-[25px] md:h-[25px] lg:h-[45px] w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="lg:w-[446px] lg:h-[60px] md:w-[326px] md:h-[30px] w-[446px] h-[60px] text-[#0A0A29]  lg:text-[24px] md:text-[18px] font-normal font-plus-jakarta-sans">
                            Employees choose topics, courses, or activities based on their interests, curiosity or hobbies.
                        </p>

                    </div>
                    <div className="flex gap-3  lg:gap-4  md:gap-2 md:mt-[60px]  mt-[60px]  mb-[60px]" data-aos="fade-right">
                        <img className="lg:w-[45px] md:w-[25px] md:h-[25px] lg:h-[45px] w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="lg:w-[446px] lg:h-[60px] md:w-[326px] md:h-[30px] w-[446px] h-[60px] text-[#0A0A29]  lg:text-[24px] md:text-[18px] font-normal font-plus-jakarta-sans">
                            Foster teamwork through shared knowledge and engaging discussions.
                        </p>

                    </div>

                </div>
                <div className="mt-[90px] md:pt-[90px]" data-aos="flip-down">
                    <img className="w-[550px]" src={icon} alt="icon" />

                </div>


            </div>
        </section>

    )
}

export default Upskills
