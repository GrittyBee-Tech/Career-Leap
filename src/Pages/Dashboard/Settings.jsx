import { useState, useRef } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { MenuContextProvider } from "/src/ContextApi/SideBarContext"


const Settings = () => {
    const [settingsTab, setSettingsTab] = useState("change password");
    const { mode, setMode } = MenuContextProvider();
    const [passwordType, setPasswordType] = useState("password");
    const passwordView = useRef(null);

    //Toggles the password view from hidden to seen for the user
    const togglePasswordView = () => {
        if (passwordView.current.type === "password") {
            setPasswordType("text");
        } else {
            setPasswordType("password");
        }
    };

    const switchMode = () => {
        if (mode === "light") {
            setMode("dark");
        } else {
            setMode("light");
        }
    };

    return (
        <section>
            <div className="bg-white md:p-[2rem] p-[1rem] rounded-lg mb-[5rem] md:mb-[16rem]">
                <h1 className="text-xl font-semibold mb-5">Settings</h1>
                <div className="flex gap-[2rem] mb-[1.5rem]">
                    <h2
                        onClick={() => setSettingsTab("change password")}
                        className={`text-lg font-semibold cursor-pointer pb-1 ${settingsTab === "change password"
                                ? "border-b-2 border-b-[#33F]"
                                : ""
                            }`}
                    >
                        Change Password
                    </h2>
                    <h2
                        onClick={() => setSettingsTab("change mode")}
                        className={`text-lg font-semibold cursor-pointer pb-1 ${settingsTab === "change mode" ? "border-b-2 border-b-[#33F]" : ""
                            }`}
                    >
                        Other Settings
                    </h2>
                </div>
                <div>
                    {settingsTab === "change password" ? (
                        <div>
                            <form action="">
                                <div className="flex flex-col gap-3 md:gap-7 mb-3 md:mb-6">
                                    <div className="md:w-[60%]">
                                        <label
                                            htmlFor="currentPassword"
                                            className="text-lg lg:text-xl font-medium text-[#000000d5] inline-block mb-2"
                                        >
                                            Current Password:
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={passwordType}
                                                id="currentPassword"
                                                ref={passwordView}
                                                className="border border-[#00000093] w-full h-[3.13rem] rounded-lg pl-3 pr-[3rem] outline-none focus:border-2"
                                                required
                                            />
                                            <div
                                                className="absolute right-3 top-[0.62rem]"
                                                onClick={togglePasswordView}
                                            >
                                                {passwordType === "password" ? (
                                                    <AiFillEye className="text-3xl" />
                                                ) : (
                                                    <AiFillEyeInvisible className="text-3xl" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:w-[60%]">
                                        <label
                                            htmlFor="newPassword"
                                            className="text-lg lg:text-xl font-medium text-[#000000d5] inline-block mb-2"
                                        >
                                            New Password:
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={passwordType}
                                                id="newPassword"
                                                ref={passwordView}
                                                className="border border-[#00000093] w-full h-[3.13rem] rounded-lg pl-3 pr-[3rem] outline-none focus:border-2"
                                                required
                                            />
                                            <div
                                                className="absolute right-3 top-[0.62rem]"
                                                onClick={togglePasswordView}
                                            >
                                                {passwordType === "password" ? (
                                                    <AiFillEye className="text-3xl" />
                                                ) : (
                                                    <AiFillEyeInvisible className="text-3xl" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:w-[60%]">
                                        <label
                                            htmlFor="confirmPassword"
                                            className="text-lg lg:text-xl font-medium text-[#000000d5] inline-block mb-2"
                                        >
                                            Confirm Password:
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={passwordType}
                                                ref={passwordView}
                                                className="border border-[#00000093] w-full h-[3.13rem] rounded-lg pl-3 pr-[3rem] outline-none focus:border-2"
                                                required
                                            />
                                            <div
                                                className="absolute right-3 top-[0.62rem]"
                                                onClick={togglePasswordView}
                                            >
                                                {passwordType === "password" ? (
                                                    <AiFillEye className="text-3xl" />
                                                ) : (
                                                    <AiFillEyeInvisible className="text-3xl" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="font-semibold text-lg border border-black rounded-lg shadow-md px-5 py-[0.6rem] inline-block mr-[2.5rem]">
                                            Cancel
                                        </button>
                                        <button className="font-semibold text-lg rounded-lg shadow-md px-7 py-[0.7rem] inline-block bg-[#33F] text-white">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div>
                            <div className="flex items-center gap-5 mb-[1.7rem]">
                                <p className="text-lg font-semibold">Dark Mode</p>
                                <button
                                    onClick={switchMode}
                                    className={`flex w-[4rem] h-[30px] outline-none rounded-full transition-all duration-500 ${mode === "light" ? "bg-[#33F]" : "bg-gray-500"
                                        }`}
                                >
                                    <span
                                        className={`h-[30px] w-[2rem] bg-white shadow-lg rounded-full transition-all duration-500 ${mode === "light" ? "ml-auto" : "ml-0"
                                            }`}
                                    ></span>
                                </button>{" "}
                                <p className="text-lg font-semibold">Light Mode</p>
                            </div>
                            <div>
                                <button className="font-semibold text-lg border border-black rounded-lg shadow-md px-4 py-[0.4rem] inline-block mr-[3.5rem]">
                                    Cancel
                                </button>
                                <button className="font-semibold text-lg rounded-lg shadow-md px-5 py-[0.5rem] bg-[#33F] text-white">
                                    Save
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Settings
