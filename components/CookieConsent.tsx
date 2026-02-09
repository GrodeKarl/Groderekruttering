
import React, { useState, useEffect } from 'react';
import { Page } from '../App';

interface CookieConsentProps {
  onNavigate: (page: Page) => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('grode-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('grode-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('grode-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] animate-fade-in-up">
      <div className="max-w-xl mx-auto bg-white shadow-2xl border border-grode-stone/20 p-8 rounded-sm backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-grode-gold mb-3">Informasjonskapsler & Personvern</h4>
            <p className="text-sm font-light text-grode-midnight/70 leading-relaxed">
              Vi bruker informasjonskapsler for å forbedre din opplevelse. Ved å fortsette å bruke nettsiden godtar du vår bruk av cookies. 
              Les mer i vår <button onClick={() => onNavigate('privacy')} className="text-grode-midnight font-medium underline underline-offset-4 hover:text-grode-gold transition-colors">personvernerklæring</button>.
            </p>
          </div>
          <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto">
            <button 
              onClick={handleAccept}
              className="flex-1 px-8 py-3 bg-grode-midnight text-white text-[10px] font-bold uppercase tracking-widest hover:bg-grode-gold transition-all duration-300"
            >
              Godta alle
            </button>
            <button 
              onClick={handleDecline}
              className="flex-1 px-8 py-3 border border-grode-stone text-grode-midnight text-[10px] font-bold uppercase tracking-widest hover:bg-grode-stone/10 transition-all duration-300"
            >
              Kun nødvendige
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
