import { useTranslation as useTranslationOriginal } from 'react-i18next';
import i18n from '../public/i18n';

export const useTranslation = () => {
  const { t: originalTranslator } = useTranslationOriginal();

  return {
    t: (key: string) => originalTranslator(key, { output: 'string', locale: i18n.language }),
  };
};
