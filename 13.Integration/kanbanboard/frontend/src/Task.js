import React, { useState } from 'react';
import {_Task, Task_Remove} from './assets/scss/Task.scss';

function Task({task}) {
    const [done, setDone]=useState(task.done)
    return (
        <li className={_Task}>
            <input type='checkbox' checked={done?true:false} onChange={()=>setDone(!done)}/>
                {task.name}
            <a href='#' className={done?Task_Remove:''}></a>
        </li>
    );
}

export default Task;