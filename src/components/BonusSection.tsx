
import React from 'react';

export const BonusSection: React.FC = () => {
  const bonuses = [
    {
      title: "SUPER BÔNUS 1: Card de Limpeza",
      value: "R$ 37,00",
      description: "Cards com inspirações e direcionamentos para cada cômodo da casa: Banheiro, Sala de Estar e Quarto.",
      quote: null,
      image: "/lovable-uploads/img1.webp",
      color: "from-purple-50 to-purple-100 border-purple-200"
    },
    {
      title: "SUPER BÔNUS 2: Mais Cards de Limpeza",
      value: "R$ 37,00",
      description: "Cards para Escritório e Cozinha, com mensagens de São Bento e de amor familiar.",
      quote: null,
      image: "/lovable-uploads/img2.webp",
      color: "from-blue-50 to-blue-100 border-blue-200"
    },
    {
      title: "SUPER BÔNUS 3: Plano Rápido Com Checklists",
      value: "R$ 37,00",
      description: "Um plano completo com checklists para otimizar sua rotina de limpeza, acessível no celular e tablet.",
      quote: null,
      image: "/lovable-uploads/img3.webp",
      color: "from-green-50 to-green-100 border-green-200"
    },
    {
      title: "SUPER BÔNUS 4: Imagens Exclusivas",
      value: "R$ 37,00",
      description: "Uma coleção de imagens inspiradoras e exclusivas para você.",
      quote: null,
      image: "/lovable-uploads/img4.webp",
      color: "from-orange-50 to-orange-100 border-orange-200"
    }
  ];

  return (
    <section className="w-full max-w-[900px] mt-[93px] max-md:mt-10 mx-auto">
      <h2 className="text-black text-5xl font-extrabold leading-[1.1] max-md:text-[40px] mb-12 text-center">
        E ainda... 4 SUPER BÔNUS!
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-md:gap-6">
        {bonuses.map((bonus, index) => (
          <div 
            key={index} 
            className={`bg-gradient-to-br ${bonus.color} rounded-[20px] border shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}
          >
            <div className="relative">
              <img 
                src={bonus.image} 
                alt={bonus.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                  Valor: {bonus.value}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                {bonus.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {bonus.description}
              </p>
              
              {bonus.quote && (
                <div className="bg-white/50 border-l-4 border-amber-400 pl-4 py-3 rounded-r-lg">
                  <p className="text-sm text-gray-700 italic leading-relaxed">
                    "{bonus.quote}"
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
