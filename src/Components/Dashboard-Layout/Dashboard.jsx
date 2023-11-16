/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import Sidebar from './Sidebar';
import { MenuContextProvider } from "../../ContextApi/SideBarContext";
import MobileSideBar from "./MobileSideBar";

const Dashboard = () => {
    const { toggleNav, setToggleNav } = MenuContextProvider();


    return (
        <>

            <NavBar />
            {toggleNav && <MobileSideBar />}

            <div className="flex">
                <Sidebar className="lg:flex md:flex hidden" />

                <main className="pt-4  lg:ml-6 md:px-6 bg-[#FAFAFE] lg:w-[1134px] md:w-[75%]  ml-0 w-[100%] h:auto">
                    <Outlet />
                </main>
            </div>


        </>
    )
}

export default Dashboard