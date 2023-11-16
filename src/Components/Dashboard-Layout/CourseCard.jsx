import { FaStar } from 'react-icons/fa';
import image from '../../assets/Images/course-img.png';

const CourseCard = () => {
  return (
    <article className="p-1.5 flex flex-col items-start gap-2.5 rounded-lg border border-[#8F8FB7] bg-white">
        <img src={image} className='rounded-lg w-full' alt="" />
        <div className='body flex flex-col gap-1'>
            <h3 className='font-plus-jakarta-sans'>Google</h3>
            <h4 className='font-semibold font-plus-jakarta-sans text-lg'>Human Resources</h4>
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
                Intermediate Course.
                1-3 months
            </p>
        </div>
    </article>
  )
}

export default CourseCard