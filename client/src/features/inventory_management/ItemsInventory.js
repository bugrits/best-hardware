// Packages
import { useState, useEffect } from "react";
import axios from "axios";

// Constants
import { API_HOST } from "../../configs/config";

// Common Components
import ItemsForm from "./ItemsForm";
import ItemsList from "./ItemsList";
import SearchBar from "../../components/SearchBar";

const ItemsInventory = () => {
  const [items, setItems] = useState([]);
  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");

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

    if (searchTerm !== "") {
      setItemsToDisplay(
        itemsFromServer.filter(
          (i) =>
            i.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            i.code.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setItemsToDisplay(itemsFromServer);
    }
  };

  const filterItems = (chars) => {
    setSearchTerm(chars);

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
