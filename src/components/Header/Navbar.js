import React from "react";
import "./NavBar.css";

// se importa link de react router DOM
import { Link } from "react-router-dom";

// se importa el componente del carrito
import CartWidget from "../Widgets/CartWidget";

const NavBar = () => {
  return (
    <header>
      <nav className="navBar">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/catalogo">Catálogo</Link>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;