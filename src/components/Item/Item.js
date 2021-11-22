import React from "react";
import "./Item.css";

// componentes
import {EnlaceButtonLg} from "../Buttons/Buttons";

const Item = ({id, price, title, img}) => {
  return (
    <article className="card">
      <div className="card__header">
        <img src={img} alt="imagen del producto"></img>
      </div>
      <div className="card__body">
        <p className="cad__body--title">{title}</p>
        <p className="card__body--price">
          <b>Precio: </b>${new Intl.NumberFormat().format(price)}
        </p>
      </div>
      <div className="card__footer">
        <EnlaceButtonLg url={`/detalle/${id}`} text="Ver detalle" />
      </div>
    </article>
  );
};

export default Item;
