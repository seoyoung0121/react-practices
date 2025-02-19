import React, { useEffect, useState } from 'react';
import './assets/scss/KanbanBoard.scss';
import CardList from './CardList.js';
import axios from 'axios';


function KanbanBoard() {
    const [cards, setCards] = useState([]);

    const fetchCards = async () => {
        try {
            const response = await axios.get('/kanbanboard/card');
            setCards(response.data.data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchCards();
    }, [])
    return (
        <div className={'Kanban_Board'}>
            <CardList title={"To Do"} datas={cards.filter(({status})=>{return status==='ToDo'})}/>
            <CardList title={"Doing"} datas={cards.filter(({status})=>{return status==='Doing'})}/>
            <CardList title={"Done"} datas={cards.filter(({status})=>{return status==='Done'})}/>
        </div>
    );
}

export default KanbanBoard;