import icon from "/src/assets/Images/fitness-icon.png"
import check from "/src/assets/Icons/check.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Health = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section id="Health" className="overflow-x-clip">
            <div className="container mx-auto w-[85%] mt-11 md:flex md:flex-row  lg:flex-row flex flex-col-reverse md:gap-[20px] lg:gap-[140px] lg:flex gap-[140px] lg:mt-[90px] mb-[40px] lg:mb-[90px]">
                <div>
                    <h2 className="text-[#00F] text-[40px]  lg:text-[60px] md:text-[30px] font-plus-jakarta-sans font-semibold">Mental Health</h2>
                    <p className="text-[#0A0A29] lg:text-[30px] md:text-[18px] text-[20px] font-medium font-plus-jakarta-sans md:mt-[30px]  mt-4">Mental health Exercise</p>

                    <div className="flex gap-3 md:mt-[30px] mt-3" data-aos="fade-right">
                        <img className="lg:w-[45px] md:w-[25px] md:h-[25px] lg:h-[45px] w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="lg:w-[446px] lg:h-[60px] md:w-[326px] md:h-[30px] w-[446px] h-[60px] text-[#0A0A29]  lg:text-[24px] md:text-[18px] font-normal font-plus-jakarta-sans">Provide therapy to employees helping them manage mental health issues.</p>
                    </div>
                    <div className="flex gap-3  md:mt-[70px]  mt-5 mb-5" data-aos="fade-right">
                        <img className="lg:w-[45px] md:w-[25px] md:h-[25px] lg:h-[45px] w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="lg:w-[446px] lg:h-[60px] md:w-[326px] md:h-[30px] w-[446px] h-[60px] text-[#0A0A29]  lg:text-[24px] md:text-[18px] font-normal font-plus-jakarta-sans">Regular exercise, proper nutrition, adequate sleep, and relaxation techniques.</p>
                    </div>
                    <div className="flex gap-3 md:mt-[70px] mt-1 mb-11 md:pb-[40px]" data-aos="fade-right">
                        <img className="lg:w-[45px] md:w-[25px] md:h-[25px] lg:h-[45px] w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="lg:w-[446px] lg:h-[60px] md:w-[326px] md:h-[30px] w-[446px] h-[60px] text-[#0A0A29]  lg:text-[24px] md:text-[18px] font-normal font-plus-jakarta-sans">Support groups provide a safe space for employees facing similar challenges to share experiences and coping strategies.</p>
                    </div>

                </div>
                <div className="md:pt-[60px]" data-aos="flip-down">
                    <img className="w-[550px]" src={icon} alt="icon" />
                </div>

            </div>

        </section>
    )
}

export default Health
