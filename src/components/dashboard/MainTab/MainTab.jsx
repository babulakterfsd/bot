/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from '../../../styles/MainTab.module.css';
import TabDash from '../Tab/TabDash';


function MainTab() {
    const [Allbot, setAllbot] = useState([]);

    useEffect(() => {
        fetch('/data.json')
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
                        <Tab key={index} className={`${styles.tabbtn} col-span-12 lg:col-span-4 `}>
                            Bot{index + 1}
                        </Tab>
                    ))}
                </TabList>
                <hr  className='opacity-40 mb-12'/>

                {Allbot?.map((panel,index) => (
                        <TabPanel key={index}>
                            <TabDash />
                        </TabPanel>
                ))}
            </Tabs>
        </div>
    );
}

export default MainTab;
