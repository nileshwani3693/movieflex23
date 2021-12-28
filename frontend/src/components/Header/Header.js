import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss'
// import {Nav, NavDropdown} from "react-bootstrap"


const Header = () => {
    return (
        <header className="showcase">
            
            
            <div className="showcase-top">
                <img src="https://i.pinimg.com/736x/fb/9a/50/fb9a501c810476741455ed93b3062668.jpg" alt="logo" />
                {/* <Link to="/signin" classname="btn btn-rounded">
                    Sign In
                </Link> */}

            </div>
            <div className="showcase-content">
                <h1> Unlimited movies and TV shows and more</h1>
                <p> Watch anywhere. Cancel Anytime</p>
                <Link to="/movieflix-show" classname="btn-header btn-xl">
                    Go to Trailer Page
                    <i className="fas fa-chevron-right btn-icon"></i>
                </Link>

                
                <Link to="/views" classname="btn-header btn-xl">
                   Most Views
                    <i className="fas fa-chevron-right btn-icon"></i>
                </Link>
                <Link to="/movieflix" classname="btn-header btn-xl">
                   Go to Movie Page
                    <i className="fas fa-chevron-right btn-icon"></i>
                </Link>

            </div>
            <div>
            {/* <Nav>
                <NavDropdown title="user name">
                    <NavDropdown>Log out</NavDropdown>

                </NavDropdown>
            </Nav> */}
            </div>

        </header>
    );
};

export default Header
