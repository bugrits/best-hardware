// Packages
import { useState } from "react";
import axios from "axios";

// Constants
import { columnNames } from "./copy";
import { API_HOST } from "../../configs/config";

// Common Components
import Table from "../../components/Table";
import Modal from "../../components/Modal";

const ItemsList = (props) => {
  const items = props.items;
  const [itemForEdit, setItemForEdit] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);

  const fetchItem = async (itemId) => {
    const apiURL = `${API_HOST}/api/items/${itemId}`;
    const res = await axios.get(apiURL);
    const data = res.data;
    return data;
  };

  const onClickEdit = async (obj) => {
    const itemFromServer = await fetchItem(obj.id);
    setItemForEdit(itemFromServer);

    setShowEditModal(obj.showEditModal);
  };

  return (
    <div>
      <Table columnNames={columnNames} items={items} onClick={onClickEdit} />
      <Modal
        show={showEditModal}
        itemForEdit={itemForEdit}
        onClick={setShowEditModal}
        reloadItems={props.reloadItems}
      />
    </div>
  );
};

export default ItemsList;
