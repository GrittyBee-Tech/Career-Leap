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

            <div className="flex">
                <Sidebar className="lg:flex md:flex hidden" />

                <main className="pt-4 px-6 mt-[4rem] bg-[#FAFAFE] w-[83%] h:auto">
                    <Outlet />
                </main>
            </div>


        </>
    )
}

export default Dashboard