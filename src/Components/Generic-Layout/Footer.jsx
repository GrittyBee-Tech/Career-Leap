
import { HashLink } from "react-router-hash-link"

const Footer = () => {
    return (
        <section className="bg-[#BCE7FD] shadow-lg">
            <div className="container mx-auto  w-[85%] lg:flex flex-wrap justify-between pt-4">
                <div>
                    <h2 className="text-[42px] font-lobster text-[#00F] font-normal">RISE PATH</h2>
                </div>
                <div className="lg:flex flex-col gap-6  ">
                    <div>
                        <h2 className="lg:text-[24px] font-plus-jakarta-sans text-[#0A0A29] font-semibold">Platform</h2>
                    </div>

                    <div>
                        <ul className="lg:text-[20px]  text-[#0A0A29] font-normal font-plus-jakarta-sans flex flex-col gap-3">
                            <li>
                                <HashLink to="/">
                                    Home</HashLink></li>
                            <li>
                                <HashLink to="/#Appraisal">
                                    Appraisal</HashLink></li>
                            <li>
                                <HashLink to="/#Upskills"> Upskills</HashLink></li>
                            <li><HashLink to="/#Mentorship">Mentorship</HashLink></li>
                            <li><HashLink to="/#Health">Mental Health</HashLink></li>
                        </ul>
                    </div>


                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="text-[24px] font-plus-jakarta-sans text-[#0A0A29] font-semibold">Platform</h2>

                    <ul className="text-[20px] text-[#0A0A29] font-normal font-plus-jakarta-sans flex flex-col gap-3">
                        <li>Improve Employee Wellbeing</li>
                        <li>Increase Employee Knowledge</li>
                        <li>Improve Employee Productivity</li>
                        <li>Increase Employee Performance</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="text-[24px] font-plus-jakarta-sans text-[#0A0A29] font-semibold">Resources</h2>

                    <ul className="text-[20px] text-[#0A0A29] font-normal font-plus-jakarta-sans flex flex-col gap-3">
                        <li>Content Library</li>
                        <li>Blog</li>
                        <li>Mentorship</li>
                        <li>Help Center</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="text-[24px] font-plus-jakarta-sans text-[#0A0A29] font-semibold">Company</h2>

                    <ul className="text-[20px] text-[#0A0A29] font-normal font-plus-jakarta-sans flex flex-col gap-3">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

            </div>
            <div className="container mx-auto w-[85%] lg:flex gap-[110px]  justify-center mt-11 text-[24px] font-plus-jakarta-sans font-semibold">
                <h2>Rise Path 2023</h2>
                <p>Terms of Service</p>
                <p>Privacy</p>
            </div>

        </section>
    )
}

export default Footer
