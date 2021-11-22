import React, {useContext, useState} from "react";
import {CartContext} from "../../Contexts/CartContext";
import "./Carrito.css";

// componentes a usar
import Loader from "../../components/Loader/Loader";
import Title from "../../components/Title/Title";
import {MessageBasic} from "../../components/Message/Message";
import {
  EnlaceButtonIconSm,
  ButtonIconSm,
  ButtonEdit,
  ButtonDelete,
} from "../../components/Buttons/Buttons";

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
    <main>
      {productsCart.length > 0 ? (
        <>
          <Title title="Carrito" />
          <div className="header__table">
            <div>Imagen</div>
            <div>Título</div>
            <div>Precio</div>
            <div>Stock</div>
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
                        style={{width: 100, height: 70}}
                        src={product.img}
                        alt="imagen del producto"
                      ></img>
                    </div>
                    <div className="col__table--two">
                      <span>{product.name}</span>
                    </div>
                    <div className="col__table--three">
                      <span>
                        $ {new Intl.NumberFormat().format(product.price)}
                      </span>
                    </div>
                    <div className="col__table--four">
                      <span>{product.stock}</span>
                    </div>
                    <div className="col__table--five">
                      <input
                        className="input__edit"
                        id={inx}
                        type="number"
                        value={
                          valueInput > 0 &&
                          valueInput <= product.stock &&
                          index === inx
                            ? valueInput
                            : product.quantity
                        }
                        onChange={(e) => onChangeQuantity(e, inx)}
                      />
                    </div>
                    <div className="col__table--six">
                      <div className="acciones">
                        <ButtonEdit
                          icon="edit"
                          text="Editar"
                          type="button"
                          event={(e) => editQuantity(inx, product.id)}
                        />
                        <ButtonDelete
                          icon="trash-alt"
                          text="Eliminar"
                          type="button"
                          event={() => eliminar(inx)}
                        />
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
                  <b>Total de Productos: </b>
                  {tQuantity}
                </span>
                <span>
                  <b>Total a Pagar: </b>${" "}
                  {new Intl.NumberFormat().format(toPay)}
                </span>
              </>
            )}
          </div>

          <div className="footer__table--botonera">
            <EnlaceButtonIconSm
              url="/checkout"
              text="Check-Out"
              icon="money-bill-alt"
            />
            <ButtonIconSm
              text="Vaciar carrito"
              event={clearCart}
              icon="trash"
              type="button"
            />
            <EnlaceButtonIconSm
              url="/"
              text="Comprar más"
              icon="shopping-cart"
            />
          </div>
        </>
      ) : (
        <>
          <MessageBasic text="El carrito esta vacío" />
          <EnlaceButtonIconSm
            url="/"
            text="Seguir comprando"
            icon="hand-point-right"
          />
        </>
      )}
    </main>
  );
};

export default Carrito;
