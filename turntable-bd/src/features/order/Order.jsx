/* eslint-disable no-unused-vars */
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import OrderItem from "./OrderItem";

import {
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  AlertTriangle,
  Timer,
  User,
  Info,
} from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Order() {
  const order = useLoaderData();
  const { t } = useTranslation();

  const {
    id,
    status,
    priorityPrice,
    priority,
    orderPrice,
    estimatedDelivery,
    customer,
    address,
    email,
    phone,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  const isLate = deliveryIn < 0;

  const displayStatus =
    status === "pending" && deliveryIn <= 0 ? "confirmed" : status;

  // Google Ads Purchase conversion tracking on order page load
  useEffect(() => {
    if (window.gtag && displayStatus === "confirmed") {
      window.gtag("event", "conversion", {
        send_to: "AW-17108788133/ZjdECIGM1MwaEKXHjd4_",
        transaction_id: id || "",
      });
    }
  }, [id, displayStatus]);

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t("meta2.description", { id })} />
        <meta name="keywords" content={t("meta2.keywords")} />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content={t("meta.title", { id })} />
        <meta
          property="og:description"
          content={t("meta2.ogDescription", { id })}
        />
        <meta
          property="og:image"
          content="https://turntable-project-4sp3.vercel.app/og-image.jpg"
        />
        <meta
          property="og:url"
          content={`https://turntable-project-4sp3.vercel.app/order/${id}`}
        />
        <meta name="robots" content="index, follow" />
        <title>{t("meta2.title", { id })}</title>
      </Helmet>

      <motion.div
        className="max-w-6xl mx-auto px-4 py-10 text-black font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-400">
            {t("order.header")}
          </h1>
          <p className="text-sm text-gray-400 mt-1">{t("order.id", { id })}</p>
        </div>

        {/* Order Status & Delivery */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Order Status */}
          <div className=" p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <Info className="text-blue-400" />
              <h2 className="text-xl font-semibold">
                {t("order.statusTitle")}
              </h2>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {priority && (
                <span className="text-xs bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
                  <AlertTriangle size={14} /> {t("order.priority")}
                </span>
              )}
              <span
                className={`text-xs px-3 py-1 rounded-full flex items-center gap-1 ${
                  displayStatus === "confirmed"
                    ? "bg-green-600"
                    : displayStatus === "pending"
                    ? "bg-yellow-500"
                    : "bg-gray-500"
                }`}
              >
                {displayStatus === "confirmed" ? (
                  <CheckCircle2 size={14} />
                ) : (
                  <Clock size={14} />
                )}
                {t(`order.status.${displayStatus}`)}
              </span>
            </div>
          </div>

          {/* Estimated Delivery */}
          <div className=" p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <Timer className="text-pink-400" />
              <h2 className="text-xl font-semibold">
                {t("order.estimatedDelivery")}
              </h2>
            </div>
            <p className="text-sm text-gray-300">
              {isLate ? (
                <span className="text-red-400 flex items-center gap-1">
                  <AlertTriangle size={16} />
                  {t("order.lateMessage")}
                </span>
              ) : (
                <span className="flex items-center gap-1 text-green-400">
                  <Clock size={16} /> {deliveryIn} {t("order.minutesLeft")}
                </span>
              )}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              ({formatDate(estimatedDelivery)})
            </p>
          </div>
        </div>

        {/* Customer Info */}
        <div className=" p-6 rounded-xl shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-3">
            <User className="text-purple-400" />
            <h2 className="text-xl font-semibold">{t("order.shippingInfo")}</h2>
          </div>
          <p>
            <strong>{t("order.name")}:</strong> {customer}
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={16} className="text-gray-400" />
            {address || t("order.notProvided")}
          </p>
          <p className="flex items-center gap-2">
            <Phone size={16} className="text-gray-400" />
            {phone || t("order.notProvided")}
          </p>
          <p className="flex items-center gap-2">
            <Mail size={16} className="text-gray-400" />
            {email || t("order.notProvided")}
          </p>
        </div>

        {/* Cart Items */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-teal-400">
            {t("order.purchasedItems")}
          </h2>
          <ul className="space-y-5">
            {cart.map((item) => (
              <OrderItem item={item} key={item._id} />
            ))}
          </ul>
        </div>

        {/* Payment Summary */}
        <div className=" p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-green-400 mb-4">
            {t("order.paymentSummary")}
          </h2>
          <div className="space-y-2 text-lg">
            <p>
              <span className="text-gray-400">{t("order.itemsTotal")}:</span>{" "}
              {formatCurrency(orderPrice)}
            </p>
            {priority && (
              <p>
                <span className="text-gray-400">{t("order.priorityFee")}:</span>{" "}
                {formatCurrency(priorityPrice)}
              </p>
            )}
            <p className="font-bold text-yellow-400 text-xl border-t pt-2 mt-2">
              {t("order.grandTotal")}:{" "}
              {formatCurrency(orderPrice + (priority ? priorityPrice : 0))}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export async function loader({ params }) {
  try {
    const order = await getOrder(params.id);
    return order || null;
  } catch (error) {
    console.error("Failed to load order:", error);
    return null;
  }
}

export default Order;
