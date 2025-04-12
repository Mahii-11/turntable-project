import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function FeaturedCard({ product, index }) {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full h-60 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-end">
          <button
            onClick={() => navigate(`/products/${product.id}`)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full font-medium transition duration-300"
          >
            View More
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedCard;
