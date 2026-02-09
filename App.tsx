
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookieConsent from './components/CookieConsent';

export type Page = 'home' | 'about' | 'services' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigate = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-grode-gold/30 bg-grode-cream">
      <Header isScrolled={isScrolled} currentPage={currentPage} onNavigate={navigate} />
      
      <main className="transition-opacity duration-500">
        {currentPage === 'home' && <HomePage onNavigate={navigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={navigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={navigate} />}
        {currentPage === 'privacy' && <PrivacyPage />}
        {currentPage === 'terms' && <TermsPage />}
      </main>

      <Footer onNavigate={navigate} />
      <CookieConsent onNavigate={navigate} />
    </div>
  );
};

export default App;
