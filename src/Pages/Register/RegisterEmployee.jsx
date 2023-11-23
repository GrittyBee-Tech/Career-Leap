import bg from '../../assets/Images/amico.svg';
import { useForm } from 'react-hook-form';
import { AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import RegisterModal from '../../Components/Generic-Layout/RegisterModal';
import { useGeneralStore } from '../../ContextApi/GeneralContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loader from '../../Components/Loader/Loader';

const RegisterEmployee = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { baseURL, setUser } = useGeneralStore();
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const schema = yup.object().shape({
    fullName: yup.string().required('Full name is Required'),
    email: yup.string().email('Invalid email').required('Email is required').matches(emailRegex, { message: 'Looks like this is not a valid email' }),
    password: yup.string().required('Password is required').min(8),
    organization: yup.string().required('Organization name is required')
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onsubmit = async (data) => {
    const { fullName, email, password } = data;
    const sending = { fullName, email, password, companyName: data.organization, role: 'user' };

    try {
      setIsLoading(true);
      const res = await axios.post(`${baseURL}/auth/register`, JSON.stringify(sending), {
        headers: {
          "Content-Type": 'application/json'
        }
      });
      const { password, ...user } = res.data.user;
      if (res.status == 201) {
        setUser(user);
        Swal.fire({
          title: 'Registered successfully',
          icon: 'success'
        });
        navigate('/dashboard');
      }
    } catch(err) {
      Swal.fire({
        title: 'Registration error',
        icon: 'error',
        text: err.response.data.error
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full md:w-[90%] lg:w-4/5 flex sm:flex-row flex-col bg-white items-center m-auto my-10 gap-10 sm:gap-8 md:gap-12">
      <div className='flex-1 px-9 sm:px-6 md:px-9 pt-6'>
        <button className=' flex mb-8 items-center text-lg' onClick={() => setShowModal(true)}><AiOutlineArrowLeft className=' text-xl font-medium mr-4' />Go Back</button>
        {showModal && <RegisterModal setIsModalOpen={setShowModal} isModalOpen={showModal} />}
        <h1 className="font-georgia text-primary text-3xl font-bold">Transform Your Team!</h1>
        <p className="font-georgia text-2xl mt-8 mb-4">Drive employee growth, foster innovation, and enhance your company&apos;s performance.</p>
        <img src={bg} alt="" />
      </div>
      <div style={{ boxShadow: '5px 10px 20px 0px rgba(0, 0, 0, 0.25)' }} className='w-full sm:flex-1 mb-4 bg-[#EAF6FC] sm:mb-0 rounded-3xl px-10 sm:px-7 md:px-12 py-8 flex flex-col gap-5'>
        {
          isLoading && (
            <div className="w-full absolute inset-0">
                <Loader text='Signing in' />
            </div>
          )
        }
        <h2 className="text-3xl text-primary font-lobster text-center">Rise Path</h2>
        <h4 className='font-plus-jakarta-sans text-2xl font-semibold text-center'>Create an Account</h4>
        <p className="font-georgia text-sm mb-4 text-center">Sign up on Rise Path as an Employee and get access to the services we offer.</p>
        <form action="" className='flex flex-col gap-6' onSubmit={handleSubmit(onsubmit)}>
          <div>
            <label className='font-medium text-lg font-plus-jakarta-sans' htmlFor='fullName'>Full Name</label>
            <div className='relative'>
              <input
                name='fullName'
                type='text'
                placeholder='Albus Dumbledore'
                className={`w-full border ${errors.fullName?.message ? 'border-red-500' : 'border-[#0A0A29]'} bg-transparent mt-2 rounded-md outline-none p-2.5 leading-none font-medium placeholder:text-[#C8C8DC]`}
                {...register('fullName')}
              />
              <AiOutlineMail className='absolute text-xl right-4 top-5' />
            </div>
            <p className='text-red-500'>{errors.fullName?.message}</p>
          </div>

          <div>
            <label className='font-medium text-xl font-plus-jakarta-sans' htmlFor='email'>Email</label>
            <div className='relative'>
              <input
                name='email'
                type='email'
                placeholder='example@gmail.com'
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-[#0A0A29]'} bg-transparent mt-2 rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]`}
                {...register('email')}
              />
              <AiOutlineMail className='absolute text-lg right-4 top-3.5' />
            </div>
            <p className='text-red-500'>{errors.email?.message}</p>
          </div>

          <div>
            <label className='font-medium text-xl font-plus-jakarta-sans' htmlFor='password'>Password</label>
            <div className='relative'>
              <input
                name='password'
                type={showPassword ? 'text' : 'password'}
                placeholder='***********'
                className={`w-full border ${errors.password ? 'border-red-500' : 'border-[#0A0A29]'} bg-transparent mt-2 rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]`}
                {...register('password')}
              />
              {
                showPassword ? <AiOutlineEyeInvisible onClick={() => setshowPassword(false)} className='absolute text-lg right-4 top-3.5' />
                  : <AiOutlineEye onClick={() => setshowPassword(true)} className='absolute text-lg right-4 top-3.5' />
              }
            </div>
            <p className='text-red-500'>{errors.password?.message}</p>
          </div>

          <div>
            <label className='font-medium text-xl font-plus-jakarta-sans' htmlFor='organization'>Organization name</label>
            <input
              name='organization'
              type='text'
              placeholder='Your organization plc...'
              className={`w-full border ${errors.organization ? 'border-red-500' : 'border-[#0A0A29]'} bg-transparent mt-2 rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]`}
              {...register('organization')}
            />
            <p className='text-red-500'>{errors.organization?.message}</p>
          </div>

          <div>
            <label className='font-medium text-xl font-plus-jakarta-sans' htmlFor='role'>Register as</label>
            <select
              name='role'
              placeholder='Manager'
              className={`w-full border ${errors.role ? 'border-red-500' : 'border-[#0A0A29]'} bg-transparent mt-2 rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]`}
              disabled
              defaultValue='employee'
            >
              <option value="employee">Employee</option>
              <option value="admin">HR/CEO</option>
            </select>
          </div>

          <button type='submmit' onClick={handleSubmit(onsubmit)} className='bg-[#3333FF] text-[#F0F0FF] rounded-lg px-5 py-2 text-xl font-semibold'>Register As a User</button>
          <p className='text-xl font-plus-jakarta-sans font-semibold text-center'>Have an account?
            <Link className='text-primary pl-2' to="/signin">Log in</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default RegisterEmployee
