import React from 'react';
import { Section } from '../types';
import Logo from './Logo';
import { Phone } from 'lucide-react';

interface NavigationProps {
  currentSection: Section;
  onNavigate: (section: Section) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate }) => {
  return (
    <nav className="w-full bg-vintage-green-dark border-b-4 border-vintage-green-light shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Esquerda: Logo */}
          <div className="flex-1 flex justify-center md:justify-start w-full md:w-auto mb-3 md:mb-0 cursor-pointer transform hover:scale-105 transition-transform duration-300" onClick={() => onNavigate(Section.HOME)}>
            <Logo />
          </div>

          {/* Centro: Menu de Navegação */}
          <div className="flex-1 flex justify-center w-full md:w-auto mb-3 md:mb-0">
            <ul className="flex items-center gap-6 md:gap-8">
              {/* Início */}
              <li>
                <button
                  onClick={() => onNavigate(Section.HOME)}
                  className={`
                    text-xs md:text-sm font-serif font-bold uppercase tracking-widest transition-colors duration-200
                    ${currentSection === Section.HOME ? 'text-white border-b-2 border-white' : 'text-vintage-cream/80 hover:text-white'}
                  `}
                >
                  Início
                </button>
              </li>
              
              {/* Sobre */}
              <li>
                <button
                  onClick={() => onNavigate(Section.ABOUT)}
                  className={`
                    text-xs md:text-sm font-serif font-bold uppercase tracking-widest transition-colors duration-200
                    ${currentSection === Section.ABOUT ? 'text-white border-b-2 border-white' : 'text-vintage-cream/80 hover:text-white'}
                  `}
                >
                  Sobre
                </button>
              </li>

              {/* Serviços (Partner Services) */}
              <li>
                <button
                  onClick={() => onNavigate(Section.PARTNER_SERVICES)}
                  className={`
                    text-xs md:text-sm font-serif font-bold uppercase tracking-widest transition-colors duration-200
                    ${currentSection === Section.PARTNER_SERVICES ? 'text-white border-b-2 border-white' : 'text-vintage-cream/80 hover:text-white'}
                  `}
                >
                  Serviços
                </button>
              </li>

              {/* Resultados (Link Externo) */}
              <li>
                <a
                  href="https://portal.workvetweb.com.br/resultados/432"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm font-serif font-bold uppercase tracking-widest text-vintage-cream/80 hover:text-white transition-colors duration-200"
                >
                  Resultados
                </a>
              </li>
            </ul>
          </div>

          {/* Direita: Botão CTA */}
          <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto">
            <a
              href="https://wa.me/5516997334746"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-vintage-cream text-vintage-green-dark px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors shadow-sm whitespace-nowrap"
            >
              <Phone size={14} fill="currentColor" />
              Quero ser cliente
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;