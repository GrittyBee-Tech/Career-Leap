
import icon from "/src/assets/Images/RisePath.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const AboutUs = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="bg-[#EAF6FC]  overflow-x-clip">
            <div className="container mx-auto w-[85%] lg:pt-[50px] ">
                <h2 className="flex justify-center pt-[50px] text-[#00F]  md:text-[30px]  lg:text-[60px] text-[40px] font-lobster  ">Why RisePath</h2>
                <div className="lg:flex gap-[20px] lg:gap-[140px]  md:gap-[20px] md:flex md:flex-row  flex flex-col">
                    <div data-aos="fade-right">
                        <p className=" md:w-[370px] mt-[40px] lg:text-[40px]  lg:w-[570px] md:text-[20px]  text-[20px] w-[300px] font-normal mb-[40px]  lg:mb-[90px] font-georgia text-[#0A0A29]">
                            <span className="font-lobster text-[#00F]">RisePath</span> Supports talent growth, enhances
                            organizational productivity, and contributes to a positive work environment,
                            making it a valuable tool for any forward-thinking company.
                        </p>
                    </div>
                    <div data-aos="fade-left">
                        <img className="w-[550px]" src={icon} alt="icon" />
                    </div>

                </div>
            </div>


        </section >

    )

}
export default AboutUs
