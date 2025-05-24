import { Link, useNavigate } from "react-router-dom";
import { Trash2, X, ArrowLeftCircle, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, removeItem } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import EmptyCart from "./EmptyCart";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function Cart() {
  const { t } = useTranslation();
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBeginCheckout = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-17108788133/UkK1CLma4cwaEKXHjd4_",
      });
    }

    // Checkout পেজে যাও
    navigate("/order/new");
  };

  if (!cart.length) return <EmptyCart />;
  const subtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t("meta4.description")} />
        <meta name="keywords" content={t("meta4.keywords")} />
        <meta name="author" content="Turntable BD" />
        <meta property="og:title" content={t("meta4.ogTitle")} />
        <meta property="og:description" content={t("meta4.ogDescription")} />
        <meta
          property="og:url"
          content="https://turntable-project-4sp3.vercel.app/cart"
        />
        <meta
          property="og:image"
          content="https://turntable-project-4sp3.vercel.app/og-image.jpg"
        />
        <meta name="robots" content="index, follow" />
        <title>{t("pageTitle2")}</title>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-10 text-gray-900">
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to="/🎵Turntables"
          className="flex items-center text-blue-600 hover:underline mb-6"
        >
          <ArrowLeftCircle className="mr-2 w-5 h-5" />
          {t("backToTurntables")}
        </Link>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 flex items-center gap-2"
        >
          <ShoppingCart className="w-7 h-7 text-blue-600" />
          {t("shoppingCart")}
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
                    <p className="text-gray-600 text-sm">
                      {t("quantity")}: {item.quantity}
                    </p>
                  </div>
                </div>

                <p className="text-lg font-bold text-gray-800">
                  {formatCurrency(item?.totalPrice ?? 0)}
                </p>

                <button
                  onClick={() => dispatch(removeItem(item._id))}
                  className="absolute top-0 right-0 mt-2 -mr-3 text-red-500 hover:text-red-400 cursor-pointer"
                  aria-label={t("removeItem")}
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
              {t("clearCart")}
            </button>
          </div>

          {/* Right - Summary */}
          <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-md p-6 h-fit">
            <h3 className="text-xl font-semibold border-b pb-4 mb-4">
              {t("orderSummary")}
            </h3>
            <div className="flex justify-between mb-4">
              <span className="text-gray-700">{t("subtotal")}</span>
              <span className="font-bold text-gray-900">
                {formatCurrency(subtotal)}
              </span>
            </div>

            <button
              onClick={handleBeginCheckout}
              className="block bg-yellow-500 hover:bg-yellow-600 transition px-6 py-3 text-center rounded-md font-semibold text-white w-full mt-6"
            >
              {t("proceedToCheckout")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
