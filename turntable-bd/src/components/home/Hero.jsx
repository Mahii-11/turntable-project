import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useIsBangla from "../../utils/useIsBangla";
export default function Hero() {
  const { t } = useTranslation();
  const isBangla = useIsBangla();
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1545128485-c400e7702796?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Turntable Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            // className="font-serif font-bold text-5xl md:text-7xl mb-6"
            className={`${
              isBangla ? "text-2xl md:text-4xl mb-4" : "text-5xl md:text-7xl"
            }font-serif font-bold mb-6`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t("hero.headline1")}
            <span className="text-[#D4AF37]"> {t("hero.headline2")}</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t("hero.paragraph")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link
              to="/🎵Turntables"
              className="inline-block bg-[#D4AF37] text-black font-medium px-8 py-4 rounded-full hover:bg-white transition duration-300 mr-4 mb-4 md:mb-0"
            >
              {t("hero.button1")}
            </Link>
            <a
              href="#features"
              className="inline-block bg-transparent border-2 border-white text-white font-medium px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              {t("hero.button2")}
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <a
          href="#showcase"
          className="flex flex-col items-center text-white hover:text-[#D4AF37] transition duration-300"
        >
          <span className="mb-2"> {t("hero.span")}</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
