import React from 'react';
import { useTranslation } from 'react-i18next';
import TripleToggleSwitch from './TripleToggleSwitch.js';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = value => {
    switch (value) {
      case 'left':
        i18n.changeLanguage('en');
        break;
      case 'center':
        i18n.changeLanguage('ro');
        break;
      case 'right':
        i18n.changeLanguage('it');
        break;
      default:
        break;
    }
  };

  const labels = {
    left: {
      title: 'EN',
      value: 'left',
    },
    center: {
      title: 'RO',
      value: 'center',
    },
    right: {
      title: 'IT',
      value: 'right',
    },
  };

  return <TripleToggleSwitch labels={labels} onChange={handleLanguageChange} />;
};

export default LanguageSwitcher;
