import React from 'react';
import styles from '../../styles/BotStatus.module.css';

function BotStatus() {
    return (
        <div className={`${styles.BotStatus} bg-reddishWhite px-4 py-8 -mt-16`}>
            <div>
                <p>this is bot status</p>
            </div>
        </div>
    );
}

export default BotStatus;
