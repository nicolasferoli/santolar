import React from 'react';
import { Star, Sparkles } from 'lucide-react';

export const ProductIntroSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mt-[131px] max-md:mt-10 mx-auto text-center">
      <div className="mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
          <h2 className="text-black text-5xl font-extrabold leading-[1.1] max-md:text-[40px]">
            Apresentando o Método Santo Lar
          </h2>
          <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
        </div>
        
        <div className="relative bg-gradient-to-br from-amber-50 to-yellow-100 rounded-[20px] border border-yellow-200 shadow-lg p-8 max-md:p-5 overflow-hidden">
          <div className="absolute top-4 right-4">
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              NOVO!
            </div>
          </div>
          
          <p className="text-xl font-bold text-gray-800 mb-4">
            Descubra o segredo para um lar sempre limpo, acolhedor e em harmonia com sua fé – sem esforço e sem estresse!
          </p>
          <p className="text-lg text-gray-700">
            Com esse método, a procrastinação fica no passado e sua casa ganha mais leveza no dia a dia!
          </p>
        </div>
      </div>
    </section>
  );
};