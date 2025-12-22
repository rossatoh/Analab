
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1814] text-vintage-cream py-10 border-t-4 border-vintage-green">
      <div className="max-w-7xl mx-auto px-4 text-center">
         <div className="mb-6">
            <h4 className="font-display text-2xl tracking-widest mb-2">Analabvet</h4>
            <div className="w-16 h-1 bg-vintage-green mx-auto"></div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-serif opacity-70 mb-8">
            <div>
              <p>Pr. Com. José Honório, 5 - Centro</p>
              <p>São Sebastião do Paraíso - MG, 37950-000</p>
            </div>
            <div>
              <p>analabvet@outlook.com</p>
              <p>(16) 99733-4746</p>
            </div>
            <div>
              <p>&copy; {new Date().getFullYear()} Analabvet.</p>
              <p>Todos os direitos reservados.</p>
            </div>
         </div>
         <p className="text-xs font-mono text-vintage-green opacity-40 uppercase tracking-widest">
            Feito com carinho e React
         </p>
      </div>
    </footer>
  );
};

export default Footer;
