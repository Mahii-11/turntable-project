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

  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-10 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-2">
          Order Summary
        </h1>
        <p className="text-gray-400">Order ID: #{id}</p>
      </div>

      {/* Order Status */}
      <div className="mb-6 bg-gray-800 p-4 rounded-xl shadow">
        <div className="flex items-center gap-3 mb-2">
          <Info className="text-blue-400" />
          <h2 className="text-xl font-semibold">Status</h2>
        </div>
        <div className="flex items-center gap-3">
          {priority && (
            <span className="text-sm bg-red-600 text-white px-2 py-1 rounded-full">
              Priority
            </span>
          )}
          <span
            className={`text-sm px-2 py-1 rounded-full ${
              status === "confirmed"
                ? "bg-green-600"
                : status === "pending"
                ? "bg-yellow-500"
                : "bg-gray-500"
            }`}
          >
            {status.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Estimated Delivery */}
      <div className="mb-6 bg-gray-800 p-4 rounded-xl shadow">
        <div className="flex items-center gap-3 mb-2">
          <Timer className="text-pink-400" />
          <h2 className="text-xl font-semibold">Estimated Delivery</h2>
        </div>
        <p className="text-sm text-gray-300">
          {isLate ? (
            <span className="text-red-400">Order should have arrived</span>
          ) : (
            `Only ${deliveryIn} minutes left 😃`
          )}
        </p>
        <p className="text-gray-500 text-sm">
          ({formatDate(estimatedDelivery)})
        </p>
      </div>

      {/* Customer Info */}
      <div className="mb-6 bg-gray-800 p-4 rounded-xl shadow">
        <div className="flex items-center gap-3 mb-2">
          <User className="text-purple-400" />
          <h2 className="text-xl font-semibold">Customer Details</h2>
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
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-teal-400">Your Products</h2>
        <ul className="space-y-4">
          {cart.map((item) => (
            <OrderItem item={item} key={item.id} />
          ))}
        </ul>
      </div>

      {/* Price Summary */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-green-400 mb-4">
          Payment Summary
        </h2>
        <div className="space-y-2 text-lg">
          <p>
            <span className="text-gray-400">Base Price:</span>{" "}
            {formatCurrency(orderPrice)}
          </p>
          {priority && (
            <p>
              <span className="text-gray-400">Priority Charge:</span>{" "}
              {formatCurrency(priorityPrice)}
            </p>
          )}
          <p className="font-bold text-yellow-400">
            Total to Pay:{" "}
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
