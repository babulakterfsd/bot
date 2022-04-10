import React from 'react';
import styles from '../styles/Dashboard.module.css';

function Dashboard() {
    return (
        <div className={`${styles.dashboard} relative h-full `}>
            <h1 className="absolute top-0 left-0">dashboard</h1>
        </div>
    );
}

export default Dashboard;
