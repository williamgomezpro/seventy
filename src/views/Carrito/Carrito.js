import {useContext, useState, useEffect} from "react";
import {CartContext} from "../../Contexts/CartContext";
import {Link} from "react-router-dom";
import "./Carrito.css";

// iconos de font awesomw a usar
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Carrito = () => {
  // uso del contexto CartContext
  const {productsCart, clearCart, removeProduct, addQuantity} = useContext(CartContext);

  // estados para luego condicionar las funciones de editar las unidades del producto
  const [unidades, setUnidades] = useState(0);
  const [errorCantidad, setErrorCantidad] = useState(false);
  const [update, setUpdate] = useState(false);
  const [index, setIndex] = useState();
  const [total, setTotal] = useState(0);

  // Hook que invoca la función cada vez que se actualiza el render
  useEffect(() => {
    totalAPagar();
    totalUnidades();
  });

  // función para calcular el total a pagar
  const totalAPagar = () => {
    const precioCantidad = productsCart.map((item) => item.price * item.quantity);
    // se actualiza el estado con la sumatoria de todos los productos
    setTotal(precioCantidad.reduce((acum, item) => acum + item, 0));
  };

  // función para contabilizar el total de unidades
  const totalUnidades = () => {
    const tUnidades = productsCart.reduce((acum, {quantity}) => {
      const cantidad = parseInt(quantity);
      return acum + cantidad;
    }, 0);
    setUnidades(tUnidades);
  };
  
  const editQuantity = (indice, idProducto, e) => {
    // obtengo el objeto con el input del campo de cantidad
    const cantidad = document.querySelector(`input[id='${indice}']`);

    // verifico si el usuario introdujo un valor igual o menor que Cero, seteo valores que seran usados como condcional en el renderizado
    if (cantidad.value <= 0) {
      e.target.disabled = true;
      setErrorCantidad(true);
      // seteo de estados
      setTimeout(() => {
        setErrorCantidad(false);
        e.target.disabled = false;
      }, 2000);
    } else {
      // contexto que edita la cantidad en el arreglo de productos
      addQuantity(idProducto, cantidad.value);
      setUpdate(true);
      // seteo de estado
      setTimeout(() => {
        setUpdate(false);
      }, 1000);
    }
  };

  const eliminar = (idProducto) => {
    // contexto que remueve el producto del arreglo
    removeProduct(idProducto);
    setUpdate(true);
    // seteo de estado
    setTimeout(() => {
      setUpdate(false);
    }, 1000);
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
              <div key={inx} className="row__table">
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
                  <span>${new Intl.NumberFormat().format(product.price)}</span>
                </div>
                <div className="col__table--four">
                  {errorCantidad && index === inx && update === false ? (
                    <span className="error__unidad">Error en Cantidad</span>
                  ) : (
                    <input
                      className="input__edit"
                      id={inx}
                      type="number"
                      defaultValue={product.quantity}
                    />
                  )}
                </div>
                <div className="col__table--five">
                  <div className="acciones">
                    <button
                      className="acciones__edit"
                      onClick={(e) => {
                        editQuantity(inx, product.id, e);
                        setIndex(inx);
                      }}
                    >
                      <FontAwesomeIcon icon="edit" /> Editar
                    </button>
                    <button
                      className="acciones__delet"
                      onClick={() => eliminar(product.id)}
                    >
                      <FontAwesomeIcon icon="trash-alt" /> Eliminar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="footer__table--resumen">
            <span>
              <b>Total de Productos:</b> {unidades}
            </span>
            <span>
              <b>Total a Pagar:</b> ${new Intl.NumberFormat().format(total)}
            </span>
          </div>
          <div className="footer__table--botonera">
            <button
              className="footer__table--boton"
              onClick={() => {
                clearCart();
              }}
            >
              <FontAwesomeIcon icon="trash" /> Vaciar Carrito
            </button>
            <Link to="/">
              <button className="footer__table--boton">
                <FontAwesomeIcon icon="shopping-cart" /> Seguir comprando
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div className="carrito__vacio">
          <h1>El Carrito esta Vacío</h1>
        </div>
      )}
    </>
  );
};

export default Carrito;
