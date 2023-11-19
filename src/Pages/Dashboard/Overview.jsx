import health from "/src/assets/Images/health.png"
import learning from "/src/assets/Images/upskills-icon.png"
import reader from "/src/assets/Images/reader.png"
import diction from "/src/assets/Images/pana.png"
import Mentor from "/src/assets/Images/mentor.png"
import pie from "/src/assets/Images/pie.png"
import graph from "/src/assets/Images/graph.png"
import Greetings from "../../Components/Dashboard-Layout/Greetings"
import Rating from "../../Components/Dashboard-Layout/Rating"

const Overview = () => {

  return (
    <section>
      <Greetings />

      <Rating />

      <div className="lg:mt-4  mt-5 lg:flex lg:flex-row md:flex-row md:flex-wrap lg:flex-nowrap lg:gap-5  gap-7 md:flex flex flex-col md:justify-center">
        <div className="lg:flex lg:flex-col lg:gap-[42px]">
          <div className="bg-[white] shadow-lg lg:w-[329px] md:w-[492px] md:ml-[-35px] md:px-5  md:mx-auto  w-[330px] px-3 lg:mx-0 mx-auto  lg:pt-0 pt-7 lg:h-[213px] h-[200px] rounded  lg:px-2">
            <p className="flex mx-auto text-[#00C] font-lobster font-medium">Mental Health</p>

            <div className="flex lg:gap-5  md:gap-[90px] lg:pt-[20px]">
              <div>
                <img src={health} alt="health" />
              </div>
              <div className=""><p className="font-plus-jakarta-sans shadow-lg   rounded  lg:p-1 bg-[white] md:text-[14px] text-[14px] font-normal mt-7 lg:w-[100px] md:w-[200px] lg:h-[74px] text-center">Get your work life balance right!</p></div>


            </div>

          </div>
          <div className="bg-[white] lg:mt-0 mt-7 lg:pt-0 pt-5 lg:w-[329px] md:w-[492px] md:ml-[-35px] md:px-5 w-[330px] md:mx-auto  mx-auto lg:mx-0  shadow-lg lg:h-[233px] rounded px-4">
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
        <div className="rounded shadow-lg  bg-[white] lg:w-[429px]  md:w-[492px]  w-[330px] md:ml-[14px] md:px-5  mx-auto lg:mx-0 lg:h-[490px] px-4">
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
          <div className="relative lg:w-[416px]  lg:mx-0 mx-auto mt-[2px] lg:h-[486px] lg:mb-0 mb-3 h-[auto]] w-[330px]  md:h-[550px] md:w-[492px] md:ml-[-21px] md:px-5  md:mx-auto shadow-lg bg-[white] ">
            <p className="flex pt-2 text-[#00C] font-lobster ">Appraisal Chat</p>

            <img className="w-[220px] flex justify-center mx-auto lg:mb-1 lg:pt-2" src={graph} alt="graph" />

            < img className="flex  mx-auto  lg:w-[250px] md:w-[250px] w-[150px] justify-center lg:pt-[20px] pt-9" src={pie} />

            <p className="absolute lg:top-[220px]   md:top-[255px]  md:left-[30px] top-[220px] left-2   md:text-[14px] text-[13px] lg:text-[14px] lg:left-[20px] lg:w-[101px] lg:h-[36px] font-plus-jakarta-sans text-center">Skill Improvement </p>
            <p className=" absolute lg:w-[127px] lg:top-[230px] md:top-[260px] w-[89px] text-[12px] lg:text-[14px] md:text-[14px] left-[199px] md:left-[360px] lg:left-[280px] top-[220px] lg:h-[36px] text-center">Courses Completion Rates</p>
            <p className="absolute lg:w-[127px]  text-[12px] lg:text-[14px] md:text-[14px] left-[15px] md:top-[360px]  md:left-[40px] lg:left-[-20px] lg:top-[320px] top-[295px] lg:h-[36px] text-center" >Productivity</p>
            <p className="absolute lg:w-[60px]   text-[12px] lg:text-[14px]  md:text-[14px] lg:left-[50px] left-[20px]  md:top-[450px] md:left-[40px] lg:top-[440px] top-[365px] lg:h-[36px] text-center"> Quality of Work</p>
            <p className="absolute lg:w-[120px]  text-[12px]  top-[340px] md:text-[14px] left-[225px] lg:text-[14px] md:left-[370px] md:top-[390px] lg:left-[310px] lg:top-[350px] lg:h-[36px] text-center">Attendance Records</p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview