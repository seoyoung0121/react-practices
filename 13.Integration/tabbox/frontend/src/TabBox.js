import React, { useState } from 'react';
import TabView from './TabView.js';
import Tabs from './Tabs.js';
import data from './assets/json/data.js';
import styled from 'styled-components';

const StyledDiv=styled.div`
    width: fit-content;
	margin: 100px auto;
`;

function TabBox(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const selectTab=(no)=>{
        setActiveIndex(data.findIndex((e)=>e.no===no));
    }
    return (
        <StyledDiv>
            <Tabs data={data.map((e,i)=>{
                const {contents, ...rest}= e;
                rest.active=(i===activeIndex);
                return rest;
            })} selectTab={selectTab} />
            <TabView contents={data[activeIndex].contents}/>
        </StyledDiv>
    );
}

export default TabBox; 