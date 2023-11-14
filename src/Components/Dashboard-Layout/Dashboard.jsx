import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import Sidebar from './Sidebar';


const Dashboard = () => {
    return (
        <>
            <NavBar />
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