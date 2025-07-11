import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      id: "faq1",
      question: "O acesso ao material e as aulas é vitalício?",
      answer: "Sim, o acesso é para SEMPRE dentro da plataforma kirvano."
    },
    {
      id: "faq2",
      question: "O Santo Lar é um arquivo digital?",
      answer: "Sim, é um arquivo digital sem custos adicionais de frete."
    },
    {
      id: "faq3",
      question: "Como acesso o material?",
      answer: "Basta você entrar na plataforma www.kirvano.com.br e baixar o seu arquivo."
    },
    {
      id: "faq4",
      question: "Qual a política de reembolso?",
      answer: "Este produto é um PDF digital entregue por download imediato. Devido à sua natureza digital, não aceitamos reembolsos ou trocas após o download ser concluído. Caso ocorra algum problema técnico no download ou no arquivo, entre em contato conosco em [email de suporte] para assistência."
    }
  ];

  return (
    <section className="w-full max-w-[1200px] mt-[93px] max-md:mt-10 mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <HelpCircle className="w-8 h-8 text-amber-500" />
          <h2 className="text-black text-5xl font-extrabold leading-[1.1] max-md:text-[40px]">
            Dúvidas Frequentes
          </h2>
        </div>
      </div>
      
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq) => (
          <AccordionItem 
            key={faq.id} 
            value={faq.id}
            className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-[20px] border border-yellow-200 shadow-sm overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h3 className="text-lg font-bold text-gray-800 text-left">
                {faq.question}
              </h3>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};