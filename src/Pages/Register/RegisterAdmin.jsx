import bg from '../../assets/Images/reg-Bg.svg';
import { useForm } from 'react-hook-form';
import { AiOutlineMail } from 'react-icons/ai';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

const RegisterAdmin = () => {
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
    <section className="w-full flex items-center bg-[#EAF6FC] gap-12">
        <div className='flex-1 px-9 pt-10'>
            <h1 className="font-georgia text-primary text-3xl font-bold">Transform Your Team!</h1>
            <p className="font-georgia text-2xl mt-8 mb-4">Drive employee growth, foster innovation, and enhance your company's performance.</p>
            <img src={bg} alt="" />
        </div>
        <div className='flex-1 border-2 border-[#0000ff] rounded-3xl px-12 py-8 flex flex-col gap-5'>
            <h2 className="text-3xl text-primary font-lobster text-center">Career Leap</h2>
            <h4 className='font-plus-jakarta-sans text-3xl font-semibold text-center'>Hello! Welcome</h4>
            <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit(onsubmit)}>
              <div className='flex flex-col gap-2.5'>
                <label className='font-medium text-xl font-plus-jakarta-sans' htmlFor='email'>Email</label>
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
              
              <div className='flex flex-col gap-2.5'>
                <label className='font-medium text-xl font-plus-jakarta-sans' htmlFor='password'>Password</label>
                <div className='relative'>
                  <input
                    name='password'
                    type='password'
                    placeholder='***********'
                    className={`w-full border ${errors.email ? 'border-red-500' : 'border-[#0A0A29]'} rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]`}
                    {...register('password')}
                  />
                  <AiOutlineMail className='absolute text-lg right-4 top-3.5' />
                </div>
                <p className='text-red-500'>{errors.password?.message}</p>
              </div>
              
              <div className='flex flex-col gap-2.5'>
                <label className='font-medium text-xl font-plus-jakarta-sans' htmlFor='organization'>Organization name</label>
                <div className='relative'>
                  <input
                    name='organization'
                    type='text'
                    placeholder='Your organization plc...'
                    className={`w-full border ${errors.email ? 'border-red-500' : 'border-[#0A0A29]'} rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]`}
                    {...register('organization')}
                  />
                  <AiOutlineMail className='absolute text-lg right-4 top-3.5' />
                </div>
                <p className='text-red-500'>{errors.organization?.message}</p>
              </div>
              
              <div className='flex flex-col gap-2.5'>
                <label className='font-medium text-xl font-plus-jakarta-sans' htmlFor='role'>Register as</label>
                <div className='relative'>
                  <input
                    name='role'
                    type='text'
                    placeholder='Your organization plc...'
                    className={`w-full border ${errors.email ? 'border-red-500' : 'border-[#0A0A29]'} rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]`}
                    {...register('role')}
                  />
                  <AiOutlineMail className='absolute text-lg right-4 top-3.5' />
                </div>
                <p className='text-red-500'>{errors.role?.message}</p>
              </div>
              
              <button type='submmit' onClick={onsubmit} className='bg-[#3333FF] text-[#F0F0FF] rounded-lg px-5 py-2.5 text-2xl font-semibold'>Sign In</button>
              <p className='text-xl font-plus-jakarta-sans font-semibold text-center'>Already have an account?
                <Link className='text-primary underline' href="/login">Log in</Link>
              </p>
            </form>
        </div>
    </section>
  )
}

export default RegisterAdmin