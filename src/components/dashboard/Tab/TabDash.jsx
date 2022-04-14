import React from 'react';
import { Tab, TabList, Tabs } from 'react-tabs';
import TabPanel from 'react-tabs/lib/components/TabPanel';
import 'react-tabs/style/react-tabs.css';
import BotSetting from '../BotSetting';
import BotStatistics from '../BotStatistics';
import BotStatus from '../BotStatus';

function TabDash() {
    return (
        <div>
            <Tabs>
                <TabList className="border-0 text-center">
                    <Tab>Bot status</Tab>
                    <Tab>Bot Settings</Tab>
                    <Tab>Bot Statistics</Tab>
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
