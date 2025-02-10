import React from 'react';
import Tab from './Tab.js';

function Tabs({data}) {
    return (
        <ul>
            {data.map((tab, index) => <Tab key={index} name={tab.name} active={tab.active} />)}
        </ul>
    );
}

export default Tabs;