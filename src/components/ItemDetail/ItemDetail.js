import {useState} from "react";
import "./ItemDetail.css";
import {Link} from "react-router-dom";

// componentes
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({data}) => {
  const [carrito, setCarrito] = useState(0); // estado para condicionar, cuando el componente hijo "ItemCount" emita el evento onClick

  // envento que se pasa luego por props al compoenente hijo "ItemCount" y que actualiza el carrito
  const onAdd = (e) => {
    setCarrito(e.target.value);
  };

  return (
    <div className="detail">
      <div className="detalle__body">
        <div className="detalle__body--right">
          <img src={data.picture} alt="imagen del producto"></img>
        </div>
        <div className="detalle__body--left">
          <h2>{data.title}</h2>
          <p>
            Precio:{" "}
            <span>
              {data.price} {data.moneda}
            </span>
          </p>
          <p>
            Stock:{" "}
            <span>{carrito === 0 ? data.stock : data.stock - carrito}</span>
          </p>
          {carrito === 0 ? (
            <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
          ) : (
            <>
              <div className="detalle__body--buttom">
                <h3>{`Añadido al carrito la cantidad de: ${carrito}`}</h3>
                <Link to="/Carrito" className="comprar">
                  Finalizar compra
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
