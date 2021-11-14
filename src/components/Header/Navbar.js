import React, {useEffect, useState} from "react";
import {db} from "../../firebase";
import {collection, getDocs} from "firebase/firestore";
import "./NavBar.css";

// se importa link de react router DOM
import {Link} from "react-router-dom";

// se importa el componente del carrito
import CartWidget from "../Widgets/CartWidget";

const NavBar = () => {
  const [dataNav, setDataNav] = useState([]);

  useEffect(() => {
    const request = async () => {
      try {
        const arrayCategory = [];
        const category = await getDocs(collection(db, "category"));
        category.forEach((item) => {
          arrayCategory.push({...item.data(), id: item.id});
        });
        setDataNav(arrayCategory);
      } catch (error) {
        console.log(error.message);
      }
    };
    request();
  }, []);
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
            <Link to="/">Catálogo</Link>
            <ul>
              {dataNav.map((item, inx) => {
                return (
                  <div key={inx}>
                    <Link to={`/catalogo/${item.id}`}>
                      <li>{item.name}</li>
                    </Link>
                  </div>
                );
              })}
            </ul>
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
