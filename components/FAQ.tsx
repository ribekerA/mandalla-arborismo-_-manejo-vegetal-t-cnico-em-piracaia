'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Vocês possuem autorização ambiental para supressão?",
    a: "Sim. Orientamos e auxiliamos em todo o processo de licenciamento junto aos órgãos ambientais competentes (Prefeitura, CETESB, etc.), garantindo que o manejo seja 100% legalizado."
  },
  {
    q: "Qual o risco de uma poda mal executada?",
    a: "Uma poda amadora pode causar desequilíbrio estrutural, apodrecimento do tronco e até a morte da árvore, gerando riscos de queda e multas pesadas. Nosso manejo é baseado em biologia vegetal."
  },
  {
    q: "A equipe possui seguro contra acidentes?",
    a: "Sim. Além de certificação NR-35 para trabalho em altura, possuímos seguro de responsabilidade civil que protege sua propriedade e vizinhança durante toda a operação."
  },
  {
    q: "Como funciona a vistoria técnica?",
    a: "Um especialista vai até o local, avalia a saúde da árvore, identifica riscos estruturais e propõe a melhor intervenção técnica, enviando um orçamento detalhado em seguida."
  },
  {
    q: "Qual a diferença entre poda e supressão?",
    a: "A poda é a remoção parcial de galhos para manutenção, segurança ou estética. A supressão é a remoção total da árvore, que só pode ser feita com autorização ambiental. Sempre priorizamos a preservação."
  },
  {
    q: "Vocês atendem em emergências (árvores caídas)?",
    a: "Sim. Temos equipe preparada para atendimento emergencial em casos de queda ou risco iminente. Entre em contato imediatamente pelo nosso WhatsApp para acionamento rápido."
  }
];

// Export FAQ data for use in JSON-LD schema
export const faqData = faqs;

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-40 bg-slate-50 relative overflow-hidden">
      {/* FAQ Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h2 className="text-mandalla-lime font-black uppercase tracking-[0.5em] text-[10px] mb-10">Dúvidas Técnicas</h2>
          <p className="text-7xl md:text-8xl font-black text-mandalla-dark tracking-tighter leading-[0.85]">Perguntas <br /><span className="text-slate-200 italic">Frequentes</span></p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${openIndex === i ? 'border-mandalla-lime shadow-[0_20px_60px_-15px_rgba(27,60,53,0.15)]' : 'border-slate-100 shadow-sm hover:border-slate-200'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-10 md:p-12 text-left cursor-pointer"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <h3 className="text-2xl md:text-3xl font-black text-mandalla-dark tracking-tight pr-6 flex items-center gap-4">
                  <span className={`text-mandalla-lime font-serif italic text-4xl transition-transform duration-300 ${openIndex === i ? 'rotate-12' : ''}`}>?</span> 
                  {faq.q}
                </h3>
                <div className={`bg-slate-50 p-3 rounded-2xl shrink-0 transition-all duration-300 ${openIndex === i ? 'bg-mandalla-lime rotate-180' : ''}`}>
                  <ChevronDown className={`w-6 h-6 transition-colors ${openIndex === i ? 'text-mandalla-dark' : 'text-slate-400'}`} />
                </div>
              </button>
              <div 
                id={`faq-answer-${i}`}
                role="region"
                className={`transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ overflow: 'hidden' }}
              >
                <p className="px-10 md:px-12 pb-10 md:pb-12 text-slate-500 font-bold leading-relaxed text-lg pl-[4.5rem] md:pl-[5.5rem]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
