import React from "react";
import {useEffect, useState} from "react";
import {doc, getDoc} from "firebase/firestore";
import { db } from "../../../firebase";
import "./ItemDetailContainer.css";

// componente loader
import Loader from "../../Loader/Loader";

// componente que contiene el detalle del producto
import ItemDetail from "../../ItemDetail/ItemDetail";

const ItemDetailContainer = ({idItem}) => {
  const [dataDetail, setDataDetail] = useState({}); // estado para almacenar la info enviada por la API
  const [isLoading, setIsLoading] = useState(false); // estado para mostrar o no el loader

  useEffect(() => {
    setIsLoading(true);
    const request = async () => {
      try {
        const sqlProduct = doc(db, 'product', idItem);
        const detail = await getDoc(sqlProduct);
        const sqlCategory = doc(db, 'category', detail.data().category.id);
        const category = await getDoc(sqlCategory);
        setDataDetail({
          id: idItem,
          img: detail.data().img,
          title: detail.data().title,
          price: detail.data().price,
          stock: detail.data().stock,
          category: category.data().name
        });
        setIsLoading(false)
      } catch (error) {
        console.log(error.message);
      }
    };
    request();
  }, [idItem]);

  return (
    <div className="main__detail">
      {isLoading ? <Loader padding={50}/> : <ItemDetail data={dataDetail} />}
    </div>
  );
};

export default ItemDetailContainer;
