import React from 'react';
import Banner01 from './Banner01';
import Banner02 from './Banner02';
import './assets/css/App.css';

function App() {
    return (
        <div id={'App'}>
            <h1 className={'Header'}> CSS Module II</h1>
            <Banner01 />
            <Banner02 />
        </div>
    ); //모듈화 지원을 안하면 컴포넌트별로 있는 Header가 구분이 안되어서 이상한거로 덮임 
}

export default App;