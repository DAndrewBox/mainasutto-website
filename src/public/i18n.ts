import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationJP from './locales/jp/translation.json';

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

/**
 * Validates the provided language against the available resources.
 * If the language is valid, it returns the language; otherwise, it returns the default language.
 *
 * @param language - The language to validate, which can be a string or null.
 * @returns The validated language or the default language if the provided language is invalid.
 */
export const validateLanguage = (language: string | null) => {
  return Object.keys(resources).includes(language) ? language : i18n.language;
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
