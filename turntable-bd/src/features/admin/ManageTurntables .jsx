import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  getMenu,
  addTurntable,
  updateTurntable,
  deleteTurntable,
} from "../../services/apiRestaurant";

export default function ManageTurntables() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    image: "",
    description: "",
    category: "",
    stock: "",
    rating: 0,
    features: "",
    specifications: {
      speed: "",
      platter: "",
      driveType: "",
      output: "",
    },
    discount: {
      percent: 0,
      validTill: "",
    },
    warranty: "1 year limited warranty",
    soldOut: false,
  });

  useEffect(() => {
    fetchTurntables();
  }, []);

  const fetchTurntables = async () => {
    const data = await getMenu();
    setProducts(data);
  };

  fetchTurntables();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes(".")) {
      const [section, field] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: type === "checkbox" ? checked : value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formattedData = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
      rating: Number(formData.rating),
      features: formData.features.split(",").map((f) => f.trim()),
      specifications: {
        ...formData.specifications,
        speed: formData.specifications.speed.split(",").map((s) => s.trim()),
        output: formData.specifications.output.split(",").map((o) => o.trim()),
      },
      discount: {
        ...formData.discount,
        percent: Number(formData.discount.percent),
        validTill: formData.discount.validTill || null,
      },
      soldOut: formData.soldOut,
    };

    try {
      if (editId) {
        await updateTurntable(editId, formattedData);
        setMessage("✅ Product updated successfully!");
      } else {
        await addTurntable(formattedData);
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
      brand: "",
      price: "",
      image: "",
      description: "",
      category: "",
      stock: "",
      rating: 0,
      features: "",
      specifications: {
        speed: "",
        platter: "",
        driveType: "",
        output: "",
      },
      discount: {
        percent: 0,
        validTill: "",
      },
      warranty: "1 year limited warranty",
      soldOut: false,
    });
    setEditId(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteTurntable(id);
      fetchTurntables();
    }
  };

  const handleEdit = (product) => {
    setEditId(product._id);

    // Flatten fields back into form-friendly format
    setFormData({
      name: product.name || "",
      brand: product.brand || "",
      price: product.price || "",
      image: product.image || "",
      description: product.description || "",
      category: product.category || "",
      stock: product.stock || "",
      rating: product.rating || 0,
      features: product.features?.join(", ") || "",
      specifications: {
        speed: product.specifications?.speed?.join(", ") || "",
        platter: product.specifications?.platter || "",
        driveType: product.specifications?.driveType || "",
        output: product.specifications?.output?.join(", ") || "",
      },
      discount: {
        percent: product.discount?.percent || 0,
        validTill: product.discount?.validTill?.slice(0, 10) || "",
      },
      warranty: product.warranty || "1 year limited warranty",
      soldOut: product.soldOut || false,
    });
  };

  return (
    <div className="p-6 text-white bg-gradient-to-tr from-gray-900 via-black to-gray-800 min-h-screen">
      <h2 className="text-3xl font-extrabold mb-6 text-center tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        🎛️ Manage Turntables
      </h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black/50 backdrop-blur-md p-6 rounded-2xl border border-gray-700 shadow-xl"
      >
        {/* Basic Fields */}
        {[
          "name",
          "brand",
          "price",
          "image",
          "description",
          "category",
          "stock",
          "rating",
          "features",
          "warranty",
        ].map((key) => (
          <input
            key={key}
            name={key}
            placeholder={`Enter ${key}`}
            value={formData[key]}
            onChange={handleChange}
            required={key !== "rating" && key !== "warranty"}
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
          />
        ))}

        {/* Specifications */}
        {["speed", "platter", "driveType", "output"].map((field) => (
          <input
            key={field}
            name={`specifications.${field}`}
            placeholder={`Specification - ${field}`}
            value={formData.specifications[field]}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
          />
        ))}

        {/* Discount Fields */}
        <input
          name="discount.percent"
          type="number"
          placeholder="Discount Percent"
          value={formData.discount.percent}
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
        />
        <input
          name="discount.validTill"
          type="date"
          placeholder="Discount Valid Till"
          value={formData.discount.validTill}
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
        />

        {/* Sold Out Checkbox */}
        <div className="flex items-center gap-2 col-span-1 md:col-span-2">
          <input
            type="checkbox"
            name="soldOut"
            checked={formData.soldOut}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, soldOut: e.target.checked }))
            }
            className="w-5 h-5 accent-red-500"
          />
          <label htmlFor="soldOut" className="text-white font-medium">
            Mark as Sold Out
          </label>
        </div>

        {/* Buttons */}
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
              onClick={resetForm}
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

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
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
            <p className="text-sm text-gray-400">Brand: {prod.brand}</p>
            <p className="text-sm text-gray-400 mb-3">BDT {prod.price}</p>
            {/* Show Sold Out status */}
            {prod.soldOut && (
              <p className="text-red-600 text-sm font-semibold">Sold Out</p>
            )}
            <div className="flex gap-2">
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
