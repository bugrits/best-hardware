import "./Table.css";

const Table = (props) => {
  const columnNames = props.columnNames;
  const items = props.items;

  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">
      <table className="table table-hover">
        <thead>
          <tr>
            {columnNames.map((columnName, index) => (
              <th scope="col" key={index} className="table-sticky">
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
                <div style={{ display: "flex" }}>
                  <i
                    className="material-icons"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      props.onClickEdit({ showEditModal: true, id: item._id })
                    }
                  >
                    edit
                  </i>
                  <i
                    className="material-icons"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      props.onClickDelete({
                        showDeleteModal: true,
                        id: item._id,
                      })
                    }
                  >
                    delete
                  </i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
