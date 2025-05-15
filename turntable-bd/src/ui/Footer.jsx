import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
//import useIsBangla from "../../utils/useIsBangla";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  // const isBangla = useIsBangla();
  return (
    <footer className="bg-gray-900 text-gray-400 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t("footer.smallheadline")}
            </h3>
            <p className="mb-4 text-sm">{t("footer.paragraph")}</p>
            <div className="flex space-x-4">
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://youtube.com/yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t("footer.smallheadline1")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/turntables"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.li1")}
                </Link>
              </li>
              <li>
                <Link
                  to="/records"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.li2")}
                </Link>
              </li>
              <li>
                <Link
                  to="/speakers"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.li3")}
                </Link>
              </li>
              <li>
                <Link
                  to="/amplifiers"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.li4")}
                </Link>
              </li>
              <li>
                <Link
                  to="/accessories"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.li5")}
                </Link>
              </li>
              <li>
                <Link
                  to="/gift-cards"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.li6")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t("footer.smallheadline2")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  {t("footer.li7")}
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping-returns"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.li8")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.li10")}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.li11")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t("footer.smallheadline3")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2" />
                <span>{t("footer.li12")}</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span>{t("footer.li13")}</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>bangladeshturntable@gmail.com</span>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2" />
                <span>{t("footer.li15")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 text-sm text-center">
          <p>
            &copy; {t("footer.li16")} {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
