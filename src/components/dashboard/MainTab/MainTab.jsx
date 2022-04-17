import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from '../../../styles/MainTab.module.css';
import TabDash from '../Tab/TabDash';

function MainTab() {
    const [Allbot, setAllbot] = useState([]);
    console.log(Allbot);
    useEffect(() => {
        fetch('https://pipesai.mpact-labs.com/get_all_bots')
            .then((res) => res.json())
            .then((data) => {
                setAllbot(data);
            });
    }, []);

    return (
        <div className="main-container">
            <Tabs className=" px-2 lg:px-0">
                <TabList className="flex flex-col lg:flex-row">
                    {Allbot?.map((bot, index) => (
                        <Tab className={`${styles.tabbtn} col-span-12 lg:col-span-4`}>
                            Bot{index + 1}
                        </Tab>
                    ))}
                    {/* <Tab className={`${styles.tabbtn} col-span-12 lg:col-span-4`}>Bot 2</Tab>
                    <Tab className={`${styles.tabbtn} col-span-12 lg:col-span-4`}>Bot 3</Tab>
                    <Tab className={`${styles.tabbtn} col-span-12 lg:col-span-4`}>Add New Bot</Tab> */}
                </TabList>
                {Allbot?.map(() => (
                    <TabPanel>
                        <TabDash />
                    </TabPanel>
                ))}
                {/* <TabPanel>
                    <TabDash />
                </TabPanel>
                <TabPanel>
                    <TabDash />
                </TabPanel> */}
            </Tabs>
        </div>
    );
}

export default MainTab;
