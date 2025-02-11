import React from 'react';
import TabView from './TabView.js';
import Tabs from './Tabs.js';
import data from './assets/json/data.js';
import styled from 'styled-components';

const StyledDiv=styled.div`
    width: fit-content;
	margin: 100px auto;
`;

function TabBox(props) {
    return (
        <StyledDiv>
            <Tabs data={data} />
            <TabView/>
        </StyledDiv>
    );
}

export default TabBox;