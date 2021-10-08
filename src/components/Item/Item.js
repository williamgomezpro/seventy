import React from "react";
import "./Item.css";

const Item = ({price, title, pictureUrl, current}) => {
  return (
    <article className="card">
      <div className="card__header">
        <img src={pictureUrl} alt="imagen del producto"></img>
      </div>
      <div className="card__body">
        <p className="cad__body--title">{title}</p>
        <p className="card__body--price"><b>Precio: </b>{price} {current}</p>
      </div>
      <div className="card__footer">
        <button>Comprar</button>
      </div>
    </article>
  );
};

export default Item;