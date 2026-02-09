
import React from 'react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Container with Animation */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1513519107127-1bed33748e4c?q=80&w=2070&auto=format&fit=crop")',
            filter: 'brightness(0.7)' 
          }}
        />
        {/* Darker top gradient to ensure header visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-grode-midnight/70 via-transparent to-grode-cream/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-12 leading-tight drop-shadow-lg">
          Din partner for <br />
          <span className="italic">rekruttering</span> og <span className="italic">vekst</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-4 bg-grode-gold text-grode-midnight text-xs font-bold uppercase tracking-[0.25em] hover:bg-white transition-all duration-500 rounded-sm shadow-xl"
          >
            Ta kontakt
          </button>
          <button 
            onClick={() => onNavigate('about')}
            className="px-12 py-4 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.25em] hover:bg-white/10 transition-all duration-300 backdrop-blur-sm rounded-sm"
          >
            Om Grøde
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
