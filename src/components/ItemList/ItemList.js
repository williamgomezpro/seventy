import {useEffect, useState} from "react";
import "./ItemList.css";

// componentes a usar
import Item from "../Item/Item";
import Loader from "../Loader/Loader";

const ItemList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.mercadolibre.com/sites/MLC/search?q=Zapatillas%20asic&condition=new&limit=30")
      .then((response) => response.json())
      .then((response) => setData(response.results))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <Loader padding={50}/>}
      <div className="card__list">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <Item
                id={item.id}
                title={item.title}
                pictureUrl={item.thumbnail}
                price={item.price}
                current={item.currency_id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
