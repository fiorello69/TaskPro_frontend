import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import roTranslations from './locales/ro/translation.json';
import itTranslations from './locales/it/translation.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  ro: {
    translation: roTranslations,
  },
  it: {
    translation: itTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
