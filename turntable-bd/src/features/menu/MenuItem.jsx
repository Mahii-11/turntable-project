/* eslint-disable no-unused-vars */
import { formatCurrency } from "../../utils/helpers";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "../cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MenuItem({ item }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { _id, name, brand, price, image, rating, discount, soldOut } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(_id));
  const isInCart = currentQuantity > 0;

  const finalPrice = discount
    ? (price - price * (discount.percent / 100)).toFixed(2)
    : price;

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
          className="w-full h-52 object-cover rounded-t-xl"
        />

        {!soldOut && discount && discount.percent > 0 && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-semibold shadow">
            {discount.percent}% {t("off")}
          </span>
        )}

        {soldOut && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-3 py-1 rounded-full font-bold shadow">
            {t("soldOut")}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            <strong>{t("name")}:</strong> {name}
            <span className="text-sm text-gray-500 font-normal ml-1">
              ({brand})
            </span>
          </h3>

          {!soldOut && (
            <p className="text-sm text-gray-700">
              <strong>{t("price")}:</strong>{" "}
              <span className="text-red-600 font-semibold">
                {formatCurrency(finalPrice)}
              </span>
              {discount && discount.percent > 0 && (
                <del className="ml-2 text-gray-400 text-sm">
                  {formatCurrency(price)}
                </del>
              )}
            </p>
          )}

          <p className="text-sm text-gray-700 mt-1">
            <strong>{t("rating")}:</strong>{" "}
            <span className="inline-flex items-center gap-1 text-yellow-500">
              <FaStar className="inline" />
              {rating}
            </span>
          </p>
        </div>

        {!soldOut && !isInCart && (
          <motion.button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate(`/🎵Turntables/${item._id}`);
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded transition-colors cursor-pointer"
          >
            <AiOutlineEye className="inline mr-1" />
            {t("viewDetails")}
          </motion.button>
        )}
      </div>
    </motion.li>
  );
}

export default MenuItem;
