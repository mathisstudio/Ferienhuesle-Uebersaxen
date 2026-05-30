import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './InfoSection.css';

const InfoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section info-section dark-section">
      <div className="container info-grid">
        <div className="info-text">
          <h2 className="text-serif section-title info-title">{t('infoTitle')}</h2>
          <p className="text-sans">
            {t('infoText')}
          </p>
        </div>
        
        <div className="info-stats">
          <div className="stat-item">
            <span className="text-serif stat-number">7</span>
            <span className="text-sans stat-label">{t('statPersons')}</span>
          </div>
          <div className="stat-item">
            <span className="text-serif stat-number">3</span>
            <span className="text-sans stat-label">{t('statBedrooms')}</span>
          </div>
          <div className="stat-item">
            <span className="text-serif stat-number">1</span>
            <span className="text-sans stat-label">{t('statSofa')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
