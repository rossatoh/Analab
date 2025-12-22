
import React from 'react';
import { Bike, ClipboardCheck, Lightbulb, TestTube } from 'lucide-react';

const PartnerServices: React.FC = () => {
  const materials = [
    { 
      name: "Tubo com EDTA", 
      desc: "Tampa roxa", 
      color: "text-purple-600", 
      customIcon: "https://8upload.com/image/6a1096a3180d58af/tubo_com_edta-Photoroom.png" 
    },
    { 
      name: "Tubo com gel separador e ativador de coágulo", 
      desc: "Tampa amarela", 
      color: "text-yellow-400", 
      customIcon: "https://8upload.com/image/5f88833d83c1e67d/tubo_com_gel_separador_e_ativador_de_coagulo-Photoroom.png" 
    },
    { 
      name: "Tubo com citrato de sódio", 
      desc: "Tampa azul", 
      color: "text-blue-400", 
      customIcon: "https://8upload.com/image/24b945d22c675d09/tubo_com_citrato_de_s__dio-Photoroom.png" 
    },
    { 
      name: "Tubo com fluoreto de sódio", 
      desc: "Tampa cinza", 
      color: "text-gray-400", 
      customIcon: "https://8upload.com/image/9a8773b5c64b0a6e/tubo_com_fluoreto_de_s__dio-Photoroom.png" 
    },
    { 
      name: "Lâmina e porta lâmina", 
      desc: "Porta-lâmina com adesivo amarelo", 
      color: "text-yellow-200",
      customIcon: "https://8upload.com/image/cf05b35a6cb3f0b1/lamina_e_porta_lamina-Photoroom.png"
    },
    { 
      name: "Swab simples", 
      desc: "", 
      color: "text-white",
      customIcon: "https://8upload.com/image/03818793595a9c1c/swab_simples-Photoroom.png"
    },
    { 
      name: "Swab com meio Stuartt", 
      desc: "", 
      color: "text-blue-600",
      customIcon: "https://8upload.com/image/0ed19138e6a8b77b/Swab_com_meio_stuart.png"
    },
    { 
      name: "Frasco estéril de urina", 
      desc: "", 
      color: "text-green-500",
      customIcon: "https://8upload.com/image/161664161e8db9a3/frasco_est__ril-Photoroom.png"
    },
    { 
      name: "Frasco para fezes", 
      desc: "", 
      color: "text-red-500",
      customIcon: "https://8upload.com/image/76c5b58d16fdaad4/frasco_para_fezes-Photoroom.png"
    },
    { 
      name: "Formol 10%", 
      desc: "", 
      color: "text-blue-300",
      customIcon: "https://8upload.com/image/489d7c401623e032/formol_10_-Photoroom.png" 
    },
  ];

  return (
    <div className="w-full">
      {/* SEÇÃO 1, 2 e 3: Fundo Verde Escuro */}
      <div className="bg-[#0f2815] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* SEÇÃO 1 - Intro */}
          <div className="text-center space-y-8">
             <div className="inline-block bg-[#1a3c1b] px-12 py-3 border-y-2 border-white/20">
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-widest text-white uppercase text-shadow-plate">
                  O MELHOR PARA VOCÊ!
                </h2>
             </div>
             
             <p className="font-serif text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-gray-200">
               O Analabvet possui uma equipe multidisciplinar especializada nas áreas de{' '}
               <span className="text-green-400 font-bold">parasitologia</span>,{' '}
               <span className="text-yellow-400 font-bold">microbiologia</span>,{' '}
               <span className="text-orange-400 font-bold">patologia</span>{' '}
               <span className="text-green-400 font-bold">clínica e animal</span>{' '}
               para oferecer aos seus clientes excelência em exames clínicos, apoio técnico e científico.
             </p>
          </div>

          {/* SEÇÃO 2 - Ícones de Vantagens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* Ícone 1 */}
            <div className="flex flex-col items-center space-y-4">
               <div className="w-32 h-32 rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center relative overflow-hidden group hover:bg-white/20 transition-colors">
                  <Bike className="w-16 h-16 text-orange-400" />
               </div>
               <h3 className="font-display font-bold text-lg uppercase tracking-wider text-vintage-cream">COLETAS GRATUITAS</h3>
            </div>
            
            {/* Ícone 2 */}
            <div className="flex flex-col items-center space-y-4">
               <div className="w-32 h-32 rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center relative overflow-hidden group hover:bg-white/20 transition-colors">
                  <ClipboardCheck className="w-16 h-16 text-green-400" />
               </div>
               <h3 className="font-display font-bold text-lg uppercase tracking-wider text-vintage-cream">
                 RESULTADO EM ATÉ 3 HORAS<br/>NO SEU WHATSAPP
               </h3>
            </div>

            {/* Ícone 3 */}
            <div className="flex flex-col items-center space-y-4">
               <div className="w-32 h-32 rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center relative overflow-hidden group hover:bg-white/20 transition-colors">
                  <Lightbulb className="w-16 h-16 text-yellow-300" />
               </div>
               <h3 className="font-display font-bold text-lg uppercase tracking-wider text-vintage-cream">ASSESSORIA TÉCNICA RÁPIDA</h3>
            </div>
          </div>

          {/* SEÇÃO 3 - Nosso Objetivo */}
          <div className="bg-[#0a1f0e] border-l-4 border-white p-8 md:p-12 relative overflow-hidden">
             <h3 className="font-display text-2xl md:text-3xl font-bold uppercase mb-4 z-10 relative tracking-widest text-vintage-cream">NOSSO OBJETIVO</h3>
             <p className="font-serif text-lg md:text-xl text-gray-300 z-10 relative leading-relaxed">
               "Atender nossos clientes e parceiros com agilidade e qualidade, visando sempre o bem-estar, sanidade dos animais e a máxima confiabilidade e segurança nos resultados."
             </p>
             <div className="absolute top-0 right-0 opacity-5">
                <TestTube size={300} />
             </div>
          </div>

        </div>
      </div>

      {/* SEÇÃO 4: Materiais de Coleta (Fundo Claro) */}
      <div className="bg-gray-100 text-[#1a3c1b] py-16 px-4">
         <div className="max-w-6xl mx-auto">
            
            {/* Título Materiais */}
            <div className="bg-[#1a3c1b] p-8 md:p-10 rounded-sm shadow-xl text-center mb-12">
               <p className="font-serif text-white text-lg md:text-2xl leading-relaxed">
                 É um prazer ter você como parceiro <span className="text-green-300 font-display font-bold tracking-wider">ANALABVET</span>, por isso, pensando em seu conforto e economia, nosso laboratório fornece gratuitamente os seguintes materiais de coleta.
               </p>
            </div>

            {/* Grade de Materiais */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {materials.map((item, idx) => (
                 <div key={idx} className="bg-white p-6 border border-gray-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-4 border-2 border-dashed border-gray-200 overflow-hidden p-1 relative">
                       {item.customIcon && (
                         <img 
                           src={item.customIcon} 
                           alt={item.name} 
                           className={`
                             hover:scale-110 transition-transform duration-300 object-contain
                             ${item.name.toLowerCase().includes("frasco para fezes") ? 'w-3/5 h-3/5 grayscale' : 'w-3/4 h-3/4'}
                             ${item.name.toLowerCase().includes("lâmina") ? 'grayscale' : ''}
                           `}
                         />
                       )}
                    </div>
                    <h4 className="font-display font-bold text-lg text-[#1a3c1b] uppercase tracking-wide">{item.name}</h4>
                    <p className="font-serif text-sm text-gray-500 mt-2 italic">{item.desc}</p>
                 </div>
               ))}
            </div>

         </div>
      </div>
    </div>
  );
};

export default PartnerServices;
