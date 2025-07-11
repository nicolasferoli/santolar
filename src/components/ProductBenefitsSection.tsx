
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ProductBenefitsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const benefits = [
    {
      title: "Método Lar Abençoado",
      description: "O guia completo para você organizar sua casa de forma prática e conectada com sua fé.",
      image: "/lovable-uploads/1.webp",
      color: "from-purple-50 to-purple-100 border-purple-200"
    },
    {
      title: "Desafio de Organização – 30 Dias",
      description: "Um plano diário para criar o hábito de manter seu lar sempre limpo e acolhedor.",
      image: "/lovable-uploads/2.webp",
      color: "from-blue-50 to-blue-100 border-blue-200"
    },
    {
      title: "Lista de Compras Inteligente",
      description: "Modelos prontos para otimizar suas idas ao mercado e nunca mais esquecer um item.",
      image: "/lovable-uploads/3.webp",
      color: "from-green-50 to-green-100 border-green-200"
    },
    {
      title: "Guia para Tirar Manchas",
      description: "Dicas exclusivas para remover as manchas mais difíceis de roupas e tecidos.",
      image: "/lovable-uploads/4.webp",
      color: "from-orange-50 to-orange-100 border-orange-200"
    },
    {
      title: "Checklist de Limpeza do Banheiro",
      description: "Um passo a passo para deixar o banheiro impecável de forma rápida e eficiente.",
      image: "/lovable-uploads/5.webp",
      color: "from-cyan-50 to-cyan-100 border-cyan-200"
    }
  ];

  return (
    <section className="w-full max-w-[1200px] mt-[93px] max-md:mt-10 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-black text-5xl font-extrabold leading-[1.1] max-md:text-[40px] mb-6">
          O que Vou Receber?
        </h2>
        <p className="text-xl font-bold text-gray-800 mb-8">
          Cuide com amor do ambiente que te acolhe!
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Ao adquirir o Método Santo Lar, você terá acesso a um pacote completo para transformar a gestão da sua casa:
        </p>
      </div>
      
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {benefits.map((benefit, index) => {
              return (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] md:flex-[0_0_48%] lg:flex-[0_0_32%] min-w-0"
                >
                  <div className={`bg-gradient-to-br ${benefit.color} rounded-[20px] border shadow-sm h-full hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] overflow-hidden`}>
                    <div className="w-full h-[200px] overflow-hidden">
                      <img 
                        src={benefit.image} 
                        alt={benefit.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-800 leading-tight mb-4">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <button 
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        
        <button 
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </section>
  );
};
