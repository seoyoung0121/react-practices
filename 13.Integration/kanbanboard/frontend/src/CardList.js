import React from 'react';
import {Card_List} from './assets/scss/CardList.scss';
import Card from './Card';

function CardList({title, datas}) {
    return (
        <div className={Card_List}>
            <h1>{title}</h1>
            {datas.map((e)=><Card data= {e} key={e.no}/>)}
        </div>
    );
}

export default CardList;