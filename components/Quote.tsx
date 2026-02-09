
import React from 'react';

const Quote: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-grode-midnight/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="w-px h-12 bg-grode-gold/30 mb-12" />
          
          <blockquote className="text-2xl md:text-3xl font-serif italic text-grode-midnight/80 leading-relaxed mb-12">
            "Gode ansettelser skaper merverdi for både mennesker og virksomheter. Det er det Grøde jobber med."
          </blockquote>
          
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-grode-cream border border-grode-gold/20 flex items-center justify-center mb-4">
              <span className="text-grode-gold font-serif italic text-sm">K</span>
            </div>
            <h3 className="text-sm font-serif text-grode-midnight">Karl Wik</h3>
            <p className="text-[8px] text-grode-gold uppercase tracking-[0.4em] font-bold mt-1">Daglig leder & seniorkonsulent</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
