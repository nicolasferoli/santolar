
import React from 'react';
import { CTAButton } from './CTAButton';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mt-[93px] max-md:mt-10 mx-auto text-center">
      <div className="space-y-6">
        <div className="flex justify-center">
          <CTAButton>
            GARANTIR MEU ACESSO AGORA!
          </CTAButton>
        </div>
        
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-500 flex w-3 h-3 rounded-full" />
            <span className="text-sm font-medium text-gray-700">
              Pagamento Seguro: Dados protegidos e compra 100% garantida.
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 flex w-3 h-3 rounded-full" />
            <span className="text-sm font-medium text-gray-700">
              Acesso Imediato: Assim que confirmado o pagamento por e-mail.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
