import React from 'react';
import { Microscope, Activity, Beaker, FileText } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Hematologia",
      icon: <Activity className="w-8 h-8 md:w-12 md:h-12 text-vintage-cream" />,
      description: "Análise completa do sangue para diagnóstico preciso de anemias e infecções."
    },
    {
      title: "Bioquímica",
      icon: <Beaker className="w-8 h-8 md:w-12 md:h-12 text-vintage-cream" />,
      description: "Avaliação detalhada da função renal, hepática e metabólica do seu animal."
    },
    {
      title: "Microscopia",
      icon: <Microscope className="w-8 h-8 md:w-12 md:h-12 text-vintage-cream" />,
      description: "Exames parasitológicos e citopatológicos com equipamentos de última geração."
    },
    {
      title: "Laudos Digitais",
      icon: <FileText className="w-8 h-8 md:w-12 md:h-12 text-vintage-cream" />,
      description: "Acesso rápido e seguro aos resultados via plataforma online e mobile."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group relative bg-vintage-cream border-2 border-vintage-green p-6 flex flex-col items-center text-center shadow-[6px_6px_0px_#2d5a27] transition-transform hover:-translate-y-1">
            <div className="absolute -top-6 bg-vintage-green p-3 rounded-full border-4 border-vintage-cream shadow-sm group-hover:bg-vintage-green-light transition-colors">
              {service.icon}
            </div>
            <h3 className="mt-8 font-display font-bold text-xl text-vintage-green uppercase tracking-wider mb-3 pb-2 border-b border-vintage-green/20 w-full">
              {service.title}
            </h3>
            <p className="font-serif text-vintage-brown-DEFAULT leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;