import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useIsBangla from "../../utils/useIsBangla";
import {
  Music,
  Cog,
  PaintbrushVertical,
  Sliders,
  Shield,
  Plug,
} from "lucide-react";
import {
  useScrollAnimation,
  staggerContainer,
  listItem,
} from "@/lib/animations";

function FeatureCard({ icon, title, description }) {
  const { ref, controls } = useScrollAnimation(0.1);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={listItem}
      className="bg-gray-900 rounded-xl p-8 transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

export default function Features() {
  const { ref, controls } = useScrollAnimation();
  const { t } = useTranslation();
  const isBangla = useIsBangla();

  const icons = [
    <Music className="text-2xl text-black" />,
    <Cog className="text-2xl text-black" />,
    <PaintbrushVertical className="text-2xl text-black" />,
    <Sliders className="text-2xl text-black" />,
    <Shield className="text-2xl text-black" />,
    <Plug className="text-2xl text-black" />,
  ];

  const features = t("features.list", { returnObjects: true });

  return (
    <section
      id="features"
      className="py-20 md:py-32 bg-gradient-to-b from-black to-black"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            className={`${
              isBangla ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"
            } font-serif font-bold mb-6`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("features.midheadline")}
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("features.paragraph")}
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={icons[index]}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
