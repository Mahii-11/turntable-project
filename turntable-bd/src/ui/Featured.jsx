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
    <section className="py-16 bg-black" id="featured">
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
