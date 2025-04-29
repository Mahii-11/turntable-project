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

function Order() {
  const order = useLoaderData();

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

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-10 text-black font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-400">
          Your Turntables Order
        </h1>
        <p className="text-sm text-gray-400 mt-1">Order ID: #{id}</p>
      </div>

      {/* Order Status & Delivery */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Order Status */}
        <div className=" p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <Info className="text-blue-400" />
            <h2 className="text-xl font-semibold">Order Status</h2>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {priority && (
              <span className="text-xs bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
                <AlertTriangle size={14} /> Priority
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
              {displayStatus.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Estimated Delivery */}
        <div className=" p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <Timer className="text-pink-400" />
            <h2 className="text-xl font-semibold">Estimated Delivery</h2>
          </div>
          <p className="text-sm text-gray-300">
            {isLate ? (
              <span className="text-red-400 flex items-center gap-1">
                <AlertTriangle size={16} />
                Order should have arrived
              </span>
            ) : (
              <span className="flex items-center gap-1 text-green-400">
                <Clock size={16} /> {deliveryIn} minutes left
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
          <h2 className="text-xl font-semibold">Shipping Info</h2>
        </div>
        <p>
          <strong>Name:</strong> {customer}
        </p>
        <p className="flex items-center gap-2">
          <MapPin size={16} className="text-gray-400" />
          {address || "Not provided"}
        </p>
        <p className="flex items-center gap-2">
          <Phone size={16} className="text-gray-400" />
          {phone || "Not provided"}
        </p>
        <p className="flex items-center gap-2">
          <Mail size={16} className="text-gray-400" />
          {email || "Not provided"}
        </p>
      </div>

      {/* Cart Items */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-teal-400">
          Purchased Items
        </h2>
        <ul className="space-y-5">
          {cart.map((item) => (
            <OrderItem item={item} key={item.id} />
          ))}
        </ul>
      </div>

      {/* Payment Summary */}
      <div className=" p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-green-400 mb-4">
          Payment Summary
        </h2>
        <div className="space-y-2 text-lg">
          <p>
            <span className="text-gray-400">Items Total:</span>{" "}
            {formatCurrency(orderPrice)}
          </p>
          {priority && (
            <p>
              <span className="text-gray-400">Priority Delivery Fee:</span>{" "}
              {formatCurrency(priorityPrice)}
            </p>
          )}
          <p className="font-bold text-yellow-400 text-xl border-t pt-2 mt-2">
            Grand Total:{" "}
            {formatCurrency(orderPrice + (priority ? priorityPrice : 0))}
          </p>
        </div>
      </div>
    </motion.div>
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
