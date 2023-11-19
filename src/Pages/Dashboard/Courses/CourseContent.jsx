import { useEffect, useState } from 'react'
import Greetings from '../../../Components/Dashboard-Layout/Greetings';
import { MdOndemandVideo } from 'react-icons/md';
import { FaRegFilePdf } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useGeneralStore }  from '../../../ContextApi/GeneralContext';
import axios from 'axios';

const CourseContent = () => {
  const [courseData, setCourseData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { courseId, lectureId } = useParams();
  const { accessToken, baseURL } = useGeneralStore();

  useEffect(() => {
    const fetcher = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${baseURL}/course/get-single/${courseId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        console.log(res?.data?.course);
        setCourseData(res?.data?.course);
      } catch(err) {
        console.log(err?.response);
      } finally {
        setIsLoading(false);
      }
    }

    fetcher();
  }, []);

  return (
    <>
      <Greetings />
      <section className='flex w-full justify-between rounded-md'>
        <div className='w-8/12'>
          <h2 className="text-2xl font-semibold mb-3">1.1 Lecture of the first order</h2>
          <video id="video_player_html5_api" className="w-full md:w-[40rem]" aria-label="">
            <source type="video/webm" src="" />
            <track kind="captions" label="English" src="" srcLang="en" />
          </video>
        </div>
        <div className='shadow-slate-600 shadow-lg w-4/12 py-2 h-[70vh]'>
          <h3 className='text-xl font-semibold font-plus-jakarta-sans text-center'>Course Content</h3>
          <ul className='mt-6 flex flex-col gap-4'>
            {
              courseData?.lectures?.map((lec) => {
                // console.log(lec.toJSON());
                // return (
                //   <NavLink key={lec.id} to={`/dashboard/learn/courses/${courseId}/lecture/${lec._id}`} className={({ isActive }) => `border-l-primary border-l-4 py-2 ${isActive ? "focus:bg-slate-300": "bg-white"} flex gap-4 pl-2`}>
                //     <MdOndemandVideo size={24} />
                //     <p className='font-plus-jakarta-sans text-sm '>Introduction to the Product magement</p>
                //   </NavLink>
                // )
              })
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default CourseContent