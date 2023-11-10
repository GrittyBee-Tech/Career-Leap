import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <>
        <NavBar />
        <div className="flex">
            <Sidebar />
            <main className="mt-4 ml-6">
                <Outlet />
            </main>
        </div>
    </>
  )
}

export default Dashboard