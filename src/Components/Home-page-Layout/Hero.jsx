
import team from "/src/assets/Images/team.png"
import icon from "/src/assets/Images/Ellipse-box.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const Hero = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section id="Hero">
            <img className="absolute -z-20 lg:w-[420px] md:w-[320px]  w-[150px] top-0 md:top-0 md:flex" src={icon} alt="icon" />
            <div className="md:flex  lg:flex container mx-auto w-[85%] mt-5 lg:gap-[120px] md:gap-[15px]">
                <div>
                    <p className=" lg:text-[45px] md:text-[25px]  text-[25px]  lg:w-[515px] md:w-[312px] mt-[70px] font-normal  font-georgia">Build a more engaged and productive workforce with <span className="font-lobster text-[#00F]" data-aos="fade-left" data-aos-duration="8000" data-aos-offset="200"> RisePath</span></p>
                    <p className="md:text-[18px]   lg:text-[24px] text-[18px]  lg:w-[486px] md:w-[286px] h-[60px]  mt-8 font-plus-jakarta-sans " data-aos="fade-left" data-aos-duration="8000" data-aos-offset="200">Give your employees a voice and help them to grow.</p>

                    <button className=" mt-7  lg:mt-[60px] w-[198px] h-[60px] bg-[#00F] text-[#FFFF]  font-bold text-[24px] rounded">Get Started</button>
                </div>

                <div className="md:mt-0 pt-[60px] md:flex hidden lg:mb-[50px]">
                    <img className="w-[600px]" src={team} alt="team" />
                </div>

            </div>
        </section>

    )
}

export default Hero
