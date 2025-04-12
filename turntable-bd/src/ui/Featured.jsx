/* import { useNavigate } from "react-router-dom";
const featuredProducts = [
  {
    id: "classic-vinyl",
    name: "Classic Vinyl Spinner",
    description: "Pure analog sound, perfect for collectors.",
    image: "/images/record-1.jpg",
  },
  {
    id: "dj-deck-modern",
    name: "Modern DJ Deck",
    description: "Built for precision, loved by DJs.",
    image: "/images/record-2.jpg",
  },
  {
    id: "retro-player",
    name: "Retro Vibes Player",
    description: "Old-school charm with a modern twist.",
    image: "/images/record-3.jpg",
  },
];

function Featured() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-100" id="featured">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-500">
          Featured Turntables
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured; */

import FeaturedCard from "./FeaturedCard";

const featuredProducts = [
  {
    id: "classic-vinyl",
    name: "Classic Vinyl Spinner",
    description: "Pure analog sound, perfect for collectors.",
    image: "/images/record-1.jpg",
  },
  {
    id: "dj-deck-modern",
    name: "Modern DJ Deck",
    description: "Built for precision, loved by DJs.",
    image: "/images/record-2.jpg",
  },
  {
    id: "retro-player",
    name: "Retro Vibes Player",
    description: "Old-school charm with a modern twist.",
    image: "/images/record-3.jpg",
  },
];

function Featured() {
  return (
    <section className="py-16 bg-gray-100" id="featured">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-500">
          Featured Turntables
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <FeaturedCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
