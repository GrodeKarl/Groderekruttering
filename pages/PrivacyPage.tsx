
import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-grode-cream min-h-screen pt-40 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white p-12 lg:p-20 shadow-sm border border-grode-stone/10 rounded-sm">
          <h1 className="text-4xl md:text-5xl font-serif text-grode-midnight mb-12">Personvernerklæring</h1>
          
          <div className="prose prose-grode space-y-10 text-grode-midnight/80 font-light leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-xl font-serif text-grode-midnight">1. Innledning</h2>
              <p>
                Grøde Rekruttering AS ("vi", "oss", "vår") tar personvern på alvor. Denne erklæringen forklarer hvordan vi samler inn, bruker og beskytter dine personopplysninger når du besøker vår nettside eller benytter våre tjenester.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-serif text-grode-midnight">2. Opplysninger vi samler inn</h2>
              <p>
                Vi samler inn informasjon du frivillig oppgir via vårt kontaktskjema (navn, e-post, telefonnummer, firma). I tillegg samler vi inn anonymiserte data om bruk av nettsiden via informasjonskapsler for å forbedre brukeropplevelsen.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-serif text-grode-midnight">3. Formål med behandlingen</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>For å svare på dine henvendelser</li>
                <li>For å kunne levere rekrutteringstjenester</li>
                <li>For å forbedre nettsidens funksjonalitet og innhold</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-serif text-grode-midnight">4. Dine rettigheter</h2>
              <p>
                Du har rett til innsyn i hvilke opplysninger vi har lagret om deg, og du kan når som helst be om at disse slettes eller korrigeres ved å kontakte oss på karl@grodepartner.no.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-serif text-grode-midnight">5. Endringer</h2>
              <p>
                Vi forbeholder oss retten til å oppdatere denne erklæringen. Siste revisjon: {new Date().toLocaleDateString('nb-NO')}.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
