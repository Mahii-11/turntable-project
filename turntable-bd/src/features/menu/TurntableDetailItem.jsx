// eslint-disable-next-line react/prop-types
import { formatCurrency } from "../../utils/helpers";
import { motion } from "framer-motion";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "./DeleteItem";
import { Helmet } from "react-helmet";
import { getTurntableDetails } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import { useTranslation } from "react-i18next";

export async function loader({ params }) {
  const id = params.id;
  const item = await getTurntableDetails(id);
  return item;
}

function TurntableDetailItem() {
  const { t } = useTranslation();

  const item = useLoaderData();
  const {
    _id,
    name,
    brand,
    price,
    image,
    description,
    stock,
    rating,
    features,
    specifications,
    category,
    warranty,
    discount,
    soldOut,
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

    // আপনার কার্টে আইটেম যোগ করার লজিক
    dispatch(addItem(newItem));

    // Google Ads কনভার্সন ইভেন্ট ট্র্যাকিং
    window.gtag("event", "conversion", {
      send_to: "AW-17108788133/CONVERSION_LABEL_HERE",
      value: 1.0,
      currency: "USD",
    });
  }

  const finalPrice = discount
    ? (price - price * (discount.percent / 100)).toFixed(2)
    : price;

  return (
    <>
      <Helmet>
        <title>{`${name} by ${brand} | ${t("buyTurntablesOnline")}`}</title>
        <meta name="description" content={description?.slice(0, 150)} />
        <meta
          name="keywords"
          content={`${name}, ${brand}, ${category}, turntable, audio gear`}
        />
        <meta property="og:title" content={`${name} by ${brand}`} />
        <meta property="og:description" content={description?.slice(0, 150)} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="product" />
      </Helmet>

      <motion.div
        key={_id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`bg-slate-100 -mt-7.5 rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300 relative ${
          soldOut && "opacity-80"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-8 lg:px-12 py-8">
          <div className="relative overflow-hidden rounded-xl shadow-md">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500 ease-in-out"
              style={{ minHeight: "300px", maxHeight: "600px" }}
            />

            {discount?.percent > 0 && !soldOut && (
              <div className="absolute top-4 left-4 bg-rose-500 text-black rounded-full px-3 py-1 text-sm font-medium shadow animate-pulse">
                {discount.percent}% {t("off2")}
              </div>
            )}

            {soldOut && (
              <div className="absolute top-4 left-4 bg-gray-200 text-black rounded-full px-3 py-1 text-sm font-medium shadow animate-pulse">
                {t("soldOut2")}
              </div>
            )}
          </div>

          <div className="p-2 flex flex-col justify-between h-full">
            <div>
              <div className="mb-4">
                <h1 className="text-3xl font-bold text-slate-800 mb-1">
                  {name}
                  <span className="text-slate-800 font-medium text-xl ml-1">
                    ({brand})
                  </span>
                </h1>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-sm font-medium text-slate-700">
                    {category || t("notAvailable")}
                  </span>
                  <span className="inline-block h-1 w-1 rounded-full bg-slate-800"></span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.round(rating)
                            ? "text-yellow-400"
                            : "text-gray-600"
                        }
                        size={16}
                      />
                    ))}
                    <span className="ml-1 text-sm text-slate-700">
                      ({rating})
                    </span>
                  </div>
                </div>
              </div>

              {!soldOut && (
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl sm:text-4xl font-bold text-slate-700">
                      {formatCurrency(Number(finalPrice))}
                    </span>
                    {discount?.percent > 0 && (
                      <span className="ml-3 sm:text-xl text-sm text-slate-500 line-through">
                        {formatCurrency(price)}
                      </span>
                    )}
                  </div>

                  <div className="mt-2 flex items-center">
                    {stock > 0 ? (
                      <>
                        <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                        <span className="text-sm font-medium text-green-600">
                          {t("inStock")} - {stock} {t("available")}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="inline-block h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                        <span className="text-sm font-medium text-red-600">
                          {t("outOfStock")}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <p className=" text-slate-800 leading-relaxed text-[15px] sm:text-base">
                  {description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                {specifications?.speed && (
                  <div className="flex items-start space-x-2">
                    <span className="font-medium  text-slate-800 min-w-[90px]">
                      {t("speed")}:
                    </span>
                    <span className="text-slate-700">
                      {specifications.speed}
                    </span>
                  </div>
                )}
                {specifications?.tonearm && (
                  <div className="flex items-start space-x-2">
                    <span className="font-medium  text-slate-800 min-w-[90px]">
                      {t("tonearm")}:
                    </span>
                    <span className="text-slate-700 ">
                      {specifications.tonearm}
                    </span>
                  </div>
                )}
                <div className="flex items-start space-x-2">
                  <span className="font-medium text-slate-700 min-w-[90px]">
                    {t("warranty")}:
                  </span>
                  <span className="text-slate-800">
                    {warranty || t("noWarrantyInfo")}
                  </span>
                </div>
              </div>

              {!soldOut && features?.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-medium text-slate-800 mb-2">
                    {t("keyFeatures")}
                  </h3>
                  <ul className="space-y-2">
                    {features.slice(0, 3).map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        <FiCheckCircle className="text-primary-500 mt-1 mr-2" />
                        <span className="text-slate-800">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center space-x-3">
              {isInCart && <DeleteItem id={_id} />}

              {!soldOut && !isInCart && (
                <motion.button
                  onClick={handleAddToCart}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 w-full sm:w-auto lg:w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <FaShoppingCart />
                  {t("addToCart")}
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default TurntableDetailItem;
