import React, {useContext} from "react";
import {CartContext} from "../../Contexts/CartContext";
import "./CartWidget.css";

// componentes
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {animateScroll as scroll} from "react-scroll";

const onClickUp = () => {
  scroll.scrollToTop();
};

const CartWidget = () => {
  const {tQuantity} = useContext(CartContext);
  return (
    <div className="cart">
      <Link to="/carrito" onClick={onClickUp} className="cart__url">
        <FontAwesomeIcon icon="shopping-cart" />
        {tQuantity > 0 && (
          <>
            <div className="quantity">{tQuantity}</div>
          </>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;
