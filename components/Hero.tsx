import React from 'react';

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
        <div className="bg-vintage-green shadow-[4px_4px_0px_#1a3c1b] px-8 py-3 transform -rotate-1 border-2 border-vintage-paper/20">
          <h1 className="font-cursive text-4xl md:text-6xl text-vintage-cream text-shadow-plate">
            Analab Vet – Laboratório
          </h1>
        </div>

        {/* Subtitle */}
        <h2 className="font-serif italic text-xl md:text-2xl text-vintage-brown-DEFAULT mt-4 max-w-2xl leading-relaxed">
          &ldquo;Diagnósticos Precisos e Resultados Confiáveis para o seu Pet&rdquo;
        </h2>

        {/* Highlight Section */}
        <div className="flex items-center justify-center space-x-4 w-full mt-6">
          <span className="text-4xl text-vintage-green opacity-60">❧</span>
          <div className="flex flex-col items-center">
            <span className="font-display font-black text-4xl md:text-6xl lg:text-7xl tracking-tight text-vintage-green text-shadow-retro uppercase leading-none">
              SAÚDE
            </span>
            <span className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-widest text-vintage-green/90 uppercase leading-none mt-2">
              ANIMAL
            </span>
          </div>
          <span className="text-4xl text-vintage-green opacity-60 scale-x-[-1]">❧</span>
        </div>

        {/* Bottom Tagline */}
        <p className="font-mono text-sm md:text-lg text-vintage-brown-DEFAULT font-bold tracking-wider mt-4 border-t border-b border-vintage-green/30 py-2 px-6 uppercase">
          ...incluindo hematologia, citologia e análises clínicas.
        </p>

      </div>
    </header>
  );
};

export default Hero;