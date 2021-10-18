import React from "react";
import "./Item.css";

// se importa link de react router DOM
import { Link } from "react-router-dom";

const Item = ({id, price, title, pictureUrl, current}) => {
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
        <Link to={`/detalle/${id}`}>Ver Detalle</Link>
      </div>
    </article>
  );
};

export default Item;