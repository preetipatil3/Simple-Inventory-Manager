import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import SearchBar from "./components/SearchBar";
import "./App.css";

const API_URL=process.env.REACT_APP_API_URL;

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Fetch all items
  const fetchItems = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/items`);
      // const data = await res.json();
      setItems(res.data);
    } catch (err) {
      console.error("Error fetching items", err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Add new item
  const addItem = async (item) => {
    try {
      await axios.post(`${API_URL}/api/items`,item);
      fetchItems();
    } catch (err) {
      console.error("Error adding item", err);
    }
  };

  // Update item
  const updateItem = async (id, item) => {
    try {
      await axios.put(`${API_URL}/api/items/${id}`,item);
      setEditingItem(null);
      fetchItems();
    } catch (err) {
      console.error("Error updating item", err);
    }
  };

  // Delete item
    const deleteItem = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await axios.delete(`${API_URL}/api/items/${id}`);
        fetchItems();
      } catch (err) {
        console.error("Error deleting item:", err);
      }
    }

  };

  //search filter
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  ).sort((a,b)=>a.id-b.id);

   // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));


  
  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);


  return (
    <div className="container">
      <h1>Inventory Manager</h1>
      {currentPage==1 &&(
        <>
      <SearchBar search={search} setSearch={setSearch} />
      
      <ItemForm
        addItem={addItem}
        editingItem={editingItem}
        updateItem={updateItem}
      />
      </>
      )}
      
      <ItemList
        items={currentItems}
        deleteItem={deleteItem}
        setEditingItem={setEditingItem}
      />

      {filteredItems.length > itemsPerPage && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
