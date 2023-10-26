
import team from "/src/assets/Images/team.png"
import icon from "/src/assets/Images/Ellipse.png"


const Hero = () => {
    return (
        <section>
            <img className="absolute md:w-[420px]  w-[150px] top-0 md:top-0 md:flex  " src={icon} alt="icon" />
            <div className="md:flex  container m-auto w-[85%] mt-5 gap-[120px]">
                <div>
                    <p className=" md:text-[45px]  text-[20px]  md:w-[515px] mt-[70px] font-normal">Build a more engaged and productive workforce with CareerLeap</p>
                    <p className="text-[24px]   md:w-[486px] h-[60px] mt-8">Give your employees a voice and help them to grow.</p>

                    <button className="mt-6 w-[198px] h-[60px] bg-[#00F] text-[#FFFF]  font-bold text-[24px] rounded">Get Started</button>
                </div>

                <div>
                    <img className="w-[600px]" src={team} alt="team" />
                </div>

            </div>
        </section>

    )
}

export default Hero
