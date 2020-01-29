import React from 'react'; 
import {storeProducts, detailProduct} from './Data';

const ProductContext = React.createContext();

class ProductProvider extends React.Component {

  state = {
      products: [],
      detailProduct: detailProduct,
      cart: [],
      modalOpen: false,
      modalProduct: detailProduct,
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0
  }; 

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() =>{
      return {detailProduct: product}
    })
  };

  addToCart = id => {
    // console.log('Hello from add To Cart');
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() =>{
      return { products: tempProducts,cart:[...this.state.cart,product] };
    }, () =>{
      this.addTotals();
    });
  };

  openModal = id =>{
    const product = this.getItem(id);
    this.setState(() =>{
      return {modalProduct:product, modalOpen: true}
    })
  }

 closeModal = () =>{
    this.setState(() =>{
      return { modalOpen: false}
    })
  }


increament = (id) =>{
  let tempCart = [...this.state.cart];
  const seelectedProduct =  tempCart.find(item => item.id === id);
  const index = tempCart.indexOf(seelectedProduct);
  const product = tempCart[index];

  product.count = product.count + 1;
  product.total = product.count * product.price;

  this.setState(
    ()=>{
      return{ cart: [...tempCart] };
    },
    ()=>{
      this.addTotals();
    }
    );

};

decreament = (id) =>{
  let tempCart = [...this.state.cart];
  const seelectedProduct =  tempCart.find(item => item.id === id);
  const index = tempCart.indexOf(seelectedProduct);
  const product = tempCart[index];

  product.count = product.count - 1;

if(product.count == 0){
  this.removeItem(id);
}else{
  product.total = product.count * product.price;

this.setState(
  ()=>{
    return{ cart: [...tempCart] };
  },
  ()=>{
    this.addTotals();
  }
  );
}
};

removeItem = id =>{
  let tempProducts = [...this.state.products];
  let tempCart = [...this.state.cart];

tempCart = tempCart.filter(item => item.id !== id);

  const index = tempProducts.indexOf(this.getItem(id));
  let removeProduct = tempProducts[index];
  removeProduct.inCart = false;
  removeProduct.count = 0;
  removeProduct.total = 0;
  this.setState(()=>{
    return{
      cart: [...tempCart],
      products: [tempProducts]
    }
  },() =>{
    this.addTotals();
  })
};

clearCart = () =>{
  this.setState(() =>{
    return {
      cart: []
    };
  },() =>{ 
    this.setProduct();
    this.addTotals();
  })
};


addTotals = () =>{
  let subTotal = 0;
  this.state.cart.map(item =>(subTotal += item.total))
  const tempTax = subTotal * 0.1;
  const tax = parseFloat(tempTax.toFixed(2));
  const total = subTotal + tax;
  this.setState(() =>{
    return{
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total
    };
  })
}
  
  componentDidMount(){
    this.setProduct();
  }

  setProduct = () =>{
    let tempProducts = [];
    storeProducts.forEach(item =>{
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() =>{
      return {products: tempProducts};
    });
  }

  getItem = (id) =>{
    const product = this.state.products.find(item => item.id === id);
    return product;
  }

    render() {
        return(
            <ProductContext.Provider value={{
              ...this.state,
              handleDetail: this.handleDetail,
              addToCart: this.addToCart,
              openModal: this.openModal,
              closeModal: this.closeModal,
              increament: this.increament,
              decreament: this.decreament,
              removeItem: this.removeItem,
              clearCart: this.clearCart
            }}>

                {this.props.children}
            </ProductContext.Provider>
        )
    }

}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

