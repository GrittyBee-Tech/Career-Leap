import { mentorVideos } from "/src/Pages/Dashboard/BigData"
import checkbox from "/src/assets/Icons/Checkbox.svg"



const Mentorship = () => {
    return (
        <section className="max-h-[50rem]">
            {/* Mentorship videos */}
            <div className="bg-white p-[0.63rem] mb-[1.56rem] rounded-[0.63rem]">
                <h2 className="text-[0.75rem] font-medium leading-normal mb-[1.19rem] tracking-[0.0625rem]">
                    Videos from Mentors
                </h2>
                <div className="flex gap-5 pb-3 overflow-auto max-w-[80rem] w-full custom-scroll">
                    {mentorVideos.map((video) => (
                        <div
                            key={video.id}
                            className="rounded-lg bg-[#F8F8F8] min-w-[300px]"
                        >
                            <img src={video.video} alt="" className="rounded-lg w-full" />
                            <div className="flex items-center p-2 justify-between">
                                <div>
                                    <h3 className="text-[0.75rem] leading-normal">
                                        {video.title}
                                    </h3>
                                    <p className="text-[0.75rem] leading-normal">
                                        - {video.author}
                                    </p>
                                </div>
                                <button className="w-[1.125rem] h-[1.125rem]">
                                    <img src={checkbox} alt="" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Career stories from Mentors */}
            <div className="bg-white p-2 rounded-[0.63rem]">
                <h2 className="text-[0.75rem] font-medium leading-normal mb-5">
                    Career stories from Mentors
                </h2>
                <div className="flex gap-5 pb-3 overflow-auto max-w-[80rem] w-full custom-scroll">
                    {mentorVideos.map((video) => (
                        <div
                            key={video.id}
                            className="rounded-lg bg-[#F8F8F8] min-w-[300px]"
                        >
                            <img src={video.video} alt="" className="rounded-lg w-full" />
                            <div className="flex items-center p-2 justify-between">
                                <div>
                                    <h3 className="text-[0.75rem] leading-normal">
                                        {video.title}
                                    </h3>
                                    <p className="text-[0.75rem] leading-normal">
                                        - {video.author}
                                    </p>
                                </div>
                                <button className="w-[1.125rem] h-[1.125rem]">
                                    <img src={checkbox} alt="" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mentorship videos */}
            <div className="bg-white p-2 rounded-[0.63rem]">
                <h2 className="text-[0.75rem] font-medium leading-normal mb-5">
                    Videos from Mentors
                </h2>
                <div className="flex gap-5 pb-3 overflow-auto max-w-[80rem] w-full custom-scroll">
                    {mentorVideos.map((video) => (
                        <div
                            key={video.id}
                            className="rounded-[0.3125rem] bg-[#F8F8F8] min-w-[15.625rem]"
                        >
                            <img
                                src={video.video}
                                alt=""
                                className="rounded-[0.3125rem]  w-full"
                            />
                            <div className="flex items-center p-2 justify-between">
                                <div>
                                    <h3 className="text-[0.75rem] leading-normal">
                                        {video.title}
                                    </h3>
                                    <p className="text-[0.75rem] leading-normal">
                                        - {video.author}
                                    </p>
                                </div>
                                <button className="w-[1.125rem] h-[1.125rem]">
                                    <img src={checkbox} alt="" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Mentorship
