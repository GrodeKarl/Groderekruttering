
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mgovjjre', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('submitted');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="section-padding bg-grode-midnight text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-grode-gold font-semibold mb-4 block">Kontakt oss</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Start med en prat</h2>
            <p className="text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Fortell oss litt om behovet deres – vi følger opp innen 2 virkedager.
            </p>
          </div>

          {/* Contact Form Container */}
          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-sm border border-white/10 mb-16 min-h-[400px] flex flex-col justify-center">
            {status === 'submitted' ? (
              <div className="text-center animate-fade-in py-12">
                <div className="w-16 h-16 rounded-full border border-grode-gold flex items-center justify-center mx-auto mb-8">
                  <svg className="w-8 h-8 text-grode-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">Takk for din henvendelse</h3>
                <p className="text-white/60 font-light max-sm mx-auto leading-relaxed">
                  Vi har mottatt meldingen din og vil ta kontakt med deg så snart som mulig.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-10 text-[10px] uppercase tracking-widest text-grode-gold hover:text-white transition-colors"
                >
                  Send en ny melding
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/60">Navn</label>
                    <input 
                      name="name"
                      type="text" 
                      required
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-grode-gold transition-colors font-light placeholder:text-white/20"
                      placeholder="Ditt fulle navn"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/60">E-post</label>
                    <input 
                      name="email"
                      type="email" 
                      required
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-grode-gold transition-colors font-light placeholder:text-white/20"
                      placeholder="din@epost.no"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/60">Firma / Organisasjon</label>
                    <input 
                      name="company"
                      type="text" 
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-grode-gold transition-colors font-light placeholder:text-white/20"
                      placeholder="Navn på selskap"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/60">Telefon</label>
                    <input 
                      name="phone"
                      type="tel" 
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-grode-gold transition-colors font-light placeholder:text-white/20"
                      placeholder="Ditt telefonnummer"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60">Melding</label>
                  <textarea 
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-grode-gold transition-colors font-light resize-none placeholder:text-white/20"
                    placeholder="Hvordan kan vi hjelpe deg?"
                  />
                </div>
                
                {status === 'error' && (
                  <p className="text-red-400 text-xs font-light">Noe gikk galt. Vennligst prøv igjen eller send oss en e-post direkte.</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`w-full py-5 bg-grode-gold text-grode-midnight font-bold uppercase tracking-[0.25em] text-xs transition-all duration-500 rounded-sm ${status === 'submitting' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'}`}
                >
                  {status === 'submitting' ? 'Sender...' : 'Send melding'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Below Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full border border-grode-gold/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-grode-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">E-post</p>
                  <a href="mailto:karl@grodepartner.no" className="text-lg font-light hover:text-grode-gold transition-colors">karl@grodepartner.no</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full border border-grode-gold/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-grode-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Telefon</p>
                  <a href="tel:+4748421850" className="text-lg font-light hover:text-grode-gold transition-colors">+47 48 42 18 50</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
