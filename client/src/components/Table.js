import { FaPenSquare } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const Table = (props) => {
  const columnNames = props.columnNames;
  const items = props.items;

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            {columnNames.map((columnName, index) => (
              <th scope="col" key={index}>
                {columnName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.code}</td>
              <td>₱{item.retailPrice}</td>
              <td>₱{item.sellingPrice}</td>
              <td>{item.quantity}</td>
              <td>{item.description}</td>
              <td>
                <FaPenSquare
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    props.onClick({ showEditModal: true, id: item._id })
                  }
                />
                <FaTrash style={{ cursor: "pointer", marginLeft: "10px" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
