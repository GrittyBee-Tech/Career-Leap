import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGeneralStore } from "../../../ContextApi/GeneralContext";
import axios from "axios";
import Greetings from '../../../Components/Dashboard-Layout/Greetings';
import Check from '../../../assets/Icons/check-fill.svg';
import Loader from "../../../Components/Loader/Loader";

const CoursesInfo = () => {
  const [contentData, setContentData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [isParticipant, setIsParticipant] = useState(false);
  const { courseId } = useParams();
  const { accessToken, baseURL, user } = useGeneralStore();
  const { author, title, level, time, objectives, about, lectures } = contentData;
  const navigate = useNavigate();

  const enrollInCourse = async () => {
    if (isParticipant) return navigate(`/dashboard/learn/courses/${courseId}/lecture/${lectures[0]._id}`);
    try {
      setAddLoading(true);
      const res = await axios.patch(`${baseURL}/course/add-participant/${courseId}`, {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      console.log(res);
      if (res.data.message == "Added successfully") {
        setTimeout(() => {
          navigate(`/dashboard/learn/courses/${courseId}/lecture/${lectures[0]._id}`);
        },2000);
      }
    } catch(err) {
      console.log(err?.response);
    } finally {
      setAddLoading(false);
    }
  }

  useEffect(() => {
    const fetcher = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${baseURL}/course/get-single/${courseId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        const isAParticipant = res?.data?.course?.participants.includes(user.userId);
        setIsParticipant(isAParticipant);
        setContentData(res?.data?.course);
      } catch(err) {
        console.log(err?.response);
      } finally {
        setIsLoading(false);
      }
    }

    fetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Greetings />
      {
        isLoading ? (
          <div className="absolute top-8 right-0 w-full flex justify-center items-center md:w-[calc(100vw-13rem)] h-[90vh] bg-white z-10">
            <Loader text='Loading Course Information....' />
          </div>
        ) : 
          <section className="rounded-xl min-h-[28rem] px-8 py-5 border border-[#404064] my-2">
            <h3 className="text-xl font-semibold font-plus-jakarta-sans">{author || "UDACITY"}</h3>

            <h1 className="text-3xl font-bold text-primary font-plus-jakarta-sans my-4">{title || "Software Product Management Specialization"}</h1>

            <p className="font-plus-jakarta-sans text-[#000]">{about || "Create Better Software using Agile Practices. Master Agile development and effective interactions to drive the making of great software products."}</p>
          
            <p className="flex gap-2.5 items-center my-4">
              <span className="font-plus-jakarta-sans text-sm text-[#000] font-medium">{level || "Intermediate"}</span>
              <span className="font-plus-jakarta-sans text-sm text-[#000] font-medium">Course</span>
              <span className="font-plus-jakarta-sans text-sm text-[#000] font-medium">{time || "1 - 3 months"}</span>
            </p>

            <button onClick={enrollInCourse} className={`text-[#f0f0ff] text-sm font-bold font-plus-jakarta-sans ${addLoading ? "bg-blue-500" : "bg-primary"} py-2.5 px-5 mb-5 rounded-md`}>
              {addLoading ? "Enrolling" : isParticipant ? "Continue Course" :"Enrol Now"}
            </button>

            <ul className="grid grid-cols-2 gap-3">
              {
                contentData && objectives?.map((obj, i) => (
                  <li key={i} className="text-xs flex gap-2 items-start">
                    <img src={Check} />
                    {obj}
                  </li>
                ))
              }
            </ul>
          </section>
      }
    </>
  )
}

export default CoursesInfo