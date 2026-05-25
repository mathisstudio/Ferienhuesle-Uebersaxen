import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Location.css';

const Location = () => {
  const { t } = useLanguage();

  return (
    <section className="section location-section dark-section">
      <div className="container location-grid">
        <div className="location-info">
          <h2 className="text-serif section-title text-accent">{t('locationTitle')}</h2>
          
          <div className="address-block">
            <h3 className="text-serif text-accent address-title">{t('addressTitle')}</h3>
            <p className="text-sans address-text">
              {t('addressLine1')}<br />
              {t('addressLine2')}<br />
              {t('addressLine3')}
            </p>
          </div>

          <div className="arrival-block">
            <h3 className="text-sans">{t('arrivalTitle')}</h3>
            <p className="text-sans text-muted">
              <strong>{t('arrivalWarning')}</strong><br />
              {t('arrivalText')}
            </p>
          </div>
        </div>

        <div className="location-map">
          <iframe 
            src="https://maps.google.com/maps?q=Gulmweg%2021%20%C3%9Cbersaxen&t=k&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: '400px', borderRadius: '8px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>

      <div className="container booking-cta-container">
        <div className="booking-cta-block">
          <h3 className="text-serif text-xl">{t('bookingTitle')}</h3>
          <p className="text-sans text-muted" style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>
            {t('bookingText')}
          </p>
          <a href="mailto:uebersaxen21@gmail.com?subject=Buchungsanfrage Hütte Übersaxen" className="btn btn-light cta-btn">
            {t('bookingBtn')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
