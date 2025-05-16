import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/cards";
import { Separators } from "../components/ui/separators";
import { CheckCircle, Settings, Drill, Paintbrush } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
//import useIsBangla from "../../utils/useIsBangla";

export default function ServicesPage() {
  const { t } = useTranslation();
  //const isBangla = useIsBangla();

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="ClassicVinyl Services - Expert turntable repair, restoration, and upgrades."
        />
        <meta name="author" content="ClassicVinyl" />
        <meta property="og:title" content="ClassicVinyl Services" />
        <meta
          property="og:description"
          content="Expert turntable repair, restoration, and upgrade services to keep your vinyl sounding its best."
        />
        <meta
          property="og:image"
          content="https://turntable-project-4sp3.vercel.app/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://turntable-project-4sp3.vercel.app/services"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ClassicVinyl Services" />
        <meta
          name="twitter:description"
          content="Keep your vinyl in perfect condition with our expert turntable services."
        />
        <meta name="twitter:image" content="/images/your-image.jpg" />
        <title>The Turntable Shop Services - BD</title>
      </Helmet>

      <div className="bg-[#222222] -mt-8">
        {/* Hero Section */}
        <section className="relative py-16 bg-[#121212] text-white overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                {t("services.headline")}
              </h1>
              <p className="text-lg max-w-2xl text-gray-300">
                {t("services.paragraph")}
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF37] to-transparent opacity-15"
          />
        </section>

        {/* Introduction */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="md:w-1/2"
              >
                <h2 className="font-serif text-3xl font-bold text-[#D4AF37] mb-4">
                  {t("services.midheadline")}
                </h2>
                <p className="text-gray-300 mb-4">{t("services.paragraph1")}</p>
                <p className="text-gray-300">{t("services.paragraph2")}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="md:w-1/2"
              >
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  src="/images/download (1).jpeg"
                  alt="Vintage turntable"
                  className="rounded-lg shadow-md w-92 h-92"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-12 bg-[#1A1A1A]">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-3xl font-bold text-[#D4AF37] mb-8 text-center"
            >
              {t("services.midheadline1")}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Accessories & Upgrades */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="bg-[#2A2A2A] shadow-lg border-0 h-full">
                  <CardHeader className="pb-2">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.3,
                      }}
                      className="w-12 h-12 rounded-full bg-[#D4AF37] bg-opacity-20 flex items-center justify-center mb-4"
                    >
                      <CheckCircle className="h-6 w-6 text-[#161205]" />
                    </motion.div>
                    <CardTitle className="font-serif text-xl text-[#D4AF37]">
                      {t("services.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{t("services.paragraph3")}</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Mechanical & Electronics Servicing */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="bg-[#2A2A2A] shadow-lg border-0 h-full">
                  <CardHeader className="pb-2">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.4,
                      }}
                      className="w-12 h-12 rounded-full bg-[#D4AF37] bg-opacity-20 flex items-center justify-center mb-4"
                    >
                      <Settings className="h-6 w-6 text-[#030302]" />
                    </motion.div>
                    <CardTitle className="font-serif text-xl text-[#D4AF37]">
                      {t("services.smallheadline2")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{t("services.content")}</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cosmetic Restorations */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="bg-[#2A2A2A] shadow-lg border-0 h-full">
                  <CardHeader className="pb-2">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.5,
                      }}
                      className="w-12 h-12 rounded-full bg-[#D4AF37] bg-opacity-20 flex items-center justify-center mb-4"
                    >
                      <Paintbrush className="h-6 w-6 text-[#080600]" />
                    </motion.div>
                    <CardTitle className="font-serif text-xl text-[#D4AF37]">
                      {t("services.title1")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{t("services.content1")}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-12 bg-[#222222]">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-[#D4AF37] mb-8 text-center">
              {t("services.midheadline2")}
            </h2>

            {/* Accessories & Upgrades */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-[#D4AF37] mr-2" />
                <h3 className="font-serif text-2xl font-semibold text-[#D4AF37]">
                  {t("services.smallheadline")}
                </h3>
              </div>
              <Separators className="mb-6 bg-gray-700" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-3 text-lg text-gray-200">
                    {t("services.exsmallheadline")}
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span> {t("services.li1")}</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li2")}</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li3")}</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li4")}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 text-lg text-gray-200">
                    {t("services.li5")}
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li6")}</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li7")}</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li8")}</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li9")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mechanical & Electronics Servicing  */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Settings className="h-6 w-6 text-[#D4AF37] mr-2" />
                <h3 className="font-serif text-2xl font-semibold text-[#D4AF37]">
                  {t("services.smallheadline2")}
                </h3>
              </div>
              <Separators className="mb-6 bg-gray-700" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-3 text-lg text-gray-200">
                    {t("services.h4")}
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li10")}</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li11")}</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li12")}</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li13")}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 text-lg text-gray-200">
                    {t("services.h4-1")}
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li14")}</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li15")}</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li6")}</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li7")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/*Cosmetic Restorations  */}
            <div>
              <div className="flex items-center mb-4">
                <Paintbrush className="h-6 w-6 text-[#D4AF37] mr-2" />
                <h3 className="font-serif text-2xl font-semibold text-[#D4AF37]">
                  {t("services.h3-1")}
                </h3>
              </div>
              <Separators className="mb-6 bg-gray-700" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-3 text-lg text-gray-200">
                    {t("services.h4-2")}
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li20")}</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li21")}</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li22")}</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li23")}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 text-lg text-gray-200">
                    {t("services.h4-3")}
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li24")}</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li26")}</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li27")}</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>{t("services.li28")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty Information */}
        <section className="py-12 bg-[#1A1A1A]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-[#2A2A2A] rounded-lg shadow-md p-8 border border-gray-700">
              <h2 className="font-serif text-2xl font-bold text-[#D4AF37] mb-4 text-center">
                {t("services.h2")}
              </h2>
              <p className="text-gray-300 mb-4">{t("services.paragraph4")}</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-[#D4AF37]">
                      {t("services.strong1")}
                    </strong>{" "}
                    {t("services.strong2")}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-[#D4AF37]">
                      {t("services.li3")}
                    </strong>{" "}
                    {t("services.strong4")}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                  <span>{t("services.li29")}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                  <span>{t("services.span")}</span>
                </li>
              </ul>
              <p className="text-gray-300 mt-4">{t("services.paragraph5")}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
