import React from 'react';
import styles from '../../styles/BotStatus.module.css';

function BotStatus() {
    return (
        <div>
            <div className={`${styles.BotStatus} bg-[#1d1726] px-4 py-8 mt-8 mb-6 rounded-lg`}>
                <h1 className="font-montserrat font-bold text-2xl mb-8">Bot status</h1>
                <div className="statusboxes grid grid-cols-12 space-y-1">
                    <div className="runeprice col-span-12 py-2 pl-4 bg-black flex items-center rounded-md">
                        <span className="mr-4">RUNE price : </span>
                        <span className="text-offReddish font-semibold text-lg">${14.2}</span>
                    </div>
                    <div className="runeprice col-span-12 py-2 pl-4 bg-black flex items-center rounded-md">
                        <span className="mr-4"># of RUNE : </span>
                        <span className="text-offReddish font-semibold text-lg">{1247}</span>
                    </div>
                    <div className="runeprice col-span-12 py-2 pl-4 bg-black flex items-center rounded-md">
                        <span className="mr-4">Profit : </span>
                        <span className="text-offReddish font-semibold text-lg">${25983.0}</span>
                    </div>
                </div>
            </div>
            <div className="quickaction bg-[#2d2336] shadow-lg rounded-lg w-full -mt-8 p-4">
                <h2 className="text-center font-montserrat font-bold text-2xl">Quick Actions</h2>
                <h6 className="text-center font-montserrat text-sm mt-4 mb-8">
                    Sell 25% of position
                </h6>
                <div className="text-center">
                    <button type="button" className="dashboard-primary-btn ">
                        More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BotStatus;
