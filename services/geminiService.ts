import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateVintageSlogan = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Gere uma dica de saúde veterinária ou curiosidade interessante sobre ${topic}. 
      O tom deve ser profissional, confiável, mas com um toque clássico e elegante (estilo almanaque antigo). 
      Mantenha curto, menos de 20 palavras. Responda em Português.`,
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error generating slogan:", error);
    return "A prevenção é o melhor remédio para o seu fiel companheiro.";
  }
};

export const generateBlogIdeas = async (): Promise<string[]> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Liste 3 títulos de artigos para um blog de laboratório veterinário. 
      Os títulos devem ser informativos e passar credibilidade. Responda em Português.
      Retorne apenas os títulos, um por linha.`,
    });
    const text = response.text;
    return text.split('\n').filter(line => line.trim().length > 0).slice(0, 3);
  } catch (error) {
    console.error("Error generating blog ideas:", error);
    return [
      "A Importância do Check-up Anual para Cães Idosos",
      "Entendendo o Hemograma: O que o sangue diz sobre seu pet",
      "Prevenção de Parasitas: Um Guia Completo"
    ];
  }
};