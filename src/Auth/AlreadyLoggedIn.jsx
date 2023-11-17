import { useContext } from "react";
import { GeneralContext } from "../ContextApi/GeneralContext"
import { Navigate, Outlet } from 'react-router-dom';

const AlreadyLoggedIn = () => {
    const { accessToken } = useContext(GeneralContext);

    if (accessToken) return <Navigate to='/dashboard' />

    return <Outlet />
}

export default AlreadyLoggedIn;
