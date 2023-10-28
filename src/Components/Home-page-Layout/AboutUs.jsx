
import icon from "/src/assets/Images/RisePath.png"

const AboutUs = () => {
    return (
        <section className="bg-[#EAF6FC]">
            <div className="container mx-auto w-[85%]">
                <h2 className="flex justify-center pt-[50px] text-[#00F]  md:text-[60px]  text-[40px] font-lobster  ">Why RisePath</h2>
                <div className="lg:flex gap-[140px]">
                    <div>
                        <p className=" md:w-[570px] mt-[40px]  md:text-[40px]  text-[20px] w-[300px] font-normal  font-georgia text-[#0A0A29]">
                            <span className="font-lobster text-[#00F]">RisePath</span> Supports talent growth, enhances
                            organizational productivity, and contributes to a positive work environment,
                            making it a valuable tool for any forward-thinking company.
                        </p>
                    </div>
                    <div>
                        <img className="w-[550px]" src={icon} alt="icon" />
                    </div>

                </div>
            </div>


        </section >

    )

}
export default AboutUs
