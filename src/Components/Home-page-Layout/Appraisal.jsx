import Icon from "/src/assets/Images/Appraisal-icon.png";
import check from "/src/assets/Icons/check.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Appraisal = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section
            id="Appraisal"
            className="bg-[#EAF6FC]  lg:h-[850px]  md:h-[530px] h-[960px] overflow-x-clip"
        >
            <div className="container mx-auto w-[85%] mt-11  lg:flex  md:flex  lg:gap-[140px] md:gap-[50px] ">
                <div
                    className="lg:pt-[40px]  md:pt-[110px] pt-[70px]"
                    data-aos="flip-up"
                >
                    <img
                        className=" lg:w-[500px] md:w-[490px] lg:mt-[90px]"
                        src={Icon}
                        alt="icon"
                    />
                </div>
                <div className="md:mt-6 mt-3 lg:pt-[40px]">
                    <h2 className="text-[#00F] text-[40px]  lg:text-[60px] md:text-[30px] font-plus-jakarta-sans font-semibold">
                        Appraisals
                    </h2>
                    <p className="text-[#0A0A29] lg:text-[30px] md:text-[18px] text-[20px] font-medium font-plus-jakarta-sans md:mt-[30px]  mt-6">
                        {" "}
                        Interactive Employee Appraisals
                    </p>

                    <div
                        className="flex gap-3  md:mt-[30px] mt-8"
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-duration="8000"
                    >
                        <img
                            className="lg:w-[45px] md:w-[25px] md:h-[25px] lg:h-[45px] w-[45px] h-[45px]"
                            src={check}
                            alt="check"
                        />
                        <p className=" lg:w-[446px] lg:h-[60px] md:w-[326px] md:h-[30px] w-[446px] h-[60px] text-[#0A0A29]  lg:text-[24px] md:text-[18px] font-normal font-plus-jakarta-sans">
                            {" "}
                            Set goals for your employees and track their progress over time.
                        </p>
                    </div>

                    <div
                        className="flex gap-3  lg:mt-7 md:mt-[30px]  mt-5 "
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="1000"
                    >
                        <img
                            className="lg:w-[45px] md:w-[25px] md:h-[25px] lg:h-[45px] w-[45px] h-[45px]"
                            src={check}
                            alt="check"
                        />
                        <p className="lg:w-[446px] lg:h-[60px] md:w-[326px] md:h-[30px] w-[446px] h-[60px] text-[#0A0A29]  lg:text-[24px] md:text-[18px] font-normal font-plus-jakarta-sans">
                            Determine employee salary and benefits.
                        </p>
                    </div>
                    <div
                        className="flex gap-3 md:mt-7 mt-1"
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="1000"
                    >
                        <img
                            className="lg:w-[45px] md:w-[25px] md:h-[25px] lg:h-[45px] w-[45px] h-[45px]"
                            src={check}
                            alt="check"
                        />
                        <p className="lg:w-[446px] lg:h-[60px] md:w-[326px] md:h-[30px] w-[446px] h-[60px] text-[#0A0A29]  lg:text-[24px] md:text-[18px] font-normal font-plus-jakarta-sans">
                            Set goals for your employees and track their progress over time.
                        </p>
                    </div>
                    <div
                        className="flex gap-3 md:mt-7 mt-3"
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="1000"
                    >
                        <img
                            className="lg:w-[45px] md:w-[25px] md:h-[25px] lg:h-[45px] w-[45px] h-[45px]"
                            src={check}
                            alt="check"
                        />
                        <p className="lg:w-[446px] lg:h-[60px] md:w-[326px] md:h-[30px] w-[446px] h-[60px] text-[#0A0A29]  lg:text-[24px] md:text-[18px] font-normal font-plus-jakarta-sans">
                            Identify employees who are ready for promotions or transfers.
                        </p>
                    </div>
                    <div
                        className="flex gap-3  lg:mt-7 md:mt-[30px] mb-[80px] mt-3"
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="1000"
                    >
                        <img
                            className="lg:w-[45px] md:w-[25px] md:h-[25px] lg:h-[45px] w-[45px] h-[45px]"
                            src={check}
                            alt="check"
                        />
                        <p className="lg:w-[446px] lg:h-[60px] md:w-[326px] md:h-[30px] w-[446px] h-[60px] text-[#0A0A29]  lg:text-[24px] md:text-[18px] font-normal font-plus-jakarta-sans leading-7">
                            Track employee progress over time to identify areas where
                            employees may need additional support or training.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appraisal;
