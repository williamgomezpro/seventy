import React, {useContext} from "react";
import "./OrderSummary.css";
import {CartContext} from "../../Contexts/CartContext";

const OrderSummary = () => {
  // uso del contexto carrito
  const {productsCart, toPay, tQuantity} = useContext(CartContext);

  return (
    <>
      <section className="order__summary">
        <div className="summary__header">
          <div className="summary-col-one summary__header--col">Foto</div>
          <div className="summary-col-two summary__header--col">Nombre</div>
          <div className="summary-col-three summary__header--col">Precio</div>
          <div className="summary-col-for summary__header--col">Cantidad</div>
        </div>

        {productsCart.map((element, inx) => {
          return (
            <div key={inx} className="summary__body">
              <div className="summary-col-one">
                <img
                  style={{width: 100, height: 70}}
                  src={element.img}
                  alt="imagen del producto"
                ></img>
              </div>
              <div className="summary-col-two">{element.name}</div>
              <div className="summary-col-three">
                $ {new Intl.NumberFormat().format(element.price)}
              </div>
              <div className="summary-col-four">{element.quantity}</div>
            </div>
          );
        })}
        <div className="summary__total">
          <p>
            <b>Total de productos: </b>
            {tQuantity}
          </p>
          <p>
            <b>Total a pagar: </b>$ {new Intl.NumberFormat().format(toPay)}
          </p>
        </div>
      </section>
    </>
  );
};

export default OrderSummary;
