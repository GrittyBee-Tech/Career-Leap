import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import Sidebar from './Sidebar';

import MobileSideBar from "./MobileSideBar";

import { useState } from "react";





const Dashboard = () => {
    const [toggleNav, setToggleNav] = useState(false)
    return (
        <>
            <NavBar setToggleNav={setToggleNav} toggleNav={toggleNav} />
            {toggleNav && <MobileSideBar setToggleNav={setToggleNav} toggleNav={toggleNav} />}

            <div className="flex">
                <Sidebar className="lg:flex md:flex hidden" />

                <main className="mt-4 ml-6 bg-[#FAFAFE] lg:w-[1134px] md:w-[75%] w-[100%] h:auto">
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default Dashboard