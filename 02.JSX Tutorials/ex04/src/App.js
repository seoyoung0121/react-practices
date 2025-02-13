import React, {useRef, useState} from 'react';
import Header from './Header';
import Contents from './Contents';

function App() {
    const refDiv = useRef(null);
    const [test, setTest] = useState('hello');

    return (
        <div
            id="App"
            ref={refDiv}>
            {'Test01'}
        </div>
    );

    // return (
    //     <div>
    //         <Header/>
    //        <Contents/>
    //     </div>
    // );
    //return React.createElement('div', { id: 'App' }, React.createElement(Header, null), React.createElement(Contents, null));
}

export {App};