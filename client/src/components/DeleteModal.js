// Packages
import axios from "axios";

// Constants
import { API_HOST } from "../configs/config";

const DeleteModal = (props) => {
  const show = props.show;
  const itemForDelete = props.itemForDelete;

  // const deleteItem = async (itemId) => {
  //   const apiURL = `${API_HOST}/api/items/${itemId}`;

  //   const res = await axios.delete(apiURL);
  //   const data = res.data;

  //   return data;
  // };

  // const saveChanges = async () => {
  //   deleteItem(itemForDelete._id)
  //     .then(() => {
  //       props.onClick(false);
  //       props.reloadItems();
  //     })
  //     .catch((err) => console.log(`Error: ${err}`));
  // };

  const deleteItem = async (itemId) => {
    const apiURL = `${API_HOST}/api/items/${itemId}`;
    const itemObj = {
      isActive: false,
    };

    const res = await axios.patch(apiURL, itemObj);
    const data = res.data;

    return data;
  };

  const saveChanges = async () => {
    deleteItem(itemForDelete._id)
      .then(() => {
        props.onClick(false);
        props.reloadItems();
      })
      .catch((err) => console.log(`Error: ${err}`));
  };

  const closeModal = () => {
    props.onClick(false);
  };

  return (
    <div
      className="modal"
      id="myModal"
      tabIndex="-1"
      role="dialog"
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete Item</h5>
            <i
              className="material-icons"
              style={{ cursor: "pointer" }}
              onClick={closeModal}
            >
              close
            </i>
            {/* <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i className="material-icons" onClick={closeModal}>
                clear
              </i>
            </button> */}
          </div>
          <div className="modal-body">
            <h1 className="text-center">DO YOU SURE?</h1>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={saveChanges}
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
