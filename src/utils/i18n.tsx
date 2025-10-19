import { Trans as OriginalTrans, useTranslation as useTranslationOriginal } from 'react-i18next';
import i18n from '../public/i18n';

export const useTranslation = () => {
  const { t: originalTranslator } = useTranslationOriginal();

  if (localStorage.getItem('i18nextLng')) {
    const savedLang = localStorage.getItem('i18nextLng') as string;
    if (i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }

  return {
    t: (key: string) => originalTranslator(key, { output: 'string', locale: i18n.language, fallbackLng: 'en' }),
    Trans: (props) => <OriginalTrans i18nKey={props.i18nKey} components={{ bold: <strong />, br: <br /> }} />,
  };
};
