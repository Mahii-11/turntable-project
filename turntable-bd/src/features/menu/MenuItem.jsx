/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

function MenuItem({ item }) {
  const {
    id,
    name,
    brand,
    price,
    image,
    description,
    stock,
    rating,
    features,
    specifications,
    discount,
  } = item;

  const finalPrice = discount
    ? (price - price * (discount.percent / 100)).toFixed(2)
    : price;

  return (
    <motion.li
      key={id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
        {discount && (
          <span className="absolute bg-amber-500 text-white text-xs px-2 py-1 rounded-full top-2 left-2">
            {discount.percent}% OFF
          </span>
        )}
      </div>

      <div className="flex flex-col justify-between h-full p-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {name}{" "}
            <span className="text-sm text-gray-500 font-normal">({brand})</span>
          </h3>

          <p className="mt-1 text-sm text-gray-600">
            <strong>Price: </strong>
            <span className="text-amber-600 font-semibold">
              {formatCurrency(finalPrice)}
            </span>
            {discount && (
              <del className="ml-2 text-gray-400 text-sm">
                {formatCurrency(price)}
              </del>
            )}
          </p>

          <p className="text-sm mt-1">
            <strong>Rating:</strong> ⭐ {rating}
          </p>
          <p className="text-sm">
            <strong>Stock:</strong>{" "}
            {stock > 0 ? `${stock} available` : "Out of stock"}
          </p>
          <p className="text-sm">
            <strong>Drive:</strong> {specifications?.driveType}
          </p>

          <p className="text-sm mt-1 text-gray-600">{description}</p>
        </div>

        {features?.length > 0 && (
          <ul className="mt-3 list-disc list-inside text-sm text-gray-700">
            {features.slice(0, 3).map((f, idx) => (
              <li key={idx}>🔹 {f}</li>
            ))}
          </ul>
        )}

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="mt-4 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <FaShoppingCart />
          Add to Cart
        </motion.button>
      </div>
    </motion.li>
  );
}

export default MenuItem;
