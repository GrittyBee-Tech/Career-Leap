/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import Sidebar from './Sidebar';
import { MenuContextProvider } from "../../ContextApi/SideBarContext";
import MobileSideBar from "./MobileSideBar";

const Dashboard = () => {
    const { toggleNav } = MenuContextProvider();

    return (
        <>
            <NavBar />
            {toggleNav && <MobileSideBar />}

            <div className="flex lg:gap-[20px] md:gap-[10px] gap-0">
                <Sidebar className="lg:flex md:flex hidden" />

                <main className="pt-4 px-6 mt-[4rem] bg-[#FAFAFE] lg:w-[83%]  w-[full] h:auto">
                    <Outlet />
                </main>
            </div>


        </>
    )
}

export default Dashboard