import React, { useState } from 'react';
    import { Sparkles } from 'lucide-react';
    import { generateVintageSlogan } from '../services/geminiService';
    
    const AICreativeTools: React.FC = () => {
      const [topic, setTopic] = useState('');
      const [slogan, setSlogan] = useState('');
      const [loading, setLoading] = useState(false);
    
      const handleGenerate = async () => {
        if (!topic) return;
        setLoading(true);
        const result = await generateVintageSlogan(topic);
        setSlogan(result);
        setLoading(false);
      };
    
      return (
        <div className="bg-vintage-green-dark text-vintage-cream py-12 px-4 border-t-8 border-double border-vintage-green-light relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-2xl md:text-3xl mb-2 flex items-center justify-center md:justify-start gap-2">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                O Conselheiro Veterinário (IA)
              </h3>
              <p className="font-serif italic opacity-80 mb-6">
                Tem dúvidas sobre alguma raça ou condição? Peça uma curiosidade ou dica de saúde ao nosso assistente.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2">
                 <input 
                  type="text" 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Ex: Golden Retriever, Vacinação, Gatos..."
                  className="flex-1 px-4 py-3 bg-vintage-cream text-vintage-green-dark font-mono placeholder:text-vintage-green/50 border-2 border-vintage-green-light focus:outline-none focus:border-yellow-500"
                 />
                 <button 
                  onClick={handleGenerate}
                  disabled={loading || !topic}
                  className="px-6 py-3 bg-vintage-green border-2 border-vintage-cream text-vintage-cream font-bold uppercase tracking-widest hover:bg-vintage-green-light disabled:opacity-50 transition-colors shadow-[2px_2px_0px_#e8dec0]"
                 >
                   {loading ? 'Consultando...' : 'Pedir Dica'}
                 </button>
              </div>
            </div>
    
            <div className="flex-1 w-full">
               <div className="bg-vintage-cream p-6 min-h-[120px] flex items-center justify-center border-4 border-double border-vintage-green shadow-inner relative">
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-vintage-green opacity-50"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-vintage-green opacity-50"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-vintage-green opacity-50"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-vintage-green opacity-50"></div>
    
                  {slogan ? (
                    <p className="font-cursive text-3xl text-vintage-green-dark text-center leading-normal">
                      {slogan}
                    </p>
                  ) : (
                    <p className="font-mono text-sm text-vintage-green/40 text-center">
                      A RESPOSTA APARECERÁ AQUI NO PERGAMINHO...
                    </p>
                  )}
               </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default AICreativeTools;