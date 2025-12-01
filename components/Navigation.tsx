import React from 'react';
import { Section } from '../types';

interface NavigationProps {
  currentSection: Section;
  onNavigate: (section: Section) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate }) => {
  const navItems = [
    { label: 'Início', value: Section.HOME },
    { label: 'Sobre', value: Section.ABOUT },
    { label: 'Serviços', value: Section.SERVICES },
    { label: 'Exames', value: Section.PORTFOLIO },
    { label: 'Contato', value: Section.CONTACT },
  ];

  return (
    <nav className="w-full bg-vintage-green-dark text-vintage-cream border-b-4 border-vintage-green-light shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap justify-center md:justify-center items-center py-0 gap-4 md:gap-8">
          {navItems.map((item) => (
            <li key={item.value} className="relative group">
              <button
                onClick={() => onNavigate(item.value)}
                className={`
                  block py-4 px-2 text-xs md:text-sm lg:text-base font-serif font-bold uppercase tracking-widest transition-colors duration-200
                  ${currentSection === item.value ? 'text-white border-b-2 border-white' : 'text-vintage-cream/80 hover:text-white hover:border-b-2 hover:border-white/50'}
                `}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;