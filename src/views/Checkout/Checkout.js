import React, {useContext, useState} from "react";
import "./Checkout.css";
import {CartContext} from "../../Contexts/CartContext";

// componentes a usar
import Order from "../../components/Order/Order";
import Title from "../../components/Title/Title";
import {MessageBasic} from "../../components/Message/Message";

const Checkout = () => {
  // creo estado para render condicional con el id de la orden
  const [idOrder, setIdOrder] = useState("");

  // creo expresión funcional que se pasa como props a componente hijo <Order /> que seteará el valor de idOrder
  const handleIdOrder = (value) => setIdOrder(value);

  // uso el contexto del carrito para render condicional
  const {productsCart} = useContext(CartContext);

  return (
    <main>
      {idOrder ? (
        <MessageBasic text={idOrder} />
      ) : productsCart.length >= 1 ? (
        <>
          <Title title="Check-Out" />
          <div className="main__checkout">
            <Order hadleIdOrder={handleIdOrder} />
          </div>
        </>
      ) : (
        <MessageBasic text="El carrito esta vacío" />
      )}
    </main>
  );
};

export default Checkout;
