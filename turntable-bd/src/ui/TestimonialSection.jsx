import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "There is No Better Place, Hands Down.",
    rating: 5,
    content:
      "If you are looking for a turntable or any knowledge surrounding them – there is no better place, hands down. Nick found the perfect table for us and made it all meaningful.",
  },
  {
    quote: "Amazing service and expertise!",
    rating: 5,
    content:
      "I was a total beginner, but the staff walked me through everything I needed. I now own a beautiful setup that fits my budget perfectly.",
  },
  {
    quote: "Highly recommended for vinyl lovers.",
    rating: 4,
    content:
      "Found exactly what I needed. The team explained every feature and made sure I was confident with my choice.",
  },
  {
    quote: "Very satisfied with the experience.",
    rating: 5,
    content:
      "Smooth purchase and fantastic post-sales support. I’ll definitely come back here for future upgrades.",
  },
  {
    quote: "Top-notch turntables!",
    rating: 5,
    content:
      "From vintage designs to modern builds, they had everything I dreamed of. Left the store smiling!",
  },
  {
    quote: "Great budget-friendly options.",
    rating: 4,
    content:
      "Didn’t expect such quality at this price range. It’s perfect for my home studio.",
  },
  {
    quote: "Excellent knowledge and advice.",
    rating: 5,
    content:
      "The team knew their stuff and helped me avoid beginner mistakes. Much appreciated.",
  },
  {
    quote: "A vinyl paradise!",
    rating: 5,
    content:
      "If you’re into vinyl, this is heaven. Great gear, good vibes, and even better people.",
  },
  {
    quote: "Fast delivery and packaging!",
    rating: 5,
    content:
      "Bought online and it arrived within two days in perfect condition. Very impressed.",
  },
  {
    quote: "Unmatched product quality.",
    rating: 5,
    content:
      "The turntable I bought here sounds better than anything I’ve used before. Pure joy!",
  },
  {
    quote: "Everything was crystal clear.",
    rating: 4,
    content:
      "They explained every part and component in detail. I never felt lost during the process.",
  },
  {
    quote: "Great after-sales support.",
    rating: 5,
    content:
      "Had a small issue, and they resolved it quickly without hassle. Truly customer-first!",
  },
  {
    quote: "Perfect gift for my dad.",
    rating: 5,
    content:
      "Bought a turntable here as a gift and he hasn’t stopped using it since. Thanks for the help!",
  },
  {
    quote: "Staff were really friendly.",
    rating: 5,
    content:
      "Felt like I was shopping with old friends. No pressure, just good advice.",
  },
  {
    quote: "I’ll be back for sure.",
    rating: 4,
    content:
      "They made my first vinyl setup experience unforgettable. I already have my eye on more accessories.",
  },
  {
    quote: "Top-tier components and sound.",
    rating: 5,
    content:
      "The clarity, the build, the attention to detail – this place delivers quality.",
  },
  {
    quote: "Effortless setup process.",
    rating: 4,
    content:
      "They even helped me set it up at home via video call. Super helpful!",
  },
  {
    quote: "Saved me from a bad buy elsewhere.",
    rating: 5,
    content:
      "Almost bought a cheap knockoff online. Came here just in time and got educated and equipped!",
  },
  {
    quote: "My records sound brand new.",
    rating: 5,
    content:
      "With my new setup, even old records sound fresh. Never going back to digital-only!",
  },
  {
    quote: "Felt like a VIP.",
    rating: 5,
    content:
      "From the welcome to the walkthrough, I was treated with so much care. They really care about music lovers.",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(true);

  const handleChange = (newIndex) => {
    setShow(false); // Start hiding
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setShow(true); // Show with animation
    }, 100);
  };

  const handleNext = () => {
    const nextIndex =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    handleChange(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    handleChange(prevIndex);
  };

  const { quote, rating, content } = testimonials[currentIndex];

  return (
    <section className="relative py-10 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Vinyl Records"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Content over background */}
      <div className="relative z-10">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8 text-white">
          What Our Clients Have to Say:
        </h2>

        <div
          className={`max-w-2xl mx-auto bg-gray-900 p-6 rounded-xl shadow-md text-center transition-all duration-500 ease-in-out transform ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3 className="text-lg md:text-xl font-semibold mb-2">"{quote}"</h3>
          <div className="text-black text-lg mb-4">
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </div>
          <p className="text-gray-700 text-base leading-relaxed">{content}</p>
        </div>

        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={handlePrev}
            className="text-black bg-amber-50 px-4 py-2 rounded-full transition cursor-pointer"
          >
            <ChevronLeft className="text-yellow-500 w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="text-black bg-amber-50 px-4 py-2 rounded-full transition cursor-pointer"
          >
            <ChevronRight className="text-yellow-500 w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
