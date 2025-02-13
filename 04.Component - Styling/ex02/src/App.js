import React from 'react';
import './assets/css/App.css';
//import styles from './assets/css/App.css';
//module을 true로 하면 해시값을 매핑해줘야 되어서 이렇게 받은 다음 styles. Header 해야함
// import {Header} from './assets/css/App.css'; 이렇게도 가능 

function App() {
    return (
        <div id={'App'}>
            <h1 className={'Header'}>Normal CSS</h1>
        </div>
    );
}

export default App;