import React from 'react';
import { CTAButton } from './CTAButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="self-stretch max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex flex-col self-stretch items-stretch text-lg text-black font-bold my-auto max-md:max-w-full max-md:mt-10">
            <h1 className="text-[64px] leading-[70px] max-md:max-w-full max-md:text-[40px] max-md:leading-[48px]">
              Uma casa bem cuidada se torna um Santuário de Amor e Respeito.
            </h1>
            <p className="text-xl font-medium mr-[25px] mt-[23px] max-md:max-w-full max-md:mr-2.5">
              Sente que a desorganização nunca tem fim? Eu passei por isso e
              desenvolvi o MÉTODO LAR ABENÇOADO, um guia inspirado na fé
              católica para você ter uma casa limpa e acolhedora em 2 horas
              por dia, sem estresse e sem culpa.
            </p>
            <CTAButton>
              QUERO TRANSFORMAR MEU LAR!
            </CTAButton>
            <p className="text-black font-medium ml-[111px] mt-[21px] max-md:ml-2.5">
              Oferta Especial por tempo limitado
            </p>
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0 flex justify-center">
          <img
            src="/lovable-uploads/2f92ac2f-41ca-4a1e-80eb-8494fbe7f4a8.png"
            alt="Mulher organizando sua casa seguindo o Método Lar Abençoado"
            className="w-full max-w-[500px] h-auto rounded-[20px] max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};
