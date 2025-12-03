import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Syringe, 
  Dna, 
  X
} from 'lucide-react';

interface ServiceData {
  title: string;
  icon?: React.ReactNode;
  customIconSrc?: string;
  exams: string[]; // Alterado de details para exams (lista)
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  const services: ServiceData[] = [
    {
      title: "Hematologia",
      customIconSrc: "https://8upload.com//image/59e3bfa2eeb288f3/hematologia__1_.png",
      exams: [
        "52 – Contagem de Plaquetas",
        "53 – Contagem de Reticulócitos",
        "54 – Coombs Direto",
        "55 – Fibrinogênio",
        "56 – Hematócrito",
        "57 – Hemograma Completo",
        "58 – Mielograma",
        "59 – Pesquisa de Hematozoários",
        "60 – Teste de Compatibilidade",
        "61 – Teste Aglutinação Salina",
        "62 – Tipagem Sanguínea"
      ]
    },
    {
      title: "Bioquímica",
      customIconSrc: "https://8upload.com//image/dec2ec5480ad0b65/bioquimica.png",
      exams: [
        "63 – Ácido Úrico",
        "64 – Albumina",
        "65 – ALT / TGP",
        "66 – Amilase",
        "67 – AST / TGO",
        "68 – Bilirrubina Total",
        "69 – Bilirrubina Total e Frações",
        "70 – Cálcio Total",
        "71 – Cálcio Iônico",
        "72 – CK Total (CPK)",
        "73 – CK-MB",
        "74 – Cloro (Cloreto)",
        "75 – Colesterol Total",
        "76 – Colesterol Total e Frações",
        "77 – Colinesterase",
        "78 – Creatinina",
        "79 – Ferro Sérico",
        "80 – Fosfatase Alcalina",
        "81 – Fosfatase Alcalina Frações",
        "82 – Fósforo",
        "83 – Frutosamina",
        "84 – GGT (Gama GT)",
        "85 – Glicose (Glicemia)",
        "86 – Glicohemoglobina",
        "87 – LDH",
        "88 – Lipase",
        "89 – Magnésio",
        "90 – Potássio",
        "91 – Proteína Total",
        "92 – Proteína Total e Frações",
        "93 – Sódio",
        "94 – Triglicerídes",
        "95 – Tripsinogênio (TLI) Canino",
        "96 – Tripsinogênio (TLI) Felino",
        "97 – Ureia",
        "98 – Vitamina A (Retinol)",
        "99 – Vitamina B12",
        "100 – Vitamina D",
        "101 – Lipase Imunorreativa Canina",
        "102 – Lipase Imunorreativa Felina",
        "103 – SDMA"
      ]
    },
    {
      title: "Uroanálises",
      customIconSrc: "https://8upload.com/image/208b727e178c907a/uroanalise.png",
      exams: [
        "104 – Análise de Cálculo Urinário",
        "105 – Relação Cortisol:Creatinina",
        "106 – Relação Proteína:Creatinina",
        "107 – Urina Rotina"
      ]
    },
    {
      title: "Coprológicos",
      customIconSrc: "https://8upload.com/image/1dac51229521e030/cropo.png",
      exams: [
        "108 – Coproparasitológico",
        "109 – Coprológico Funcional",
        "110 – Sangue Oculto nas Fezes"
      ]
    },
    {
      title: "Imunologia",
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      exams: [
        "111 – Cinomose – Antígeno",
        "112 – Cinomose – Anticorpo",
        "113 – Ehrlichia canis – Anticorpo",
        "114 – FIV/FELV – AC/AG",
        "115 – Giardia lamblia – Antígeno",
        "116 – Leishmania infantum – AC",
        "117 – Parvovírus Canino – Antígeno",
        "118 – SNAP 4DX Plus"
      ]
    },
    {
      title: "Sorologias",
      icon: <Syringe className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      exams: [
        "119 – ANA – FAN",
        "120 – Babesia – IgG – ELISA",
        "121 – Babesia – IgM – ELISA",
        "122 – Bordetella bronchiseptica",
        "123 – Ehrlichia – IgG – ELISA",
        "124 – Ehrlichia – IgM – ELISA",
        "125 – Esporotricose – ELISA",
        "126 – Leishmaniose Canina – ELISA",
        "127 – Leishmaniose Canina – RIFI",
        "128 – Leptospirose",
        "129 – Neospora caninum – RIFI",
        "130 – Teste Alérgico Saliva de Pulga",
        "131 – Teste Alérgico 24 Alérgenos",
        "132 – Teste Reação Alimentar (Food)",
        "133 – Checkup Vacinal para Raiva",
        "134 – Titulação Raiva (Internacional)",
        "135 – Sorologia Raiva – Japão"
      ]
    },
    {
      title: "Microbiologia",
      customIconSrc: "https://8upload.com/image/a4a5dc4e8861742c/microbio.png",
      exams: [
        "136 – Citologia Ouvido ou Pele",
        "137 – Raspado de Pele",
        "138 – Coprocultura",
        "139 – Cultura Bacteriana Aeróbios",
        "140 – Cultura Bacteriana Aer/Anaer",
        "141 – Otocultura Bacteriana",
        "143 – Urocultura Bacteriana",
        "146 – Coloração de Gram",
        "148 – Cultura Fúngica"
      ]
    },
    {
      title: "PCR",
      icon: <Dna className="w-8 h-8 md:w-10 md:h-10 text-vintage-cream" />,
      exams: [
        "--- PAINÉIS PCR ---",
        "30 – Painel PCR Hemoparasitas Completo",
        "31 – Painel PCR Hemoparasitas Básico",
        "32 – Painel PCR Neurológico Canino Completo",
        "33 – Painel PCR Neurológico Canino Básico",
        "34 – Painel PCR Diarreia Canino 1",
        "35 – Painel PCR Diarreia Canino 2",
        "36 – Painel PCR Diarreia Filhote",
        "37 – Painel PCR Respiratório Canino Completo",
        "38 – Painel PCR Respiratório Canino Básico",
        "39 – Painel PCR Aborto Canino Completo",
        "40 – Painel PCR Aborto Canino Básico",
        "41 – Painel PCR Retrovírus Felino",
        "42 – Painel PCR Anemia Felina Básico",
        "43 – Painel PCR Anemia Felina Completo",
        "44 – Painel PCR Respiratório Felino Básico",
        "45 – Painel PCR Respiratório Felino Completo",
        "46 – Painel PCR Diarreia Felino Completo",
        "47 – Painel PCR Diarreia Felino Básico",
        "49 – Painel PCR Neurológico Felino Completo",
        "50 – Painel PCR Neurológico Felino Básico",
        "51 – Painel PCR Aborto Felino",
        "",
        "--- PCR INDIVIDUAL ---",
        "149 – Adenovírus Canino 1",
        "151 – Anaplasma platys",
        "152 – Babesia spp",
        "153 – Bartonella spp",
        "154 – Bordetella bronchiseptica",
        "155 – Brucella spp",
        "156 – Calicivírus Felino",
        "159 – Coronavírus Entérico Canino",
        "160 – Coronavírus Felino (PIF)",
        "162 – Cryptococcus spp",
        "164 – Ehrlichia spp",
        "165 – Giardia spp",
        "166 – Hepatozoon spp",
        "167 – Herpesvírus Canino 1",
        "168 – Herpesvírus Felino 1",
        "169 – Leishmania spp",
        "170 – Leptospira spp",
        "171 – Mycoplasma spp (Hemotrópico)",
        "174 – Panleucopenia Felina",
        "175 – Parvovírus Canino",
        "178 – Toxoplasma gondii",
        "179 – Vírus da Cinomose",
        "180 – FIV (Proviral)",
        "181 – FELV (Proviral)"
      ]
    },
    {
      title: "Hormônios",
      customIconSrc: "https://8upload.com/image/e23dad573675219b/hormonio.png",
      exams: [
        "182 – Cortisol",
        "183 – T4 Total",
        "184 – TSH",
        "185 – Insulina Endógena",
        "186 – Progesterona",
        "187 – Testosterona",
        "188 – T3 Total",
        "189 – T4 Livre",
        "190 – T4 Livre Pós-Diálise"
      ]
    },
    {
      title: "Anatomia Patológica",
      customIconSrc: "https://8upload.com/image/daf33415f5e10046/anatomia_patol__gica.png",
      exams: [
        "191 – Citologia",
        "192 – Citologia Local Adicional",
        "193 – Histopatológico 1 Amostra",
        "196 – Histopatológico Peça Cirúrgica",
        "197 – Imuno-histoquímica"
      ]
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
          Clique nos quadros abaixo para ver a lista de exames
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            onClick={() => handleOpenModal(service)}
            className="group relative bg-vintage-cream border border-vintage-green p-4 flex flex-col items-center text-center shadow-[4px_4px_0px_#2d5a27] hover:bg-white transition-all duration-300 cursor-pointer hover:shadow-[6px_6px_0px_#2d5a27] hover:-translate-y-1"
          >
            <div className="mb-4 bg-vintage-green p-3 rounded-full border-2 border-vintage-cream shadow-sm group-hover:scale-110 transition-transform w-16 h-16 flex items-center justify-center">
              {/* Lógica de Renderização do Ícone: Prioriza PNG se existir, senão usa Lucide */}
              {service.customIconSrc ? (
                <img 
                  src={service.customIconSrc} 
                  alt={service.title} 
                  className="w-10 h-10 object-contain brightness-0 invert"
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
            className="bg-vintage-cream border-4 border-vintage-green p-6 md:p-8 max-w-2xl w-full relative shadow-[10px_10px_0px_#1a3c1b] animate-in zoom-in-95 duration-200 flex flex-col max-h-[85vh]"
            role="dialog"
            aria-modal="true"
          >
            {/* Botão Fechar */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-vintage-green hover:text-vintage-brown-DEFAULT hover:rotate-90 transition-all z-10"
            >
              <X size={28} />
            </button>

            {/* Cabeçalho do Modal */}
            <div className="flex items-center gap-4 mb-6 border-b-2 border-vintage-green/20 pb-4 shrink-0">
              <div className="bg-vintage-green p-3 rounded-full text-vintage-cream w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                {selectedService.customIconSrc ? (
                   <img 
                      src={selectedService.customIconSrc} 
                      alt={selectedService.title} 
                      className="w-8 h-8 md:w-10 md:h-10 object-contain brightness-0 invert"
                   />
                ) : (
                   selectedService.icon
                )}
              </div>
              <h3 className="font-display text-xl md:text-3xl text-vintage-green uppercase tracking-widest">
                {selectedService.title}
              </h3>
            </div>

            {/* Conteúdo do Modal (Lista com Scroll) */}
            <div className="font-serif text-vintage-brown-DEFAULT text-sm md:text-base leading-relaxed overflow-y-auto pr-2 custom-scrollbar">
               <ul className="space-y-2">
                 {selectedService.exams.map((exam, idx) => (
                   <li 
                    key={idx} 
                    className={`
                      py-1 border-b border-vintage-green/10 last:border-0
                      ${exam.startsWith('---') ? 'font-display font-bold text-vintage-green text-center mt-4 bg-vintage-green/10 rounded-sm' : ''}
                      ${exam === '' ? 'border-none h-2' : ''}
                    `}
                   >
                     {exam}
                   </li>
                 ))}
               </ul>
            </div>

            {/* Rodapé Decorativo */}
            <div className="mt-6 pt-4 border-t border-dashed border-vintage-green/30 text-center shrink-0">
               <span className="text-xs font-mono text-vintage-green/60 uppercase tracking-widest">
                 Analabvet • Lista de Exames
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