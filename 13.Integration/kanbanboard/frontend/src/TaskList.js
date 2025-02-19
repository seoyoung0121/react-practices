import React, { useEffect, useRef, useState } from 'react';
import {Task_List, Input_Add_Task} from './assets/scss/TaskList.scss';
import Task from './Task';
import axios from 'axios';

function TaskList({ data }) {
    const [tasks, setTasks] = useState([]);
    const refForm = useRef(null);

    const fetchTask = async (no) => {
        
        try {
            const response = await axios.get(`/kanbanboard/task?cardNo=${no}`);
            setTasks(response.data.data);
        } catch (err) {
            console.error(err);
        }
    }

    const addTask = async (e) => {
        if (e.key !== 'Enter') { return; }
        try {
            const task = {
                no: null,
                name: e.target.value,
                done: 'N',
                cardNo: data.no
            }
            const response = await axios.post('/kanbanboard/task', task);
            setTasks([response.data, ...tasks]); 
            refForm.current.value = null;
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchTask(data.no);
    }, [tasks])
    return (
        <div className={Task_List}>
            <ul>
                {tasks.map((e) => <Task task={e} key={e.no} setTasks={setTasks} />)}
            </ul>
            <input ref={refForm} className={Input_Add_Task} type='text' placeholder='태스크 추가'
                onKeyDown={(e)=>addTask(e)}></input>
        </div>
    );
}

export default TaskList;