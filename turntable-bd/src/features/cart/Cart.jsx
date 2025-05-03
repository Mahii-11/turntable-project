import { Link } from "react-router-dom";
import { Trash2, X, ArrowLeftCircle, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, removeItem } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  const subtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-900">
      <Link
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        to="/🎵Turntables"
        className="flex items-center text-blue-600 hover:underline mb-6"
      >
        <ArrowLeftCircle className="mr-2 w-5 h-5" />
        Back to Turntables
      </Link>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 flex items-center gap-2"
      >
        <ShoppingCart className="w-7 h-7 text-blue-600" />
        Shopping Cart
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 bg-white rounded-xl shadow-md p-6 space-y-6">
          {cart.map((item) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 border-b pb-4 relative"
            >
              <div className="flex items-center gap-4 w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-md object-cover border"
                />
                <div className="flex-1">
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                </div>
              </div>

              <p className="text-lg font-bold text-gray-800">
                {formatCurrency(item?.totalPrice ?? 0)}
              </p>

              <button
                onClick={() => dispatch(removeItem(item._id))}
                className="absolute top-0 right-0 mt-2 -mr-3 text-red-500 hover:text-red-400 cursor-pointer"
                aria-label="Remove item"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          ))}

          <button
            onClick={() => dispatch(clearCart())}
            className="flex items-center gap-2 text-sm text-red-600 hover:text-red-500 mt-4 cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
            Clear Cart
          </button>
        </div>

        {/* Right - Summary */}
        <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-md p-6 h-fit">
          <h3 className="text-xl font-semibold border-b pb-4 mb-4">
            Order Summary
          </h3>
          <div className="flex justify-between mb-4">
            <span className="text-gray-700">Subtotal</span>
            <span className="font-bold text-gray-900">
              {formatCurrency(subtotal)}
            </span>
          </div>

          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/order/new"
            className="block bg-yellow-500 hover:bg-yellow-600 transition px-6 py-3 text-center rounded-md font-semibold text-white w-full mt-6"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
