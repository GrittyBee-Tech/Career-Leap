import { useEffect, useState } from "react";
import { useGeneralStore } from "../ContextApi/GeneralContext";
import Loader from "../Components/Loader/Loader";
import { Outlet } from "react-router";
import { jwtDecode } from "jwt-decode";

const PersistLogin = () => {
    const [isLoading, setisLoading] = useState(true);
    const { accessToken, setUser } = useGeneralStore();

    useEffect(() => {
      const verifyToken = async () => {
        try {
            const userDets = await jwtDecode(accessToken);
            console.log(userDets);
            setUser(userDets);
        } catch(err) {
            localStorage.removeItem('AUTH_VALUES');
        } finally {
            setisLoading(false);
        }
      }

      if (accessToken) verifyToken();
      else setisLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    return isLoading ? (
        <div className="w-full h-screen">
            <Loader text="Rise Path Loading..." />
        </div>
    ) : (
        <Outlet />
    );
}

export default PersistLogin
