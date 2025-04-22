import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "আমরা এখানে টার্নটেবল বিক্রির পাশাপাশি কিনেও থাকি, রিপেয়ার করে থাকি।",
  "Buy now from Amazing! Click করে আমাদের প্রোডাক্ট কিনুন Amazing থেকেও।",
  "বিশ্বস্ত সার্ভিস, সেরা মানের টার্নটেবল একসাথে।",
];

export default function AnimatedHeader() {
  const [index, setIndex] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowHeader(scrollY < 100); // hide if scrolled more than 100px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-black text-white h-12 flex items-center justify-center overflow-hidden border-b border-gray-800 relative z-50 fixed top-0 left-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="absolute text-center text-sm md:text-base px-4"
            >
              {messages[index]}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
