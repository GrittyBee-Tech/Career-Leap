import icon from "/src/assets/Images/fitness-icon.png"
import check from "/src/assets/Icons/check.png"

const Health = () => {
    return (
        <section id="Health ">
            <div className="container mx-auto w-[85%] mt-11  lg:flex gap-[140px] mb-[40px]">
                <div>
                    <h2 className="text-[#00F] text-[40px] md:text-[60px] font-plus-jakarta-sans font-semibold">Mental Health</h2>
                    <p className="text-[#0A0A29] md:text-[30px] text-[20px] font-medium font-plus-jakarta-sans md:mt-[30px]  mt-6">Mental health Exercise</p>

                    <div className="flex gap-3 md:mt-[30px] mt-8">
                        <img className="w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="w-[446px] h-[60px] text-[#0A0A29] md:text-[24px] font-normal font-plus-jakarta-sans">Provide therapy to employees helping them manage mental health issues.</p>
                    </div>
                    <div className="flex gap-3  md:mt-7  mt-5 ">
                        <img className="w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="w-[446px] h-[60px] text-[#0A0A29] md:text-[24px] font-normal font-plus-jakarta-sans">Regular exercise, proper nutrition, adequate sleep, and relaxation techniques.</p>
                    </div>
                    <div className="flex gap-3 md:mt-11 mt-1 mb-11">
                        <img className="w-[45px] h-[45px]" src={check} alt="check" />
                        <p className="w-[446px] h-[60px] text-[#0A0A29] md:text-[24px] font-normal font-plus-jakarta-sans">Support groups provide a safe space for employees facing similar challenges to share experiences and coping strategies.</p>
                    </div>

                </div>
                <div>
                    <img className="w-[550px]" src={icon} alt="icon" />
                </div>

            </div>

        </section>
    )
}

export default Health
