import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import ExamsList from './components/ExamsList';
import Footer from './components/Footer';
import { Section } from './types';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>(Section.HOME);

  const renderContent = () => {
    switch (currentSection) {
      case Section.ABOUT:
        return (
          <div className="max-w-4xl mx-auto py-16 px-6 text-center">
             <h2 className="font-display text-4xl text-vintage-green mb-8">Desde 2014</h2>
             <p className="font-serif text-lg leading-loose text-vintage-brown-DEFAULT mb-6">
               O Analab Vet foi fundado com o princípio de que a medicina veterinária merece a mesma precisão e cuidado da medicina humana. Combinamos técnicas tradicionais de análise com tecnologia de ponta para entregar diagnósticos rápidos e confiáveis.
             </p>
             <p className="font-serif text-lg leading-loose text-vintage-brown-DEFAULT">
               Nosso laboratório conta com uma equipe dedicada de patologistas e biomédicos apaixonados por saúde animal, prontos para auxiliar veterinários e tutores.
             </p>
          </div>
        );
      case Section.PORTFOLIO:
        return <ExamsList />;
      case Section.CONTACT:
        return (
          <div className="max-w-3xl mx-auto py-16 px-6">
             <div className="bg-vintage-cream border-2 border-vintage-green p-8 shadow-[8px_8px_0px_rgba(45,90,39,0.2)]">
                <h2 className="font-display text-3xl text-vintage-green mb-6 text-center uppercase border-b-2 border-vintage-green/20 pb-4">
                  Envie uma Mensagem
                </h2>
                <div className="space-y-6">
                  <div className="flex flex-col">
                    <label className="font-serif font-bold text-vintage-brown-DEFAULT mb-1">Seu Nome</label>
                    <input type="text" className="bg-[#fcfbf9] border border-vintage-green/50 p-3 font-mono text-vintage-green-dark focus:outline-none focus:ring-2 focus:ring-vintage-green" />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-serif font-bold text-vintage-brown-DEFAULT mb-1">Tipo de Solicitação</label>
                    <select className="bg-[#fcfbf9] border border-vintage-green/50 p-3 font-mono text-vintage-green-dark focus:outline-none focus:ring-2 focus:ring-vintage-green">
                       <option>Agendamento de Coleta</option>
                       <option>Dúvidas sobre Exames</option>
                       <option>Parceria Veterinária</option>
                       <option>Outros</option>
                    </select>
                  </div>
                   <div className="flex flex-col">
                    <label className="font-serif font-bold text-vintage-brown-DEFAULT mb-1">Mensagem</label>
                    <textarea rows={4} className="bg-[#fcfbf9] border border-vintage-green/50 p-3 font-mono text-vintage-green-dark focus:outline-none focus:ring-2 focus:ring-vintage-green"></textarea>
                  </div>
                  <button className="w-full bg-vintage-green text-vintage-cream font-bold uppercase tracking-widest py-4 hover:bg-vintage-green-light transition-colors">
                    Enviar
                  </button>
                </div>
             </div>
          </div>
        );
      default:
        // Default View (Home) includes Hero and Services
        return (
          <>
            <Services />
          </>
        );
    }
  };

  const sectionTitles: Partial<Record<Section, string>> = {
    [Section.HOME]: 'Início',
    [Section.ABOUT]: 'Sobre Nós',
    [Section.SERVICES]: 'Nossos Serviços',
    [Section.PORTFOLIO]: 'Exames e Galeria',
    [Section.CONTACT]: 'Entre em Contato',
  };

  return (
    <div className="min-h-screen bg-vintage-cream text-vintage-green font-serif selection:bg-vintage-green selection:text-white flex flex-col">
      <Navigation currentSection={currentSection} onNavigate={setCurrentSection} />
      
      <main className="flex-grow">
        {/* Always show Hero on Home, simplified on others */}
        {currentSection === Section.HOME ? (
           <Hero />
        ) : (
          <div className="bg-vintage-green text-center py-12 relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
             <h1 className="font-display text-4xl text-vintage-cream relative z-10 uppercase tracking-widest text-shadow-plate">
                {sectionTitles[currentSection] || currentSection}
             </h1>
          </div>
        )}

        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
