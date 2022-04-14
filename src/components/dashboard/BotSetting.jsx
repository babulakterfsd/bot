/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import styles from '../../styles/BotSetting.module.css';

function BotSetting() {
    const [toggle, setToggle] = useState(true);
    const [leverage, setLeverage] = useState(5);
    const toggleClass = 'transform translate-x-full';
    return (
        <div className={`${styles.BotSetting} bg-reddishDark py-9 mt-32 px-2 lg:p-9 rounded-lg`}>
            {/* heading and divider */}
            <h1 className="font-montserrat font-bold text-2xl mb-6">Settings</h1>
            <hr className="opacity-10" />
            {/* bot switcher */}
            <div className="botswitcher my-12 flex items-center">
                <div className="text-md font-semibold">Turn your bot on or off</div>
                <div
                    className=" main-switcher md:w-14 md:h-7 w-12 h-6 flex items-center bg-[#53353c] rounded-full px-1 cursor-pointer ml-5 mr-9"
                    onClick={() => {
                        setToggle(!toggle);
                    }}
                >
                    <div
                        className={`bg-orange md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out${
                            toggle ? null : toggleClass
                        }`}
                    />
                </div>
                <div>
                    {toggle ? (
                        <div className="text-orange">Your bot is Offline</div>
                    ) : (
                        <div className="text-green-400 font-semibold">Your bot is Online</div>
                    )}
                </div>
            </div>
            {/* API Boxes */}
            <div className="apiboxes flex flex-col">
                <div className="apikey flex flex-col lg:flex-row items-center">
                    <div className="apikeytext lg:w-[30%] mb-1 lg:mb-0">API Key : </div>
                    <div className="bg-[#1b1423] w-full py-3  rounded-md text-sm col-span-9 lg:pl-10 text-center lg:text-left">
                        fajsadjk25asdhasd158asd
                    </div>
                </div>
                <div className="apisecret flex flex-col lg:flex-row  items-center my-10 lg:my-3">
                    <div className="apikeytext lg:w-[30%] mb-1 lg:mb-0">API Secret : </div>
                    <div className="bg-[#1b1423] w-full py-3 rounded-md text-sm col-span-9 lg:pl-10 text-center lg:text-left">
                        fajsadjk25asdhasd158asd
                    </div>
                </div>
                <div className="subaccount-dropdown flex flex-col lg:flex-row  items-center">
                    <div className="apikeytext lg:w-[30%] lg:mb-0" />
                    <div className="dr bg-[#1b1423] w-full py-1 rounded-md text-sm col-span-9 lg:pl-10 text-center lg:text-left">
                        {/* <Dropdown name="Subaccount name" /> */}
                        <select
                            className={`${styles.drop} bg-[#1b1423] w-full  rounded-md text-sm col-span-9 lg:pl-10 text-center lg:text-left border-0 focus:outline-none focus:ring-0 focus: focus:ring-violet-300`}
                        >
                            <option>Select Subaccount</option>
                            <option>Test Account 1</option>
                            <option>Test Account 2</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* leaverage */}
            <div className="leverage my-12 flex items-center  flex-col lg:flex-row shadow-lg bg-[#1b1423] py-4 rounded-lg">
                <div className="text-md font-semibold mx-auto ">Choose Your leverage</div>
                <div className="range mx-4 my-5 lg:my-0 flex items-center">
                    <input
                        type="range"
                        value={leverage}
                        step={1}
                        min={1}
                        max={10}
                        onChange={(e) => setLeverage(e.target.value)}
                        className="rounded-lg accent-[#ff5754] cursor-pointer"
                    />
                    <span className="mx-3 px-2 py-0.5 bg-[#53353c] opacity-80">{leverage}</span>
                </div>
                <div className="mx-auto lg:ml-auto">
                    <button type="button" className="dashboard-primary-btn-sm ml-2">
                        Confirm
                    </button>
                </div>
            </div>
            {/* Choose coin */}
            <div className="coin my-12 ">
                <div className="apikey flex flex-col lg:flex-row items-center">
                    <div className="apikeytext lg:w-[30%] mb-1 lg:mb-0">Choose coin : </div>
                    <div className="bg-[#1b1423] w-full lg:w-64 rounded-md text-sm col-span-9 lg:pl-10 text-center lg:text-left">
                        {/* <Dropdown name="Coin" /> */}
                        <select
                            className={`${styles.drop} bg-[#1b1423] w-full py-3 lg:w-64 rounded-md text-sm col-span-9 lg:pl-10 text-center lg:text-left border-0 focus:outline-none focus:ring-0 focus: focus:ring-violet-300`}
                        >
                            <option>Coin</option>
                            <option>Test Account 1</option>
                            <option>Test Account 2</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BotSetting;
