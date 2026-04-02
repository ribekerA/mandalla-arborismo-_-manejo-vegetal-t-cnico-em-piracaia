'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export const TrustSection = () => {
  return (
    <section id="diferenciais" className="py-40 bg-mandalla-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-mandalla-lime/5 -skew-x-12 translate-x-32 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-32 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 text-mandalla-lime border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-sm">
              Diferenciais Técnicos
            </div>
            <h3 className="text-6xl sm:text-7xl md:text-8xl font-black mb-20 tracking-tighter leading-[0.95] md:leading-[0.9]">Segurança que gera confiança.</h3>
            
            <div className="grid gap-16">
              {[
                { title: "Certificação NR-35 e EPIs de Qualidade", desc: "Equipe técnica estritamente treinada, documentada e equipada com materiais Petzl e Camp para acesso por corda." },
                { title: "Gerenciamento de Risco (Rigging)", desc: "Trabalhamos com sistema avançado de descenso com atrito para amarrar e descer enormes peças devagar (frenadas) de forma que nenhuma atinja estruturas embaixo." },
                { title: "Seguro de Obra e Propriedade", desc: "A sua vida, a sua segurança e o seu patrimônio não podem ficar à sorte. Trabalhamos assegurados contra danos ou eventualidades em operação." },
                { title: "Emissão de ART/Laudo em Poda Crítica", desc: "Operamos embasados na legalidade. Aconselhamos quando existe a necessidade de autorização da prefeitura ou defesa civil para não ser penalizado." }
              ].map((item, i) => (
                <div key={i} className="flex gap-10 group">
                  <div className="shrink-0 self-start mt-1 bg-white/5 p-5 rounded-3xl group-hover:bg-mandalla-lime transition-all duration-700 border border-white/10 group-hover:border-transparent">
                    <CheckCircle2 className="text-mandalla-lime group-hover:text-mandalla-dark w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-black text-3xl mb-4 tracking-tight">{item.title}</h4>
                    <p className="text-slate-300 font-medium leading-relaxed text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 xl:gap-10">
              <div className="space-y-6 sm:space-y-10">
                <div className="rounded-[2rem] sm:rounded-[4rem] overflow-hidden h-[300px] sm:h-[400px] border-[6px] sm:border-[12px] border-mandalla-lime/10 shadow-3xl relative group">
                  <Image src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=500&h=800" alt="Equipamento técnico" width={500} height={800} className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className="bg-mandalla-lime p-5 lg:p-6 xl:p-14 rounded-[2rem] sm:rounded-[3rem] text-center shadow-3xl border-[6px] sm:border-[8px] border-white/5 flex flex-col items-center justify-center">
                  <span className="block text-5xl lg:text-5xl xl:text-7xl font-black text-mandalla-dark mb-1 sm:mb-3 tracking-tighter drop-shadow-sm">100%</span>
                  <span className="text-[9px] sm:text-[12px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-mandalla-dark/60 leading-tight">Segurança Operacional</span>
                </div>
              </div>
              <div className="space-y-6 sm:space-y-10 pt-16 sm:pt-24">
                <div className="bg-white text-mandalla-dark p-5 lg:p-6 xl:p-14 rounded-[2rem] sm:rounded-[3rem] text-center shadow-3xl border-[6px] sm:border-[8px] border-slate-50 flex flex-col items-center justify-center">
                  <span className="block text-5xl lg:text-5xl xl:text-7xl font-black mb-1 sm:mb-3 tracking-tighter drop-shadow-sm">+500</span>
                  <span className="text-[9px] sm:text-[12px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-400 leading-tight">Projetos Executados</span>
                </div>
                <div className="rounded-[2rem] sm:rounded-[4rem] overflow-hidden h-[300px] sm:h-[400px] border-[6px] sm:border-[12px] border-white/5 shadow-3xl relative group">
                  <Image src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=500&h=800" alt="Trabalho técnico" width={500} height={800} className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
