// eslint-disable-next-line react/prop-types
import { formatCurrency } from "../../utils/helpers";
import { motion } from "framer-motion";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "./DeleteItem";

function TurntableItem({ item }) {
  const { id, name, price, image, description, stock, soldOut } = item;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      id: id,
      image,
      name,
      quantity: 1,
      price,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <motion.li
      key={id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={!soldOut ? { scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={`border border-gray-200 rounded-xl shadow-sm hover:shadow-md bg-white transition-all duration-200 flex flex-col ${
        soldOut ? "opacity-60 pointer-events-none" : ""
      }`}
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover rounded-t-xl"
        />
        {soldOut && (
          <span className="absolute bg-red-700 text-white text-xs px-3 py-1 rounded-full top-2 left-2 font-bold">
            SOLD OUT
          </span>
        )}
      </div>

      <div className="flex flex-col justify-between h-full p-4">
        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-1">{name}</h3>

          {/* Optional Star Rating */}
          <div className="flex items-center text-yellow-500 text-sm mb-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className="text-gray-500 ml-1"> (126)</span>
          </div>

          {!soldOut && (
            <div className="mb-2">
              <span className="block text-sm text-gray-700 font-medium">
                Price:
              </span>
              <div className="text-lg font-bold text-red-600">
                {formatCurrency(price)}
              </div>
            </div>
          )}

          {!soldOut && (
            <div className="text-xs font-medium text-green-600 mb-2">
              {stock > 0 ? `${stock} in stock` : "Out of stock"}
            </div>
          )}

          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        </div>

        {isInCart && <DeleteItem id={id} />}

        {!soldOut && !isInCart && (
          <motion.button
            onClick={handleAddToCart}
            whileTap={{ scale: 0.95 }}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded transition-colors cursor-pointer"
          >
            <FaShoppingCart />
            Add to Cart
          </motion.button>
        )}
      </div>
    </motion.li>
  );
}

export default TurntableItem;
