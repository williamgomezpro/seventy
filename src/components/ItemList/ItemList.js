import {useEffect, useState} from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLC/search?q=Zapatillas%20asic&condition=new&limit=30")
      .then((response) => response.json())
      .then((response) => setData(response.results));
  }, []);

  return (
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
  );
};

export default ItemList;