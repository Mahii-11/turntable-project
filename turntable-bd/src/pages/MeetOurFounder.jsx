import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const MeetOurFounder = () => {
  const brands = [
    "ADC",
    "Audio Technica",
    "Ariston",
    "Bang & Olufsen",
    "BIC",
    "BSR",
    "Denon",
    "Dual",
    "Elac",
    "Fisher",
    "Fluance",
    "Hitachi",
    "JVC",
    "Kenwood",
    "Kyocera",
    "Lenco",
    "Marantz",
    "Modular Component System",
    "Music Hall",
    "Optonica",
    "Philips",
    "Pioneer",
    "Pro-Ject",
    "Realistic",
    "Rega",
    "Sansui",
    "Sony",
    "Stanton",
    "Technics",
    "Thorens",
    "Yamaha",
  ];

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Meet the founder of BD Turntable, a passionate advocate for vintage turntable restoration."
        />
        <meta name="author" content="Mohammed Al Amin" />
        <meta property="og:title" content="Meet Our Founder - BD Turntable" />
        <meta
          property="og:description"
          content="Get to know Mohammed Al Amin, the visionary behind BD Turntable, and the story of how his love for vintage audio sparked a business."
        />
        <meta property="og:image" content="/images/Amin uncle.jpg" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/meet-our-founder"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meet Our Founder - BD Turntable" />
        <meta
          name="twitter:description"
          content="Discover the story behind BD Turntable and meet the founder, Mohammed Al Amin, who revitalizes vintage turntables with passion."
        />
        <meta name="twitter:image" content="/images/Amin uncle.jpg" />
        <title>Meet Our Founder - BD Turntable</title>
      </Helmet>
      <div className="bg-black text-white px-4 py-16 md:px-16 -mt-8">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-12"
        >
          Meet Our Founder
        </motion.h2>

        {/* Founder Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <motion.img
            src="/images/Amin uncle.jpg"
            alt="Founder"
            className="w-48 h-56 rounded-full object-cover shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-amber-400">
              Mohammmed Al Amin
            </h3>
            <p className="text-sm text-gray-400 mb-2">Founder & Visionary</p>
            <p className="max-w-xl">
              "Music is not just sound; it's a movement, a lifestyle. BD
              Turntable is my way of bringing timeless sound back to life."
            </p>
          </div>
        </div>

        {/* Story & History */}
        <h3 className="text-3xl font-semibold text-center mb-8 text-yellow-400">
          How BD Turntable Was Born
        </h3>
        <motion.p
          className="max-w-3xl mx-auto text-center text-gray-300 px-4 sm:px-8 md:px-12 leading-relaxed space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-lg sm:text-xl md:text-2xl font-semibold text-purple-400">
            My journey began with a deep fascination for the timeless design and
            engineering of Technics turntables. What started as an attempt to
            revive a single worn-out unit slowly unfolded into something far
            more meaningful.
          </span>
          <span className="block text-base sm:text-lg md:text-xl font-light">
            That first project wasn’t just a repair — it was a doorway into a
            world I’d unknowingly been searching for. As I restored more
            turntables, word quietly spread. Inquiries came in — not just for
            buying, but for repairing, restoring, and preserving these analog
            masterpieces. The passion only intensified with each build, each
            unique model, each story a customer shared about their turntable.
          </span>
          <span className="block text-base sm:text-lg md:text-xl font-light">
            Driven by a desire to give vintage audio a second life, I officially
            founded BD Turntable. Over the years, I’ve had the privilege of
            servicing hundreds of models from legendary names in the industry.
            Each restoration isn't just a technical task — it's a chance to
            preserve history, revive sound, and deliver nostalgia in its purest
            form. This isn’t just a business. It’s a commitment to those who
            believe music deserves to be heard the way it was meant to — warm,
            rich, and real.
          </span>
          <span className="block mt-4 text-xl font-bold text-purple-500">
            — Mohammed Al Amin, Founder of BD Turntable
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-semibold text-center mb-6 text-yellow-400">
            Common Turntable Brands We’ve Serviced
          </h3>
          <p className="text-center text-gray-300 mb-4">
            Over the years, we’ve proudly worked on models from:
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:bg-amber-500 hover:text-black transition-all"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default MeetOurFounder;
