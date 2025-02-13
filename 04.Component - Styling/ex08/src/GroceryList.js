import React, { Component } from 'react';
import GroceryListItem from './GroceryListItem';
import styled from 'styled-components';

const StyledOL=styled.ol`
    padding-left : 50px;
`;

function GroceryList({ groceries }) {
    // const groceryItems = []

    // groceries.forEach((grocery) => {
    //     groceryItems.push(<GroceryListItem name={grocery.name} count={grocery.count} />);
    // });

    return(
        <StyledOL>
            {groceries.map((grocery, index) => <GroceryListItem key={index} name={grocery.name} count={grocery.count}/>)}
        </StyledOL>
    );
}

export default GroceryList;