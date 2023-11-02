import {Data} from "/src/Components/Home-page-Layout/Data"
import {FaPlusCircle} from "react-icons/fa"
import faq from "/src/assets/Images/faq.png"

const Faq = () => {
  return (
    <section>
        <div className="container mx-auto w-[85%] flex pt-5">
        <div>
        <img  className="w-[550px]"src={faq}/>
        </div>
        
        <div className="flex flex-col gap-6">
            {Data.map((faq)=>{
              

              const{id,content}=faq;
              return(
                <div className="rounded bg-[#407BFF] md:w-[690px]  md:h-[70px] flex" key={id}>
                <p>{content}</p>
             <FaPlusCircle/>
                </div>
              )
                 
            })}
           
         
        </div>
       
        </div>
        
      
    </section>
  )
}

export default Faq
