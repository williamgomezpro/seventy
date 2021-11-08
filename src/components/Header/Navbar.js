import React from "react";
import "./NavBar.css";

// se importa link de react router DOM
import {Link} from "react-router-dom";

// se importa el componente del carrito
import CartWidget from "../Widgets/CartWidget";

const NavBar = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Senventy</Link>
      </div>
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
      <div className="cart">
        <Link to="/carrito" className="cart__url">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
