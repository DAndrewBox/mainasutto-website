import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationJP from './locales/jp/translation.json';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
  jp: {
    translation: translationJP,
  },
};

export const validateLanguage = (language) => {
  return Object.keys(resources).includes(language) ? language : i18n.language;
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    // lng: "en",  // if you're using a language detector, do not define the lng option

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
