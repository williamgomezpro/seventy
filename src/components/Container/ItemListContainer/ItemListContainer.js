import React from "react";
import "./ItemListContainer.css";

// componentes
import ItemList from "../../ItemList/ItemList";

// prop "title" destructurada
const ItemListContainer = ({title}) => {
  return (
    <div className="main">
      <h1>{title}</h1>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;