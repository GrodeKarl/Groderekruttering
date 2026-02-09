
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import { Page } from '../App';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <div id="tjenester">
        <Services onNavigate={onNavigate} isPreview />
      </div>
      <div id="om-oss">
        <About onNavigate={onNavigate} isPreview />
      </div>
      <div id="kontakt">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
