import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpApi)
  .use(initReactI18next) // Passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    supportedLngs: ['en', 'ua', 'ru'],
    lng: 'ua', // Default language
    fallbackLng: 'en', // Fallback language
    debug: true,
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
    backend: {
      loadPath: '/src/locales/{{lng}}/translation.json',
    },
    saveMissing: true,
    saveMissingTo: 'current',
    missingKeyHandler: (lngs, key, fallbackValue) => {
      console.warn(
        `Missing translation for key: "${key}" in languages: ${lngs.join(', ')}`,
      );
      return fallbackValue || key; // Show key as fallback
    },
  });

export default i18n;
