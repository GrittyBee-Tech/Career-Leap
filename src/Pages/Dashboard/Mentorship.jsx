import checkbox from "/src/assets/Icons/Checkbox.svg"
import { useEffect, useState } from 'react' 
// import { useParams } from 'react-router-dom'; 
import { useGeneralStore }  from '../../ContextApi/GeneralContext';
import axios from 'axios';  
import ReactPlayer from 'react-player'

const Mentorship = () => {
    const [courseData, setCourseData] = useState({});
    // const [isLoading, setIsLoading] = useState(false);
    // const { courseId, lectureId } = useParams();
    const { accessToken, baseURL } = useGeneralStore();

    const fetcher = async () => {
      try {
        // setIsLoading(true);
        const res = await axios.get(`${baseURL}/mentorship/all-mentors`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }); 
        console.log('res?.data?.mentorship', res?.data?.mentorship[0].videoUrl)
        setCourseData(res?.data?.mentorship);
      } catch(err) {
        console.log(err?.response);
      } finally {
        // setIsLoading(false);
      }
    }
    useEffect(() => {
    
        fetcher();
      }, []);

    return (
        <section className="max-h-[50rem]">
            {/* Mentorship videos */}
            <div className="bg-white p-[0.63rem] mb-[1.56rem] rounded-[0.63rem]">
                <h2 className="text-[24px] font-bold leading-normal mb-5">
                    Videos from Mentors
                </h2>
                <div className="flex gap-5 pb-3 overflow-auto max-w-[80rem] w-full custom-scroll">
                {courseData.length > 0 ? <div className="flex gap-5 pb-3 overflow-auto max-w-[80rem] w-full custom-scroll">
                    {courseData?.map((video) => ( 
                       <div key={video.id} > 
                        <ReactPlayer url={`${video.videoUrl}`} width='400px'/>

                         <div className="rounded-[0.3125rem] bg-[#F8F8F8] min-w-[15.625rem]"  > 
                            <div className="flex items-center p-2 justify-between h-[8rem]">
                                <div>
                                    <h3 className="text-[14px] font-medium leading-normal break-words max-w-[20rem]">
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
                       </div>
                    ))}
                </div>: ''}
                </div>
            </div>

            {/* Career stories from Mentors */}
            <div className="bg-white p-2 rounded-[0.63rem]">
                <h2 className="text-[24px] font-bold leading-normal mb-5">
                    Career stories from Mentors
                </h2>
                <div className="flex gap-5 pb-3 overflow-auto max-w-[80rem] w-full custom-scroll">
                {courseData.length > 0 ? <div className="flex gap-5 pb-3 overflow-auto max-w-[80rem] w-full custom-scroll">
                    {courseData?.map((video) => ( 
                       <div key={video.id} > 
                        <ReactPlayer url={`${video.videoUrl}`} width='500px'/>

                        <div className="rounded-[0.3125rem] bg-[#F8F8F8] min-w-[15.625rem]"  > 
                            <div className="flex items-center p-2 justify-between h-[8rem]">
                                <div>
                                    <h3 className="text-[14px] font-medium leading-normal break-words max-w-[20rem]">
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
                       </div>
                    ))}
                </div>: ''}
                </div>
            </div>

            {/* Mentorship videos */}
            <div className="bg-white p-2 rounded-[0.63rem]">
                <h2 className="text-[24px] font-bold leading-normal mb-5">
                    Videos from Mentors
                </h2>
               {courseData.length > 0 ? <div className="flex gap-5 pb-3 overflow-auto max-w-[80rem] w-full custom-scroll">
                    {courseData?.map((video) => ( 
                       <div key={video.id} > 
                        <ReactPlayer url={`${video.videoUrl}`} width='500px'/>

                         <div
                           
                            className="rounded-[0.3125rem] bg-[#F8F8F8] min-w-[15.625rem]"
                        > 
                            <div className="rounded-[0.3125rem] bg-[#F8F8F8] min-w-[15.625rem]"  > 
                            <div className="flex items-center p-2 justify-between h-[8rem]">
                                <div>
                                    <h3 className="text-[14px] font-medium leading-normal break-words max-w-[20rem]">
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
                        </div>
                       </div>
                    ))}
                </div>: ''}
            </div>
        </section>
    )
}

export default Mentorship
