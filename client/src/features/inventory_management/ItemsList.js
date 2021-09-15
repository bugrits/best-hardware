// Packages
import { useState } from "react";
import axios from "axios";

// Constants
import { columnNames } from "./copy";
import { API_HOST } from "../../configs/config";

// Common Components
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import DeleteModal from "../../components/DeleteModal";

const ItemsList = (props) => {
  const items = props.items;
  const [itemForEdit, setItemForEdit] = useState([]);
  const [itemForDelete, setItemForDelete] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

  const onClickDelete = async (obj) => {
    const itemFromServer = await fetchItem(obj.id);
    setItemForDelete(itemFromServer);

    setShowDeleteModal(obj.showDeleteModal);
  };

  return (
    <div>
      <Table
        columnNames={columnNames}
        items={items}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />
      <Modal
        show={showEditModal}
        itemForEdit={itemForEdit}
        onClick={setShowEditModal}
        reloadItems={props.reloadItems}
      />
      <DeleteModal
        show={showDeleteModal}
        itemForDelete={itemForDelete}
        onClick={setShowDeleteModal}
        reloadItems={props.reloadItems}
      />
    </div>
  );
};

export default ItemsList;
