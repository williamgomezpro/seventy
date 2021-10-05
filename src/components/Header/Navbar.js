import React from 'react'
import './NavBar.css';
import CartWidget from '../Widgets/CartWidget';

const NavBar = () => {
     return (
        <header>
            <nav className="navBar">
                <ul>
                    <li><a href=".">Inicio</a></li>
                    <li><a href=".">Catálogo</a></li>
                </ul>
            </nav> 
            <CartWidget />
        </header>
     );
 };
 
export default NavBar;