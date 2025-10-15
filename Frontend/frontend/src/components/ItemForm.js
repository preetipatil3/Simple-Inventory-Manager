import React, { useState, useEffect } from "react";

function ItemForm({ addItem, editingItem, updateItem }) {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    supplier: "",
    description: "",
  });

  useEffect(() => {
    if (editingItem) {
      setFormData({
        name: editingItem.name,
        quantity: editingItem.quantity,
        supplier: editingItem.supplier,
        description: editingItem.description,
      });
    } else {
      setFormData({ name: "", quantity: "", supplier: "", description: "" });
    }
  }, [editingItem]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      updateItem(editingItem.id, formData);
    } else {
      addItem(formData);
    }
    setFormData({ name: "", quantity: "", supplier: "", description: "" });
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="quantity"
        placeholder="Qty"
        value={formData.quantity}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="supplier"
        placeholder="Supplier"
        value={formData.supplier}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <button type="submit">{editingItem ? "Update" : "Add"}</button>
    </form>
  );
}

export default ItemForm;
