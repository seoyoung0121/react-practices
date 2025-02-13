import React, { Component } from 'react';
import GroceryListItem from './GroceryListItem';

function GroceryList({ groceries }) {
    // const groceryItems = []

    // groceries.forEach((grocery) => {
    //     groceryItems.push(<GroceryListItem name={grocery.name} count={grocery.count} />);
    // });

    return(
        <ol class={"grocery-list"}>
            {groceries.map((grocery, index) => <GroceryListItem key={index} name={grocery.name} count={grocery.count}/>)}
        </ol>
    );
}

export default GroceryList;