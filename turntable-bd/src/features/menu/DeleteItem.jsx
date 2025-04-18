import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteItem } from "../cart/cartSlice";
function DeleteItem({ id }) {
  const dispatch = useDispatch();
  return (
    <motion.button
      onClick={() => dispatch(deleteItem(id))}
      whileTap={{ scale: 0.95 }}
      className="mt-4 flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer"
    >
      <FaShoppingCart />
      Remove from cart
    </motion.button>
  );
}

export default DeleteItem;
