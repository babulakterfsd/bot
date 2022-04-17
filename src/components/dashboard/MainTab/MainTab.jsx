import React from 'react';
import { Tab, TabList, Tabs } from 'react-tabs';
import TabPanel from 'react-tabs/lib/components/TabPanel';
import 'react-tabs/style/react-tabs.css';
import styles from '../../../styles/MainTab.module.css';
import TabDash from '../Tab/TabDash';

function MainTab() {
    return (
        <div className="main-container">
            <Tabs className=" px-2 lg:px-0">
                <TabList className="flex flex-col lg:flex-row">
                    <Tab className={`${styles.tabbtn} col-span-12 lg:col-span-4`}>Bot 1</Tab>
                    <Tab className={`${styles.tabbtn} col-span-12 lg:col-span-4`}>Bot 2</Tab>
                    <Tab className={`${styles.tabbtn} col-span-12 lg:col-span-4`}>Bot 3</Tab>
                    <Tab className={`${styles.tabbtn} col-span-12 lg:col-span-4`}>Add New Bot</Tab>
                </TabList>
                <TabPanel>
                    <TabDash />
                </TabPanel>
                <TabPanel>
                    <TabDash />
                    <h2>Bot 2 tab</h2>
                </TabPanel>
                <TabPanel>
                    <TabDash />
                    <h2>Bot 3 tab</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default MainTab;
