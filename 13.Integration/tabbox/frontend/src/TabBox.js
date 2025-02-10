import React from 'react';
import TabView from './TabView.js';
import Tabs from './Tabs.js';
import data from './assets/json/data.js';

function TabBox(props) {
    return (
        <div className={"tab-box"}>
            <Tabs data={data} />
            <TabView/>
        </div>
    );
}

export default TabBox;