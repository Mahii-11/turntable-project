// src/utils/useIsBangla.js
import { useTranslation } from "react-i18next";

export default function useIsBangla() {
  const { i18n } = useTranslation();
  return i18n.language === "bn";
}
