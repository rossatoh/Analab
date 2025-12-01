import React from 'react';
import { FlaskConical, Microscope, TestTube } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-1.5 bg-vintage-cream/90 rounded-md border border-vintage-brown-light/30 shadow-sm transform scale-90 origin-left">
      <h1 className="font-serif font-bold text-lg md:text-xl tracking-widest text-vintage-brown-DEFAULT leading-none">
        ANALABVET
      </h1>
      <h2 className="font-serif text-[0.45rem] md:text-[0.55rem] tracking-wider text-vintage-green uppercase mt-0.5 mb-1 text-center leading-tight">
        Laboratório de Análises Clínicas Veterinárias
      </h2>
      <div className="flex items-center space-x-3 text-vintage-green/80">
        <FlaskConical className="w-3 h-3 md:w-4 md:h-4 text-vintage-green" strokeWidth={1.5} />
        <Microscope className="w-4 h-4 md:w-5 md:h-5 text-vintage-brown-DEFAULT" strokeWidth={1.5} />
        <TestTube className="w-3 h-3 md:w-4 md:h-4 text-vintage-green" strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default Logo;