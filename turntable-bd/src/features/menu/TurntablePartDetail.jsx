import { formatCurrency } from "../../utils/helpers";
import { motion } from "framer-motion";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "./DeleteItem";
import { getTurntablePartsDetails } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

// Loader
export async function loader({ params }) {
  const id = params.id;
  const item = await getTurntablePartsDetails(id);
  return item;
}

function TurntablePartDetail() {
  const item = useLoaderData();
  const {
    _id,
    name,
    price,
    image,
    description,
    stock,
    soldOut,
    rating = 0,
    reviews = 0,
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

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 -mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Product Image */}
        <div className="w-full overflow-hidden rounded-lg shadow-sm">
          <img
            src={image}
            alt={name}
            className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right: Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{name}</h1>

          {/* Rating */}
          <div className="flex items-center text-yellow-500 text-sm">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"
                }
              />
            ))}
            <span className="ml-2 text-gray-500 text-sm">({reviews})</span>
          </div>

          {/* Price */}
          {!soldOut && (
            <div>
              <span className="block text-sm text-gray-500 font-medium">
                Price
              </span>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-orange-600">
                  {formatCurrency(price)}
                </span>
                <span className="line-through text-gray-400 text-lg">
                  {formatCurrency(price * 2)}
                </span>
                <span className="text-green-600 text-lg font-semibold">
                  -50%
                </span>
              </div>
            </div>
          )}

          {/* Stock */}
          {!soldOut && (
            <div className="text-green-700 font-semibold text-sm">
              {stock > 0 ? `${stock} in stock` : "Out of stock"}
            </div>
          )}

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            {description}
          </p>

          {/* Buttons */}
          {isInCart ? (
            <DeleteItem id={_id} />
          ) : !soldOut ? (
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="w-full mt-4 flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-black font-semibold text-lg py-3 rounded-md shadow-sm transition-all duration-200"
            >
              <FaShoppingCart className="text-lg" />
              Add to Cart
            </motion.button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default TurntablePartDetail;
