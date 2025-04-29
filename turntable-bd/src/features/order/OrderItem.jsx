/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";
import { motion } from "framer-motion";

function OrderItem({ item }) {
  const { image, name, totalPrice, toppings = [] } = item;

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4"
    >
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 object-cover rounded-md border border-white"
        />
        <div>
          <p className="text-base sm:text-lg font-semibold text-black">
            {name}
          </p>
          {toppings.length > 0 && (
            <p className="text-sm text-black mt-1">
              <span className="text-black">Toppings:</span>{" "}
              {toppings.join(", ")}
            </p>
          )}
        </div>
      </div>
      <p className="text-xl font-bold text-green-400 sm:ml-auto">
        {formatCurrency(totalPrice)}
      </p>
    </motion.li>
  );
}

export default OrderItem;
