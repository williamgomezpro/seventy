// se importa el Hook que crea el contexto
import {createContext, useState} from "react";

// creación del contexto
export const CartContext = createContext();

// creación del provider
export const CartProvider = ({children}) => {
  // estado con los productos del carrito 
  const [productsCart, setProductsCart] = useState([]);

  // función para VERIFICAR si el producto existe en el carrito
  const isInCart = (idProduct) => productsCart.some((product) => product.id === idProduct);

  // función para AÑADIR al carrito
  const addToCart = (productObject) => !isInCart(productObject.id) && productsCart.push(productObject);

  // función para EDITAR cantidad de un producto
  const addQuantity = (idProduct, quantity) => productsCart.map((b) => b.id === idProduct && quantity > 0 ? (b.quantity = quantity) : null);

  // función para ELIMINAR un producto del carrito
  const removeProduct = (idProduct) => setProductsCart(productsCart.filter((productObject) => productObject.id !== idProduct));

  // función para VACIAR el carrito
  const clearCart = () => {
    setProductsCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        productsCart,
        addToCart,
        clearCart,
        isInCart,
        removeProduct,
        addQuantity,
      }}
    >
      {/*  */}
      {children}
    </CartContext.Provider>
  );
};
