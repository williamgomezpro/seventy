import {useState, useContext} from "react";
import "./ItemDetail.css";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// componentes
import ItemCount from "../ItemCount/ItemCount";

// se importa el contexto del carrito de compras
import {CartContext} from "../../Contexts/CartContext";

const ItemDetail = ({data}) => {
  // estado para condicionar, cuando el componente hijo "ItemCount" emita el evento onClick
  const [quantity, setQuantity] = useState(0);

  // uso del contexto del carrito de compras
  const {addToCart, isInCart} = useContext(CartContext);

  // envento que se pasa por props al compoenente hijo "ItemCount"
  const onAdd = (e) => {
    // creo un objeto con el detalle del producto
    const productObject = {
      id: data.id,
      name: data.title,
      price: data.price,
      quantity: e.target.value,
      img: data.picture,
    };
    // se invoca la función del contexto que agrega al carrito
    addToCart(productObject);

    // se actualiza la cantidad seleccionada por el usuario
    setQuantity(e.target.value);
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
            <span>{quantity === 0 ? data.stock : data.stock - quantity}</span>
          </p>
          {quantity === 0 && isInCart(data.id) === false ? (
            <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
          ) : (
            <>
              <div className="detalle__body--buttom">
                <h3>
                  {quantity > 0 && isInCart(data.id) === true
                    ? <span className="detalle__body--add">Producto añadido exitosamente al carrito</span>
                    : <span className="detalle__body--notadd">Este producto ya esta añadido al carrito</span>}
                </h3>
                <Link to="/carrito" className="detail__buton">
                <FontAwesomeIcon icon="shopping-cart" /> Finalizar compra
                </Link>
                <Link to="/" className="detail__buton">
                <FontAwesomeIcon icon="hand-point-right" /> Seguir comprando
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
