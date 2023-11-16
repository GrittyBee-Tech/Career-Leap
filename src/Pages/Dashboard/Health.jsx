import Button from "../../Components/Button"
import BellIcon from "../../Components/Icons/BellIcon"
import Squart from "/src/assets/Images/squart.png";
import Stretch from "/src/assets/Images/stretch.png";
import PushUp from "/src/assets/Images/push-up.png";
import Book from "/src/assets/Images/the-power-of-habit-1.jpg";
import DownloadIcon from "../../Components/Icons/DownloadIcon";

const Health = () => {

    return (
        <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-9">
                <div className="border-2 rounded-md col-span-1 p-3">
                    <div className="flex justify-center items-center gap-2">
                        <h2 className="my-3 font-bold text-center text-[24px]">Reminder</h2>
                        <BellIcon />
                    </div>
                    <div className="text-center">
                        <p>Your mental health is a priority. Take time for self-care without guilt or hesitation.</p>
                    </div>
                </div>
                <div className="col-span-2 rounded-md border-2 text-center p-3">
                    <h2 className="font-bold text-[24px] mb-3">Time Management habits</h2>
                    <div className="flex items-center">
                        <div className="text-center">
                            <div className="bg-[#00F] m-auto w-[1.5rem] h-[1.5rem] justify-center items-center text-[16px] text-center rounded-full text-[#fff]">1</div>
                            <p className="text-[18px] my-2 font-bold">Prioritize Tasks</p>
                            <p>Create a to-do list and prioritize tasks based on importance and deadlines. Focus on completing high-priority tasks first.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-[#00F] m-auto w-[1.5rem] h-[1.5rem] justify-center items-center text-[16px] text-center rounded-full text-[#fff]">2</div>
                            <p className="text-[18px] my-2 font-bold">Set Realistic Goals</p>
                            <p> Be realistic about what you can accomplish within a given timeframe. Avoid overloading yourself with unrealistic expectations.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 rounded-md border-2 p-3">
                    <h2 className="font-bold text-[24px] text-center mb-3">Exercise</h2>
                    <div className="md:flex gap-4">
                        <div className="border-2 bg-white rounded-md">
                            <div className="w-full">
                                <img src={Squart} alt="Squart" className="w-full" />
                            </div>
                            <div className="px-2 pb-2">
                                <p className="text-[12px] my-2 font-bold">Chair Squats</p>
                                <p className="text-[12px]">Stand up from your chair, lower yourself back down, and repeat.</p>
                            </div>
                        </div>
                        <div className="border-2 bg-white rounded-md">
                            <div className="w-full">
                                <img src={Stretch} alt="Squart" className="w-full" />
                            </div>
                            <div className="px-2 pb-2">
                                <p className="text-[12px] my-2 font-bold">Chair Squats</p>
                                <p className="text-[12px]">Stand up from your chair, lower yourself back down, and repeat.</p>
                            </div>
                        </div>
                        <div className="border-2 bg-white rounded-md">
                            <div className="w-full">
                                <img src={PushUp} alt="Squart" className="w-full" />
                            </div>
                            <div className="px-2 pb-2">
                                <p className="text-[12px] my-2 font-bold">Chair Squats</p>
                                <p className="text-[12px]">Stand up from your chair, lower yourself back down, and repeat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="col-span-1 mt-3">
                    <div className="border-2 rounded-md p-5">
                        <h2 className="text-center my-3 font-bold">How to handle work stress</h2>
                        <div className="bg-white p-5 text-center">
                            <div className="bg-[#00F] m-auto w-[1.5rem] h-[1.5rem] justify-center items-center text-[16px] text-center rounded-full text-[#fff]">1</div>
                            <p className="my-2 font-bold">Identify Stressors</p>
                            <p>Recognize Triggers: Identify specific situations, tasks, or people that trigger stress. Awareness is the first step in managing stress.</p>
                        </div>
                        <div className="bg-white p-5 text-center mt-3">
                            <div className="bg-[#00F] m-auto w-[1.5rem] h-[1.5rem] justify-center items-center text-[16px] text-center rounded-full text-[#fff]">2</div>
                            <p className="my-2 font-bold">Identify Stressors</p>
                            <p>Recognize Triggers: Identify specific situations, tasks, or people that trigger stress. Awareness is the first step in managing stress.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 border-2 p-3 mt-3 rounded-md">
                    <h2 className="text-center font-bold text-[24px]">Books on Mindset</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                     <div className="border-2 rounded-md p-3 md:flex gap-3">
                        <div className="w-full">
                            <img src={Book} alt="book cover" className="w-full h-full rounded-md object-fill" />
                        </div>
                        <div>
                            <h2 className="font-bold">The Power of HABIT</h2>
                            <p className="my-2">Why we do what we do in Life and Business</p>
                            <div className="mb-4">
                                <span className="font-bold">Author:</span> <span> Charles Duhigg</span>
                                <p>Duhigg argues in the book that 40% of our daily activities stem from the habits that we form.</p>
                            </div>
                            <div>
                                <Button text={'Download'} styles='text-[white]'>
                                <DownloadIcon />
                                </Button>
                            </div>
                        </div>
                    </div> 
                     <div className="border-2 rounded-md p-3 md:flex gap-3">
                        <div className="w-full">
                            <img src={Book} alt="book cover" className="w-full h-full rounded-md object-center" />
                        </div>
                        <div>
                            <h2 className="font-bold">The Power of HABIT</h2>
                            <p className="my-2">Why we do what we do in Life and Business</p>
                            <div className="mb-4">
                                <span className="font-bold">Author:</span> <span> Charles Duhigg</span>
                                <p>Duhigg argues in the book that 40% of our daily activities stem from the habits that we form.</p>
                            </div>
                            <div>
                                <Button text={'Download'} styles='text-[white]'>
                                   <DownloadIcon />
                                </Button>
                            </div>
                        </div>
                    </div> 
                    
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Health
