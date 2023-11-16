/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const MenuContext = createContext({});


const SideBarContext = ({ children }) => {
    const [activeTab, setActiveTab] = useState("");
    const [mode, setMode] = useState("light");
    const [toggleNav, setToggleNav] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [advicetab, setAdviceTab] = useState([]);


    return (
        <MenuContext.Provider
            value={{
                isLoading,
                setIsLoading,
                advicetab,
                setAdviceTab,
                activeTab,
                setActiveTab,
                mode,
                setMode,
                toggleNav,
                setToggleNav,
            }}
        >
            {children}
        </MenuContext.Provider>
    );

};

SideBarContext.propTypes = {
    children: PropTypes.element,
};

// export const useMenuContext = () => useContext(MenuContext);
export const MenuContextProvider = () => useContext(MenuContext);

export default SideBarContext
