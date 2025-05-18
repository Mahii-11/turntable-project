import { Link } from "react-router-dom";
import { ShoppingCart, ArrowLeftCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function EmptyCart() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t("meta5.description")} />
        <meta name="keywords" content={t("meta5.keywords")} />
        <meta name="author" content="Bd Turntable" />
        <meta property="og:title" content={t("meta5.ogTitle")} />
        <meta property="og:description" content={t("meta5.ogDescription")} />
        <meta
          property="og:image"
          content="https://turntable-project-4sp3.vercel.app/og-image.jpg"
        />
        <meta name="robots" content="index, follow" />
        <title>{t("title")}</title>
      </Helmet>

      <div className="min-h-[80vh] flex flex-col justify-center items-center px-6 text-gray-100 bg-gray-900 -mt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <ShoppingCart className="w-16 h-16 mx-auto text-purple-500 animate-spin-slow" />
          <h2 className="text-3xl font-bold">{t("heading")}</h2>
          <p className="text-gray-400 max-w-md mx-auto">{t("message")}</p>
          <Link
            to="/🎵Turntables"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300"
          >
            <ArrowLeftCircle className="w-5 h-5" />
            {t("backButton")}
          </Link>
        </motion.div>
      </div>
    </>
  );
}

export default EmptyCart;
