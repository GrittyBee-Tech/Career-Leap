import { IoIosPartlySunny } from "react-icons/io"
import rate from "/src/assets/Icons/rate.png"
import todo from "/src/assets/Icons/todo.png"
import check from "/src/assets/Icons/checkbox.png"

const Overview = () => {
  return (
    <section>
      <div className="flex  gap-[550px] pt-4">
        <div className="">
          <div className="flex gap-1 p-4 "><h2 className="p-4  mt-2 text-[24px] font-plus-jakarta-sans  font-medium">Good Morning, <span>Adekunle!</span></h2>
            <IoIosPartlySunny className="text-[38px] text-[#57C7FF] mt-4" /></div>
          <p className="px-8 mt-[-25px] font-lobster text-[20px] mb-5">Have a Productive day!</p>
        </div>
        <div className="px-3  mt-5 pt-2 bg-[white] w-[149px] h-[45px] rounded" >
          <h2 className="text-[10px] font-semibold font-plus-jakarta-sans">Current Time</h2>
          <p className="text-[12px] font-plus-jakarta-sans font-medium">2 Nov 2023  11:13pm</p>

        </div>

      </div>

      <div className="px-7 flex gap-9">
        <div className="bg-[white]  rounded w-[242px] h-[109px]">
          <div className=" p-3 flex gap-5">
            <div>
              <div>
                <h2 className="text-[12px] font-plus-jakarta-sans font-normal ">My Performance</h2>
              </div>
              <div>
                <p className="text-[12px] font-plus-jakarta-sans font-normal mt-2"> 202/240</p>

              </div>
              <div>
                <p className="text-[12px] font-plus-jakarta-sans font-normal border-x-blue mt-2">Good Score</p>
              </div>
            </div>

            <div className="relative">
              <img src={rate} alt="rate" />
              <p className="absolute top-7 left-6 font-plus-jakarta-sans font-medium text-[12px]">80.2%</p>
            </div>
          </div>




        </div>


        <div className="bg-[white]  rounded w-[242px] h-[109px]">
          <div className=" p-3 flex gap-5">
            <div>
              <div>
                <h2 className="text-[12px] font-plus-jakarta-sans font-normal ">Task Assigned</h2>
              </div>
              <div>
                <p className="text-[12px] font-plus-jakarta-sans font-normal mt-2"> 0</p>

              </div>
              <div>
                <p className="text-[12px] font-plus-jakarta-sans font-normal border-x-blue mt-2">| 100 Average tasks per user </p>
              </div>
            </div>

            <div className="">
              <img className="pt-5" src={todo} alt="rate" />

            </div>
          </div>



        </div>


        <div className="bg-[white]  rounded w-[242px] h-[109px]">
          <div className=" p-3 flex gap-[70px]">
            <div>
              <div>
                <h2 className="text-[12px] font-plus-jakarta-sans font-normal ">Task Completion</h2>
              </div>
              <div>
                <p className="text-[12px] font-plus-jakarta-sans font-normal mt-2"> 0%</p>

              </div>
              <div>
                <p className="text-[12px] font-plus-jakarta-sans font-normal border-x-blue mt-2">Good Score</p>
              </div>
            </div>

            <div className="relative">
              <img src={check} alt="rate" />

            </div>
          </div>




        </div>


        <div className="bg-[white]  rounded w-[242px] h-[109px]">
          <div className=" p-3 flex gap-5">
            <div>
              <div>
                <h2 className="text-[12px] font-plus-jakarta-sans font-normal ">My Performance</h2>
              </div>
              <div>
                <p className="text-[12px] font-plus-jakarta-sans font-normal mt-2"> 202/240</p>

              </div>
              <div>
                <p className="text-[12px] font-plus-jakarta-sans font-normal border-x-blue mt-2">Good Score</p>
              </div>
            </div>

            <div className="relative">
              <img src={rate} alt="rate" />
              <p className="absolute top-7 left-6 font-plus-jakarta-sans font-medium text-[12px]">80.2%</p>
            </div>
          </div>




        </div>


      </div>


    </section>
  )
}

export default Overview