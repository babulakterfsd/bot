/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import Dropdown from '../../shared/sharedcomponents/Dropdown';
import styles from '../../styles/BotSetting.module.css';

function BotSetting() {
    const [toggle, setToggle] = useState(true);
    const toggleClass = 'transform translate-x-full';

    return (
        <div className={`${styles.BotSetting} bg-reddishDark py-9 px-2 lg:p-9 -mt-16 rounded-lg`}>
            <h1 className="font-montserrat font-bold text-2xl mb-6">Settings</h1>
            <hr className="opacity-10" />
            <div className="botswitcher my-9 flex">
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
                    <div className="bg-[#1b1423] w-full py-3 rounded-md text-sm col-span-9 lg:pl-10 text-center lg:text-left">
                        <Dropdown />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BotSetting;
