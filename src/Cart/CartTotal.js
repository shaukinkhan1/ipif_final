import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotal({ value }) {

const {cartSubTotal, cartTax, cartTotal, clearCart} = value;

    return (
        <React.Fragment>
            <div className="clear-cart">
            <div className="container">
            <Link to="./Productlist">
                <button onClick={() => clearCart()}>Clear Cart</button>
            </Link>
            <p><b>Subtotal:</b> ${cartSubTotal}</p>
            <p><b>shipping charge:</b> ${cartTax}</p>
            <p><b>Total Amount:</b> ${cartTotal}</p>
            </div>
            </div> 
        </React.Fragment> 
    )
}    