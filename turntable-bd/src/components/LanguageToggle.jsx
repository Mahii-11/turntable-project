import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [isBangla, setIsBangla] = useState(i18n.language === "bn");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
      setIsBangla(savedLang === "bn");
    }
  }, [i18n]);

  const handleToggle = () => {
    const newLang = isBangla ? "en" : "bn";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
    setIsBangla(!isBangla);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">
        {isBangla ? "বাংলা" : "English"}
      </span>
      <button
        onClick={handleToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
          isBangla ? "bg-yellow-500" : "bg-yellow-600"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
            isBangla ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
