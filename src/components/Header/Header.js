import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/logIn">Log In</Link>
                <Link to="/signUp">Sign Up</Link>

            </div>
        </nav>
    );
};

export default Header;