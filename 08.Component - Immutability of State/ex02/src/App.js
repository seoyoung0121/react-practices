import React, {useState, useEffect} from 'react';
import update from 'react-addons-update';
import data from './assets/json/data.js';

function App() {
    const [order, setOrder]=useState(data);
    const [payment, setPayment]=useState(order.payment);
    const [goods, setGoods]=useState(order.goods);

    useEffect(()=>{
        console.log('Order Update');
    },[order]);

    useEffect(()=>{
        console.log('payment Update');
    },[payment]);

    useEffect(()=>{
        console.log('goods Update');
    },[goods]);
    
    return (
        <div id='App'>
            <button onClick={()=>{
                //violation
                // order.receive='';
                // setOrder(order)

                // sol.
                // const orderUpdated=Object.assign({}, order, {receive: 'adf'});
                // //one depth만 복사 
                // setOrder(orderUpdated);

                //sol.recommended: 프로퍼티
                const orderUpdated=update(order, {receive: {$set: 'adfads'}});
                setOrder(orderUpdated);

            }}>
                {"배송지 수정"}
            </button>
            <br/><br/>

            <button onClick={()=>{
                // //violation
                // const orderUpdated=Object.assign({}, order);
                // //얕은 copy, order.payment.method='Mobile'랑 같음
                // orderUpdated.payment.method='Mobile';
                // setPayment(orderUpdated.payment);

                // //sol. 
                // const orderUpdated=Object.assign({}, order);
                // orderUpdated.payment=Object.assign({}, order.payment, {method: 'payment'});
                // setPayment(orderUpdated.payment)

                //sol.recommended: nest R객체 프로퍼티 수정정
                const orderUpdated=update(order, {
                    payment:{
                        method:{
                            $set:"mobile"
                        }
                    }
                })
                setPayment(orderUpdated.payment)
            }}>
                {"결제수단 변경"}
            </button>
            <br/><br/>

            <button onClick={()=>{
                //violation
                // goods.push({"no": "p002-001", "name": "블루양말", "price": 2000, "amount": 1})
                // setGoods(goods);

                //sol1.
                // const goodsUpdated=goods.concat({"no": "p002-001", "name": "블루양말", "price": 2000, "amount": 1});
                // setGoods(goodsUpdated);

                //sol2.
                // setGoods([{"no": "p002-001", "name": "블루양말", "price": 2000, "amount": 1}, ...goods]);
                
                //중간에 넣을때
                //[goods.slice(0,1), {}, goods.slice(1)]

                // sol.recommended: 배열 요소 추가
                const goodsUpdated=update(goods, {
                    $unshift: [{"no": "p002-001", "name": "블루양말", "price": 2000, "amount": 1}]

                    //PUSH는 뒤에 넣음!
                });
                setGoods(goodsUpdated);
            }}>
                {"상품 추가"}
            </button>
            <br/><br/>

            <button onClick={()=>{
                //violation
                // goods[2].name='블루면티';
                // setGoods(goods);

                //sol.
                // const goodsUpdated=[...goods.slice(0, 2), Object.assign({}, goods[2], {name:'블루면티'}), ...goods.slice(3)];
                // setGoods(goodsUpdated);

                //sol.recommended: 배열 요소 수정정
                const goodsUpdated=update(goods, {
                    2:{
                        name: {
                            $set:'블루 면티'
                        }
                    }
                })
                setGoods(goodsUpdated);
            }}>
                {"3rd 상품이름 변경"}
            </button>
            <br/><br/>

            <hr/>

            <p>{`배송지: ${order.receive}`}</p>
            <p>{`결제수단: ${payment.method}`}</p>
            <p>{'상품'}</p>
            <ul>
                {goods.map((g, i)=><li key={i}>{`${g.name}:${g.price}:${g.amount}`}</li>)}
            </ul>
        </div>
    );
}

export {App};