import employer from '../../assets/Icons/employer.svg'
import employee from '../../assets/Icons/employee.svg'
import { GrFormClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import bgg from '../../assets/Images/amico.svg';

const RegisterModal = ({ setIsModalOpen, isModalOpen }) => {
  const url = window.location.pathname;

  // Check if the path has a forward slash and a value after the main URL
  const hasForwardSlashAfterUrl = url.length > 1;

  return (
    <section className={`z-50 h-screen w-full justify-center items-center bg-[rgba(0,0,0,0.2)] registerOptions fixed inset-0 transition duration-500 ease-in-out ${isModalOpen ? 'flex' : 'hidden'}`}>
      <div className='bg-[#EAF6FC] flex-col flex px-10 pt-2 md:pt-5 pb-10 gap-2.5 md:gap-4 rounded-2xl w-10/12 lg:w-8/12 items-center justify-center relative'>
        <img src={bgg} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-95' alt="" />
        <div className='flex items-center justify-between w-full'>
          <Link to='/' className={`${hasForwardSlashAfterUrl ? 'flex': 'hidden'} items-center text-lg`}>
            <AiOutlineArrowLeft className=' text-xl font-medium mr-4' />
            Back Home
          </Link>
          <button onClick={() => setIsModalOpen(false)} className='ml-auto justify-self-end justify-end'>
            <GrFormClose size={30} stroke='#0000FF' fill='#0000FF' />
            </button>
        </div>
        <div className="flex sm:flex-row flex-col w-full gap-5 md:gap-16 justify-center items-center z-10">
            <div className="bg-white w-[22rem] px-6 pt-3 md:pt-5 md:pb-11 pb-5 flex flex-col items-center text-center gap-2 md:gap-3 sm:gap-5 rounded-3xl regBox border border-[#407bff33]">
                <img src={employee} alt="" />
                <h3 className='text-[#0000FF] font-bold text-2xl md:text-4xl sm:mb-2 font-plus-jakarta-sans'>Employee</h3>
                <p className='text-[#0000FF] font-semibold sm:mb-5 font-plus-jakarta-sans'>I am an employee and would like to create an account.</p>
                <Link to='/employee/register' className='bg-[#3333FF] text-white rounded-lg px-5 py-1.5 md:py-2.5'>Register</Link>
            </div>
        
            <div className="bg-white w-[22rem] px-6 pt-3 md:pt-5 md:pb-11 pb-5 flex flex-col items-center text-center gap-2 md:gap-3 sm:gap-5 rounded-3xl regBox border border-[#407bff33]">
                <img src={employer} alt="" />
                <h3 className='text-[#0000FF] font-bold text-2xl md:text-4xl sm:mb-2 font-plus-jakarta-sans'>HR/CEO</h3>
                <p className='text-[#0000FF] font-semibold sm:mb-5 font-plus-jakarta-sans'>I am an HR/CEO and would like to create an account for my company.</p>
                {
                  hasForwardSlashAfterUrl ? <button className='bg-[#3333FF] rounded-lg px-5 py-2.5 text-white' onClick={() => setIsModalOpen(false)}>Register</button> : 
                  <Link to="/admin/register" className='bg-[#3333FF] text-white rounded-lg px-5 py-1.5 md:py-2.5'>Register</Link>
                }
            </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterModal