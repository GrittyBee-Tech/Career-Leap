import { useEffect, useState } from 'react'
import Greetings from '../../../Components/Dashboard-Layout/Greetings';
import { MdOndemandVideo } from 'react-icons/md';
import { FaRegFilePdf } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useGeneralStore }  from '../../../ContextApi/GeneralContext';
import axios from 'axios';
import Loader from '../../../Components/Loader/Loader';
import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';

const CourseContent = () => {
  // const [courseData, setCourseData] = useState({});
  const [lectureArray, setLectureArray] = useState([]);
  const [lectureContent, setLectureContent] = useState({});
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
        // setCourseData(res?.data?.course);
        setLectureArray(res?.data?.course?.lectures);
      } catch(err) {
        console.log(err?.response);
      } finally {
        setIsLoading(false);
      }
    }

    fetcher();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLectureContent(lectureArray.find(lec => lec._id == lectureId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lectureId]);

  return (
    <>
      <Greetings />
      <section className='flex flex-col-reverse md:flex-row w-full justify-between rounded-md'>
        <div className='w-full md:w-8/12'>
          <h2 className="text-2xl font-semibold mb-6 flex gap-2">
            <span>{lectureContent?.address || "X.X"}</span>
            <span>{lectureContent?.title || "Lecture of the first order"}</span>
          </h2>
          {
            isLoading ? <Loader text='Lecture Loading....' /> :
            lectureContent?.isVideo ? (
              <ReactPlayer url={lectureContent?.videoUrl} controls={true} width="85%" />
            ) : (
              <Link target='_blank' className="px-8 py-3 rounded-lg w-48 bg-slate-200 hover:bg-slate-300 hover:outline-blue-300 hover:outline flex gap-4 items-center font-medium" to={lectureContent?.docUrl}>
                <FaRegFilePdf size={28} />
                <p>{lectureContent?.docUrl && "PDF File"}</p>
              </Link>
            )
          }
        </div>
        <div className='shadow-slate-400 bg-white shadow-lg w-full md:w-4/12 py-2 min-h-[70vh] -mt-8'>
          <h3 className='text-xl font-semibold font-plus-jakarta-sans text-center'>Course Content</h3>
          <ul className='mt-6 flex flex-col gap-4'>
            {
              lectureArray && lectureArray?.map(({ _id, title, isVideo }) => {
                // console.log(lec);
                return (
                  <NavLink key={_id} to={`/dashboard/learn/courses/${courseId}/lecture/${_id}`} className={({ isActive }) => `border-l-primary border-l-4 py-2 ${isActive ? "focus:bg-slate-300": "bg-slate-100"} flex gap-4 pl-2`}>
                    {isVideo ? <MdOndemandVideo size={24} /> : <FaRegFilePdf />}
                    <p className='font-plus-jakarta-sans text-sm '>{title}</p>
                  </NavLink>
                )
              })
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default CourseContent