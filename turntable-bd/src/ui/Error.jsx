import { useNavigate, useRouteError } from "react-router-dom";
import { motion } from "framer-motion";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center text-white px-4 text-center font-sans">
      {/* Spinning Vinyl */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="w-32 h-32 mb-6 bg-yellow-400 rounded-full shadow-lg border-8 border-white border-dashed animate-spin-slow"
      >
        {/* Turntable center */}
        <div className="w-6 h-6 bg-black rounded-full mx-auto mt-12" />
      </motion.div>

      {/* Glitchy Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="text-4xl md:text-5xl font-bold text-yellow-400 drop-shadow-md tracking-wide"
      >
        404 - Lost in the Groove 🎵
      </motion.h1>

      <p className="mt-4 text-gray-300 max-w-xl">
        {error?.data || error?.message || "Oops! We couldn't find that track."}
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(-1)}
        className="mt-8 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-md transition duration-300"
      >
        &larr; Spin Back
      </motion.button>
    </div>
  );
}

export default Error;
