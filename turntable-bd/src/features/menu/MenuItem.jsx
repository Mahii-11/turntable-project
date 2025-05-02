/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";
import { motion } from "framer-motion";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "./DeleteItem";

function MenuItem({ item }) {
  const {
    _id,
    name,
    brand,
    price,
    image,
    description,
    stock,
    rating,
    features,
    specifications,
    // discount,
    soldOut,
  } = item;

  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(_id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      _id,
      image,
      name,
      quantity: 1,
      price,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  }

  // const finalPrice = discount
  ////  ? (price - price * (discount.percent / 100)).toFixed(2)
  //  : price;

  return (
    <motion.li
      key={_id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={!soldOut ? { scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={`rounded-xl overflow-hidden border border-gray-200 shadow-sm transition-all flex flex-col ${
        soldOut
          ? "bg-gray-100 text-gray-400 opacity-70 cursor-not-allowed"
          : "bg-white hover:shadow-md"
      }`}
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover rounded-t-xl"
        />

        {/*  {!soldOut && discount && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-semibold shadow">
            {discount.percent}% OFF
          </span>
        )} */}

        {soldOut && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-3 py-1 rounded-full font-bold shadow">
            SOLD OUT
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            <strong>Name:</strong> {name}
            <span className="text-sm text-gray-500 font-normal ml-1">
              ({brand})
            </span>
          </h3>

          <div className="text-sm mt-1 text-gray-600 mb-1">
            <strong>Drive:</strong> {specifications?.driveType}
          </div>

          {!soldOut && (
            <>
              <p className="text-sm text-gray-700">
                <strong>Price:</strong>{" "}
                <span className="text-red-600 font-semibold">
                  {formatCurrency(price)}
                </span>
                {/*  {discount && (
                  <del className="ml-2 text-gray-400 text-sm">
                    {formatCurrency(price)}
                  </del>  
                )} */}
              </p>
              <p className="text-sm text-green-600 font-medium">
                <strong>Stock:</strong>{" "}
                {stock > 0 ? `${stock} available` : "Out of stock"}
              </p>
            </>
          )}

          <p className="text-sm text-gray-700 mt-1">
            <strong>Rating:</strong>{" "}
            <span className="inline-flex items-center gap-1 text-yellow-500">
              <FaStar className="inline" />
              {rating}
            </span>
          </p>

          <p className="text-sm mt-2 text-gray-600 line-clamp-3">
            <strong>Description:</strong> {description}
          </p>

          {!soldOut && features?.length > 0 && (
            <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
              <strong>Features:</strong>{" "}
              {features.slice(0, 3).map((f, idx) => (
                <li key={idx}>🔹 {f}</li>
              ))}
            </ul>
          )}
        </div>

        {isInCart && <DeleteItem id={_id} />}

        {!soldOut && !isInCart && (
          <motion.button
            onClick={handleAddToCart}
            whileTap={{ scale: 0.95 }}
            className="mt-4 flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded transition-colors cursor-pointer"
          >
            <FaShoppingCart />
            Add to Cart
          </motion.button>
        )}
      </div>
    </motion.li>
  );
}

export default MenuItem;
