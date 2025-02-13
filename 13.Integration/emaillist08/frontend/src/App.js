import React, {useState} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';

import data from './assets/json/data.js';

function App() {
    const [emails, setEmails] = useState(data);
    const searchEmail=function(keyword){
        const kewordLowerCase=keyword.toLowerCase();
        setEmails(!kewordLowerCase? data: data.filter(({firstName, lastName, email})=>{
            return firstName.toLowerCase().indexOf(kewordLowerCase)!==-1 || 
            lastName.toLowerCase().indexOf(kewordLowerCase)!==-1 || 
            email.toLowerCase().indexOf(kewordLowerCase)!==-1 ;
        }));
    }
    return (
        <div id={'App'}>
            <RegisterForm />
            <SearchBar searchEmail={searchEmail}/>
            <Emaillist emails={emails} />
        </div>
    );
}

export default App;