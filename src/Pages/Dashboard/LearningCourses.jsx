import Greetings from "../../Components/Dashboard-Layout/Greetings";
import CourseCard from "../../Components/Dashboard-Layout/CourseCard";
import { useEffect, useState } from "react";
import { useGeneralStore } from "../../ContextApi/GeneralContext";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import Rating from "../../Components/Dashboard-Layout/Rating";

const LearningCourses = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const { accessToken, baseURL } = useGeneralStore();

  useEffect(() => {
    const fetcher = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${baseURL}/course/get-all/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setData(res.data.courses);
      } catch(err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetcher();
  }, []);

  return (
    <>
      <Greetings />

      <Rating />

      <section className=" rounded-xl  min-h-[28rem] px-2 border border-[#404064] py-3 my-7">
        <h3 className="text-[#0a0a29] font-semibold text-xl font-plus-jakarta-sans text-center">Courses Available</h3>
        <div className="grid gri sm:grid-cols-2 lg:grid-cols-3 gap-x-2.5 gap-y-4 mt-5">
          {
            isLoading ? (
              <div className="absolute top-8 right-0 w-full flex justify-center items-center md:w-[calc(100vw-13rem)] h-[90vh] bg-white z-10">
                <Loader text='Loading Courses....' />
              </div>
            )
            : data && data?.map(({ _id, author, image, title, level, time }) => (
              <CourseCard
                key={_id}
                author={author}
                level={level}
                picture={image}
                time={time}
                title={title}
              />
            ))
          }
          {/* <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard /> */}
        </div>
      </section>
    </>
  )
}

export default LearningCourses