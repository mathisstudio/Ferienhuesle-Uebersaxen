import React from 'react';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Gallery from './components/Gallery';
import Calendar from './components/Calendar';
import Webcam from './components/Webcam';
import Location from './components/Location';
import LanguageSwitcher from './components/LanguageSwitcher';
import { LanguageProvider } from './i18n/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app-wrapper">
        <LanguageSwitcher />
        <Hero />
        <InfoSection />
        <Gallery />
        <Calendar />
        {/* <Webcam /> - Vorübergehend ausgeblendet */}
        <Location />
      </div>
    </LanguageProvider>
  );
}

export default App;
