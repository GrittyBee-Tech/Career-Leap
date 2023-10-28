import bg from '../../assets/Images/reg-Bg.svg';
import { useForm } from 'react-hook-form';
import { AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const RegisterAdmin = () => {
  const [showPassword, setshowPassword] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required').min(8),
    organization: yup.string().required('Organization name is required'),
    role: yup.string().required('Role is required')
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <section className=" bg-[#FFFF] ">
      <div className="container mx-auto w-[85%] gap-10 sm:gap-8 md:gap-12  flex sm:flex-row flex-col items-center">
        <div className='flex-1 px-9 sm:px-6 md:px-9 pt-10'>
          <h1 className="font-georgia text-primary text-3xl font-bold">Transform Your Team!</h1>
          <p className="font-georgia text-2xl mt-8 mb-4">Drive employee growth, foster innovation, and enhance your company&apos;s performance.</p>
          <img src={bg} alt="" />
        </div>
        <div className='w-full sm:flex-1 mb-4 sm:mb-0 border-2 border-[#0000ff] rounded-3xl px-10 sm:px-7 md:px-12 py-8 flex flex-col gap-5'>
          <h2 className="text-3xl text-primary font-lobster text-center">Career Leap</h2>
          <h4 className='font-plus-jakarta-sans text-3xl font-semibold text-center'>Hello! Welcome</h4>
          <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit(onsubmit)}>
            <div>
              <label className='pb-2.5 font-medium text-xl font-plus-jakarta-sans  text-primary' htmlFor='email'>Email</label>
              <div className='relative'>
                <input
                  name='email'
                  type='email'
                  placeholder='example@gmail.com'
                  className={`w-full border ${errors.email ? 'border-red-500' : 'border-[#0A0A29]'} rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]`}
                  {...register('email')}
                />
                <AiOutlineMail className='absolute text-lg right-4 top-3.5' />
              </div>
              <p className='text-red-500'>{errors.email?.message}</p>
            </div>

            <div>
              <label className='pb-2.5 font-medium text-xl font-plus-jakarta-sans  text-primary' htmlFor='password'>Password</label>
              <div className='relative'>
                <input
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='***********'
                  className={`w-full border ${errors.password ? 'border-red-500' : 'border-[#0A0A29]'} rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]`}
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
              <label className='pb-2.5 font-medium text-xl font-plus-jakarta-sans  text-primary' htmlFor='organization'>Organization name</label>
              <input
                name='organization'
                type='text'
                placeholder='Your organization plc...'
                className={`w-full border ${errors.organization ? 'border-red-500' : 'border-[#0A0A29]'} rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]`}
                {...register('organization')}
              />
              <p className='text-red-500'>{errors.organization?.message}</p>
            </div>

            <div>
              <label className='pb-2.5 font-medium text-xl font-plus-jakarta-sans  text-primary' htmlFor='role'>Register as</label>
              <select
                name='role'
                placeholder='Manager'
                className={`w-full border ${errors.role ? 'border-red-500' : 'border-[#0A0A29]'} bg-white rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]`}
                {...register('role')}
              >
                <option value="admin">HR/CEO</option>
                <option value="employee">Employee</option>
              </select>
              <p className='text-red-500'>{errors.role?.message}</p>
            </div>

            <button type='submmit' onClick={handleSubmit(onsubmit)} className='bg-[#3333FF] text-[#F0F0FF] rounded-lg px-5 py-2.5 text-2xl font-semibold'>Sign In</button>
            <p className='text-xl font-plus-jakarta-sans font-semibold text-center'>Already have an account?
              <Link className='text-primary underline' href="/login">Log in</Link>
            </p>
          </form>
        </div>
      </div>

    </section>
  )
}

export default RegisterAdmin