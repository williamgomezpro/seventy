import {useState} from "react";
import "./ItemCounter.css";

// iconos de font awesome a usar y botones
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SeguirComprando from "../Botones/SeguirComprando";

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
          <button className="controles__button" onClick={incrementar}>
            +
          </button>
        </div>
        <div className="col__dos">
          <span>{contador}</span>
        </div>
        <div className="col__tres">
          <button className="controles__button" onClick={decrementar}>
            -
          </button>
        </div>
        <div className="col__cuatro">
          <button className="buton" onClick={onAdd} value={contador}>
            <FontAwesomeIcon icon="shopping-cart" /> Añadir al carrito
          </button>
        </div>
        <div className="col__cinco">
          <SeguirComprando
            ancho={160}
            largo={38}
            radius={12}
            backgroud="RebeccaPurple"
            fontSize="0.9em"
            color="white"
          />
        </div>
      </div>
    </>
  );
};
export default ItemCount;
