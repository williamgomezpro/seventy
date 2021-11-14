import React from "react";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../firebase";
import "./CategoryContainer.css";

// componentes
import Loader from "../../Loader/Loader";
import Item from "../../Item/Item";

const CategoryContainer = ({id, title}) => {
  const [dataCategory, setDataCategory] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    const request = async () => {
      try {
        const arrayProducts = [];
        const products = await getDocs(collection(db, "product"));
        products.forEach((element) => {
          arrayProducts.push({...element.data(), id: element.id});
        });
        setDataCategory(arrayProducts);
        setIsLoader(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    request();
  }, [id]);

  const productsCategory = dataCategory.filter(
    (element) => element.category.id === id
  );

  return (
    <div className="main__category">
      {isLoader ? (
        <Loader padding={50} />
      ) : (
        <>
          <h1>{title}</h1>
          <div className="card__list">
            {productsCategory.map((item) => {
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
    </div>
  );
};

export default CategoryContainer;
