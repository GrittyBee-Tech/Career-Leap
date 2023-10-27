
import team from "/src/assets/Images/team.png"
import icon from "/src/assets/Images/Ellipse-box.png"


const Hero = () => {
    return (
        <section id="Hero">
            <img className="absolute -z-20 md:w-[420px]  w-[150px] top-0 md:top-0 md:flex" src={icon} alt="icon" />
            <div className="md:flex  container mx-auto w-[85%] mt-5 gap-[120px]">
                <div>
                    <p className=" md:text-[45px]  text-[25px]  md:w-[515px] mt-[70px] font-normal ">Build a more engaged and productive workforce with <span className="font-lobster text-[#00F]"> CareerLeap</span></p>
                    <p className="md:text-[24px]  text-[18px]  md:w-[486px] h-[60px]  mt-8 font-plus-jakarta-sans">Give your employees a voice and help them to grow.</p>

                    <button className=" mt-7   w-[198px] h-[60px] bg-[#00F] text-[#FFFF]  font-bold text-[24px] rounded">Get Started</button>
                </div>

                <div className="md:mt-0 mt-7">
                    <img className="w-[600px]" src={team} alt="team" />
                </div>

            </div>
        </section>

    )
}

export default Hero
