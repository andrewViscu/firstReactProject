import React from 'react';
import './../App.css';

class Header extends React.Component {
    render(){
        return (
            <header id="page-header">
                <nav className="main-nav">
                    <ul>
                        <li className="header-li">Home</li>
                        <li className="header-li">About Us</li>
                        <li className="header-li">Contacts</li>
                    </ul>
                </nav>
                <a href="/signin" className="btn">Sign In</a>
            </header>
        )
    }   
}

export default Header