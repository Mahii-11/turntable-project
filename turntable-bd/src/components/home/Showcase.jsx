import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/lib/animations";

export default function Showcase() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="showcase" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Premium Turntable Collection
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our handcrafted turntables that deliver exceptional sound
            quality and timeless elegance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative group transition duration-500 ease-in-out">
            <div className="relative">
              <img
                src="/images/record-2.jpg"
                alt="Premium Turntable"
                className="rounded-lg shadow-2xl"
              />
              <motion.div
                className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-black rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1/5 h-1/5 bg-[#D4AF37] rounded-full"></div>
                </div>
                <div className="absolute w-full h-full rounded-full opacity-10 bg-gradient-to-br from-white via-transparent to-transparent"></div>
              </motion.div>
            </div>
            <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 rounded-lg"></div>
          </div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8 },
              },
            }}
          >
            <h3 className="font-serif text-3xl text-[#D4AF37] font-semibold mb-6">
              Maestro Pro T-1
            </h3>
            <p className="text-gray-300 mb-8">
              A masterpiece of engineering, the Maestro Pro T-1 delivers
              unparalleled sound quality with its precision-engineered
              components and innovative design. Experience vinyl as the artists
              intended.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#D4AF37] mr-3" />
                <span>Direct drive motor with precise speed control</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#D4AF37] mr-3" />
                <span>Static balanced S-shaped tonearm</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#D4AF37] mr-3" />
                <span>Premium MM cartridge included</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#D4AF37] mr-3" />
                <span>Anti-vibration aluminum chassis</span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex items-center font-medium text-[#D4AF37] hover:underline"
            >
              View Specifications
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
