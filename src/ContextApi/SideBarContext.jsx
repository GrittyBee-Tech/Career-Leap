
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
export const MenuContext = createContext({});


export const SideBarContext = ({ children }) => {
    const [activeTab, setActiveTab] = useState("mentorship");
    const [mode, setMode] = useState("light");
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <MenuContext.Provider
            value={{
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

export const MenuContextProvider = () => useContext(MenuContext);

export default SideBarContext
