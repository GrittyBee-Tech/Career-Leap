import Button from "../../Components/Button"
import BellIcon from "../../Components/Icons/BellIcon"
import Squart from "/src/assets/Images/squart.png";
import Stretch from "/src/assets/Images/stretch.png";
import PushUp from "/src/assets/Images/push-up.png";
import Book from "/src/assets/Images/E-books/think-for-yourself-control.jpg";
import strategy from "/src/assets/Images/E-books/strategy.jpg"
import DownloadIcon from "../../Components/Icons/DownloadIcon";
import {Ebooks} from "/src/pages/Dashboard/BigData"

const Health = () => {

    return (
        <div className="">
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
                    <div className="flex flex-col md:flex-row gap-4">
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
                    <h2 className="text-center font-bold text-[24px]"> Available Books on Mindset</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    {Ebooks.map((ebooks)=>{
       const{id,Image,title,content}=ebooks
return(
    <div  className="border-2 rounded-md p-3 h-[200px] gap-3">
    <div>
    <div className="w-full">
        <img src={Image} alt="book cover" className="w-[200px]  mx-auto h-[170px] rounded-md object-fill" />
    </div>
    <div className="mb-2 mt-4">
            <span className="font-bold">Author:</span> <span> Charles Duhigg</span>
           
        </div>
    <div> </div>
    
        <h2 className="font-bold">{title}</h2>
        <p className="mt-3 font-plus-jakarta-sans">{content}</p>
        
         <p></p>
       
           
            <a className='mt-5' href={Book} download=" "> <DownloadIcon />
            <Button  text={'Download'} styles='text-[white]'> </Button></a>
            
        
    </div>
</div>
)
})}
                       
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Health
