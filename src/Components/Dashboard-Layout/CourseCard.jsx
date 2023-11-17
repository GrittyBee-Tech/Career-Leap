import { FaStar } from 'react-icons/fa';

const CourseCard = ({ title, author, level, time, picture }) => {
  return (
    <article className="p-2 flex flex-col items-start gap-2.5 rounded-lg border border-[#8F8FB7] bg-white">
        <img src={picture} height={192} className='rounded-lg w-full h-48' alt="" />
        <div className='body flex flex-col gap-1'>
            <h3 className='font-plus-jakarta-sans'>{author || "Google"}</h3>
            <h4 className='font-semibold font-plus-jakarta-sans text-lg'>{title || "Human Resources"}</h4>
            <p className='font-plus-jakarta-sans text-sm'>
                Skills to gain: 
                <span className='text-xs pl-1'>
                    Lorem ipsum dolor sit
                </span>
            </p>
            <p className='text-sm font-medium flex gap-2 items-center'>
                <FaStar fill='#FFD700' />
                (400 Reviews)
            </p>
            <p className='text-sm font-medium'>
                {level || "Intermediate"} Course.
                {time || "1-3 months"}
            </p>
        </div>
    </article>
  )
}

export default CourseCard