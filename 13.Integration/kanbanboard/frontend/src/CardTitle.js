import React, { useState } from 'react';
import {Card_Title, Card_Title_Open} from './assets/scss/Card.scss';

function CardTitle({title, open , setOpen}) {
    return (
        <div className={`${open? Card_Title_Open:''} ${Card_Title}`} onClick={()=>setOpen(!open)}>
            {title}
        </div>
    );
}

export default CardTitle;