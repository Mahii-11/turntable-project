import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
function CartOverview() {
  return (
    <div>
      <Link to="/cart">
        <div className="hover:text-amber-500 transition-colors relative">
          <FaShoppingCart />
          <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </div>
      </Link>
    </div>
  );
}

export default CartOverview;
