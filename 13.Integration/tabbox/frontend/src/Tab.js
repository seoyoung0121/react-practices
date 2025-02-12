import React, {useState} from 'react';
import {Tab_Item} from './assets/scss/Tab.scss';

function Tab({ name, active }) {
    const [select, setSelect] = useState(active);
    return (
        <li
            className={`${Tab_Item} ${select ? 'active' : ''}`}
            onClick={() => {
                setSelect(true);
            } }
        >
            {name}
        
        </li>
    );
}
//active?'active':''
export default Tab;