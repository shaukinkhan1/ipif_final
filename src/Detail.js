import React from 'react';
import {ProductConsumer} from './Context';
import { Link } from 'react-router-dom';

class Detail extends React.Component {
    render() {

        return(
            <ProductConsumer>
                {(value) =>{
                    const {id, company, title, img, price, info, inCart} = value.detailProduct;
                    return (
                        <div className="product-detail">
                        <div className="container">
                            <div className="flexible jc">
                                <div className="single-img">
                                    <img src={img} />
                                </div>
                                <div className="single-cont">
                            <h2>{title}</h2>
                            <div className="flexible jc-start">
                                <h5>Price: ${price}</h5>
                                <h6><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></h6>
                            </div>

                                <strong>About Product:</strong>
                                <p>{info}</p>
                                <Link to="./Productlist">
                                    <button className="backtopro">Back to Product</button>
                                </Link>
                                <button className="addtocart" disabled={inCart ? true : false} onClick={() =>{
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}>
                                    {inCart ? "In Cart" : "Add to Cart"}
                                </button>
                            </div>
                            </div>
                    </div>
                    </div>
                    )
                }}
            </ProductConsumer>
        )
    }

}

export default Detail;