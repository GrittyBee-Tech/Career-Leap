import { useEffect, useState } from "react";
import {
  Outlet, Navigate, useNavigate, useLocation
} from "react-router-dom";
import axios from "axios";
import { useGeneralStore } from "../ContextApi/GeneralContext";
import Loader from "../Components/Loader/Loader";

const RequireAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const {
    accessToken, setAccessToken, setRefreshToken, refreshToken, baseURL
  } = useGeneralStore();

  const styles = {
    minHeight: "100vh",
    minWidth: "100%",
    display: "grid",
    placeContent: "center",
    placeItem: "center",
    textAlign: "center"
  };

  useEffect(() => {
    if (!accessToken && refreshToken) {
      const req = async () => {
        const data = JSON.stringify({
          email: "kingslyeizima@gmail.com"
        });

        const config = {
          method: "post",
          url: `${baseURL}/auth/token`,
          headers: {
            "Content-Type": "application/json"
          },
          data
        };

        await axios(config)
          .then((response) => {
            setIsLoading(true);
            setAccessToken(response.data.data.accessToken);
            setRefreshToken(response.data.data.refreshToken);
            console.log("SUCCESSFULLLLL");
          })
          .catch((error) => {
            console.warn("RETRY ERROR", error);
            navigate("/login");
          })
          .finally(() => {
            setIsLoading(false);
          });
      };

      req();
    } else {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (accessToken) return <Outlet />;

  if (isLoading) {
    return (
      <div style={styles}>
        <Loader text="Rise Path..." />
      </div>
    );
  }

  if (!isLoading && !accessToken) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location.pathname
        }}
        // state={{ from: location }}
        replace
      />
    );
  }

  return (
    <div style={styles}>
      <Loader text="LOADING, GOT ERROR" />
    </div>
  );
};

export default RequireAuth;
