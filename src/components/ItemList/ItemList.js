import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase";
import "./ItemList.css";

// componentes a usar
import Item from "../Item/Item";
import Loader from "../Loader/Loader";

const ItemList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const request = async () => {
      try {
        const arrayProducts = [];
        const products = await getDocs(collection(db, "product"));
        products.forEach((item) => {
          arrayProducts.push({...item.data(), id: item.id});
        });
        setData(arrayProducts);
        setIsLoading(false)
      } catch (error) {
        console.log(error.message);
      }
    };
    request();
  }, []);

  return (
    <>
      {isLoading && <Loader padding={50} />}
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
  );
};

export default ItemList;
