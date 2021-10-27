import {useState} from "react";
import "./ItemCounter.css";

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
          <button className="controles__button" onClick={incrementar}>+</button>
        </div>
        <div className="col__dos">
          <span>{contador}</span>
        </div>
        <div className="col__tres">
          <button className="controles__button" onClick={decrementar}>-</button>
        </div>
        <div className="col__cuatro">
          <button className="add__cart" onClick={onAdd} value={contador}>Añadir al carrito</button>
        </div>
      </div>
    </>
  );
};
export default ItemCount;
