import React from 'react';
import TaskList from './TaskList';

function CardDetails({data}) {
    return (
        <div>
            {data.description}
            <TaskList data={data}/>
        </div>
    );
}

export default CardDetails;