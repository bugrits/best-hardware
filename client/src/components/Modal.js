import { useState } from "react";
import axios from "axios";

import Label from "./Label";
import InputBox from "./InputBox";
import TextArea from "./TextArea";

import { API_HOST } from "../configs/config";

const Modal = (props) => {
  const show = props.show;
  const itemForEdit = props.itemForEdit;

  const [name = itemForEdit.name, setName] = useState();
  const [code = itemForEdit.code, setCode] = useState();
  const [retailPrice = itemForEdit.retailPrice, setRetailPrice] = useState();
  const [sellingPrice = itemForEdit.sellingPrice, setSellingPrice] = useState();
  const [quantity = itemForEdit.quantity, setQuantity] = useState();
  const [description = itemForEdit.description, setDescription] = useState();

  const updateItem = async (itemId) => {
    const apiURL = `${API_HOST}/api/items/${itemId}`;
    const itemObj = {
      name,
      code,
      retailPrice,
      sellingPrice,
      quantity,
      description,
    };

    const res = await axios.patch(apiURL, itemObj);
    const data = res.data;

    return data;
  };

  const onSave = async () => {
    updateItem(itemForEdit._id);
    props.onClick(false);
    window.location.reload();
  };

  return (
    <div
      className="modal"
      id="editModal"
      tabIndex="-1"
      role="dialog"
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Item</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => props.onClick(false)}
            >
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div className="modal-body">
            <Label htmlFor="name" labelVal="Name" />
            <InputBox
              type="text"
              id="name"
              placeholder="Enter item name"
              value={name}
              onChange={setName}
            />

            <Label htmlFor="code" labelVal="Code" />
            <InputBox
              type="text"
              id="code"
              placeholder="Enter item code"
              value={code}
              onChange={setCode}
            />

            <Label htmlFor="retailPrice" labelVal="Retail Price" />
            <InputBox
              type="number"
              id="retailPrice"
              placeholder="Enter item retail price"
              value={retailPrice}
              onChange={setRetailPrice}
            />

            <Label htmlFor="sellingPrice" labelVal="Selling Price" />
            <InputBox
              type="number"
              id="sellingPrice"
              placeholder="Enter item selling price"
              value={sellingPrice}
              onChange={setSellingPrice}
            />

            <Label htmlFor="quantity" labelVal="Quantity" />
            <InputBox
              type="number"
              id="quantity"
              placeholder="Enter item quantity"
              value={quantity}
              onChange={setQuantity}
            />

            <Label htmlFor="description" labelVal="Description" />
            <TextArea
              id="description"
              rows="3"
              placeholder="Enter item description"
              value={description}
              onChange={setDescription}
            />
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={onSave}>
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => props.onClick(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
