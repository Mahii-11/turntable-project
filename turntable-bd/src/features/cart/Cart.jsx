/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { Trash2, ArrowLeftCircle, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-100">
      <Link
        to="/products"
        className="flex items-center text-purple-400 hover:text-purple-300 mb-6 transition-all"
      >
        <ArrowLeftCircle className="mr-2 w-5 h-5" />
        Back to menu
      </Link>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 flex items-center gap-2"
      >
        <ShoppingCart className="w-7 h-7 text-purple-400" />
        Your Cart
      </motion.h2>

      <div className="bg-gray-800 rounded-2xl shadow-xl p-6 mb-10 space-y-6">
        {cart.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 bg-gray-700 px-4 py-4 rounded-xl shadow-md"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-xl object-cover shadow"
              />
              <div>
                <p className="font-semibold text-lg">
                  {item.quantity}× {item.name}
                </p>
                <p className="text-sm text-gray-400">
                  Unit: {formatCurrency(item?.unitPrice ?? 0)}
                </p>
              </div>
            </div>
            <p className="text-lg font-bold">
              {formatCurrency(item?.totalPrice ?? 0)}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link
          to="/order/new"
          className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full font-semibold text-white shadow-md cursor-pointer"
        >
          Order Turntables
        </Link>
        <button
          onClick={() => dispatch(clearCart())}
          className="flex items-center gap-2 text-red-500 hover:text-red-400 transition cursor-pointer"
        >
          <Trash2 className="w-5 h-5" />
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
