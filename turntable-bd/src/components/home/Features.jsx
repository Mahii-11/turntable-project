import { motion } from "framer-motion";
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

  const features = [
    {
      icon: <Music className="text-2xl text-black" />,
      title: "Superior Sound Quality",
      description:
        "Experience the warmth and richness of vinyl with our precision-engineered components that capture every detail of your records.",
    },
    {
      icon: <Cog className="text-2xl text-black" />,
      title: "Precision Engineering",
      description:
        "Meticulously crafted with high-quality materials and innovative technology to ensure accurate playback and durability.",
    },
    {
      icon: <PaintbrushVertical className="text-2xl text-black" />,
      title: "Timeless Design",
      description:
        "Elegant aesthetics that complement any interior, combining modern minimalism with classic turntable styling.",
    },
    {
      icon: <Sliders className="text-2xl text-black" />,
      title: "Customizable Settings",
      description:
        "Fine-tune your listening experience with adjustable settings for pitch control, anti-skate, and tracking force.",
    },
    {
      icon: <Shield className="text-2xl text-black" />,
      title: "Anti-Vibration Technology",
      description:
        "Advanced dampening systems isolate your records from external vibrations for clearer, more precise sound reproduction.",
    },
    {
      icon: <Plug className="text-2xl text-black" />,
      title: "Connectivity Options",
      description:
        "Seamlessly integrate with your existing audio setup through multiple connection options, including phono preamp outputs.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 md:py-32 bg-gradient-to-b from-black to-black"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience Excellence
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our turntables combine innovative technology with timeless design to
            deliver an authentic vinyl experience.
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
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
