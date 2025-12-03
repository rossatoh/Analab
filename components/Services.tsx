import React, { useState } from 'react';
import { 
  Droplet, 
  FlaskConical, 
  Microscope, 
  Bug, 
  ShieldCheck, 
  Syringe, 
  Biohazard, 
  Dna, 
  Activity, 
  FileSearch,
  X
} from 'lucide-react';

interface ServiceData {
  title: string;
  icon: React.ReactNode; // Ícone padrão (Lucide)
  customIconSrc?: string; // Caminho para o ícone PNG personalizado (Opcional)
  details: string;
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  // NOTA: Para os ícones personalizados funcionarem, certifique-se de que os arquivos .png
  // estejam dentro da pasta 'public/icons/' do seu projeto.
  const services: ServiceData[] = [
    {
      title: "Hematologia",
      icon: <Droplet className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />, 
      customIconSrc: "/icons/hematologia.png", // Usa PNG
      details: "Aqui você descreverá os detalhes completos sobre os exames de Hematologia, metodologia utilizada e prazos..."
    },
    {
      title: "Bioquímica",
      icon: <FlaskConical className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      customIconSrc: "/icons/bioquimica.png", // Usa PNG
      details: "Aqui você descreverá os detalhes completos sobre os exames de Bioquímica..."
    },
    {
      title: "Uroanálises",
      icon: <Microscope className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      customIconSrc: "/icons/uroanalise.png", // Usa PNG
      details: "Aqui você descreverá os detalhes completos sobre os exames de Uroanálises..."
    },
    {
      title: "Coprológicos",
      icon: <Bug className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      customIconSrc: "/icons/coprologico.png", // Usa PNG
      details: "Aqui você descreverá os detalhes completos sobre os exames Coprológicos..."
    },
    {
      title: "Imunologia",
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      // Sem customIconSrc -> Usa Lucide
      details: "Aqui você descreverá os detalhes completos sobre os exames de Imunologia..."
    },
    {
      title: "Sorologias",
      icon: <Syringe className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      // Sem customIconSrc -> Usa Lucide
      details: "Aqui você descreverá os detalhes completos sobre os exames de Sorologias..."
    },
    {
      title: "Microbiologia",
      icon: <Biohazard className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      customIconSrc: "/icons/microbiologia.png", // Usa PNG
      details: "Aqui você descreverá os detalhes completos sobre os exames de Microbiologia..."
    },
    {
      title: "PCR",
      icon: <Dna className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      // Sem customIconSrc -> Usa Lucide
      details: "Aqui você descreverá os detalhes completos sobre os exames de PCR..."
    },
    {
      title: "Hormônios",
      icon: <Activity className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      customIconSrc: "/icons/hormonios.png", // Usa PNG
      details: "Aqui você descreverá os detalhes completos sobre os exames de Hormônios..."
    },
    {
      title: "Anatomia Patológica",
      icon: <FileSearch className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      customIconSrc: "/icons/patologia.png", // Usa PNG
      details: "Aqui você descreverá os detalhes completos sobre os exames de Anatomia Patológica..."
    }
  ];

  const handleOpenModal = (service: ServiceData) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 relative">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl text-vintage-green uppercase tracking-widest text-shadow-plate">
          Nossos Setores
        </h2>
        <div className="w-24 h-1 bg-vintage-green/30 mx-auto mt-4"></div>
        <p className="font-serif text-sm text-vintage-brown-DEFAULT mt-4 italic opacity-70">
          Clique nos quadros abaixo para saber mais
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            onClick={() => handleOpenModal(service)}
            className="group relative bg-vintage-cream border border-vintage-green p-4 flex flex-col items-center text-center shadow-[4px_4px_0px_#2d5a27] hover:bg-white transition-all duration-300 cursor-pointer hover:shadow-[6px_6px_0px_#2d5a27] hover:-translate-y-1"
          >
            <div className="mb-4 bg-vintage-green p-3 rounded-full border-2 border-vintage-cream shadow-sm group-hover:scale-110 transition-transform overflow-hidden flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
              {/* Lógica de Renderização do Ícone: Prioriza PNG se existir, senão usa Lucide */}
              {service.customIconSrc ? (
                <img 
                  src={service.customIconSrc} 
                  alt={service.title} 
                  className="w-full h-full object-contain p-1"
                />
              ) : (
                service.icon
              )}
            </div>
            <h3 className="font-display font-bold text-sm md:text-base text-vintage-green uppercase tracking-wider mb-2">
              {service.title}
            </h3>
            
            {/* Indicador visual de clique */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-vintage-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-vintage-cream border-4 border-vintage-green p-8 max-w-lg w-full relative shadow-[10px_10px_0px_#1a3c1b] animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Botão Fechar */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-vintage-green hover:text-vintage-brown-DEFAULT hover:rotate-90 transition-all"
            >
              <X size={28} />
            </button>

            {/* Cabeçalho do Modal */}
            <div className="flex items-center gap-4 mb-6 border-b-2 border-vintage-green/20 pb-4">
              <div className="bg-vintage-green p-3 rounded-full text-vintage-cream w-16 h-16 flex items-center justify-center">
                 {/* Lógica de Renderização do Ícone no Modal */}
                 {selectedService.customIconSrc ? (
                    <img 
                      src={selectedService.customIconSrc} 
                      alt={selectedService.title} 
                      className="w-full h-full object-contain p-1"
                    />
                  ) : (
                    selectedService.icon
                  )}
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-vintage-green uppercase tracking-widest">
                {selectedService.title}
              </h3>
            </div>

            {/* Conteúdo do Modal */}
            <div className="font-serif text-vintage-brown-DEFAULT text-lg leading-relaxed space-y-4">
               <p>{selectedService.details}</p>
            </div>

            {/* Rodapé Decorativo */}
            <div className="mt-8 pt-4 border-t border-dashed border-vintage-green/30 text-center">
               <span className="text-xs font-mono text-vintage-green/60 uppercase tracking-widest">
                 Analabvet • Laboratório Clínico
               </span>
            </div>
          </div>
          
          {/* Overlay click to close */}
          <div className="absolute inset-0 -z-10" onClick={handleCloseModal}></div>
        </div>
      )}
    </div>
  );
};

export default Services;