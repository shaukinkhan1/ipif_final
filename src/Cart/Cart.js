import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../Context';
import CartList from './CartList';
import CartTotal from './CartTotal';

class Cart extends React.Component {
    render() {

        return(

            <ProductConsumer>
                {value =>{
                    const { cart } = value;

                    if(cart.length > 0){
                        return (
                            <React.Fragment>
                                <Title name="Your" title="Cart" />
                                <CartColumns />
                                <CartList value={value}/>
                                <CartTotal value={value} />
                            </React.Fragment>
                        );
                    }
                    else{
                        return <EmptyCart />
                    }
                }}
            </ProductConsumer>

        )
    }

}

export default Cart;