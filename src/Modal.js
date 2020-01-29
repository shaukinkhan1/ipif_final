import React from 'react';
import { Link } from 'react-router-dom';
import {ProductConsumer} from './Context';
import styled from 'styled-components'

class Modal extends React.Component {

    render(){
        return(
            <ProductConsumer>
                {(value) =>{
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return(
                            <ModalContainer>
                                <div id="modal" className="myModal wow slideInRight" data-wow-duration="1s" data-wow-delay=".1s">
                                    <div className="flexible">
                                        <div className="imgg">
                                            <img src={img} />
                                        </div>
                                        <div className="namee">
                                            <h3>{title}</h3>
                                            <p><b>Price: </b>${price}</p>
                                            <Link to="./Productlist">
                                    <button className="continue-shop" onClick={() => closeModal()}>
                                        Store
                                    </button>
                                    </Link>
                                    <Link to="./Cart">
                                    <button className="view-cart" onClick={() => closeModal()}>
                                        View Cart
                                    </button>
                                    </Link>
                                        </div>
                                    </div>
                                   
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }

}    

export default Modal; 

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 12px;
    background: rgba(0,0,0,0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto; 
  #modal{
    background: #fff;
    position: absolute;
    top: 100px;
    right: 0;
    bottom: 0;
    /* margin: auto; */
    width: 88%;
    max-width: 400px;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    padding: 18px;
    border-radius: 6px;
  }    
`;