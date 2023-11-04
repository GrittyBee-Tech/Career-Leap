import icon from "/src/assets/Images/Mentorship-icon.png"
import check from "/src/assets/Icons/check.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Mentorship = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section id="Mentorship" className="bg-[#EAF6FC] overflow-x-clip ">


            <div className="container mx-auto w-[85%] mt-11  lg:pt-[70px] lg:pb-[90px] lg:flex  lg:gap-[140px] md:flex md:gap-[40px]">
                <div className="pt-11 lg:pt-[90px] md:pt-[120px]" data-aos="flip-down">
                    <img className="lg:w-[550px] w-[550px] md:w-[700px]" src={icon} alt="icon" />
                </div>
                <div className="mt-8">
                    <h2 className="text-[#00F] text-[40px]  lg:text-[60px] md:text-[30px] font-plus-jakarta-sans font-semibold" data-aos="fade-left">Mentorship</h2>
                    <p className="text-[#0A0A29] lg:text-[30px] md:text-[18px] text-[20px] font-medium font-plus-jakarta-sans md:mt-[30px]  mt-3" data-aos="fade-left">Connect different employees</p>

                    <div className="flex gap-3 md:mt-[30px] mt-2" data-aos="fade-left">
                        <img className="lg:w-[45px] md:w-[25px] md:h-[25px] lg:h-[45px] w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="lg:w-[446px] lg:h-[60px] md:w-[326px] md:h-[30px] w-[446px] h-[60px] text-[#0A0A29]  lg:text-[24px] md:text-[18px] font-normal font-plus-jakarta-sans">Enhance employee satisfaction and retention by fostering a supportive work environment.</p>
                    </div>
                    <div className="flex gap-3  lg:mt-[60px] md:mt-[60px]  mt-5 " data-aos="fade-left">
                        <img className="lg:w-[45px] md:w-[25px] md:h-[25px] lg:h-[45px] w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="lg:w-[446px] lg:h-[60px] md:w-[326px] md:h-[30px] w-[446px] h-[60px] text-[#0A0A29] md:mt-0 mt-2  lg:text-[24px] md:text-[18px] font-normal font-plus-jakarta-sans">Promote diversity and inclusion initiatives by connecting employees from different backgrounds.</p>
                    </div>
                    <div className="flex gap-3  lg:mt-[60px] md:mt-[90px] mt-11 pb-[70px]" data-aos="fade-left">
                        <img className="lg:w-[45px] md:w-[25px] md:h-[25px] lg:h-[45px] w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="lg:w-[446px] lg:h-[60px] md:w-[326px] md:h-[30px] w-[446px] h-[60px] text-[#0A0A29] md:mt-0 mt-2  lg:text-[24px] md:text-[18px] font-normal font-plus-jakarta-sans">Nurture future leaders within the organization.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Mentorship
