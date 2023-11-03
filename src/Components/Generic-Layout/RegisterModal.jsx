import employer from '../../assets/Icons/employer.svg'
import employee from '../../assets/Icons/employee.svg'
import { GrFormClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const RegisterModal = ({ setIsModalOpen, isModalOpen }) => {
  const url = window.location.pathname;

  // Check if the path has a forward slash and a value after the main URL
  const hasForwardSlashAfterUrl = url.length > 1;

  return (
    <section className={`z-50 h-screen flex-col w-full justify-center items-center bg-[#EAF6FC] registerOptions fixed inset-0 transition duration-500 ease-in-out ${isModalOpen ? 'flex' : 'hidden'}`}>
        <div className='w-10/12 px-[3%] lg:px-[13.5%] flex items-center justify-between mb-6 sm:mb-9'>
          {hasForwardSlashAfterUrl && <Link to='/' className='flex items-center text-lg'><AiOutlineArrowLeft className=' text-xl font-medium mr-4' />Back Home</Link>}
          <button onClick={() => setIsModalOpen(false)} className='ml-auto'><GrFormClose size={30} stroke='#0000FF' strk fill='#0000FF' /></button>
        </div>
        <div className="flex w-10/12 sm:flex-row flex-col gap-6 md:gap-16 justify-center items-center">
            <div className="bg-white w-[22rem] px-6 pt-4 sm:pt-5 sm:pb-11 pb-6 flex flex-col items-center text-center gap-3 sm:gap-5 rounded-3xl regBox border border-[#407bff33]">
                <img src={employee} alt="" />
                <h3 className='text-[#0000FF] font-bold text-4xl sm:mb-2 font-plus-jakarta-sans'>Employee</h3>
                <p className='text-[#0000FF] font-semibold sm:mb-5 font-plus-jakarta-sans'>I am an employee and would like to create an account.</p>
                <Link to='/employee/register' className='bg-[#3333FF] text-white rounded-lg px-5 py-2.5'>Register</Link>
            </div>
        
            <div className="bg-white w-[22rem] px-6 pt-4 sm:pt-5 sm:pb-11 pb-6 flex flex-col items-center text-center gap-3 sm:gap-5 rounded-3xl regBox border border-[#407bff33]">
                <img src={employer} alt="" />
                <h3 className='text-[#0000FF] font-bold text-4xl sm:mb-2 font-plus-jakarta-sans'>HR/CEO</h3>
                <p className='text-[#0000FF] font-semibold sm:mb-5 font-plus-jakarta-sans'>I am an HR/CEO and would like to create an account for my company.</p>
                {
                  hasForwardSlashAfterUrl ? <button className='bg-[#3333FF] rounded-lg px-5 py-2.5 text-white' onClick={() => setIsModalOpen(false)}>Register</button> : 
                  <Link to="/admin/register" className='bg-[#3333FF] text-white rounded-lg px-5 py-2.5'>Register</Link>
                }
            </div>
        </div>
    </section>
  )
}

export default RegisterModal