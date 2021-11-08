import {useContext, useState} from "react";
import {CartContext} from "../../Contexts/CartContext";
import "./Carrito.css";

// iconos de font awesome y boton
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SeguirComprando from "../../components/Botones/SeguirComprando";
import Loader from "../../components/Loader/Loader";

const Carrito = () => {
  // uso del contexto CartContext
  const {
    productsCart,
    clearCart,
    removeProduct,
    addQuantity,
    tQuantity,
    totalQuantity,
    toPay,
    totalToPay,
  } = useContext(CartContext);

  // uso de estados
  const [index, setIndex] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [loader, setloader] = useState(false);

  // función para << EDITAR >>
  const editQuantity = (indice, idProducto) => {
    setloader(true);
    setIndex(indice);
    setValueInput("");
    // obtengo el objeto con el input cantidad
    const cantidad = document.querySelector(`input[id='${indice}']`);
    setTimeout(() => {
      addQuantity(idProducto, cantidad.value); // contexto que edita la cantidad en el arreglo
      totalQuantity(); // contexto que calcula el total cantidad
      totalToPay(); // contexto que calcula el total a pagar
      setloader(false);
    }, 1000);
  };

  // función para << ELIMINAR >>
  const eliminar = (indice) => {
    setloader(true);
    setIndex(indice);
    setValueInput(""); // seteo para renderizado condicional del valor del input
    setTimeout(() => {
      removeProduct(indice); // contexto que remueve el producto del arreglo
      totalToPay(); // contexto que calcula el total cantidad
      totalQuantity(); // contexto que calcula el total a pagar
      setloader(false);
    }, 1000);
  };

  // función << ONCHANGE >>
  const onChangeQuantity = (e, indice) => {
    setIndex(indice); // actualiza el estado para render condicional
    setValueInput(e.target.value); // actualiza el estado con el valor del input
  };

  return (
    <>
      {productsCart.length > 0 ? (
        <>
          <div className="header__table">
            <div>Imagen</div>
            <div>Título</div>
            <div>Precio</div>
            <div>Cantidad</div>
            <div>Acciones</div>
          </div>
          {productsCart.map((product, inx) => {
            return (
              <div
                key={inx}
                className={
                  loader && index === inx ? "row__table--empty" : "row__table"
                }
              >
                {loader && index === inx ? (
                  <Loader padding={0} />
                ) : (
                  <>
                    <div className="col__table--one">
                      <img
                        style={{width: 120, height: 70}}
                        src={product.img}
                        alt="imagen del producto"
                      ></img>
                    </div>
                    <div className="col__table--two">
                      <span>{product.name}</span>
                    </div>
                    <div className="col__table--three">
                      <span>
                        ${new Intl.NumberFormat().format(product.price)}
                      </span>
                    </div>
                    <div className="col__table--four">
                      <input
                        className="input__edit"
                        id={inx}
                        type="number"
                        value={
                          valueInput > 0 && index === inx
                            ? valueInput
                            : product.quantity
                        }
                        onChange={(e) => onChangeQuantity(e, inx)}
                      />
                    </div>
                    <div className="col__table--five">
                      <div className="acciones">
                        <button
                          className="acciones__edit"
                          onClick={(e) => editQuantity(inx, product.id)}
                        >
                          <FontAwesomeIcon icon="edit" /> Editar
                        </button>
                        <button
                          className="acciones__delet"
                          onClick={() => eliminar(inx)}
                        >
                          <FontAwesomeIcon icon="trash-alt" /> Eliminar
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}

          <div className="footer__table--resumen">
            {loader ? (
              <Loader padding={20} />
            ) : (
              <>
                <span>
                  <b>Total de Productos:</b> {tQuantity}
                </span>
                <span>
                  <b>Total a Pagar:</b> ${" "}
                  {new Intl.NumberFormat().format(toPay)}
                </span>
              </>
            )}
          </div>

          <div className="footer__table--botonera">
            <button className="footer__table--boton" onClick={clearCart}>
              <FontAwesomeIcon icon="trash" /> Vaciar carrito
            </button>
            <SeguirComprando
              ancho={180}
              largo={35}
              radius={0}
              backgroud="white"
              fontSize="0.9em"
              color="indigo"
            />
          </div>
        </>
      ) : (
        <div className="carrito__vacio">
          <h1>El Carrito esta Vacío</h1>
          <SeguirComprando
            ancho={180}
            largo={35}
            radius={0}
            backgroud="white"
            fontSize="0.9em"
            color="indigo"
          />
        </div>
      )}
    </>
  );
};

export default Carrito;
