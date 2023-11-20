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
    const [user, setUser] = useState({});
    const [accessToken, setAccessToken] = useLocalStore("AUTH_VALUES", null);
    const baseURL = "https://risepath-dev.onrender.com";

    const logoutFunction = () => {
        setAccessToken(null);
        window.localStorage.removeItem('AUTH_VALUES');
    }

    const logout = useCallback(logoutFunction, [logoutFunction]);

    useEffect(() => {
        const request = async () => {
            const data = JSON.stringify({
                email: user.email
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
                setAccessToken(res?.data?.accessToken);
            }).catch(err => {
                console.log('Error fetching token', err.response);
            });
        };
        if (!accessToken) request();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessToken, setAccessToken]);

    const contextData = useMemo(() => ({
        accessToken,
        setAccessToken,
        user,
        setUser,
        logout,
        baseURL
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [accessToken, user, logout, setAccessToken, setUser]);

    return (
        <GeneralContext.Provider value={contextData}>
            {children}
        </GeneralContext.Provider>
    )
}

export const useGeneralStore = () => useContext(GeneralContext);

export default GeneralProvider;