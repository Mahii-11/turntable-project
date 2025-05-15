import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = t("faq.items", { returnObjects: true });

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-black">
      <h2 className="text-3xl font-semibold mb-10 text-center text-white">
        {t("faq.headline")}
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-white">{faq.question}</h3>
              <span className="text-yellow-500">
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </div>
            <div
              className={`text-stone-100 mt-2 text-base transition-all duration-300 ease-in-out ${
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
