import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyCart(){


        return(
            <div className="empty-cart">
                <h2>YOUR CART IS CURRENTLY EMPTY.</h2>
                <Link to="/Productlist">
                    <p><button>Return To Shop</button></p>
                </Link>
            </div>
        )

}

