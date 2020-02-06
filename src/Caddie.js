import React, { Component, useEffect } from 'react'

export default function Caddie(props) {

    useEffect(() => {
        document.body.classList = "";
        document.body.classList.add("mainBg");
      });

    var total = 0;
    
    return (
        <div class="text-light caddie">
            <h1>Your Cart</h1>
            <table class="table text-center">
            <thead>
                <tr>
                <th scope="col">Number</th>
                <th scope="col">Book's Title</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Total Price</th>
                </tr>
            </thead>

            <tbody>

            {props.itemsCaddie.map(item=>{
                if(item.nb>0){
                    total += item.price*item.nb
                    return(
                        <tr>
                            <th scope="row"><i class="far fa-minus-square" onClick={()=>props.decrease(item.title,item.id)}></i> {item.nb} <i class="far fa-plus-square" onClick={()=>props.increase(item.id)}></i></th>
                            <td>{item.title} ({item.author})</td>
                            <td>{item.price}</td>
                            <td>{item.price*item.nb}</td>
                        </tr>

                    )

                    }
                })}
                <tr>
                    <th scope="row">Total</th>
                    <td colspan="3" class="bg-info"><strong>{total}$00</strong></td>
                    
                </tr>
            </tbody>    
            </table>
        </div>
    )
}

