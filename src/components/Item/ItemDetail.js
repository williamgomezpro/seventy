import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({data}) => {
  return (
    <div className="detail">
      <div className="detalle__body">
        <div className="detalle__body--right">
          <img src={data.picture} alt="imagen del producto"></img>
        </div>
        <div className="detalle__body--left">
          <h2>{data.title}</h2>
          <p>
            Precio: <span>{data.price} {data.moneda}</span>
          </p>
          <p>
            Stock: <span>{data.stock}</span>
          </p>
          <div className="detalle__body--buttom">
            <button className="comprar">Comprar</button>
            <button className="add__cart">Añadir al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
