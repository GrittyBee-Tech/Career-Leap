import { useEffect, useState } from 'react';
import { FaCloudMoon } from 'react-icons/fa';
import { IoIosPartlySunny } from 'react-icons/io';
import axios from '../../AxiosApi/axios';
import { MenuContextProvider } from "../../ContextApi/SideBarContext"

const Greetings = ({ text }) => {
    const { advicetab, setAdviceTab, isLoading, setIsLoading } = MenuContextProvider();

    const getAdvice = async () => {

        try {
            setIsLoading(true);
            const response = await axios.get("/advice")
            console.log(response.data);


            if (response.status === 200) {
                setAdviceTab(response.data)
                setIsLoading(false)
            }
        }
        catch (error) {
            console.log(error);

        }


    };


    const [dateformat, setDateFormat] = useState([]);
    const [hour, setHour] = useState(0);

    function formatDate() {
        const now = new Date();
        const options = { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };

        const dateString = now.toLocaleDateString(undefined, options);
        const timeString = now.toLocaleTimeString(undefined, options);

        const [month] = dateString.split(' ');
        const ampm = timeString.split(' ');
        setHour(now.getHours());

        const time = `${now.getHours()}:${now.getMinutes()} ${ampm[4]}`;
        const date = `${now.getDate()} ${month} ${now.getFullYear()}`

        setDateFormat([date, time]);
    }

    useEffect(() => {
        formatDate();
        getAdvice();

    }, []);

    return (
        <header className="flex justify-between mt-2">
            <div>
                <h1 className='text-2xl font-medium text-[#000] font-plus-jakarta-sans flex gap-3 items-center'>
                    Good {hour < 12 ? "Morning" : hour < 18 ? " Afternoon" : " Evening"}, Adekunle!
                    {
                        hour < 12 ? <IoIosPartlySunny fill='#FDB813' />
                            : <FaCloudMoon fill='#00a8fc' />
                    }
                </h1>
                {isLoading ? (<div className="px-4"><h1>Daily Advice</h1></div>) : (<div>
                    <p className="px-4 lg:mt-[-20px]  font-lobster text-[20px] mb-5">{advicetab.slip ? advicetab.slip.advice : null}</p>

                </div>)}
                <p className='font-bad-script text-sm mt-2'>{text || "Watch impactful videos from mentors round about the world!"}</p>
            </div>
            <div className='bg-white p-2 rounded-md'>
                <p className='text-sm mb-1 font-plus-jakarta-sans'>Current Time</p>
                <p className='font-plus-jakarta-sans text-xs font-medium flex gap-2'>
                    {
                        dateformat.map((dat, i) => {
                            return <span className='' key={i}>{dat}</span>
                        })
                    }
                </p>
            </div>
        </header>
    )
}

export default Greetings