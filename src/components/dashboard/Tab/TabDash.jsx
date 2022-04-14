/* eslint-disable import/no-unresolved */
import React from 'react';
import { Tab, TabList, Tabs } from 'react-tabs';
import TabPanel from 'react-tabs/lib/components/TabPanel';
import 'react-tabs/style/react-tabs.css';
import styles from '../../../styles/TabDash.module.css';
import BotSetting from '../BotSetting';
import BotStatistics from '../BotStatistics';
import BotStatus from '../BotStatus';

function TabDash() {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab className={`${styles.tabbtn}`}>Bot status</Tab>
                    <Tab className={`${styles.tabbtn}`}>Bot Settings</Tab>
                    <Tab className={`${styles.tabbtn}`}>Bot Statistics</Tab>
                </TabList>
                <TabPanel>
                    <BotStatus />
                </TabPanel>
                <TabPanel>
                    <BotSetting />
                </TabPanel>
                <TabPanel>
                    <BotStatistics />
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default TabDash;
