import {useState, useContext} from "react";
import "./ItemDetail.css";
import {Link} from "react-router-dom";

// iconos de font awesome a usar y botones
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SeguirComprando from "../Botones/SeguirComprando";

// componente con el contador de unidades
import ItemCount from "../ItemCount/ItemCount";

// se importa el contexto del carrito de compras
import {CartContext} from "../../Contexts/CartContext";

const ItemDetail = ({data}) => {
  // estado para condicionar, cuando el componente hijo "ItemCount" emita el evento onClick
  const [quantity, setQuantity] = useState(0);

  // uso del contexto del carrito de compras
  const {addToCart, isInCart, totalQuantity, totalToPay} = useContext(CartContext);

  // envento que se pasa por props al compoenente hijo "ItemCount"
  const onAdd = (e) => {
    // creo un objeto con el detalle del producto
    const productObject = {
      id: data.id,
      name: data.title,
      price: data.price,
      quantity: e.target.value,
      img: data.img
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
            Precio:{" "}
            <span>
              ${new Intl.NumberFormat().format(data.price)}
            </span>
          </p>
          <p>
            Stock:{" "}
            <span>{data.stock}</span>
          </p>
          <p>
            Categoría:{" "}
            <span>{data.category}</span>
          </p>
          {quantity === 0 && isInCart(data.id) === false ? (
            <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
          ) : (
            <>
              <div className="detalle__body--buttom">
                <h3>
                  {quantity > 0 && isInCart(data.id) === true ? (
                    <span className="detalle__body--add">
                      Producto añadido exitosamente al carrito
                    </span>
                  ) : (
                    <span className="detalle__body--notadd">
                      Este producto ya esta añadido al carrito
                    </span>
                  )}
                </h3>
                <Link to="/carrito" className="detail__buton">
                  <FontAwesomeIcon icon="shopping-cart" /> Finalizar compra
                </Link>
                <SeguirComprando
                  ancho={300}
                  largo={40}
                  radius={12}
                  backgroud="DarkSlateBlue"
                  fontSize="1.1em"
                  color="white"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
