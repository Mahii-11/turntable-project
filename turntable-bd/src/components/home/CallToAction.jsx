/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from "framer-motion";
import { useScrollAnimation, slideUp } from "@/lib/animations";
import { Link } from "react-router-dom";
export default function CallToAction() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="explore" className="relative py-20 md:py-32 bg-black">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Vinyl Records"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideUp}
          className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-10 md:p-16 shadow-2xl"
        >
          <div className="text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Rediscover Music
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Experience the authentic sound of vinyl with our premium
              turntables. Elevate your listening experience today.
            </p>
            <Link
              to="/products"
              className="inline-block bg-[#D4AF37] text-black font-medium px-10 py-4 rounded-full text-lg hover:bg-white transition duration-300"
            >
              Explore Collection
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
