import React from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

// envio la prop "title" destructurada
const ItemListContainer = ({title}) => {
  return (
    <div className="main">
      <h1>{title}</h1>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;