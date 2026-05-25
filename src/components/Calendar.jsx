import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Calendar.css';

const Calendar = () => {
  const { t } = useLanguage();

  return (
    <section className="section calendar-section">
      <div className="container">
        <h2 className="text-serif section-title">{t('calendarTitle')}</h2>
        <div className="calendar-container">
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=uebersaxen21%40gmail.com&ctz=Europe%2FVienna&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&bgcolor=%232a2a2a" 
            style={{border: 0}} 
            width="100%" 
            height="500" 
            frameBorder="0" 
            scrolling="no"
            title="Google Kalender"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
