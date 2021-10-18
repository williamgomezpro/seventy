import React from "react";
import {useEffect, useState} from "react";
import "./ItemDetailContainer.css";

// se importa el componente que contiene el detalle del producto
import ItemDetail from "../Item/ItemDetail";

const ItemDetailContainer = ({title, idItem}) => {
  const [dataDetail, setDataDetail] = useState({});

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${idItem}`)
      .then((response) => response.json())
      .then((response) =>
        // seteo un objeto con las propiedades del detalle que quiero
        setDataDetail({
          picture: response.pictures[0].url,
          title: response.title,
          price: response.price,
          stock: response.initial_quantity,
          moneda: response.currency_id
        })
      )
      .catch((error) => console.log(`Hubo un problema con la petición Fetch: ${error.message}`));
  }, [idItem]);

  return (
    <div className="main__detail">
      <h1>{title}</h1>
      <ItemDetail data={dataDetail} />
    </div>
  );
};

export default ItemDetailContainer;