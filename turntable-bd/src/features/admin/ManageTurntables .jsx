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
    console.log(data);
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
      fetchTurntables();
    } catch (err) {
      console.error("Save Error:", err.message);
      setMessage(`Error saving product: ${err.message}`);
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
/*
import React, { useEffect, useState } from "react";
import {
  addTurntable,
  deleteTurntable,
  getMenu,
  updateTurntable,
} from "../../services/apiRestaurant";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ManageTurntables() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
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

  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    if (!storedToken) {
      setTimeout(() => navigate("/login"), 100);
    } else {
      fetchProducts();
    }
  }, []);

  async function fetchProducts() {
    try {
      const data = await getMenu();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      if (editingProduct) {
        await updateTurntable(editingProduct._id, formData, token);
      } else {
        await addTurntable(formData, token);
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
      setEditingProduct(null);
      fetchProducts();
    } catch (err) {
      console.error("Error saving product:", err);
    }
  }

  function handleEdit(product) {
    setFormData(product);
    setEditingProduct(product);
  }

  async function handleDelete(id) {
    const token = localStorage.getItem("token");
    try {
      await deleteTurntable(id, token);
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  }

  return (
    <div className="p-4 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Manage Turntables</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
      >
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            value={formData[key]}
            onChange={handleChange}
            className="p-2 rounded bg-gray-800 text-white"
            required
          />
        ))}
        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
        >
          {editingProduct ? "Update" : "Add"} Product
        </button>
      </form>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-gray-800 p-4 rounded shadow flex flex-col justify-between"
          >
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p>{product.description}</p>
              <p className="text-green-400">${product.price}</p>
              <p className="text-sm text-gray-400">Stock: {product.stock}</p>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleEdit(product)}
                className="text-yellow-400 hover:text-yellow-300"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="text-red-500 hover:text-red-400"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageTurntables;*/
