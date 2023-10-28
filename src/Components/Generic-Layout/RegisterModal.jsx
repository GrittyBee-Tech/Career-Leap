import employer from '../../assets/Icons/employer.svg'
import employee from '../../assets/Icons/employee.svg'
import { GrFormClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const RegisterModal = ({ setIsModalOpen, isModalOpen }) => {
  return (
    <section className={` md:absolute md:top-[120px] md:w-[70%]   md:rounded  w-full  h-auto fixed md:container mx-auto justify-center items-center bg-[#EAF6FC] registerOptions  md:h-[500px] inset-0 transition duration-500 ease-in-out ${isModalOpen ? 'flex' : 'hidden'}`}>
      <button onClick={() => setIsModalOpen(false)} className='absolute top-7 right-9'><GrFormClose size={30} stroke='#0000FF' strk fill='#0000FF' /></button>
      <div className="flex w-10/12 sm:flex-row flex-col gap-8 md:gap-16 justify-center items-center">
        <div className="bg-white w-[22rem] px-6 pt-4 sm:pt-5 sm:pb-11 pb-6 flex flex-col items-center text-center gap-3 sm:gap-5 rounded-3xl regBox border border-[#407bff33]">
          <img src={employee} alt="" />
          <h3 className='text-[#0000FF] font-bold text-4xl sm:mb-2 font-plus-jakarta-sans'>Employee</h3>
          <p className='text-[#0000FF] font-semibold sm:mb-5 font-plus-jakarta-sans'>I am an employee i would like to sign in to my company dashboard</p>
          <Link to='/employee/register' className='bg-[#3333FF] text-[#F0F0FF] rounded-lg px-5 py-2.5'>Register</Link>
        </div>

        <div className="bg-white w-[22rem] px-6 pt-4 sm:pt-5 sm:pb-11 pb-6 flex flex-col items-center text-center gap-3 sm:gap-5 rounded-3xl regBox border border-[#407bff33]">
          <img src={employer} alt="" />
          <h3 className='text-[#0000FF] font-bold text-4xl sm:mb-2 font-plus-jakarta-sans'>HR/CEO</h3>
          <p className='text-[#0000FF] font-semibold sm:mb-5 font-plus-jakarta-sans'>I am a HR/CEO i would like to register as a company</p>
          <Link to='/admin/register' className='bg-[#3333FF] text-[#F0F0FF] rounded-lg px-5 py-2.5'>Register</Link>
        </div>
      </div>
    </section>
  )
}

export default RegisterModal