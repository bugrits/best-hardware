// Packages
import { useState } from "react";
import axios from "axios";

// Configs
import { API_HOST } from "../../configs/config";

// Common Components
import Label from "../../components/Label";
import InputBox from "../../components/InputBox";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

const ItemsForm = (props) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [retailPrice, setRetailPrice] = useState(0);
  const [sellingPrice, setSellingPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const itemObj = {
      name,
      code,
      retailPrice,
      sellingPrice,
      quantity,
      description,
    };

    addTask(itemObj);
    refreshValues();
  };

  const addTask = async (itemObj) => {
    const apiURL = `${API_HOST}/api/items`;
    const res = await axios.post(apiURL, itemObj);
    props.onSubmit(res);
  };

  const refreshValues = () => {
    setName("");
    setCode("");
    setRetailPrice(0);
    setSellingPrice(0);
    setQuantity(0);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
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

      <Button type="submit" value="Submit" />
    </form>
  );
};

export default ItemsForm;
