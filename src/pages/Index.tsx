import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { TargetAudienceSection } from '@/components/TargetAudienceSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ProductBenefitsSection } from '@/components/ProductBenefitsSection';
import { PricingSection } from '@/components/PricingSection';
import { BonusSection } from '@/components/BonusSection';
import { FAQSection } from '@/components/FAQSection';
import { FinalCTASection } from '@/components/FinalCTASection';

const Index: React.FC = () => {
  return (
    <main className="flex flex-col overflow-hidden items-center pt-10 pb-[130px] px-20 max-md:pb-[100px] max-md:px-5 min-h-screen bg-white">
      <div className="flex w-full max-w-[1200px] flex-col items-center max-md:max-w-full">
        <HeroSection />
        
        <header className="text-black text-5xl font-extrabold leading-[1.1] mt-[131px] max-md:max-w-full max-md:text-[40px] max-md:mt-10 text-center">
          <h2>Para quem é o Método Lar Abençoado?</h2>
        </header>
        
        <TargetAudienceSection />
        <TestimonialsSection />
        <ProductBenefitsSection />
        <PricingSection />
        <BonusSection />
        <FAQSection />
        <FinalCTASection />
      </div>
    </main>
  );
};

export default Index;
