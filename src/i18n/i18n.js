// src/i18n/i18n.js or src/i18n-config.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import enTranslations from "./en";
import fiTranslations from "./fi";
import svTranslations from "./sv";

// Translation resources
const resources = {
  en: {
    translation: enTranslations
  },
  fi: {
    translation: fiTranslations
  },
  sv: {
    translation: svTranslations
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') ,  // Use localStorage if available, else default to 'en'
    detection: {
      order: ['navigator', 'localStorage', 'cookie', 'querystring', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    debug: true,
    fallbackLng: "fi",
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
