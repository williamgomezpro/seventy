import React, {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../firebase";

// componentes a usar
import Loader from "../../Loader/Loader";
import Item from "../../Item/Item";
import Title from "../../Title/Title";

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

  // filtro el arreglo de las categorías por el ID pasado por props
  const productsCategory = dataCategory.filter(
    (element) => element.category.id === id
  );

  return (
    <main>
      {isLoader ? (
        <Loader padding={50} />
      ) : (
        <>
          <Title title={title} />
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
    </main>
  );
};

export default CategoryContainer;
