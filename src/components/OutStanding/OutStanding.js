import React, {useEffect, useState} from "react";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase";

// componentes a usar
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
import Title from "../Title/Title";

const OutStanding = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const request = async () => {
      try {
        const arrayProducts = [];
        const q = query(
          collection(db, "product"),
          where("outstanding", "==", true)
        );
        const products = await getDocs(q);
        products.forEach((item) => {
          arrayProducts.push({...item.data(), id: item.id});
        });
        setData(arrayProducts);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    request();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader padding={50} />
      ) : (
        <>
          <Title title="Destacados" />
          <div className="card__list">
            {data.map((item) => {
              return (
                <div key={item.id}>
                  <Item
                    id={item.id}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default OutStanding;
