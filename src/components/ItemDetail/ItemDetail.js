import React, {useState, useContext} from "react";
import "./ItemDetail.css";

// componentes
import {EnlaceButtonLg, EnlaceButtonLgDifferent} from "../Buttons/Buttons";
import {MessageSuccesful, MessageError} from "../Message/Message";
import ItemCount from "../ItemCount/ItemCount";

// se importa el contexto carrito de compras
import {CartContext} from "../../Contexts/CartContext";

const ItemDetail = ({data}) => {
  // estado para condicionar, cuando el componente hijo "ItemCount" emita el evento onClick
  const [quantity, setQuantity] = useState(0);

  // uso del contexto del carrito de compras
  const {addToCart, isInCart, totalQuantity, totalToPay} =
    useContext(CartContext);

  // envento que se pasa por props al compoenente hijo "ItemCount"
  const onAdd = (e) => {
    // creo un objeto con el detalle del producto
    const productObject = {
      id: data.id,
      name: data.title,
      price: data.price,
      stock: data.stock,
      quantity: e.target.value,
      img: data.img,
    };
    // se invoca la función del contexto que agrega al carrito
    addToCart(productObject);
    // se actualiza el conteo de cantidades usando el contexto
    totalQuantity();
    // se actualiza el total a pagar usando el contexto
    totalToPay();
    // se actualiza la cantidad seleccionada por el usuario
    setQuantity(e.target.value);
  };

  return (
    <div className="detail">
      <div className="detalle__body">
        <div className="detalle__body--right">
          <img src={data.img} alt="imagen del producto"></img>
        </div>
        <div className="detalle__body--left">
          <h2>{data.title}</h2>
          <p>
            Precio: <span>${new Intl.NumberFormat().format(data.price)}</span>
          </p>
          <p>
            Stock: <span>{data.stock}</span>
          </p>
          <p>
            Categoría: <span>{data.category}</span>
          </p>
          {quantity === 0 && isInCart(data.id) === false ? (
            <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
          ) : (
            <>
              {quantity > 0 && isInCart(data.id) === true ? (
                <MessageSuccesful text="Zapato añadido exitosamente al carrito" />
              ) : (
                <MessageError text="Este zapato ya esta añadido al carrito" />
              )}
              <div className="detalle__footer">
                <EnlaceButtonLg url="/carrito" text="Finalizar compra" />
                <EnlaceButtonLgDifferent url="/" text="Seguir comprando" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
