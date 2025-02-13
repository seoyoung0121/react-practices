import React from 'react';
import GroceryList from './GroceryList';
import { title } from './assets/scss/App.scss';

function App(props) {
    const groceries = [{name:'milk', count:10},{name:'egg', count:20},{name:'bread', count:5}];

    return (
        <div id={'App'}>
            <h1 className={'title'}>{'Grocery List'}</h1>
            <GroceryList groceries={groceries} />
        </div>
    );
}

export default App;