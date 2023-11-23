import { useState } from "react";
import {
    AiOutlineMail,
    AiOutlineEye,
    AiOutlineEyeInvisible,
} from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi"
import icon from "/src/assets/Images/signin.png"
import { Link, useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useGeneralStore } from "../../ContextApi/GeneralContext";
import Swal from 'sweetalert2';
import { jwtDecode } from "jwt-decode";

const SignIn = () => {
    const { baseURL, setAccessToken, setUser } = useGeneralStore();
    const navigate = useNavigate();
    const [showPassword, setshowPassword] = useState(false);
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const schema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required').matches(emailRegex, { message: 'Looks like this is not a valid email' }),
        password: yup.string().required('Password is required').min(8)
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onsubmit = async (data) => {
        try {
            const res = await axios.post(`${baseURL}/auth/login`, JSON.stringify(data), {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (res.status == 200 || res.data != "User not found") {
                Swal.fire({
                    title: 'Logged in successfully',
                    icon: 'success'
                });
                setAccessToken(res?.data?.token);
                const userDets = jwtDecode(res?.data?.token);
                setUser(userDets);
                localStorage.setItem(
                    "AUTH_VALUES",
                    JSON.stringify({ accessToken: res?.data?.token })
                );
                navigate('/dashboard');
            }
        } catch (err) {
            Swal.fire({
                title: 'Error',
                icon: 'error',
                text: err.response.data
            });
        }
    };

    return (
        <section className="">
            <div className=" lg:flex lg:flex-row md:flex lg:pt-[40px] md:flex-col flex flex-col container mx-auto w-[85%] lg:gap-[70px]  gap-4 pt-[30px]">
                <div className="">
                    <Link to="/">
                        <div className="flex mb-[20px]">
                            <BiArrowBack className="mt-1 text-[20px]" />
                            <p className="mb-[20px] font-medium">Go Back</p>
                        </div></Link>
                    <p className="text-[#00F] font-lobster text-[30px]">Transform Your Team!</p>
                    <p className="text-[#000] font-georgia text-[30px]">Drive employee growth, foster innovation, and enhance your company's performance.</p>
                    <img src={icon} alt="team" />
                </div>
                <div className="pt-3">
                    <div
                        style={{ boxShadow: "5px 10px 20px 0px rgba(0, 0, 0, 0.25)" }}
                        className="  lg:w-[500px] sm:flex-1  bg-[#EAF6FC] sm:mb-0 rounded-3xl px-10 sm:px-7 md:px-12 py-8 flex flex-col gap-5"
                    >
                        <h2 className="text-3xl text-[#00F] font-lobster text-center">
                            RisePath
                        </h2>
                        <h3 className="font-plus-jakarta-sans text-2xl font-semibold text-center">
                            Sign In
                        </h3>
                        <p className="flex justify-center text-center font-plus-jakarta-sans">Sign in on RisePath as a company and get access to
                            the services we offer.</p>

                        <form action="" onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-6">
                            <label
                                className="font-medium text-xl font-plus-jakarta-sans"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="w-full border bg-transparent  rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]"
                                    {...register('email')}
                                />
                                <AiOutlineMail className="absolute text-lg right-4 top-3.5" />
                            </div>
                            <p className='text-red-500 -mt-5'>{errors.email?.message}</p>

                            <div>
                                <label
                                    className="font-medium text-xl font-plus-jakarta-sans"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="***********"
                                        className="w-full border  bg-transparent mt-2 rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]"
                                        {...register('password')}
                                    />
                                    {showPassword ? (
                                        <AiOutlineEyeInvisible
                                            onClick={() => setshowPassword(false)}
                                            className="absolute text-lg right-4 top-3.5"
                                        />
                                    ) : (
                                        <AiOutlineEye
                                            onClick={() => setshowPassword(true)}
                                            className="absolute text-lg right-4 top-3.5"
                                        />
                                    )}
                                </div>
                                <p className='text-red-500'>{errors.password?.message}</p>
                            </div>
                            <label
                                className="font-medium text-xl font-plus-jakarta-sans"
                                htmlFor="organization"
                            >
                                Sign in as
                            </label>
                            <div className="relative">
                                <input
                                    name="organization"
                                    type="organization"
                                    placeholder="organization "
                                    className="w-full border bg-transparent  rounded-md outline-none p-2.5 leading-none font-medium text-lg placeholder:text-[#C8C8DC]"
                                />
                                <AiOutlineMail className="absolute text-lg right-4 top-3.5" />
                            </div>

                            <button
                                type="submit"
                                onClick={handleSubmit(onsubmit)}
                                className="bg-[#3333FF] text-[#F0F0FF] rounded-lg px-5 py-2 text-xl font-semibold"
                            >
                                Log in
                            </button>
                            <p className="flex justify-center">Don't have an account? Sign up</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn
