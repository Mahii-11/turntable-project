// src/i18next-config.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import bn from "./locales/bn/translation.json";

// Check localStorage for saved language
const savedLang = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    bn: { translation: bn },
  },
  lng: savedLang, // use saved language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
