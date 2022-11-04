import React from 'react';
import { NavBarItems } from './navBarItems';
import Logo from '../../Images/logo.png';
import './navBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const navBarItems = NavBarItems.map(({ url, name }, index) => {
        return (
            <li key={index}>
                <NavLink exact to={url} activeClassName='active'>{name}</NavLink>
            </li>
        )
    })


    return (
        <nav>
            <img className='logo' src={Logo} alt='Logo'></img>
            <ul className='navBarItems'>{navBarItems}</ul>
        </nav>
    );
};

export default NavBar;