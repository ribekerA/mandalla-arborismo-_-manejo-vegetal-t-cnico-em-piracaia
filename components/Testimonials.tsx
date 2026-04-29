'use client';

import React from 'react';
import Image from 'next/image';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Ricardo Mendes",
      role: "Síndico Profissional",
      text: "A Mandalla realizou a poda de 12 árvores de grande porte em nosso condomínio. O que mais impressionou foi a organização e o rigor técnico com a segurança. Zero incidentes e limpeza impecável.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      name: "Ana Paula Silveira",
      role: "Proprietária em Atibaia",
      text: "Tinha uma árvore com risco de queda sobre a casa. Outras empresas queriam apenas cortar tudo. A Mandalla fez um reforço estrutural e uma poda corretiva que salvou a árvore e minha paz.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      name: "Eng. Carlos Alberto",
      role: "Gestor de Manutenção",
      text: "Trabalho técnico de altíssimo nível. O acesso por corda deles é extremamente ágil e seguro. Recomendo para qualquer intervenção em locais de difícil acesso.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100"
    }
  ];

  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-slate-100 shadow-sm">
            Depoimentos • Clientes Reais
          </div>
          <p className="text-6xl sm:text-7xl md:text-8xl font-black text-mandalla-dark tracking-tighter leading-[0.9]">Quem Confia <br /><span className="text-slate-300 italic font-medium">na Mandalla.</span></p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 sm:p-14 rounded-[3rem] border border-slate-100 shadow-[0_20px_40px_-20px_rgba(27,60,53,0.08)] relative group hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(27,60,53,0.15)] hover:border-mandalla-lime/50 transition-all duration-700 flex flex-col h-full">
              <div className="absolute top-8 right-10 text-8xl text-slate-200/50 font-serif opacity-30 group-hover:text-mandalla-lime/30 transition-colors pointer-events-none">“</div>
              <p className="text-slate-500 font-medium leading-relaxed mb-12 relative z-10 italic text-lg lg:text-xl flex-1 mt-6">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-5 mt-auto bg-slate-50 p-4 rounded-[2rem] border border-slate-100/50 group-hover:bg-slate-100 transition-colors duration-500">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0">
                  <Image src={t.avatar} alt={t.name} width={56} height={56} className="object-cover w-full h-full" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="block font-black text-lg text-mandalla-dark tracking-tight leading-none mb-1.5">{t.name}</span>
                  <span className="text-[9px] font-black text-mandalla-lime uppercase tracking-widest">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
