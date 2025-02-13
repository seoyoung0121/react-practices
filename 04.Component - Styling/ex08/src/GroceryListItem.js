import React from 'react';
import { Grocery_Item } from './assets/scss/GroceryItem.scss';

function GroceryListItem(props) { 
    return (
        <li className={Grocery_Item}>
            <strong>{props.name}</strong>
            <span>{props.count}</span>
        </li>
    );
}

export default GroceryListItem;