import React, {useEffect, useState} from "react";
import {db} from "../../firebase";
import {collection, getDocs} from "firebase/firestore";
import "./NavBar.css";

// componentes
import CartWidget from "../Widgets/CartWidget";
import {Link} from "react-router-dom";
import {animateScroll as scroll} from "react-scroll";

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

  const onClickUp = () => {
    scroll.scrollToTop();
  };

  return (
    <header>
      <div className="logo">
        <Link to="/" onClick={onClickUp}>
          Senventy
        </Link>
      </div>
      <nav className="navBar">
        <ul>
          <li>
            <Link to="/" onClick={onClickUp}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/" onClick={onClickUp}>
              Catálogo
            </Link>
            <ul>
              {dataNav.map((item, inx) => {
                return (
                  <div key={inx}>
                    <Link to={`/catalogo/${item.id}`} onClick={onClickUp}>
                      <li>{item.name}</li>
                    </Link>
                  </div>
                );
              })}
              <li className="category__all">
                <Link to="/todos" onClick={onClickUp}>
                  Todos los Zapatos
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
