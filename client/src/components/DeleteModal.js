// Packages
import axios from "axios";

// Constants
import { API_HOST } from "../configs/config";

const DeleteModal = (props) => {
  const show = props.show;
  const itemForDelete = props.itemForDelete;

  const deleteItem = async (itemId) => {
    const apiURL = `${API_HOST}/api/items/${itemId}`;

    const res = await axios.delete(apiURL);
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
      class="modal"
      id="myModal"
      tabindex="-1"
      role="dialog"
      style={{ display: show ? "block" : "none" }}
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Delete Item</h5>
            <i
              className="material-icons"
              style={{ cursor: "pointer" }}
              onClick={closeModal}
            >
              close
            </i>
            {/* <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="material-icons" onClick={closeModal}>
                clear
              </i>
            </button> */}
          </div>
          <div class="modal-body">
            <h1 className="text-center">DO YOU SURE?</h1>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" onClick={saveChanges}>
              Delete
            </button>
            <button
              type="button"
              class="btn btn-secondary"
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
