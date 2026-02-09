
import React, { useEffect, useState } from 'react';
import { Page } from '../App';

interface AboutPageProps {
  onNavigate?: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-grode-cream min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-64 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center animate-slow-zoom opacity-30 mix-blend-multiply"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop")',
              transform: `translateY(${scrollY * 0.2}px) scale(1.1)`,
              filter: 'grayscale(40%) contrast(90%)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-grode-cream via-grode-cream/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-grode-cream" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-grode-midnight leading-[1.05] mb-12">
              Rekruttering <br />
              <span className="italic text-grode-dark-green">gjort skikkelig.</span>
            </h1>
            <div 
              className="w-20 h-px bg-grode-gold/40" 
              style={{ width: `${Math.min(240, 80 + scrollY * 0.15)}px`, transition: 'width 0.15s ease-out' }}
            />
          </div>
        </div>
      </section>

      {/* 2. Manifesto Section - Forenklet for maksimal lesbarhet */}
      <section className="py-24 lg:py-40 bg-grode-midnight text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Venstre side: Overskrift */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <span className="text-grode-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">Om Grøde</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] italic">
                  Grøde er resultatet når <br />
                  <span className="text-grode-gold not-italic">grunnarbeidet er gjort skikkelig.</span>
                </h2>
                <div className="w-16 h-px bg-grode-gold/30 mt-10 hidden lg:block" />
              </div>
            </div>

            {/* Høyre side: Ny, forkortet tekst */}
            <div className="lg:col-span-7">
              <div className="max-w-2xl space-y-10">
                
                <div className="space-y-8 font-light text-lg lg:text-xl leading-relaxed text-white/80">
                  <p className="text-white">
                    Grøde er en vekst- og rekrutteringspartner for organisasjoner i utvikling og endring. Vi dekker et bredt spekter av roller innen teknologi, produkt, kommersielle funksjoner og ledelse, og tilpasser leveransen til behovet dere står i.
                  </p>
                  
                  <p>
                    Vi jobber ryddig og transparent, med realistiske vurderinger og tydelig kommunikasjon hele veien. Målet er å være mer enn en leverandør, og bidra til varig vekst for både virksomheter og mennesker.
                  </p>
                </div>

                {/* Link to Services */}
                <div className="pt-8">
                  <button 
                    onClick={() => onNavigate?.('services')}
                    className="group flex items-center space-x-6"
                  >
                    <div className="flex flex-col items-start">
                      <span className="text-grode-gold text-sm font-bold uppercase tracking-[0.3em] mb-2 group-hover:text-white transition-colors duration-500">
                        Les mer om våre tjenester
                      </span>
                      <div className="w-12 h-px bg-grode-gold/40 transition-all duration-700 group-hover:w-full group-hover:bg-white" />
                    </div>
                    <div className="w-10 h-10 rounded-full border border-grode-gold/20 flex items-center justify-center group-hover:border-white transition-colors">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-grode-gold group-hover:text-white transition-colors">
                        <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Slik jobber vi */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl md:text-5 font-serif text-grode-midnight mb-6">Slik jobber vi</h2>
            <div className="w-16 h-px bg-grode-gold/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mb-20 lg:mb-28">
            {[
              { 
                title: "Ærlighet før løfter", 
                desc: "Vi starter med realitetsorientering. Rolle, krav, lønnsnivå og marked må henge sammen. Hvis forutsetningene ikke gir mening, sier vi det tidlig, og vi tar ikke oppdrag vi ikke tror vi kan levere på.",
                color: "bg-grode-stone/5"
              },
              { 
                title: "Grundighet som gir bedre beslutninger", 
                desc: "Grundighet for oss handler om tydelige kriterier og struktur. Vi definerer hva som skal lykkes i rollen, bygger et enkelt scorecard, og kjører en prosess som gjør vurderingene sammenlignbare. Det gir tryggere beslutninger og færre omkamper.",
                color: "bg-white"
              },
              { 
                title: "Tempo, uten å miste kvalitet", 
                desc: "Vekstbedrifter trenger fremdrift. Vi holder tempo med tydelig plan, korte beslutningspunkter og tett oppfølging. Samtidig kutter vi ikke hjørner i vurdering og kvalitet, for det er der feilansettelser oppstår.",
                color: "bg-grode-stone/5"
              },
              { 
                title: "Mer enn CV", 
                desc: "CV forteller hvor folk har vært. Vi finner ut om de passer rollen dere faktisk trenger løst. Vi vurderer motivasjon, arbeidsform, samarbeid og læringstempo, og avklarer forventninger tidlig, begge veier.",
                color: "bg-white"
              },
              { 
                title: "Tydelig ansvar og eierskap", 
                desc: "Når vi tar et oppdrag, driver vi prosessen fremover. Vi holder dialogen varm i markedet, følger opp kandidater og kunde, og tar ansvar for at dere kommer til en beslutning dere kan stå inne for.",
                color: "bg-grode-stone/5"
              },
              { 
                title: "Håndverk i vurdering og utvelgelse", 
                desc: "God rekruttering er håndverk. Vi jobber metodisk med søk, screening, strukturert intervju og referanser. Vurderingene dokumenteres og begrunnes, slik at valget blir tydelig og etterprøvbart.",
                color: "bg-white"
              }
            ].map((point, i) => (
              <div 
                key={i} 
                className={`group ${point.color} p-10 rounded-sm border border-grode-midnight/5 hover:border-grode-gold/30 transition-all duration-500 shadow-sm hover:shadow-lg text-center flex flex-col items-center justify-center`}
              >
                <h3 className="text-lg font-serif text-grode-midnight mb-4 group-hover:text-grode-gold transition-colors">{point.title}</h3>
                <p className="text-grode-midnight/70 font-light leading-relaxed text-sm max-w-xs">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Button at the bottom of "Slik jobber vi" */}
          <div className="flex justify-center">
            <button 
              onClick={() => onNavigate?.('services')}
              className="group relative px-12 py-5 border border-grode-midnight text-grode-midnight text-[10px] font-bold uppercase tracking-[0.4em] overflow-hidden transition-all duration-700 rounded-sm hover:text-white"
            >
              <span className="relative z-10">Les mer om våre tjenester</span>
              <div className="absolute inset-0 bg-grode-midnight translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
