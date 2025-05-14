import { Link } from "react-router-dom";
import { ShoppingCart, ArrowLeftCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

function EmptyCart() {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Your cart is empty. Browse and add some turntables to your collection."
        />
        <meta
          name="keywords"
          content="empty cart, turntable, shopping, add to cart, vinyl"
        />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="Your Cart is Empty - Turntables" />
        <meta
          property="og:description"
          content="Looks like you haven't added any turntables yet. Browse and add some vinyl magic to your cart."
        />
        <meta
          property="og:image"
          content="https://turntable-project-4sp3.vercel.app/og-image.jpg"
        />
        <meta name="robots" content="index, follow" />
        <title>Your Cart is Empty - Turntables</title>
      </Helmet>

      <div className="min-h-[80vh] flex flex-col justify-center items-center px-6 text-gray-100 bg-gray-900 -mt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <ShoppingCart className="w-16 h-16 mx-auto text-purple-500 animate-spin-slow" />
          <h2 className="text-3xl font-bold">Your Cart is Spinning Empty</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Looks like you haven’t added any turntables yet. Crank up your style
            and add some vinyl magic to your collection!
          </p>
          <Link
            to="/🎵Turntables"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300"
          >
            <ArrowLeftCircle className="w-5 h-5" />
            Back to Turntables
          </Link>
        </motion.div>
      </div>
    </>
  );
}

export default EmptyCart;
