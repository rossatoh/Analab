import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-1.5 bg-vintage-cream/90 rounded-md border border-vintage-brown-light/30 shadow-sm transform scale-90 origin-left">
      <img
        src="https://i.ibb.co/d0KgcgYQ/Screenshot-1-removebg-preview.png"
        alt="Logo Analabvet"
        className="w-32 h-10 md:w-48 md:h-16 object-contain"
      />
    </div>
  );
};

export default Logo;
