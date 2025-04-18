/* eslint-disable no-unused-vars */
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail, Phone, MapPin, Star } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const cart = useSelector(getCart);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const [priority, setPriority] = useState(false);

  return (
    <motion.div
      className="max-w-2xl mx-auto p-6 bg-zinc-900 text-white rounded-1xl shadow-lg -mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6 flex justify-center items-center gap-2">
        <ShoppingBag className="w-8 h-8 text-purple-400" />
        Place Your Order
      </h2>

      <Form method="POST" className="space-y-5">
        <div>
          <label className="block mb-1 font-semibold">First Name</label>
          <div className="flex items-center bg-zinc-800 p-2 rounded-xl">
            <CheckCircle className="text-green-400 mr-2" />
            <input
              type="text"
              name="customer"
              required
              className="w-full bg-transparent outline-none text-white"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <div className="flex items-center bg-zinc-800 p-2 rounded-xl">
            <Mail className="text-sky-400 mr-2" />
            <input
              type="email"
              name="email"
              required
              className="w-full bg-transparent outline-none text-white"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Phone</label>
          <div className="flex items-center bg-zinc-800 p-2 rounded-xl">
            <Phone className="text-pink-400 mr-2" />
            <input
              type="tel"
              name="phone"
              required
              className="w-full bg-transparent outline-none text-white"
              placeholder="+8801XXXXXXXXX"
            />
          </div>
          {formErrors?.phone && (
            <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Address</label>
          <div className="flex items-center bg-zinc-800 p-2 rounded-xl">
            <MapPin className="text-yellow-400 mr-2" />
            <input
              type="text"
              name="address"
              required
              className="w-full bg-transparent outline-none text-white"
              placeholder="House 123, Dhaka"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.checked)}
            className="accent-purple-500 scale-125"
          />
          <label
            htmlFor="priority"
            className="text-sm font-medium flex items-center"
          >
            <Star className="w-4 h-4 mr-1 text-yellow-500" />
            Make it a priority order?
          </label>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-purple-600 hover:bg-purple-700 transition-colors px-4 py-3 rounded-xl text-lg font-semibold shadow-lg"
        >
          {isSubmitting ? "Placing order..." : "🛍️ Confirm Order"}
        </motion.button>
      </Form>
    </motion.div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true" || data.priority === "on",
  };

  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";
  }

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
