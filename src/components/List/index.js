import React, { useState, useEffect } from "react";
import Item from "../Item";
import axios from "axios";

function List(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getItems = await axios.get(
      "https://api.mercadolibre.com/sites/MLA/search?q=auriculares"
    );

    setItems(getItems.data.results);
  }

  return (
    <>
      La cantidad de items es: {items.length}
      {items
        .filter((item) => {
          return item.title
            .toLowerCase()
            .includes(props.searchParam.toLowerCase());
        })
        .map((item, key) => {
          return (
            <Item
              title={item.title}
              img={item.thumbnail}
              key={item.id ? item.id : key}
            />
          );
        })}
      {/* {items.map((item, key) => {
        return (
          <Item
            title={item.title}
            img={item.thumbnail}
            key={item.id ? item.id : key}
          />
        );
      })} */}
    </>
  );
}

export default List;
