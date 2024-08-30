import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      },
      ua: {
        translation: {
          "Welcome to React": "Bienvenue à React et react-i18next"
        }
      },
    },
    lng: "ua", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
  });

export default i18n;
