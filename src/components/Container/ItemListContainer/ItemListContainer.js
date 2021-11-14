import React from "react";
import "./ItemListContainer.css";

// componentes
import ItemList from "../../ItemList/ItemList";

// prop "title" destructurada
const ItemListContainer = () => {
  return (
    <div className="main">
      <ItemList />
    </div>
  );
};

export default ItemListContainer;