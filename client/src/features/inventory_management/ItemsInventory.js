import { useState, useEffect } from "react";

import ItemsForm from "./ItemsForm";
import ItemsList from "./ItemsList";
import SearchBar from "../../components/SearchBar";
import axios from "axios";

import { API_HOST } from "../../configs/config";

const ItemsInventory = () => {
  const [items, setItems] = useState([]);
  const [itemsToDisplay, setItemsToDisplay] = useState([]);

  useEffect(() => {
    loadItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchItems = async () => {
    const apiURL = `${API_HOST}/api/items`;
    const res = await axios.get(apiURL);
    const data = res.data;

    return data;
  };

  const loadItems = async () => {
    const itemsFromServer = await fetchItems();
    setItems(itemsFromServer);
    setItemsToDisplay(itemsFromServer);
  };

  const filterItems = (chars) => {
    if (chars !== "") {
      setItemsToDisplay(
        items.filter(
          (i) =>
            i.name.toLowerCase().includes(chars.toLowerCase()) ||
            i.code.toLowerCase().includes(chars.toLowerCase())
        )
      );
    } else {
      setItemsToDisplay(items);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <SearchBar placeholder="Search Item" onChange={filterItems} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <ItemsForm onSubmit={loadItems} />
        </div>
        <div className="col-md-9">
          <ItemsList items={itemsToDisplay} reloadItems={loadItems} />
        </div>
      </div>
    </div>
  );
};

// export const { loadItems } = loadItems();

export default ItemsInventory;
