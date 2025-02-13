import React from 'react';

function GroceryListItem(props) {
    return (
        <li>
            <strong>{props.name}</strong>
            <span>{props.count}</span>
        </li>
    );
}

export default GroceryListItem;