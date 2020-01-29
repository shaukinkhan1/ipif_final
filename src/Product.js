import React from 'react';
import { Link } from 'react-router-dom';
import {ProductConsumer} from './Context';
import {storeProducts} from './Data';

import PropTypes from 'prop-types';

class Product extends React.Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return(

            <div className="product-card">
                <ProductConsumer>
                    {(value) =>(
                        <div>
                         <Link to="./Detail">
                         <img src={img} onClick={() =>{
                             value.handleDetail(id)
                         }} 
                         />
                         </Link>
                         <h2>{title}</h2>
                         <h6><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></h6>
                         <h5>${price}</h5>

                         <div className="flexible jc mybtn">
                         <button className="btn1"
                         disabled={inCart ? true : false} 
                         onClick={() => {
                            value.addToCart(id);
                            value.openModal(id);
                         }}
                         >
                         {inCart ? (
                             <p className="tt" disabled>
                                 {" "}
                                 In Cart
                             </p> ) : ( 
                             <div>
                                 <i className="fa fa-cart-plus" />
                                 Add To Cart
                             </div>
                             )
                             }    
                         
                         </button>
                        <button className="btn2"><i className="fa fa-eye" /> Wishlist</button>
                         </div> 
                         </div>
                    )}
                
                </ProductConsumer>              
           </div>

        )
    }

}

export default Product;
