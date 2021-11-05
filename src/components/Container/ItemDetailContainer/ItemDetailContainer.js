import React from "react";
import {useEffect, useState} from "react";
import "./ItemDetailContainer.css";

// componente loader
import Loader from "../../Loader/Loader";

// componente que contiene el detalle del producto
import ItemDetail from "../../ItemDetail/ItemDetail";

const ItemDetailContainer = ({title, idItem}) => {
  const [dataDetail, setDataDetail] = useState({}); // estado para almacenar la info enviada por la API
  const [isLoading, setIsLoading] = useState(false); // estado para mostrar o no el loader

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.mercadolibre.com/items/${idItem}`)
      .then((response) => response.json())
      .then((response) =>
        // actualiza la data, con un objeto que tiene las propiedades a pintar
        setDataDetail({
          id: response.id,
          picture: response.pictures[0].url,
          title: response.title,
          price: response.price,
          stock: response.initial_quantity,
          moneda: response.currency_id,
        })
      ) // luego de la promesa se actualiza el estado del loader
      .then(() => setIsLoading(false))
      .catch((error) =>
        console.log(`Hubo un problema con la petición: ${error.message}`)
      );
  }, [idItem]);

  return (
    <div className="main__detail">
      <h1>{title}</h1>
      {isLoading ? <Loader /> : <ItemDetail data={dataDetail} />}
    </div>
  );
};

export default ItemDetailContainer;
