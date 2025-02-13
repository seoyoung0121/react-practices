import React, {useState} from 'react';
import {_Card} from './assets/scss/Card.scss';
import CardTitle from './CardTitle';
import CardDetails from './CardDetails';

function Card({data}) {
    const [open, setOpen]=useState(false);

    return (
        <div className={_Card}>
            <CardTitle title={data.title} open={open} setOpen={setOpen}/>
            {open?<CardDetails  data={data}/>:null}
        </div>
    );
}

export default Card;