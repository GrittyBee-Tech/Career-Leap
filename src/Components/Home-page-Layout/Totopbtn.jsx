
import { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";

const Totopbtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsVisible(scrollTop > 0);
    };

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`fixed top-[174px] lg:right-4  right-4 lg:flex flex-col  cursor-pointer font-semibold h-[64px] w-[64px] justify-center items-center transform translate-y-1/2 bg-blue-500 text-white p-2 rounded-full ${isVisible ? "visible" : "invisible"
                }`}
            onClick={handleClick}
        >
            <BiArrowToTop />
            <p className="text-xs">TOP</p>
        </button>
    );
};

export default Totopbtn;
