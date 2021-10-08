import React from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

// envio la prop greeting "Saludo" destructurada
const ItemListContainer = ({greeting}) => {
  return (
    <div className="main">
      <h1>{greeting}</h1>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;