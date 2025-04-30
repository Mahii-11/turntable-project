// src/features/admin/ManageTurntables.jsx

import { useEffect, useState } from "react";
import {
  getMenu,
  addTurntable,
  updateTurntable,
  deleteTurntable,
} from "../../services/apiRestaurant";

export default function ManageTurntables() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    image: "",
    description: "",
    category: "",
    stock: "",
    features: "",
    warranty: "",
  });
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchTurntables();
  }, []);

  const fetchTurntables = async () => {
    const data = await getMenu();
    setProducts(data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await updateTurntable(editId, formData);
        setMessage("Product updated successfully!");
      } else {
        await addTurntable(formData);
        setMessage("Product added successfully!");
      }
      setFormData({
        name: "",
        brand: "",
        price: "",
        image: "",
        description: "",
        category: "",
        stock: "",
        features: "",
        warranty: "",
      });
      setEditId(null);
      fetchTurntables();
    } catch (err) {
      setMessage("Error saving product.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteTurntable(id);
      fetchTurntables();
    }
  };

  const handleEdit = (product) => {
    setFormData(product);
    setEditId(product._id);
  };

  return (
    <div className="p-4 text-white">
      <h2 className="text-2xl font-bold mb-4">Manage Turntables</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4 bg-gray-800 p-4 rounded-xl"
      >
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            value={formData[key]}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700"
          />
        ))}
        <button
          type="submit"
          className="col-span-2 bg-green-600 hover:bg-green-700 rounded p-2"
        >
          {editId ? "Update Product" : "Add Product"}
        </button>
      </form>

      {message && <p className="mt-2 text-yellow-400">{message}</p>}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((prod) => (
          <div key={prod._id} className="p-4 bg-gray-700 rounded-lg shadow">
            <img
              src={prod.image}
              alt={prod.name}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-2">{prod.name}</h3>
            <p>Brand: {prod.brand}</p>
            <p>Price: ${prod.price}</p>
            <div className="flex mt-2 gap-2">
              <button
                onClick={() => handleEdit(prod)}
                className="px-3 py-1 bg-yellow-500 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(prod._id)}
                className="px-3 py-1 bg-red-600 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
