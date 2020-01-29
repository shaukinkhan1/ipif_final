import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Productlist from './Productlist';
import Cart from './Cart';
import Detail from './Detail';
import Default from './Default';
import Footer from './Footer';
import Title from './Title';
import Context from './Context';
import Modal from './Modal';

class App extends React.Component { 

  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render(){
    const { loading } = this.state;
    if(loading) {
      return <div>
        <div class="spinner">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
        </div>
      </div>;
    }
    return(
     <React.Fragment>
       <BrowserRouter>
      <Header />
      <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/Productlist" component={Productlist} />
       <Route path="/Cart" component={Cart} />
       <Route path="/Detail" component={Detail} />
       <Route path="*" component={Default} />
      </Switch>
      <Modal />
      <Footer />
      </BrowserRouter>
      </React.Fragment>
  );
}
}

export default App;
