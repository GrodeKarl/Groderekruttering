
import React from 'react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-24 bg-grode-midnight text-white/50 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          {/* Footer Text Branding */}
          <div className="mb-16 cursor-pointer group flex flex-col items-center" onClick={() => onNavigate('home')}>
            <span className="text-4xl font-serif text-white tracking-[0.05em] group-hover:text-grode-gold transition-colors duration-500">
              GRØDE
            </span>
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-grode-gold mt-2 group-hover:text-white transition-colors duration-500">
              REKRUTTERING
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-2xl border-y border-white/5 py-16 mb-16">
            <div className="flex flex-col items-center">
              <h4 className="text-white text-[10px] uppercase tracking-[0.3em] mb-6 font-bold">Kontakt</h4>
              <p className="text-sm font-light leading-relaxed">
                <a href="mailto:karl@grodepartner.no" className="hover:text-white transition-colors">karl@grodepartner.no</a>
                <br />
                <a href="tel:+4748421850" className="hover:text-white transition-colors">+47 48 42 18 50</a>
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-white text-[10px] uppercase tracking-[0.3em] mb-6 font-bold">Meny</h4>
              <div className="flex space-x-6 text-sm font-light">
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">Om oss</button>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Tjenester</button>
                <a href="https://www.linkedin.com/company/grode-rekruttering/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl text-[10px] uppercase tracking-[0.4em] opacity-40">
            <p>&copy; {new Date().getFullYear()} Grøde Rekruttering AS</p>
            <div className="flex space-x-10 mt-6 md:mt-0 font-medium">
              <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Personvern</button>
              <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Betingelser</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
