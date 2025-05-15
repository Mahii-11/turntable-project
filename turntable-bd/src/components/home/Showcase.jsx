import { motion } from "framer-motion";
import { Check, Link } from "lucide-react";
import { useScrollAnimation } from "@/lib/animations";
import { useTranslation } from "react-i18next";
import useIsBangla from "../../utils/useIsBangla";

export default function Showcase() {
  const { ref, controls } = useScrollAnimation();
  const { t } = useTranslation();
  const isBangla = useIsBangla();

  return (
    <section id="showcase" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className={`${
              isBangla ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"
            } font-serif  font-bold mb-6`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("showcase.midheadline")}
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("showcase.paragraph1")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative group transition duration-500 ease-in-out">
            <div className="relative">
              <img
                src="/images/record-2.jpg"
                alt="Premium Turntable"
                className="rounded-lg shadow-2xl"
              />
              <motion.div
                className="absolute top-1/3 left-4 w-1/2 h-1/2 bg-black rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1/5 h-1/5 bg-[#D4AF37] rounded-full"></div>
                </div>
                <div className="absolute w-full h-full rounded-full opacity-10 bg-gradient-to-br from-white via-transparent to-transparent"></div>
              </motion.div>
            </div>
            <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 rounded-lg"></div>
          </div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8 },
              },
            }}
          >
            <h3
              className={`${
                isBangla ? "text-2xl" : "text-3xl"
              } font-serif text-[#D4AF37] font-semibold mb-6 `}
            >
              {t("showcase.smallheadline")}
            </h3>
            <p className="text-gray-300 mb-8">{t("showcase.paragraph2")}</p>
            <ul className={`${isBangla ? "text-sm" : ""} space-y-4 mb-8`}>
              <li className="flex items-center">
                <Check className="h-5 w-5  text-[#D4AF37] mr-3" />
                <span>{t("showcase.span1")}</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5  text-[#D4AF37] mr-3" />
                <span>{t("showcase.span2")}</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5  text-[#D4AF37] mr-3" />
                <span>{t("showcase.span3")}</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5  text-[#D4AF37] mr-3" />
                <span>{t("showcase.span4")}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
