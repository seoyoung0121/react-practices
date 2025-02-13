import React from 'react';
import Tab from './Tab.js';
import styled from 'styled-components';
import {Tab_Item} from './assets/scss/Tab.scss'

const StyledUl=styled.ul`
    height: 24px;
`;

function Tabs({ data, selectTab }) {
    return (
        <StyledUl>
            {data.map((tab, index) => <Tab key={index} no={tab.no} name={tab.name} active={tab.active} selectTab={selectTab} />)}
        </StyledUl>
    );
}

export default Tabs;