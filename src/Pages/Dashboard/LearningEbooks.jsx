import Greetings from "../../Components/Dashboard-Layout/Greetings";
import rate from "/src/assets/Icons/rate.png";
import todo from "/src/assets/Icons/todo.png";
import check from "/src/assets/Icons/checkbox.png";
import dash from "/src/assets/Icons/right.png";
import icon from "/src/assets/Icons/sign.png";
import EbookCard from "../../Components/Dashboard-Layout/EbookCard";

const LearningEbooks = () => {
    return (
        <>
            <Greetings />

            <section className="flex flex-wrap gap-4 my-4">
                <div className="bg-[white] shadow-lg rounded-lg py-2.5 pl-2.5 pr-6 flex gap-4 h-24 border">
                <div className="flex flex-col justify-between">
                    <h2 className="text-xs font-plus-jakarta-sans font-medium ">My Performance</h2>
                    <p className="text-xs font-plus-jakarta-sans font-medium"> 202/240</p>
                    <p className="text-xs font-plus-jakarta-sans font-medium border-l-blue-600 border-l-2 pl-2">Good Score</p>
                </div>

                <div className="relative">
                    <img src={rate} alt="rate" width={72} />
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-plus-jakarta-sans font-medium text-xs">80.2%</p>
                </div>
                </div>

                <div className="bg-[white] shadow-lg rounded-lg p-3 h-24">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-3">
                    <h2 className="text-xs font-plus-jakarta-sans font-medium">Courses Started</h2>
                    <p className="text-xs font-plus-jakarta-sans font-medium">0</p>
                    </div>
                    <img src={todo} alt="rate" />
                </div>
                <p className="text-xs lg:w-[164px] font-plus-jakarta-sans font-medium border-l-blue-600 border-l-2 pl-2 mt-3">100 Average tasks per user</p>
                </div>

                <div className="bg-[white] shadow-lg rounded-lg flex gap-3 p-3 h-24 items-stretch">
                <div className="flex flex-col justify-between">
                    <h2 className="text-xs font-plus-jakarta-sans font-medium ">Course Completion</h2>
                    <p className="text-xs font-plus-jakarta-sans font-medium"> 0%</p>
                    <p className="text-xs font-plus-jakarta-sans font-medium border-l-blue-600 border-l-2 pl-2">Good Score</p>
                </div>
                <div className="mt-5">
                    <img src={check} alt="rate" />
                </div>
                </div>

                <div className="bg-[white] shadow-lg rounded-lg flex gap-3 p-3 h-24 items-stretch">
                <div className="flex flex-col justify-between">
                    <h2 className="text-xs lg:w-[94px] font-plus-jakarta-sans font-medium ">Attendance %</h2>
                    <p className="text-xs font-plus-jakarta-sans font-medium mt-2"> 67%</p>
                    <p className="text-xs font-plus-jakarta-sans font-medium border-l-blue-600 border-l-2 pl-2">Average score</p>
                </div>
                <div className="mt-5">
                    <img src={dash} alt="rate" />
                </div>
                </div>

                <div className="bg-[white] shadow-lg rounded-lg flex gap-3 p-3 h-24 items-stretch">
                    <div className="flex flex-col justify-between">
                        <h2 className="text-xs lg:w-[94px] font-plus-jakarta-sans font-medium ">Leave %</h2>
                        <p className="text-xs font-plus-jakarta-sans font-medium mt-2">0%</p>
                        <p className="text-xs font-plus-jakarta-sans font-medium border-x-blue mt-2">Perfect score</p>
                    </div>
                    <div className="relative mt-5">
                    <img src={icon} alt="rate" />
                    </div>
                </div>
            </section>

            <section className="mt-7 border rounded-xl border-[#404064] min-h-[28rem] px-2.5 py-3.5">
                <h3 className="text-[#0a0a29] font-medium font-plus-jakarta-sans text-center">Ebooks Available</h3>
                <div className="grid grid-cols-3 gap-x-2.5 gap-y-4 mt-5">
                <EbookCard />
                <EbookCard />
                <EbookCard />
                <EbookCard />
                </div>
            </section>
        </>
    )
}

export default LearningEbooks