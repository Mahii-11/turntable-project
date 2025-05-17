import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import useIsBangla from "../utils/useIsBangla";

const MeetOurFounder = () => {
  const { t } = useTranslation();
  const isBangla = useIsBangla();

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
        <meta name="description" content={t("founder.metaDescription")} />
        <meta name="author" content="Mohammed Al Amin" />
        <meta property="og:title" content={t("founder.ogTitle")} />
        <meta property="og:description" content={t("founder.ogDescription")} />
        <meta
          property="og:image"
          content="https://turntable-project-4sp3.vercel.app/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://turntable-project-4sp3.vercel.app/meet-our-founder"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("founder.twitterTitle")} />
        <meta
          name="twitter:description"
          content={t("founder.twitterDescription")}
        />
        <meta name="twitter:image" content="/images/Amin uncle.jpg" />
        <title>{t("founder.pageTitle")}</title>
      </Helmet>
      <div className="bg-black text-white px-4 py-16 md:px-16 -mt-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${
            isBangla ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"
          } font-bold text-center text-yellow-400 mb-12`}
        >
          {t("founder.heading")}
        </motion.h2>

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
              Mohammed Al Amin
            </h3>
            <p className="text-sm text-gray-400 mb-2">{t("founder.role")}</p>
            <p className="max-w-xl">{t("founder.quote")}</p>
          </div>
        </div>

        <h3 className="text-3xl font-semibold text-center mb-8 text-yellow-400">
          {t("founder.storyHeading")}
        </h3>
        <motion.p
          className="max-w-3xl mx-auto text-center text-gray-300 px-4 sm:px-8 md:px-12 leading-relaxed space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-lg sm:text-xl md:text-2xl font-semibold text-purple-400">
            {t("founder.story1")}
          </span>
          <span className="block text-base sm:text-lg md:text-xl font-light">
            {t("founder.story2")}
          </span>
          <span className="block text-base sm:text-lg md:text-xl font-light">
            {t("founder.story3")}
          </span>
          <span className="block mt-4 text-xl font-bold text-purple-500">
            — Mohammed Al Amin, {t("founder.title")}
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-semibold text-center mb-6 text-yellow-400">
            {t("founder.brandsHeading")}
          </h3>
          <p className="text-center text-gray-300 mb-4">
            {t("founder.brandsSubheading")}
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
