import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
} from "react";
import useLocalStore from "../../hooks/useLocalStore";
import axios from "axios";

export const GeneralContext = createContext({});

export const GeneralProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState('');
    const [user, setUser] = useState({});
    const [refreshToken, setRefreshToken] = useLocalStore("AUTH_VALUES", null);
    const baseURL = "https://risepath-dev.onrender.com";

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
                url: `${baseURL}/auth/token`,
                headers: {
                    "Content-Type": "application/json"
                },
                data
            };

            await axios(config).then(res => {
                // if (res.status == 200) {
                setAccessToken(res?.data?.accessToken);
                setRefreshToken(res?.data?.refreshToken);
                // }
            }).catch(err => {
                console.log('Error fetching token', err);
            });
        };
        if (!accessToken) request();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessToken, refreshToken, setRefreshToken]);

    const contextData = useMemo(() => ({
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken,
        user,
        setUser,
        logout,
        baseURL
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [accessToken, user, logout, refreshToken, setRefreshToken]);

    return (
        <GeneralContext.Provider value={contextData}>
            {children}
        </GeneralContext.Provider>
    )
}

export const useGeneralStore = () => useContext(GeneralContext);

export default GeneralProvider;