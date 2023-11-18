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

            <div className="flex relative">
                <Sidebar />
                <main className="py-1 sm:py-4 px-3 sm:px-6 bg-[#FAFAFE] w-full sm:w-[calc(100vw-13rem)] h:auto relative">
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default Dashboard