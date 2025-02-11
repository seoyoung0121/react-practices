import React from 'react';
import { Tab_Item, Active } from './assets/scss/Tab.scss';

function Tab({name, active}) {
    return (
        <li className={`${Tab_Item} ${active?Active:''}`}>{name}</li>
    );
}
//active?'active':''
export default Tab;