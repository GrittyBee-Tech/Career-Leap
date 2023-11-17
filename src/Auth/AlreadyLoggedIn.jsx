import { useGeneralStore } from "../ContextApi/GeneralContext"
import { Navigate, Outlet } from 'react-router-dom';

const AlreadyLoggedIn = () => {
    const { accessToken } = useGeneralStore();

    if (accessToken) return <Navigate to='/dashboard' />

    return <Outlet />
}

export default AlreadyLoggedIn;
