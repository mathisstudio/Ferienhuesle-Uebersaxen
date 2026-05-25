import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <header className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url('/images/titel_header.jpeg')` }}></div>
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1 className="hero-title text-serif">
          {t('heroTitle1')}<br />
          {t('heroTitle2')}
        </h1>
        <p className="hero-subtitle text-sans">{t('heroSubtitle')}</p>
        <button className="btn btn-light hero-btn" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          {t('heroBtn')}
        </button>
      </div>
    </header>
  );
};

export default Hero;
