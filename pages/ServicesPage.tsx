
import React, { useEffect, useState } from 'react';
import { Page } from '../App';

interface ServicesPageProps {
  onNavigate?: (page: Page) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);
  const [expandedOffer, setExpandedOffer] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: 'smooth'
    });
  };

  const offeringItems = [
    {
      title: "Rekruttering til faste stillinger (Search & Selection)",
      body: "Når du skal ansette fast, handler det om å finne riktig person for oppgavene, teamet og kulturen dere bygger. Vi tar ansvar for prosessen fra behovsavklaring og stillingsprofil til målrettet søk, screening og intervjuer. Underveis får dere tydelige anbefalinger, god kandidatopplevelse og løpende fremdrift, slik at dere tar beslutninger på et godt grunnlag. Vi kan levere hele rekrutteringen, eller bidra der dere trenger ekstra kapasitet og kompetanse."
    },
    {
      title: "Executive search og headhunting",
      body: "Nøkkelroller og lederansettelser krever en diskret, presis og grundig prosess. Vi kartlegger markedet og jobber med direkte kontakt og nettverk for å nå kandidater som sjelden er tilgjengelige gjennom tradisjonelle utlysninger. Hver kandidat vurderes helhetlig, med vekt på lederskap, gjennomføringsevne og langsiktig match med organisasjonen. Dere får et trygt beslutningsgrunnlag når konsekvensene av feilansettelse er store."
    },
    {
      title: "Embedded rekruttering (Recruiter as a Service)",
      body: "Når rekrutteringsbehovet endrer seg raskt, tilbyr vi en fleksibel og skalerbar løsning der vi jobber som en part av teamet deres over en avtalt periode. Vi driver rekrutteringsløpene tett med lederne og sørger for flyt i prosessene, fra prioritering og sourcing til intervjuer og tilbud. Dere får dedikert rekrutteringskraft uten å ansette selv, og kan justere omfanget opp eller ned etter behov."
    },
    {
      title: "Bygging av intern rekrutteringskapasitet",
      body: "Når dere ønsker å eie rekrutteringen selv over tid, bistår vi med å bygge eller videreutvikle en intern rekrutteringsfunksjon som tåler både vekst og endring. Vi kartlegger hva som fungerer i dag, og etablerer systemer, prosesser og arbeidsmetoder som gir forutsigbarhet og kvalitet i rekrutteringsarbeidet.\n\nDette kan blant annet inkludere oppsett og forbedring av ATS, etablering av standardiserte rekrutteringsprosesser, arbeid med kandidatreiser og employer branding, samt ansettelse og opplæring av interne rekrutteringsressurser. Vi legger også til rette for en enkel og tydelig måte å måle og videreutvikle rekrutteringen på over tid."
    }
  ];

  return (
    <div className="bg-grode-cream min-h-screen font-sans text-grode-midnight">
      {/* 1. Hero Seksjon */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[95vh] flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center animate-slow-zoom opacity-20 mix-blend-multiply"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop")',
              transform: `translateY(${scrollY * 0.2}px) scale(1.1)`,
              filter: 'grayscale(30%) contrast(95%)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-grode-cream via-grode-cream/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-grode-cream" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-grode-midnight leading-[1.05] mb-8">
              Rekruttering <br />
              <span className="italic text-grode-dark-green">etter behov.</span>
            </h1>
            <div className="h-px bg-grode-gold/40 w-32" />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center animate-bounce cursor-pointer opacity-40" onClick={scrollToContent}>
            <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-grode-midnight mb-4">Les mer</span>
            <div className="w-px h-16 bg-grode-gold/60" />
          </div>
        </div>
      </section>

      {/* 2. Hva vi tilbyr */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start mb-20">
            <div className="lg:col-span-5">
              <h2 className="text-4xl lg:text-6xl font-serif text-grode-midnight leading-tight">
                Hva vi <br />
                <span className="italic font-light">tilbyr</span>
              </h2>
              <div className="w-12 h-px bg-grode-gold mt-8" />
            </div>
            <div className="lg:col-span-7 lg:pt-8">
              <p className="text-lg lg:text-xl font-light text-grode-midnight/80 leading-relaxed lg:pl-12 border-l border-grode-gold/20">
                Behovet for rekruttering kan være kortvarig eller langsiktig, operativt eller strategisk. Noen oppdrag krever diskresjon og grundighet, andre tempo og volum. Tjenestene våre er strukturert slik at de kan tilpasses både situasjonen dere står i og hva dere trenger.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
            {offeringItems.map((item, i) => {
              const isExpanded = expandedOffer === i;
              return (
                <div 
                  key={i} 
                  className={`group bg-grode-stone/5 border border-grode-midnight/5 rounded-sm overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'shadow-xl bg-white' : 'hover:bg-grode-stone/10'}`}
                >
                  <div 
                    className="p-8 lg:p-12 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                    onClick={() => setExpandedOffer(isExpanded ? null : i)}
                  >
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-2xl font-serif text-grode-midnight group-hover:text-grode-gold transition-colors duration-500">
                          {item.title}
                        </h3>
                      </div>
                      {!isExpanded && (
                        <p className="text-grode-midnight/50 font-light text-sm line-clamp-1 mt-2">
                          {item.body}
                        </p>
                      )}
                    </div>
                    
                    <button 
                      className={`flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 ${isExpanded ? 'text-grode-midnight' : 'text-grode-gold group-hover:text-grode-midnight'}`}
                    >
                      <span>{isExpanded ? 'Lukk' : 'Les mer'}</span>
                      <div className={`w-8 h-px bg-current transition-all duration-700 ${isExpanded ? 'w-12' : 'group-hover:w-12'}`} />
                    </button>
                  </div>

                  <div 
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-8 pb-8 lg:px-12 lg:pb-12 pt-0">
                      <div className="h-px bg-grode-gold/20 w-full mb-8" />
                      <div className="text-base lg:text-lg text-grode-midnight/70 font-light leading-relaxed space-y-4 max-w-3xl whitespace-pre-line">
                        {item.body}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Roller vi kjenner godt */}
      <section className="py-20 lg:py-24 bg-grode-stone/5 border-y border-grode-midnight/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 lg:mb-20">
            <div className="lg:col-span-6">
              <h2 className="text-4xl lg:text-5xl font-serif text-grode-midnight leading-[1.1]">
                Roller vi <br />
                <span className="italic text-grode-gold">kjenner godt</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-2">
              <div className="flex items-start">
                <div className="w-px h-12 bg-grode-gold/40 mr-8 hidden lg:block" />
                <p className="text-base lg:text-lg font-light text-grode-midnight/60 leading-relaxed">
                  Dette er fagområder og roller vi kjenner best.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
            {[
              { label: "Teknologi og engineering", details: "Utvikling, plattform, DevOps, infrastruktur, arkitektur, data, testing og support" },
              { label: "Produkt og design", details: "Produktledelse (PO/PM), UX/UI og tjenestedesign, research og produktnære roller" },
              { label: "Kommersielle roller", details: "Salg, marked, growth, business development og customer success" },
              { label: "Ledelse", details: "C-level, lederroller, prosjektledelse og strategiske nøkkelstillinger" }
            ].map((area, i) => (
              <div key={i} className="group flex flex-col pt-6 border-t border-grode-midnight/10 relative overflow-hidden transition-all duration-500 hover:border-grode-midnight/30">
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-grode-gold group-hover:w-full transition-all duration-700 ease-in-out" />
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-grode-gold mb-3">{area.label}</h4>
                <p className="text-sm text-grode-midnight/70 font-light leading-relaxed">{area.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Avsluttende CTA */}
      <section className="py-32 bg-grode-cream relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-grode-midnight/10" />

        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-serif mb-8 text-grode-midnight">
              Ta kontakt
            </h2>
            <p className="text-lg lg:text-xl text-grode-midnight/70 font-light mb-12 leading-relaxed">
              Vil du lære mer om hvordan vi jobber og om vi kan hjelpe dere videre? <br className="hidden md:block" />
              Ta gjerne kontakt for en uforpliktende prat.
            </p>
            <button 
              onClick={handleContactClick}
              className="group relative inline-flex items-center justify-center px-16 py-5 border border-grode-midnight text-grode-midnight text-[11px] font-bold uppercase tracking-[0.4em] overflow-hidden transition-all duration-700 rounded-sm hover:text-white"
            >
              <span className="relative z-10">Ta kontakt</span>
              <div className="absolute inset-0 bg-grode-midnight translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
