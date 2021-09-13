import "./Table.css";

const Table = (props) => {
  const columnNames = props.columnNames;
  const items = props.items;

  return (
    <div>
      <table className="table table-hover table-wrapper-scroll-y my-custom-scrollbar">
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
                <i
                  className="material-icons"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    props.onClick({ showEditModal: true, id: item._id })
                  }
                >
                  edit
                </i>
                <i className="material-icons" style={{ cursor: "pointer" }}>
                  delete
                </i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
