import React from 'react';
import Logo from './logo.png';

import { Redirect, Link } from 'react-router-dom';

class Header extends React.Component {
    render(){
        return(
            <header>
                <div className="container flexible jc">
                    <div className="logo-part">
                        <Link to="/"><img src={Logo} /></Link>
                    </div>
                    <div className="searchbar-part">
                        <input type="text" className="header-search" placeholder="Enter Your Location" />
                        <span>Locate Me</span>
                    </div>
                    <div className="menu-part">
                    <ul>
                        <li>
                            <a href="#"><i className="fa fa-cloud-download"></i> Download App</a>
                            <a className="bedge" href="#"><i className="fa fa-heart"></i></a>
                            <a className="bedge" href="#"><i className="fa fa-bell"></i></a>
                            <Link to="/cart"><a className="bedge" href="#"><i className="fa fa-shopping-cart"></i></a></Link>
                            <a href="#"><i className="fa fa-user"></i> Login</a>
                        </li>
                    </ul>
                    </div>
                    <div className="mob-cont">
                        <div className="search-icon">
                            <i className="fa fa-search" />
                        </div>
                        <div className="toggle-icon">
                            <i className="fa fa-bars" />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;