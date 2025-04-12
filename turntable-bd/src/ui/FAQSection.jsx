import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do You Buy/Sell/Consign Turntables?",
    answer:
      "Yes! The Turntable Shop buys, sells, and consigns Hi-Fi equipment and turntables. Please call the shop and we can assist you in selecting the best option for your needs.",
  },
  {
    question: "Do You Repair Turntables?",
    answer:
      "Yes, we specialize in turntable repairs and offer servicing for a wide range of models.",
  },
  {
    question: "Do You Work on Electronics? (Amps, Preamps, etc.)",
    answer:
      "Absolutely! We repair and service amps, preamps, and other vintage audio electronics.",
  },
  {
    question: "Do You Work on Consoles? (Vintage Cabinet Stereos)",
    answer: "Yes, we work on vintage stereo consoles and cabinetry systems.",
  },
  {
    question: "How Much do Repairs Cost?",
    answer:
      "Repair costs vary depending on the issue. Call us or stop by for a free consultation.",
  },

  {
    question: "Do I Need an Appointment?",
    answer: "No appointment is necessary — just drop by during business hours!",
  },
  {
    question: "Do You Sell Accessories (Needles, Belts, etc.)?",
    answer:
      "Yes! We carry a variety of accessories like needles, cartridges, belts, and cleaning kits.",
  },

  {
    question: "Do You Offer Warranty on Repairs?",
    answer:
      "Yes, all our repairs come with a 90-day limited warranty covering parts and labor.",
  },
  {
    question: "How Long Does a Typical Repair Take?",
    answer:
      "Turnaround time varies, but most repairs are completed within 7–10 business days.",
  },

  {
    question: "Can I Bring in My Own Parts for Repair?",
    answer:
      "Yes, but we recommend discussing it with our technicians first to ensure compatibility and safety.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="text-3xl font-semibold mb-10 text-center">FAQs</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-yellow-500">
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </div>
            <div
              className={`text-gray-600 mt-2 text-base transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
