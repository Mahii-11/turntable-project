// eslint-disable-next-line react/prop-types
import { formatCurrency } from "../../utils/helpers";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "./DeleteItem";
import { useNavigate } from "react-router-dom";

function TurntableItem({ item }) {
  const navigate = useNavigate();
  const {
    _id,
    name,
    price,
    image,
    stock,
    soldOut,
    rating = 0,
    reviews = 0,
  } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(_id));
  const isInCart = currentQuantity > 0;

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
          className="w-full h-52 object-cover rounded-t-lg"
        />
        {soldOut && (
          <span className="absolute bg-red-600 text-white text-xs px-3 py-1 rounded-full top-2 left-2 font-semibold">
            SOLD OUT
          </span>
        )}
      </div>

      <div className="flex flex-col justify-between h-full p-4">
        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-1 leading-tight">
            <strong>Name:</strong> {name}
          </h3>

          {!soldOut && (
            <>
              <p className="text-sm text-gray-700">
                <strong>Price:</strong>{" "}
                <span className="text-red-600 font-semibold">
                  {formatCurrency(price)}
                </span>
              </p>
            </>
          )}

          <div className="flex items-center text-yellow-500 text-sm mb-2">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"
                }
              />
            ))}
            <span className="text-gray-500 ml-1 text-xs font-medium">
              ({reviews})
            </span>
          </div>

          {!soldOut && (
            <div className="text-xs font-semibold text-green-700 mb-2">
              {stock > 0 ? `${stock} in stock` : "Out of stock"}
            </div>
          )}
        </div>

        {isInCart && <DeleteItem id={_id} />}

        {!soldOut && !isInCart && (
          <motion.button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate(`/PartsHub/${item._id}`);
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-gray-900 font-semibold px-4 py-2 rounded shadow-sm transition-all duration-200 cursor-pointer"
          >
            <AiOutlineEye className="inline mr-1" />
            View Details
          </motion.button>
        )}
      </div>
    </motion.li>
  );
}

export default TurntableItem;
