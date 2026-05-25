import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button 
        className={`lang-btn ${language === 'de' ? 'active' : ''}`}
        onClick={() => setLanguage('de')}
      >
        DE
      </button>
      <span className="lang-separator">|</span>
      <button 
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
