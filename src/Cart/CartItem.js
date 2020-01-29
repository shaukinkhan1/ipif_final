import React from 'react';

export default function CartItem({item,value}) {
    const {id, img, title, price, total, count} = item;
    const {increament, decreament,removeItem} = value;
    return (
        <div className="myCart cart-data">
                <div className="container flexible">
                    <p><img src={img} style={{width: "70px",height: "auto"}} /></p>
                    <p><div class="title"><b></b>{title}</div></p>
                    <p><div class="price"><b>$</b>{price}</div></p>
                    <p>
                    <div className="flexible jc quantity">
                        
                        <span className="minus" onClick={() =>decreament(id)}>-</span>
                        <span className="pro-count">{count}</span>
                        <span className="plus" onClick={() =>increament(id)}>+</span>
                        
                    </div>
                    </p>
                        <p onClick={() =>removeItem(id)}><div class="remove"><i className="fa fa-trash" /></div></p>
                        <p><div class="amount"><strong></strong>{count}</div></p>
                </div>
            </div>
    )
} 