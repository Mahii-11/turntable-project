import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(true);
  const { t } = useTranslation();

  const testimonials = t("testimonials.items", { returnObjects: true });

  const handleChange = (newIndex) => {
    setShow(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setShow(true);
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
          {t("testimonials.headline")}
        </h2>

        <div
          className={`max-w-2xl mx-auto bg-gray-900 p-6 rounded-xl shadow-md text-center transition-all duration-500 ease-in-out transform ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3 className="text-lg md:text-xl font-semibold mb-2">"{quote}"</h3>
          <div className="text-yellow-300 text-lg mb-4">
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </div>
          <p className="text-slate-200 text-base leading-relaxed">{content}</p>
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
