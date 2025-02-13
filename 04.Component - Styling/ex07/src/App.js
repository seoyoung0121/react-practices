import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const DivApp = styled.div`
    text-align: center;
    color: #111;
`;

const App = function() {
    return (
        <DivApp>
            <Header />
        </DivApp>
    );
}

export default App;