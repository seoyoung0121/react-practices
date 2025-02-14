import React, {useState} from 'react';
import data from './assets/json/data.js';
import update from 'react-addons-update';

function GoodList({goods}){
    const goodsUpdated=goods.concat({
        "no": "p002-001",
        "name": "팬츠스트라이프",
        "price": 2000,
        "amount": 1
      });
    return(
       <ul>
         {goodsUpdated.map((g,i)=><li key={i}>{`${g.name}:${g.amount}:${g.price}`}</li>)}
       </ul>
    )
}

function App() {
    const [order, setOrder]=useState(data);
    return (
        <div id='App'>
            <p>{`배송지: ${order.receive}`}</p>
            <p>{`결제수단: ${order.payment.method}`}</p>
            <p>{'상품'}</p>
            <GoodList goods={order.goods}/>
            <button onClick={()=>{
                setOrder(update(order,{
                    receive:{
                        $set:"dasfasdf"
                    }
                }))
            }}>
                {"배송지 수정"}
            </button>
        </div>
    );
}

export {App};