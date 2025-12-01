import React from 'react';
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
  FileSearch 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Hematologia",
      icon: <Droplet className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      description: "Análise sanguínea completa."
    },
    {
      title: "Bioquímica",
      icon: <FlaskConical className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      description: "Avaliação metabólica."
    },
    {
      title: "Uroanálises",
      icon: <Microscope className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      description: "Exame físico e químico da urina."
    },
    {
      title: "Coprológicos",
      icon: <Bug className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      description: "Diagnóstico de parasitas."
    },
    {
      title: "Imunologia",
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      description: "Defesa do organismo."
    },
    {
      title: "Sorologias",
      icon: <Syringe className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      description: "Detecção de anticorpos."
    },
    {
      title: "Microbiologia",
      icon: <Biohazard className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      description: "Culturas e antibiogramas."
    },
    {
      title: "PCR",
      icon: <Dna className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      description: "Análise molecular avançada."
    },
    {
      title: "Hormônios",
      icon: <Activity className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      description: "Dosagens hormonais."
    },
    {
      title: "Anatomia Patológica",
      icon: <FileSearch className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      description: "Biópsias e diagnósticos."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl text-vintage-green uppercase tracking-widest text-shadow-plate">
          Nossos Setores
        </h2>
        <div className="w-24 h-1 bg-vintage-green/30 mx-auto mt-4"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <div key={index} className="group relative bg-vintage-cream border border-vintage-green p-4 flex flex-col items-center text-center shadow-[4px_4px_0px_#2d5a27] hover:bg-white transition-all duration-300">
            <div className="mb-4 bg-vintage-green p-3 rounded-full border-2 border-vintage-cream shadow-sm group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="font-display font-bold text-sm md:text-base text-vintage-green uppercase tracking-wider mb-2">
              {service.title}
            </h3>
            <p className="font-serif text-xs md:text-sm text-vintage-brown-DEFAULT leading-tight opacity-80">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;