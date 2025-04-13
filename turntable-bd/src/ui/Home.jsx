import FAQSection from "./FAQSection";
import Featured from "./Featured";
import Footer from "./Footer";
import TestimonialSection from "./TestimonialSection";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Home() {
  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div>
      <div className="min-h-screen bg-gray-50 -mt-8">
        <div
          className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white p-6"
          style={{ backgroundImage: `url("/images/record-1.jpg")` }}
        >
          <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-300">
              Spin the Rhythm 🎶
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Experience the raw magic of vinyl. Classic sound, modern passion.
              Let's vibe with every beat, every spin.
            </p>
            <button
              className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition duration-300 cursor-pointer"
              onClick={() => {
                const el = document.getElementById("products");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Explore Collection
            </button>
          </div>
        </div>
      </div>
      <section className="py-16 bg-white" id="about">
        <motion.div
          ref={containerRef}
          className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0 }}
          animate={containerInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            ref={imageRef}
            src="/images/record-2.jpg"
            alt="Inside the Shop"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
            initial={{ opacity: 0, x: -20 }}
            animate={
              imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
          />
          <motion.div
            ref={contentRef}
            className="md:w-1/2 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={
              contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-yellow-500"
              initial={{ opacity: 0, y: 15 }}
              animate={
                contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
              }
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              About Our Shop
            </motion.h2>
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={contentInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              At <span className="font-semibold">Spin The Rhythm</span>, we're
              more than just a vinyl store — we're a celebration of analog music
              and timeless sound. Whether you're a seasoned collector or a new
              vinyl enthusiast, our curated selection of records and turntables
              will take you on a nostalgic journey through musical history.
            </motion.p>
            <motion.p
              className="mt-4 text-lg"
              initial={{ opacity: 0 }}
              animate={contentInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              Located in the heart of the city, our shop is a cozy space filled
              with good vibes, passionate music lovers, and iconic records from
              every era.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
      <Featured />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default Home;
