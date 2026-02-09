
import React, { useState } from 'react';
import { Page } from '../App';

interface HeaderProps {
  isScrolled: boolean;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDark = isScrolled || currentPage !== 'home';

  const navLinks = [
    { label: 'Om oss', value: 'about' as Page },
    { label: 'Tjenester', value: 'services' as Page },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isDark ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Refined Text Branding Logo */}
          <div 
            className="flex flex-col items-start cursor-pointer group" 
            onClick={() => handleNavigate('home')}
          >
            <span className={`text-2xl md:text-3xl font-serif tracking-[0.05em] leading-none transition-colors duration-500 ${isDark ? 'text-grode-midnight' : 'text-white'}`}>
              GRØDE
            </span>
            <span className={`text-[8px] md:text-[9px] uppercase tracking-[0.5em] font-bold mt-1.5 transition-colors duration-500 text-grode-gold`}>
              REKRUTTERING
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <button 
                key={link.value}
                onClick={() => handleNavigate(link.value)}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 relative group ${
                  currentPage === link.value 
                    ? 'text-grode-gold' 
                    : isDark ? 'text-grode-midnight/60 hover:text-grode-midnight' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-grode-gold transition-all duration-300 group-hover:w-full ${currentPage === link.value ? 'w-full' : ''}`} />
              </button>
            ))}
            <button 
              onClick={() => {
                if (currentPage === 'home') {
                  document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleNavigate('home');
                  setTimeout(() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }
              }}
              className={`px-10 py-3.5 border text-[10px] font-bold rounded-sm uppercase tracking-[0.3em] transition-all duration-500 ${
                isDark 
                  ? 'border-grode-midnight bg-grode-midnight text-white hover:bg-transparent hover:text-grode-midnight' 
                  : 'border-white/30 text-white hover:bg-white hover:text-grode-midnight'
              }`}
            >
              Ta kontakt
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 z-50 transition-colors duration-500 ${isDark || isMobileMenuOpen ? 'text-grode-midnight' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Meny"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-[1px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-[1px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-[1px] bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[45] bg-white transition-transform duration-700 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-12 px-6">
          {navLinks.map((link) => (
            <button 
              key={link.value}
              onClick={() => handleNavigate(link.value)}
              className="text-2xl font-serif text-grode-midnight tracking-wider uppercase"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => {
              handleNavigate('home');
              setTimeout(() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' }), 500);
              setIsMobileMenuOpen(false);
            }}
            className="text-2xl font-serif text-grode-gold italic"
          >
            Kontakt oss
          </button>
          
          <div className="pt-12 text-center flex flex-col items-center">
            <span className="text-2xl font-serif text-grode-midnight/40 tracking-[0.1em]">GRØDE</span>
            <span className="text-[7px] uppercase tracking-[0.6em] font-bold text-grode-gold mt-1 opacity-60">REKRUTTERING</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
