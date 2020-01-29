import React from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from './Data';
import {ProductConsumer} from './Context';

export default class Productlist extends React.Component {
    render() {
        return( 
            <React.Fragment>
                   <Title name="Our" title="Products" />
                   <div className="product-list">
                      <div className="container">
                        <div className="flexible">
                   <ProductConsumer>
                       {value =>{
                           return value.products.map(product =>{
                               return <Product key={storeProducts.id} product={product} />;
                           })
                       }}
                   </ProductConsumer>
                   </div>
                   </div>
                   </div>
            </React.Fragment>
        )
    }

}
