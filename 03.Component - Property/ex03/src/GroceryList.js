import React, { Component } from 'react';
import GroceryListItem from './GroceryListItem';

class GroceryList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ol className={"grocery-list"}>
                {this.props.groceries.map((grocery, index) => <GroceryListItem key={index} name={grocery.name} count={grocery.count} />)}
            </ol>
        );
    }
}

export default GroceryList;