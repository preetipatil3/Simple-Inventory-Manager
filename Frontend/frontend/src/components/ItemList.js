import React from "react";

function ItemList({ items, deleteItem, setEditingItem }) {
  return (
    <table className="item-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Qty</th>
          <th>Supplier</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.length > 0 ? (
          items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.supplier}</td>
              <td>{item.description}</td>
              <td className="action-buttons">
                <button
                  className="edit-btn"
                  onClick={() => setEditingItem(item)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" style={{ textAlign: "center" }}>
              No items found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ItemList;
