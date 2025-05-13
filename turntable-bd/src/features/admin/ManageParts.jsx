import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  getTurntableParts,
  addTurntablePart,
  updateTurntablePart,
  deleteTurntablePart,
} from "../../services/apiRestaurant";

export default function ManageTurntables() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    rating: 0,
    reviews: 0,
    stock: "",
    warranty: "1 year limited warranty",
    soldOut: false,
  });

  useEffect(() => {
    fetchTurntables();
  }, []);

  const fetchTurntables = async () => {
    const data = await getTurntableParts();
    setProducts(data);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formattedData = {
      name: formData.name,
      price: Number(formData.price),
      image: formData.image,
      description: formData.description,
      rating: Number(formData.rating),
      reviews: Number(formData.reviews),
      stock: Number(formData.stock),
      soldOut: formData.soldOut,
    };

    try {
      if (editId) {
        await updateTurntablePart(editId, formattedData);
        setMessage("✅ Product updated successfully!");
      } else {
        await addTurntablePart(formattedData);
        setMessage("✅ Product added successfully!");
      }

      setTimeout(() => {
        setLoading(false);
        resetForm();
        fetchTurntables();
      }, 500);
    } catch (err) {
      console.error("Error saving product:", err.message);
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      price: "",
      image: "",
      description: "",
      rating: 0,
      reviews: 0,
      stock: "",
      warranty: "1 year limited warranty",
      soldOut: false,
    });
    setEditId(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteTurntablePart(id);
      fetchTurntables();
    }
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      price: product.price,
      image: product.image,
      reviews: product.reviews || 0,
      rating: product.rating || 0,
      description: product.description,
      warranty: product.warranty || "1 year limited warranty",
      stock: product.stock,
      soldOut: product.soldOut || false,
    });
    setEditId(product._id);
  };

  const handleCancelEdit = () => {
    resetForm();
  };

  return (
    <div className="p-6 text-white bg-gradient-to-tr from-gray-900 via-black to-gray-800 min-h-screen">
      <h2 className="text-3xl font-extrabold mb-6 text-center tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        🎛️ Manage Turntables Parts
      </h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black/50 backdrop-blur-md p-6 rounded-2xl border border-gray-700 shadow-xl"
      >
        {Object.keys(formData).map((key, idx) =>
          typeof formData[key] === "boolean" ? (
            <label key={idx} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name={key}
                checked={formData[key]}
                onChange={handleChange}
              />
              Mark as Sold Out
            </label>
          ) : (
            <input
              key={idx}
              name={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={formData[key]}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              required
            />
          )
        )}

        <div className="col-span-1 md:col-span-2 flex gap-4 mt-4">
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading
                ? "bg-purple-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            } text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 w-full shadow-md`}
          >
            {loading
              ? editId
                ? "Updating..."
                : "Adding..."
              : editId
              ? "Update Product"
              : "Add Product"}
          </button>

          {editId && (
            <button
              type="button"
              onClick={handleCancelEdit}
              disabled={loading}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 w-full shadow-md"
            >
              Cancel
            </button>
          )}
        </div>
      </motion.form>

      {message && (
        <p className="mt-4 text-green-400 font-medium animate-pulse">
          {message}
        </p>
      )}

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {products.map((prod) => (
          <motion.div
            key={prod._id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 p-5 rounded-xl border border-gray-700 shadow-lg hover:shadow-purple-700/40 transition duration-300"
          >
            <img
              src={prod.image}
              alt={prod.name}
              className="w-full h-36 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-semibold mb-1">{prod.name}</h3>
            <p className="text-sm text-gray-400 mb-1">BDT {prod.price}</p>
            <p className="text-sm text-gray-400 mb-1">
              Stock: {prod.stock}{" "}
              {prod.soldOut ? "❌ Sold Out" : "✅ Available"}
            </p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  handleEdit(prod);
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-1 px-3 rounded-md transition-all duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(prod._id)}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded-md transition-all duration-300"
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
