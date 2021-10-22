import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Navbar.css';
import img from '../../img/UKAD_logo.png';

const Navbar = () => {
    return (
        <div style={{display: 'flex'}}>
            <img className='logo' src={img} alt="logo"/>
            <NavLink className='link' to='/home'>Home</NavLink>
            <NavLink className='link' to='/products'>Sports</NavLink>
        </div>
    );
};

export default Navbar;