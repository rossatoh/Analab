import React from 'react';
import { Microscope, Activity, Droplet, FlaskConical, Dna, ClipboardList } from 'lucide-react';

const ExamsList: React.FC = () => {
  const categories = [
    {
      title: "Hematologia",
      icon: <Activity className="w-6 h-6" />,
      exams: [
        "Hemograma Completo",
        "Contagem de Plaquetas",
        "Pesquisa de Hematozoários",
        "Fibrinogênio",
        "Contagem de Reticulócitos",
        "Teste de Compatibilidade Sanguínea"
      ]
    },
    {
      title: "Bioquímica Clínica",
      icon: <FlaskConical className="w-6 h-6" />,
      exams: [
        "Função Renal (Ureia, Creatinina)",
        "Função Hepática (ALT, FA, GGT, AST)",
        "Glicose e Frutosamina",
        "Proteínas Totais e Frações",
        "Colesterol e Triglicérides",
        "Eletrólitos (Sódio, Potássio, Cálcio, Fósforo)"
      ]
    },
    {
      title: "Urinálise e Parasitologia",
      icon: <Microscope className="w-6 h-6" />,
      exams: [
        "Urina Tipo 1 (EAS)",
        "Relação Proteína/Creatinina Urinária",
        "Coproparasitológico (Fezes)",
        "Pesquisa de Giardia e Isospora",
        "Pesquisa de Ectoparasitas (Raspado)"
      ]
    },
    {
      title: "Hormonais e Imunologia",
      icon: <Dna className="w-6 h-6" />,
      exams: [
        "T4 Total e T4 Livre",
        "Cortisol (Basal e Pós-Dexa)",
        "Teste Rápido FIV/FeLV",
        "Teste Rápido Parvovirose/Cinomose",
        "Progesterona",
        "Insulina"
      ]
    },
    {
      title: "Citopatologia",
      icon: <Droplet className="w-6 h-6" />,
      exams: [
        "Citologia de Pele e Ouvido",
        "PAAF (Punção Aspirativa por Agulha Fina)",
        "Análise de Líquidos Cavitários",
        "Imprint de Lesões",
        "Histopatológico (Biópsia)"
      ]
    },
    {
      title: "Microbiologia",
      icon: <ClipboardList className="w-6 h-6" />,
      exams: [
        "Cultura Bacteriana",
        "Antibiograma",
        "Cultura Fúngica",
        "Micológico Direto"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      {/* Introduction */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-vintage-green mb-6 uppercase tracking-widest text-shadow-plate">
          Catálogo de Análises
        </h2>
        <p className="font-serif text-lg text-vintage-brown-DEFAULT italic">
          "Utilizamos metodologia rigorosa e equipamentos calibrados diariamente para garantir a exatidão em cada resultado listado abaixo."
        </p>
        <div className="w-24 h-1 bg-vintage-green/30 mx-auto mt-6"></div>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="bg-[#fcfbf9] border border-vintage-green p-0 shadow-[6px_6px_0px_#e8dec0] relative overflow-hidden group hover:shadow-[8px_8px_0px_#d4c5a3] transition-all duration-300">
             {/* Header of Card */}
             <div className="bg-vintage-green text-vintage-cream p-4 flex items-center justify-between border-b-2 border-vintage-cream">
                <h3 className="font-display font-bold text-lg tracking-wider uppercase">
                  {category.title}
                </h3>
                <div className="text-vintage-cream opacity-80">
                  {category.icon}
                </div>
             </div>

             {/* Content List */}
             <div className="p-6 relative">
                {/* Lined paper effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_23px,#e8dec0_24px)] bg-[length:100%_24px] opacity-30 pointer-events-none"></div>
                
                <ul className="relative space-y-3">
                  {category.exams.map((exam, i) => (
                    <li key={i} className="flex items-start text-vintage-green-dark font-mono text-sm md:text-base leading-6">
                      <span className="mr-2 text-vintage-brown-light">•</span>
                      {exam}
                    </li>
                  ))}
                </ul>
             </div>
             
             {/* Decorative Corner */}
             <div className="absolute bottom-0 right-0 w-8 h-8 bg-vintage-green/10 rounded-tl-3xl"></div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-16 text-center border-t border-dashed border-vintage-green/40 pt-8">
        <p className="font-serif text-vintage-brown-DEFAULT">
          Não encontrou o exame que procura? Entre em contato conosco. <br/>
          <span className="text-sm opacity-70">Realizamos exames específicos sob consulta prévia.</span>
        </p>
      </div>
    </div>
  );
};

export default ExamsList;
