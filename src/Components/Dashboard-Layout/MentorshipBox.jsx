import mentor from '../../assets/Images/mentor.png';
import { BsThreeDotsVertical } from "react-icons/bs";


const MentorshipBox = ({ pic, link, title, done }) => {
    return (
        <article className="w-56 bg-[#F0F0FF] rounded-md mr-2.5 min-w-[14rem] relative">
            <button className='absolute top-2.5 right-2.5'>
              <BsThreeDotsVertical size={18} color='white' />
            </button>
            {link || 
                <img src={pic || mentor} className='w-full rounded-t-md' alt="" />
            }
            <div className='p-2 flex justify-between whitespace-break-spaces'>
                <p className='text-xs'>{title || "The Power of Entrepreneurial Mindset - Bill Roche"}</p>
                <input type="checkbox" checked={done || false} name="" className='w-4 ml-3' id="" />
            </div>
        </article>
    )
}

export default MentorshipBox