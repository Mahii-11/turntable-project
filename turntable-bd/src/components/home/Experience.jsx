import { motion } from "framer-motion";
import { Headphones, HandMetal, Disc } from "lucide-react";
import { useScrollAnimation, fadeIn, slideUp } from "@/lib/animations";
import { useTranslation } from "react-i18next";
import useIsBangla from "../../utils/useIsBangla";

export default function Experience() {
  const { ref, controls } = useScrollAnimation();
  const { t } = useTranslation();
  const isBangla = useIsBangla();

  return (
    <section id="experience" className="relative py-20 md:py-32 bg-black">
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Vinyl Records Collection"
          className="w-full h-full object-cover"
          style={{ transform: "translateZ(-10px) scale(1.15)" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={slideUp}
            className={`${
              isBangla ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"
            } font-serif font-bold mb-8`}
          >
            {t("experience.title.prefix")}{" "}
            <span className="text-[#D4AF37]">
              {t("experience.title.highlight")}
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            className="text-xl text-gray-300 mb-12"
          >
            {t("experience.paragraph")}
          </motion.p>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6">
              <div className="text-4xl text-[#D4AF37] mb-4">
                <Headphones size={48} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">
                {t("experience.cards.0.title")}
              </h3>
              <p className="text-gray-400">
                {t("experience.cards.0.description")}
              </p>
            </div>

            <div className="p-6">
              <div className="text-4xl text-[#D4AF37] mb-4">
                <HandMetal size={48} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">
                {t("experience.cards.1.title")}
              </h3>
              <p className="text-gray-400">
                {t("experience.cards.1.description")}
              </p>
            </div>

            <div className="p-6">
              <div className="text-4xl text-[#D4AF37] mb-4">
                <Disc size={48} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">
                {t("experience.cards.2.title")}
              </h3>
              <p className="text-gray-400">
                {t("experience.cards.2.description")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
