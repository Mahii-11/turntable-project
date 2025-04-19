/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";
import { motion } from "framer-motion";
//import { BadgeCheck, Star } from "lucide-react";

function OrderItem({ item }) {
  const { image, name, totalPrice, toppings = [] } = item;

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 rounded-2xl shadow-md flex items-center justify-between gap-4 p-4 flex-col sm:flex-row"
    >
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 object-cover rounded-lg border border-gray-700"
        />
        <div>
          <p className="text-lg font-semibold text-white">
            <span className="text-yellow-400"></span> {name}
          </p>
          {toppings.length > 0 && (
            <p className="text-sm text-gray-400">
              <span className="text-white">Toppings:</span>{" "}
              {toppings.join(", ")}
            </p>
          )}
        </div>
      </div>
      <p className="text-xl font-bold text-green-400">
        {formatCurrency(totalPrice)}
      </p>
    </motion.li>
  );
}

export default OrderItem;
