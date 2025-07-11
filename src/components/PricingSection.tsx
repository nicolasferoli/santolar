
import React from 'react';
import { CTAButton } from './CTAButton';

export const PricingSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mt-[93px] max-md:mt-10 mx-auto text-center">
      <h2 className="text-black text-5xl font-extrabold leading-[1.1] max-md:text-[40px] mb-8">
        Oferta Especial para Mães Católicas
      </h2>
      
      <div className="flex justify-center">
        <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-[20px] border border-yellow-200 shadow-sm p-8 max-md:p-5 mb-8 max-w-md w-full">
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">De:</p>
            <p className="text-3xl font-bold text-gray-400 line-through mb-2">R$ 99,99</p>
            <p className="text-lg text-gray-600 mb-4">por apenas</p>
            <p className="text-5xl font-extrabold text-gray-800 mb-2 max-md:text-[40px]">R$ 29,77</p>
            <p className="text-xl font-bold text-gray-700 mb-6">(No Pix)</p>
            
            <div className="flex justify-center">
              <CTAButton>
                QUERO TRANSFORMAR MEU LAR!
              </CTAButton>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-600 leading-relaxed">
                Ao garantir seu acesso hoje, você ainda recebe 4 bônus exclusivos para transformar sua rotina de forma completa.
              </p>
              <p className="text-xs text-gray-500 mt-2">
                (Bônus liberado após o sétimo dia)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
