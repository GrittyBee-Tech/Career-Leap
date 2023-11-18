import { IoIosPartlySunny } from "react-icons/io"
import rate from "/src/assets/Icons/rate.png"
import todo from "/src/assets/Icons/todo.png"
import check from "/src/assets/Icons/checkbox.png"
import dash from "/src/assets/Icons/right.png"
import icon from "/src/assets/Icons/sign.png"
import health from "/src/assets/Images/health.png"
import learning from "/src/assets/Images/upskills-icon.png"
import reader from "/src/assets/Images/reader.png"
import diction from "/src/assets/Images/pana.png"
import Mentor from "/src/assets/Images/mentor.png"
import pie from "/src/assets/Images/pie.png"
import graph from "/src/assets/Images/graph.png"
import Greetings from "../../Components/Dashboard-Layout/Greetings"


const Overview = () => {

  return (
    <section>
      <Greetings />
      <div className="px-7 lg:flex md:flex lg:flex-nowrap md:flex-wrap flex flex-wrap gap-3">
        <div className="bg-[white] shadow-lg  rounded w-[100%] lg:w-[242px] md:w-[240px] lg:h-[109px]">
          <div className=" p-3 flex lg:gap-3 gap-[60px]">
            <div >
              <div>
                <h2 className="text-[12px]  lg:w-[94px] font-plus-jakarta-sans font-normal ">My Performance</h2>
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
        <div className="bg-[white] shadow-lg rounded  w-[100%] lg:w-[262px] md:w-[240px] lg:h-[109px]">
          <div className=" p-3 flex lg:gap-1 gap-[30px]">
            <div>
              <div>
                <h2 className="text-[12px]  lg:w-[94px] font-plus-jakarta-sans font-normal ">Task Assigned</h2>
              </div>
              <div>
                <p className="text-[12px] font-plus-jakarta-sans font-normal mt-2"> 0</p>

              </div>
              <div>
                <p className="text-[12px] lg:w-[164px] font-plus-jakarta-sans font-normal border-x-blue mt-2">100 Average tasks per user </p>
              </div>
            </div>

            <div className="">
              <img className="pt-5" src={todo} alt="rate" />

            </div>
          </div>
        </div>
        <div className="bg-[white] shadow-lg rounded w-[100%] lg:w-[242px] md:w-[240px] lg:h-[109px]">
          <div className=" p-3 flex lg:gap-[10px] gap-[90px]">
            <div>
              <div>
                <h2 className="text-[12px]  lg:w-[124px] font-plus-jakarta-sans font-normal ">Task Completion</h2>
              </div>
              <div>
                <p className="text-[12px] font-plus-jakarta-sans font-normal mt-2"> 0%</p>

              </div>
              <div>
                <p className="text-[12px] font-plus-jakarta-sans font-normal border-x-blue mt-2">Good Score</p>
              </div>
            </div>

            <div className=" mt-5">
              <img src={check} alt="rate" />

            </div>
          </div>
        </div>

        <div className="bg-[white] shadow-lg  rounded w-[100%] lg:w-[242px]  md:w-[240px] lg:h-[109px]">
          <div className=" p-3 flex lg:gap-5 gap-[97px]">
            <div>
              <div>
                <h2 className="text-[12px] lg:w-[94px] font-plus-jakarta-sans font-normal ">Attendance %</h2>
              </div>
              <div>
                <p className="text-[12px] font-plus-jakarta-sans font-normal mt-2"> 67%</p>

              </div>
              <div>
                <p className="text-[12px] font-plus-jakarta-sans font-normal border-x-blue mt-2">| Average score</p>
              </div>
            </div>

            <div className=" mt-5">
              <img src={dash} alt="rate" />

            </div>
          </div>

        </div>
        <div className="bg-[white] shadow-lg  rounded w-[100%] lg:w-[242px] md:w-[240px] lg:h-[109px]">
          <div className=" p-3 flex lg:gap-5 gap-[100px]">
            <div>
              <div>
                <h2 className="text-[12px] lg:w-[94px] font-plus-jakarta-sans font-normal ">Leave %</h2>
              </div>
              <div>
                <p className="text-[12px] font-plus-jakarta-sans font-normal mt-2">0%</p>

              </div>
              <div>
                <p className="text-[12px] font-plus-jakarta-sans font-normal border-x-blue mt-2">| Perfect score</p>
              </div>
            </div>

            <div className="relative mt-5">
              <img src={icon} alt="rate" />

            </div>
          </div>
        </div>

      </div>

      <div className=" lg:mt-4  mt-5 lg:flex lg:flex-row md:flex-row md:flex-wrap lg:flex-nowrap lg:gap-[45px]  lg:justify-normal gap-7 md:flex flex flex-col md:justify-center">
        <div className="lg:flex lg:flex-col lg:gap-[42px]">
          <div className="bg-[white] shadow-lg lg:w-[329px] md:w-[492px] md:ml-[-21px] md:px-5  md:mx-auto  w-[330px] px-3 lg:mx-0 mx-auto  lg:pt-0 pt-7 lg:h-[213px] h-[200px] rounded  lg:px-2">
            <p className="flex mx-auto text-[#00C] font-lobster font-medium">Mental Health</p>

            <div className="flex lg:gap-5  md:gap-[90px] lg:pt-[20px]">
              <div>
                <img src={health} alt="health" />
              </div>
              <div className=""><p className="font-plus-jakarta-sans shadow-lg   rounded  lg:p-1 bg-[white] md:text-[14px] text-[14px] font-normal mt-7 lg:w-[100px] md:w-[200px] lg:h-[74px] text-center">Get your work life balance right!</p></div>


            </div>

          </div>
          <div className="bg-[white] lg:mt-0 mt-7 lg:pt-0 pt-5 lg:w-[329px] md:w-[492px] md:ml-[-21px] md:px-5 w-[330px] md:mx-auto  mx-auto lg:mx-0  shadow-lg lg:h-[233px] rounded px-4">
            <p className="flex mx-auto text-[#00C] font-lobster font-medium">MentorShip</p>
            <p className="font-medium font-plus-jakarta-sans text-left text-[14px]">Achieve career growth and development with the help of a mentor</p>

            <div className="flex gap-5  justify-center lg:pt-[10px]">
              <div>
                <img className="lg:w-[180px]" src={Mentor} alt="Mentor" />
              </div>

            </div>

          </div>
        </div>


        {/* section two */}
        <div className="rounded shadow-lg  bg-[white] lg:w-[429px]  md:w-[492px]  w-[330px] md:ml-[35px] md:px-5  mx-auto lg:mx-0 lg:h-[490px] px-4">
          <p className=" flex text-[16px] text-[#00C]  font-lobster font-normal">Learning</p>
          <p className="mt-2 font-plus-jakarta-sans text-[14px] font-medium">Upskill with life changing courses</p>
          <div className="mt-2 flex justify-center mx-auto">
            <img className="lg:w-[200px] md:w-[280px]" src={learning} alt="learning" />
          </div>
          <p className="font-plus-jakarta-sans text-[14px] font-medium mt-4">Upskill with E-Books and Articles</p>
          <div className="lg:flex  flex flex-row gap-3  md:flex md:gap-[50px] lg:justify-center  justify-center   lg:mt-[50px] mt-4 lg:mb-0 mb-8">
            <div className="bg-[white] shadow-lg rounded"><img className="" src={diction} alt="diction" /></div>
            <div className="bg-[white] shadow-lg rounded "><img className="" src={reader} alt="reader" /></div>

          </div>
        </div>

        {/* section three */}

        <div className=" lg:gap-[0]">
          <div>

          </div>
          <div className="relative lg:w-[416px]  lg:mx-0 mx-auto mt-[2px] lg:h-[486px] lg:mb-0 mb-3 h-[270px] w-[330px]  md:h-[550px] md:w-[492px] md:ml-[-21px] md:px-5  md:mx-auto shadow-lg bg-[white] ">
            <p className="flex pt-2 text-[#00C] font-lobster ">Appraisal Chat</p>

            <img className="w-[220px] flex justify-center mx-auto lg:pt-2" src={graph} alt="graph" />

            < img className="flex  mx-auto  lg:w-[250px] md:w-[250px] w-[150px] justify-center lg:pt-[20px] pt-9" src={pie} />

            <p className="absolute lg:top-[220px]   md:top-[95px]  md:left-[30px] top-[50px]  left-4 md:text-[14px] text-[13px] lg:text-[14px] lg:left-[20px] lg:w-[101px] lg:h-[36px] font-plus-jakarta-sans text-center">Skill Improvement </p>
            <p className=" absolute lg:w-[127px] lg:top-[230px]  w-[89px] text-[12px] lg:text-[14px] md:text-[14px] left-[199px] md:left-[300px] lg:left-[280px] top-[50px] lg:h-[36px] text-center">Courses Completion Rates</p>
            <p className="absolute lg:w-[127px]  text-[12px] lg:text-[14px] md:text-[14px] left-[5px] md:top-[190px]  md:left-[50px] lg:left-[-20px] lg:top-[320px] top-[130px] lg:h-[36px] text-center" >Productivity</p>
            <p className="absolute lg:w-[60px]   text-[12px] lg:text-[14px] md:text-[14px] lg:left-[50px] left-[20px]  md:top-[290px] md:left-[80px] lg:top-[440px] top-[210px] lg:h-[36px] text-center"> Quality of Work</p>
            <p className="absolute lg:w-[120px]  text-[12px]  top-[140px] md:text-[14px] left-[215px] lg:text-[14px] md:left-[370px] md:top-[240px] lg:left-[310px] lg:top-[350px] lg:h-[36px] text-center">Attendance Records</p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview