import { motion } from "framer-motion";
import {
  useScrollAnimation,
  staggerContainer,
  listItem,
} from "@/lib/animations";

function GalleryItem({ imageUrl, title, description }) {
  return (
    <motion.div
      variants={listItem}
      className="group overflow-hidden rounded-lg relative"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition duration-300 flex items-end justify-center p-6">
        <div className="text-center">
          <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const { ref, controls } = useScrollAnimation();

  const galleryItems = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Classic Series",
      description: "Timeless design with modern technology",
    },
    {
      imageUrl: "/images/record-1.jpg",
      title: "Modern Series",
      description: "Contemporary styling with premium components",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Professional Series",
      description: "Studio-grade performance for true audiophiles",
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-6"
          >
            Our Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Explore our range of premium turntables designed for every
            audiophile.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
