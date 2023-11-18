import { useEffect, useState } from 'react';
import { FaCloudMoon } from 'react-icons/fa';
import { IoIosPartlySunny } from 'react-icons/io';
import { MenuContextProvider } from '../../ContextApi/SideBarContext';
import axios from 'axios';

const Greetings = () => {
    const [dateformat, setDateFormat] = useState([]);
    const [hour, setHour] = useState(0);
    const { advicetab, setAdviceTab, isLoading, setIsLoading } = MenuContextProvider();

    
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
    }, []);

    const getAdvice = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("https://api.adviceslip.com/advice");
    
            if (response.status === 200) {
                setAdviceTab(response.data)
                setIsLoading(false);
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAdvice();
    }, [])

    return (
        <header className="flex md:flex-row flex-col gap-4 items-start md:items-center justify-between mt-2 mb-4">
            <div>
                <h1 className='text-2xl font-semibold text-[#000] font-plus-jakarta-sans flex gap-3 items-center'>
                    Good {hour<12 ? "Morning" : hour <18 ? " Afternoon": " Evening"}, Adekunle!
                    {
                        hour < 12 ? <IoIosPartlySunny fill='#FDB813' />
                        : <FaCloudMoon fill='#00a8fc' /> 
                    }
                </h1>
                <p className='font-bad-script font-semibold text-sm mt-2'>
                    {isLoading ? "Watch impactful videos from mentors round about the world!" : advicetab?.slip?.advice}
                </p>
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