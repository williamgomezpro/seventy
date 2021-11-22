import React, {useState} from "react";
import "./ItemCounter.css";

// componentes
import {
  ButtonIconSm,
  EnlaceButtonIconSm,
  ButtonControl,
} from "../Buttons/Buttons";

const ItemCount = ({stock, initial, onAdd}) => {
  // estados iniciales
  const [contador, setContador] = useState(initial);
  const [manejarStock, setManejarStock] = useState(stock - contador);

  // evento para incrementar el contador
  const incrementar = () => {
    if (manejarStock > 0) {
      setContador(contador + 1);
      setManejarStock(manejarStock - 1);
    }
  };

  // evento para decrementar el contador
  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
      setManejarStock(manejarStock + 1);
    }
  };

  return (
    <>
      <div className="controles">
        <div className="col__uno">
          <ButtonControl icon="caret-up" event={incrementar} type="button" />
        </div>
        <div className="col__dos">
          <span>{contador}</span>
        </div>
        <div className="col__tres">
          <ButtonControl icon="caret-down" event={decrementar} type="button" />
        </div>
        <div className="col__cuatro">
          <ButtonIconSm
            event={onAdd}
            value={contador}
            text="Añadir al carrito"
            type="button"
            icon="shopping-cart"
          />
        </div>
        <div className="col__cinco">
          <EnlaceButtonIconSm
            text="Seguir comprando"
            icon="hand-point-right"
            url="/"
          />
        </div>
      </div>
    </>
  );
};
export default ItemCount;
