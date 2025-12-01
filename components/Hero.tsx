import React from 'react';
import { PawPrint, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full overflow-hidden flex flex-col items-center justify-start pt-12 pb-16 px-4">
      {/* Sunburst Background Effect */}
      <div className="absolute inset-0 z-0 opacity-40 vintage-sunburst pointer-events-none"></div>
      
      {/* Vignette */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,transparent_40%,rgba(60,40,10,0.15)_100%)] pointer-events-none"></div>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-paper-texture mix-blend-multiply pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
        
        {/* Logo Section */}
        <div className="relative mb-4">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-[6px] border-vintage-green bg-vintage-cream overflow-hidden shadow-xl flex items-center justify-center relative">
               <img 
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                  alt="Stylized Dog" 
                  className="w-full h-full object-cover sepia-[0.6] contrast-125 hover:scale-110 transition-transform duration-700"
               />
               <div className="absolute inset-0 ring-inset ring-4 ring-black/10 rounded-full"></div>
            </div>
            {/* Decorative Ribbons */}
            <div className="absolute top-1/2 -left-16 w-20 h-1 bg-vintage-green hidden md:block"></div>
            <div className="absolute top-1/2 -right-16 w-20 h-1 bg-vintage-green hidden md:block"></div>
        </div>

        {/* Studio Name Plate */}
        <div className="bg-vintage-green shadow-[4px_4px_0px_#1a3c1b] px-10 py-4 transform -rotate-1 border-2 border-vintage-paper/20 flex flex-col items-center">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-vintage-cream text-shadow-plate tracking-widest leading-tight">
            ANALABVET
          </h1>
          <div className="w-full h-px bg-vintage-cream/30 my-1"></div>
          <p className="font-serif text-sm md:text-lg text-vintage-cream/90 uppercase tracking-widest">
            Laboratório de análises clínicas veterinárias
          </p>
        </div>

        {/* Subtitle */}
        <h2 className="font-serif italic text-xl md:text-2xl text-vintage-brown-DEFAULT mt-4 max-w-2xl leading-relaxed">
          Diagnósticos Precisos e Resultados Confiáveis para o seu Pet
        </h2>

        {/* Highlight Section with Paws */}
        <div className="flex items-center justify-center space-x-6 w-full mt-6">
          <PawPrint className="w-8 h-8 md:w-12 md:h-12 text-vintage-green opacity-60 rotate-[-15deg]" />
          <div className="flex flex-col items-center">
            <span className="font-display font-black text-4xl md:text-6xl lg:text-7xl tracking-tight text-vintage-green text-shadow-retro uppercase leading-none">
              SAÚDE
            </span>
            <span className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-widest text-vintage-green/90 uppercase leading-none mt-2">
              ANIMAL
            </span>
          </div>
          <PawPrint className="w-8 h-8 md:w-12 md:h-12 text-vintage-green opacity-60 rotate-[15deg]" />
        </div>

        {/* Access Result Button */}
        <div className="mt-8">
          <a 
            href="https://portal.workvetweb.com.br/resultados/432"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 bg-vintage-cream text-vintage-green px-8 py-4 text-lg md:text-xl font-bold uppercase tracking-widest border-2 border-vintage-green shadow-[4px_4px_0px_#2d5a27] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
          >
            <ExternalLink size={20} />
            ACESSE SEU RESULTADO
          </a>
        </div>

      </div>
    </header>
  );
};

export default Hero;