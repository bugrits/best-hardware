import { useState, useEffect } from "react";

import ItemsForm from "./ItemsForm";
import ItemsList from "./ItemsList";
import SearchBar from "../../components/SearchBar";
import axios from "axios";

import { API_HOST } from "../../configs/config";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [itemsToDisplay, setItemsToDisplay] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const fetchItems = async () => {
    const apiURL = `http://${API_HOST}/api/items`;
    const res = await axios.get(apiURL);
    const data = res.data;

    return data;
  };

  const getItems = async () => {
    const itemsFromServer = await fetchItems();
    setItems(itemsFromServer);
    setItemsToDisplay(itemsFromServer);
  };

  const filterItems = (chars) => {
    if (chars !== "") {
      setItemsToDisplay(
        items.filter((i) => i.name.toLowerCase().includes(chars.toLowerCase()))
      );
    } else {
      setItemsToDisplay(items);
    }
  };

  return (
    <div className="row">
      <div className="col-4">
        <ItemsForm onSubmit={getItems} />
      </div>
      <div className="col-8">
        <ItemsList items={itemsToDisplay} />
      </div>
    </div>
  );
};

export default Inventory;
