import React, {useState} from 'react';
import {Tab_Item} from './assets/scss/Tab.scss';

function Tab({ no, name, active, selectTab }) {
    return (
        <li
            className={`${Tab_Item} ${active ? 'active' : ''}`}
            onClick={() => {
                selectTab(no);
            } }
        >
            {name}
        
        </li>
    );
}
export default Tab;