import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1 className='logo'>UKAD</h1>
            <Link className='link' to='/home'>Home</Link>
            <Link className='link' to='/products'>Sports</Link>
        </div>
    );
};

export default Navbar;