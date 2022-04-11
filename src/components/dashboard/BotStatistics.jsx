import React from 'react';
import styles from '../../styles/BotStatistics.module.css';
import LineChart from './Chart/LineChart';

function BotStatistics() {
    return (
        <div>
            <div className={`${styles.BotStatistics} bg-reddishDark px-4 py-8 mt-32`}>
                <LineChart />
            </div>
        </div>
    );
}

export default BotStatistics;
