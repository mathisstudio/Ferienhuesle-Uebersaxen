import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Gallery.css';

// Using exactly the images provided in the auswahl folder
const images = [
  'IMG_3773.jpeg',
  'IMG_4253.jpeg',
  'IMG_8439.jpeg',
  'Threema_2026-01-02_11-59-54.jpeg',
  'Threema_2026-01-02_12-00-16.jpeg',
  'Threema_2026-01-02_12-00-33.jpeg',
  'Threema_2026-01-02_12-00-37.jpeg',
  'Threema_2026-01-02_12-04-28.jpeg',
  'Threema_2026-01-02_12-04-49.jpeg',
  'Threema_2026-01-02_12-05-07.jpeg',
  'Threema_2026-01-02_12-05-11.jpeg',
  'Threema_2026-01-03_12-56-28.jpeg',
  'Threema_2026-01-03_12-56-31.jpeg',
  'uebersaxen_05.jpg',
  'uebersaxen_17.jpg',
  'uebersaxen_66.jpg',
  'uebersaxen_91.jpg',
  'uebersaxen_93.jpg'
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useLanguage();

  return (
    <section className="section gallery-section">
      <div className="container">
        <h2 className="text-serif section-title">{t('galleryTitle')}</h2>
        <div className="masonry-grid">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="masonry-item"
              onClick={() => setSelectedImage(`/images/${img}`)}
            >
              <img src={`/images/${img}`} alt={`Hütte Übersaxen ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close">&times;</button>
          <img src={selectedImage} alt="Enlarged view" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
