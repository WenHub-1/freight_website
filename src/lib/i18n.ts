import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../locales/translation/en.json";
import ar from "../locales/translation/ar.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: "en",
    debug: false,
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
    },
  });

// Handle RTL direction change
i18n.on("languageChanged", (lng) => {
  //const dir = lng === "ar" ? "rtl" : "ltr";
  //document.documentElement.dir = dir;
  document.documentElement.lang = lng;
});

export default i18n;
