import React, { useState } from 'react';
import { _Task, Task_Remove } from './assets/scss/Task.scss';
import axios from 'axios';

function Task({task, setTasks}) {
    const [done, setDone] = useState(task.done)
    
    const updateTask = async () => {
        try {
            const response = await axios.put(`/kanbanboard/task/${task.no}?done=${done=='Y'?'N':'Y'}`);
            setDone(response.data.data.done);
        } catch (err) {
            console.error(err);
        }
    }

    const deleteTask = async () => {
        try {
            const response = await axios.delete(`/kanbanboard/task/${task.no}`);
            if (response.data.data == task.no) {
                setTasks((tasks) => tasks.filter((e) => e.id != task.no));
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <li className={_Task}>
            <input type='checkbox' checked={done == 'Y' ? true : false} onChange={() => updateTask()}/>
            {" "+task.name+" "}
            <a href='#' className={Task_Remove}
                onClick={()=>{deleteTask()}}></a>
        </li>
    );
}

export default Task;