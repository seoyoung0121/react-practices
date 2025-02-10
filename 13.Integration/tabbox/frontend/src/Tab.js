import React from 'react';

function Tab({name, active}) {
    return (
        <li class={active?'active':''}>{name}</li>
    );
}

export default Tab;