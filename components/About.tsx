
import React from 'react';
import { Page } from '../App';

interface AboutProps {
  onNavigate?: (page: Page) => void;
  isPreview?: boolean;
}

const About: React.FC<AboutProps> = ({ onNavigate, isPreview }) => {
  return (
    <section className="section-padding bg-grode-cream/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Visual Element */}
            <div className="w-full lg:w-5/12 relative group">
              <div className="absolute inset-0 bg-grode-dark-green/10 -rotate-3 rounded-sm group-hover:rotate-0 transition-transform duration-700" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl bg-grode-stone/20">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
                  alt="Menneskelig interaksjon og rekruttering" 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>

            {/* Content Element */}
            <div className="w-full lg:w-7/12">
              <h2 className="text-4xl md:text-5xl font-serif text-grode-midnight mb-10 leading-tight">
                En vekstpartner for <br />
                <span className="italic text-grode-earth">virksomheter i utvikling</span>
              </h2>
              
              <div className="space-y-8 text-grode-midnight/70 leading-relaxed font-light text-lg">
                <p>
                  Grøde er en vekst og rekrutteringspartner for virksomheter i endring. Vi jobber tett med kundene våre og bidrar med tydelige vurderinger og ryddige prosesser i rekrutteringsarbeidet.
                </p>
                
                {isPreview && onNavigate && (
                  <div className="pt-6">
                    <button 
                      onClick={() => onNavigate('about')}
                      className="group inline-flex flex-col items-start"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-grode-midnight mb-2">Les mer om oss</span>
                      <div className="w-12 h-px bg-grode-gold transition-all duration-500 group-hover:w-32" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
