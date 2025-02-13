import React from 'react';
import './assets/scss/KanbanBoard.scss';
import CardList from './CardList.js';
import datas from './assets/json/data.js';

function KanbanBoard() {
    return (
        <div className={'Kanban_Board'}>
            <CardList title={"To Do"} datas={datas.filter(({status})=>{return status==='ToDo'})}/>
            <CardList title={"Doing"} datas={datas.filter(({status})=>{return status==='Doing'})}/>
            <CardList title={"Done"} datas={datas.filter(({status})=>{return status==='Done'})}/>
        </div>
    );
}

export default KanbanBoard;