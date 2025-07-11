import React from 'react';
import { Home, Heart, Clock } from 'lucide-react';

export const TargetAudienceSection: React.FC = () => {
  const features = [
    {
      title: "Organização sem Complicação",
      description: "Para quem precisa de um plano simples e prático, com técnicas que realmente funcionam e se encaixam na rotina.",
      icon: Home,
      color: "from-blue-50 to-blue-100 border-blue-200"
    },
    {
      title: "Lar em Harmonia", 
      description: "Para quem busca transformar a casa em um refúgio de paz, livre do estresse e da sensação de exaustão.",
      icon: Heart,
      color: "from-rose-50 to-rose-100 border-rose-200"
    },
    {
      title: "Tempo para o que Importa",
      description: "Para quem quer mais horas livres para dedicar à família, à fé e ao seu descanso, sem sacrificar suas energias.",
      icon: Clock,
      color: "from-green-50 to-green-100 border-green-200"
    }
  ];

  return (
    <section className="w-[1200px] max-w-full mt-[93px] max-md:mt-10 mx-auto">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[33%] max-md:w-full max-md:ml-0">
          <div className="grid gap-5 font-bold my-auto max-md:mt-10">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${feature.color} w-full overflow-hidden py-8 px-8 rounded-[20px] border shadow-sm max-md:px-5 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <IconComponent className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="text-gray-800 text-lg font-bold">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[67%] ml-5 max-md:w-full max-md:ml-0 flex justify-center">
          <div className="relative group">
            <img
              src="/lovable-uploads/6a173a50-dcc9-4087-9080-8f6e935d1554.png"
              alt="Cartas do Método Lar Abençoado sobre superfície de madeira"
              className="w-full max-w-[490px] h-auto rounded-[20px] max-md:max-w-full max-md:mt-10 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};
