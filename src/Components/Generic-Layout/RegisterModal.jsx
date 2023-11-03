import employer from '../../assets/Icons/employer.svg'
import employee from '../../assets/Icons/employee.svg'
import { AiFillCloseCircle } from "react-icons/ai"
import { Link } from 'react-router-dom';

const RegisterModal = ({ setIsModalOpen, isModalOpen }) => {
  return (
    <section className={`fixed top-0 left-0 w-full justify-center items-center bg-[rgba(0,0,0,0.2)] inset-0 transition duration-500 ease-in-out ${isModalOpen ? 'flex' : 'hidden'}`}>
      <div className="flex w-10/12 py-16 md:py-12 sm:flex-row flex-col gap-6 md:gap-12 justify-center items-center bg-[#EAF6FC] rounded-2xl relative">
        <button onClick={() => setIsModalOpen(false)} className='absolute top-6 right-9'>
          <AiFillCloseCircle className="text-[#0000FF]" size={30} />
        </button>
        <div className="bg-white w-[22rem] px-6 pt-3 sm:pt-5 sm:pb-11 pb-5 flex flex-col items-center text-center gap-3 sm:gap-5 rounded-3xl regBox border border-[#407bff33]">
          <img src={employee} alt="" />
          <h3 className='text-[#0000FF] font-bold text-3xl sm:mb-2 font-plus-jakarta-sans'>Employee</h3>
          <p className='text-[#0000FF] font-semibold sm:mb-5 font-plus-jakarta-sans'>I am an employee i would like to sign in to my company dashboard</p>
          <Link to='/employee/register' className='bg-[#3333FF] text-[#F0F0FF] rounded-lg px-5 py-2'>Register</Link>
        </div>

        <div className="bg-white w-[22rem] px-6 pt-3 sm:pt-5 sm:pb-11 pb-5 flex flex-col items-center text-center gap-3 sm:gap-5 rounded-3xl regBox border border-[#407bff33]">
          <img src={employer} alt="" />
          <h3 className='text-[#0000FF] font-bold text-3xl sm:mb-2 font-plus-jakarta-sans'>HR/CEO</h3>
          <p className='text-[#0000FF] font-semibold sm:mb-5 font-plus-jakarta-sans'>I am a HR/CEO i would like to register as a company</p>
          <Link to='/admin/register' className='bg-[#3333FF] text-[#F0F0FF] rounded-lg px-5 py-2'>Register</Link>
        </div>
      </div>
    </section>
  )
}

export default RegisterModal