import {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState
} from "react";
import useLocalStore from "../../hooks/useLocalStore";
import axios from "../AxiosApi/axios";

export const GeneralContext = createContext({});

export const GeneralProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState("Home");
    const [accessToken, setAccessToken] = useState(null);
    const [user, setUser] = useState({});
    const [refreshToken, setRefreshToken] = useLocalStore("AUTH_VALUES", null);

    const logoutFunction = () => {
        setAccessToken(null);
        window.localStorage.removeItem('AUTH_VALUES');
    }

    const logout = useCallback(logoutFunction, [logoutFunction]);

    useEffect(() => {
        const request = async () => {
            const data = JSON.stringify({
                email: "kingsleyizima@gmail.com"
            });

            const config = {
                method: "post",
                url: "https://risepath-dev.onrender.com/auth/token",
                headers: {
                    "Content-Type": "application/json"
                },
                data
            };

            await axios(config).then(res => {
                setAccessToken(res.data.accessToken);
                setRefreshToken(res.data.refreshToken);
            }).catch(err => {
                console.log('Error fetching token', err);
            });
            console.log('DONNNNEEEE');
        };
        console.log(accessToken);
        if (!accessToken) request();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessToken, refreshToken]);

    const contextData = useMemo(() => ({
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken,
        currentPage,
        setCurrentPage,
        user,
        setUser,
        logout
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [accessToken, currentPage, user, logout, refreshToken]);

    return (
        <GeneralContext.Provider value={contextData}>
            {children}
        </GeneralContext.Provider>
    )
}

export default GeneralProvider;