import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/Home">Home</a>
                <a href="/Order">Order</a>
                <a href="/Review">Review</a>
                <a href="/Manage">Manage</a>
                <a href="/Inventory">Inventory</a>
            </div>
        </nav>
    );
};

export default Header;