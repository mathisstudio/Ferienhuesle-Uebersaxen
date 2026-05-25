import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Webcam.css';

const Webcam = () => {
  const { t } = useLanguage();

  return (
    <section className="section webcam-section">
      <div className="container">
        <h2 className="text-serif section-title">{t('webcamTitle')}</h2>
        <div className="webcam-container">
          {/* PLACEHOLDER: Webcam video feed or iframe */}
          <div className="webcam-placeholder">
            <p className="text-sans">{t('webcamLoading')}</p>
            <p className="text-sans" style={{fontSize: '0.8rem', color: '#666', marginTop: '1rem'}}>
              {t('webcamHint')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webcam;
