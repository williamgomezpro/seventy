import React from "react";

// componentes
import ItemList from "../../ItemList/ItemList";

// prop "title" destructurada
const ItemListContainer = () => {
  return (
    <main>
      <ItemList title="Todos los Zapatos" />
    </main>
  );
};

export default ItemListContainer;
