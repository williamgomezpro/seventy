import { useState} from "react";
import './ItemCounter.css';

const ItemCount = ({stock, initial}) => {
    const [contador, setContador] = useState(parseInt(initial));
    const [manejarStock, setManejarStock] = useState(parseInt(stock) - contador);
    const [carrito, setCarrito] = useState('');

    console.log(`stock Inicial: ${parseInt(stock)}`)
    console.log(`stock Actual: ${manejarStock}`)
    console.log(`cantidad: ${contador}`)

    const incrementar = () => {
        if (manejarStock > 0) {
            setContador(contador + 1); 
            setManejarStock(manejarStock - 1);
        }
    }
    
    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
            setManejarStock(manejarStock + 1);
        }
    }

    const onAdd = () => {
        setCarrito(`Añadido al carrito: ${contador}`);
    }

    return (
        <div>
            <h2>{contador}</h2>
            <div className='controles'>
                <button onClick={incrementar}>+</button>
                <button onClick={decrementar}>-</button>
            </div>
            <div>
                <h3>{carrito}</h3>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    );
}
export default ItemCount;