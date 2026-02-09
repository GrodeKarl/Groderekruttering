
import React from 'react';
import { Page } from '../App';

interface ServicesProps {
  onNavigate?: (page: Page) => void;
  isPreview?: boolean;
}

const Services: React.FC<ServicesProps> = ({ onNavigate, isPreview }) => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtil dekorativ bakgrunn for å definere rommet */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-grode-stone/5 -z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-stretch">
            
            {/* Venstre side: Overskrift og Handling */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="max-w-md">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-grode-midnight leading-[1.15] mb-12">
                  Rekruttering <br />
                  <span className="italic text-grode-dark-green font-light">gjort skikkelig.</span>
                </h2>
                
                {isPreview && onNavigate && (
                  <div className="mt-4">
                    <button 
                      onClick={() => onNavigate('services')}
                      className="group relative px-10 py-5 bg-grode-midnight text-white text-[10px] font-bold uppercase tracking-[0.4em] overflow-hidden transition-all duration-700 rounded-sm shadow-lg hover:shadow-grode-gold/20"
                    >
                      <span className="relative z-10 flex items-center space-x-3">
                        <span>Utforsk våre tjenester</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-grode-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Høyre side: Den forklarende teksten */}
            <div className="lg:col-span-7 relative flex flex-col justify-center">
              {/* Vertikal linje som fungerer som visuelt anker */}
              <div className="hidden lg:block absolute -left-16 top-0 bottom-0 w-px bg-grode-gold/20" />
              
              <div className="space-y-10 lg:pl-4 max-w-xl">
                <p className="text-xl md:text-2xl font-light text-grode-midnight/90 leading-relaxed italic border-l-2 border-grode-gold/10 pl-6 lg:border-none lg:pl-0">
                  Vekst skapes av folk. <br className="hidden md:block" />
                  Grøde hjelper deg å finne de rette.
                </p>
                
                <div className="space-y-8">
                  <p className="text-base md:text-lg font-light text-grode-midnight/60 leading-relaxed">
                    Vi tar ansvar for hele eller deler av rekrutteringsarbeidet, fra search til en helhetlig prosess.
                  </p>
                  
                  <div className="pt-2">
                    <p className="text-base md:text-lg font-medium text-grode-midnight/80 leading-relaxed relative inline-block">
                      Hver ansettelse skal drive virksomheten videre.
                      <span className="absolute -bottom-2 left-0 w-12 h-px bg-grode-gold/40" />
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
