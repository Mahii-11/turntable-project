//eslint-disable react/prop-types
import { formatCurrency } from "../../utils/helpers";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
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
      whileHover={!soldOut ? { scale: 1.03 } : {}}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl shadow-md overflow-hidden transition-shadow flex flex-col ${
        soldOut
          ? "bg-black text-white opacity-60 cursor-not-allowed"
          : "bg-white hover:shadow-lg"
      }`}
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-2xl"
        />

        {soldOut && (
          <span className="absolute bg-orange-700 text-black text-xs px-3 py-1 rounded-full top-2 left-2 font-bold">
            SOLD OUT
          </span>
        )}
      </div>

      <div className="flex flex-col justify-between h-full p-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

          {!soldOut && (
            <p className="mt-1 text-sm text-gray-600">
              <strong>Price: </strong>
              <span className="text-amber-600 font-semibold">
                {formatCurrency(price)}
              </span>
            </p>
          )}

          {!soldOut && (
            <p className="text-sm">
              <strong>Stock:</strong>
              {stock > 0 ? `${stock} available` : "Out of stock"}
            </p>
          )}

          <p className="text-sm mt-1 text-gray-600">{description}</p>
        </div>

        {isInCart && <DeleteItem id={id} />}

        {!soldOut && !isInCart && (
          <motion.button
            onClick={handleAddToCart}
            whileTap={{ scale: 0.95 }}
            className="mt-4 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer"
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
