
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-grode-cream min-h-screen pt-40 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white p-12 lg:p-20 shadow-sm border border-grode-stone/10 rounded-sm">
          <h1 className="text-4xl md:text-5xl font-serif text-grode-midnight mb-12">Betingelser for bruk</h1>
          
          <div className="prose prose-grode space-y-10 text-grode-midnight/80 font-light leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-xl font-serif text-grode-midnight">1. Aksept av vilkår</h2>
              <p>
                Ved å bruke dette nettstedet samtykker du i å være bundet av disse brukervilkårene. Hvis du ikke godtar vilkårene, ber vi deg om å ikke bruke nettstedet.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-serif text-grode-midnight">2. Immaterielle rettigheter</h2>
              <p>
                Alt innhold på dette nettstedet, inkludert tekst, bilder, logoer og grafikk, tilhører Grøde Rekruttering AS og er beskyttet av opphavsrettslige regler. Kopiering eller bruk av innhold uten skriftlig samtykke er ikke tillatt.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-serif text-grode-midnight">3. Ansvarsbegrensning</h2>
              <p>
                Grøde Rekruttering AS tilstreber at all informasjon på nettstedet er korrekt, men vi kan ikke garantere for feil eller utelatelser. Bruk av informasjon fra nettstedet skjer på eget ansvar.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-serif text-grode-midnight">4. Tjenester</h2>
              <p>
                Vilkår for spesifikke rekrutteringsoppdrag reguleres av egne oppdragsavtaler mellom Grøde Rekruttering AS og kunden.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-serif text-grode-midnight">5. Kontaktinformasjon</h2>
              <p>
                Spørsmål vedrørende disse vilkårene kan rettes til:<br />
                Grøde Rekruttering AS<br />
                karl@grodepartner.no
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
