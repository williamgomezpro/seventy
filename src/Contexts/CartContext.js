// se importa el Hook que crea el contexto
import {createContext, useState} from "react";

// creación del contexto
export const CartContext = createContext();

// creación del provider
export const CartProvider = ({children}) => {
  // estado con los productos del carrito 
  const [productsCart, setProductsCart] = useState([]);
  const [tQuantity, setTQuantity] = useState(0);
  const [toPay, setToPay] = useState(0);

  // función que calcula el total de cantidad
  const totalQuantity = () => {    
    // se hace un reduce del contexto productsCart, el cual acumula la cantidad de cada producto
    const acumQuantity = productsCart.reduce((acum, {quantity}) => {
      const parseQuantity = parseInt(quantity);
      return acum + parseQuantity;
    }, 0);
    // actualiza el estado con el valor obenido del reduce
    setTQuantity(acumQuantity);
  };

  // función que calcular el total a pagar
  const totalToPay = () => {
    // uso el map que me genera un nuevo arreglo con la multiplicación del precio y la cantidad
    const priceQuantity = productsCart.map((item) => item.price * item.quantity);    
    // actualiza el estado con la suma total, haciendo un reduce del arreglo obtenido con el map
    setToPay(priceQuantity.reduce((acum, item) => acum + item, 0));
  };
   
  // función para VERIFICAR si el producto existe en el carrito
  const isInCart = (idProduct) => productsCart.some((product) => product.id === idProduct);

  // función para AÑADIR al carrito
  const addToCart = (productObject) => !isInCart(productObject.id) && productsCart.push(productObject);

  // función para EDITAR cantidad 
  const addQuantity = (idProduct, quantity) => productsCart.map((b) => b.id === idProduct && quantity > 0 ? (b.quantity = quantity) : null);

  // función para ELIMINAR un producto
  const removeProduct = (indice) => {
    const items = productsCart;
    items.splice(indice, 1);
    setProductsCart(items);
  };

  // función para VACIAR el carrito
  const clearCart = () => {
    setProductsCart([]);
    setTQuantity(0);
  }

  return (
    <CartContext.Provider
      value={{
        productsCart,
        addToCart,
        clearCart,
        isInCart,
        removeProduct,
        addQuantity,
        tQuantity,
        totalQuantity,
        toPay,
        totalToPay,
      }}
    >
      {/*  */}
      {children}
    </CartContext.Provider>
  );
};
