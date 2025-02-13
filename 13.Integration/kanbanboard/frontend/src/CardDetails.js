import React from 'react';
import TaskList from './TaskList';

function CardDetails({data, open}) {
    return (
        <div>
            {data.description}
            {open?<TaskList data={data}/>:null}
        </div>
    );
}

export default CardDetails;