import { Data } from "/src/Components/Home-page-Layout/Data"
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa"
import faq from "/src/assets/Images/faq.png"
import { useState, useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';





const Faq = () => {

  const [showContent, setShowContent] = useState(Array(Data.length).fill(false));

  const toggleBtn = (index) => {
    const newShowContent = [...showContent];
    newShowContent[index] = !newShowContent[index];
    setShowContent(newShowContent);
  }
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <div className="container mx-auto w-[85%] lg:flex md:flex  md:gap-[50px] lg:gap-[130px] lg:flex-row md:flex-row flex flex-col gap-[10px]  lg:pt-[60px] pt-[100px] ">
        <div className="mb-[0px] lg:mb-[90px]">
          <img className="lg:w-[550px] md:w-[550px] w-[300px]" src={faq} alt="faq" />
        </div>

        <div className="flex flex-col gap-[20px] lg:mt-[100px]  md:mt-[5px] mt-[20px] mb-[40px]">
          {Data.map((faq, index) => {


            const { id, content, response } = faq;
            return (
              <div className="" key={id}>
                <div className="flex justify-between rounded p-2 bg-gradient-to-r from-sky-500 to-indigo-500 lg:w-[590px] md:w-[360px]  w-[320px] lg:h-[40px]  text-[#ffff]">
                  <div className="">
                    <p className="lg:text-[18px] md:text-[15px] text-[15px]"> {content}</p>
                  </div>
                  {showContent[index] ? (<button onClick={() => toggleBtn(index)}><FaMinusCircle /></button>) : <button onClick={() => toggleBtn(index)}><FaPlusCircle /></button>}


                </div>
                {showContent[index] && (<div className="bg-[#407BFF]  md:h-[140px] p-3 text-[#ffff] mt-1 lg:w-[590px] md:w-[360px]  w-[320px]" data-aos="flip-up">
                  <p className="">{response}</p>
                </div>)
                }



              </div>
            )

          })}


        </div>

      </div>


    </section >
  )
}

export default Faq
