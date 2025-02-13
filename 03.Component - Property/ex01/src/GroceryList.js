import React, { Component } from 'react';
import GroceryListItem from './GroceryListItem';

function GroceryList({groceries}) {
    return(
        <ol class={"grocery-list"}>
            <GroceryListItem name={'bread'} count={10}/>
            <GroceryListItem name={'milk'} count={5}/>
            <GroceryListItem name={'egg'} count={20}/>
        </ol>
    );
}

export default GroceryList;