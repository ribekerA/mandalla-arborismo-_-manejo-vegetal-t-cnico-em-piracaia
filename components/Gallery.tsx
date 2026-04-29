'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Heart, MessageCircle, MapPin } from 'lucide-react';
import Image from 'next/image';

export const Gallery = () => {
  const cases = [
    { 
      url: "https://images.pexels.com/photos/34674271/pexels-photo-34674271.jpeg", 
      title: "Poda de Risco em Condomínio",
      category: "Acesso por Corda",
      location: "Alphaville, SP",
      problem: "Eucalipto de 25m com risco iminente de queda sobre a rede de alta tensão e residências.",
      solution: "Descida guiada e fracionada (rigging), garantindo zero impacto no solo e proteção ao patrimônio."
    },
    { 
      url: "https://images.pexels.com/photos/7812847/pexels-photo-7812847.jpeg", 
      title: "Manejo Vegetal para Nova Obra",
      category: "Supressão Técnica",
      location: "Piracaia, SP",
      problem: "Necessidade de liberação de terreno em área urbana com forte interferência de cabeamento elétrico.",
      solution: "Supressão controlada em blocos e trituração de galhadas no local para compostagem."
    },
    { 
      url: "https://images.pexels.com/photos/31127615/pexels-photo-31127615.jpeg", 
      title: "Resgate de Matriz Centenária",
      category: "Reforço Estrutural",
      location: "Bragança Paulista, SP",
      problem: "Ficus centenário com rachadura severa no tronco principal apresentando risco de ruptura.",
      solution: "Instalação de sistema de cabos de aço (cablagem) e poda de alívio de carga para preservação histórica."
    }
  ];

  return (
    <section id="galeria" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-slate-100 shadow-sm">
            Cases de Sucesso • Operacional
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-mandalla-dark tracking-tighter mb-8 leading-[0.9]">
            Engenharia <span className="text-mandalla-lime italic font-medium">em Ação.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Intervenções reais que demonstram nosso nível de resolução técnica e controle absoluto de risco em áreas de alto grau de dificuldade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((c, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-[0_20px_40px_-20px_rgba(27,60,53,0.08)] group flex flex-col h-full hover:shadow-[0_40px_80px_-20px_rgba(27,60,53,0.15)] transition-all duration-700"
            >
              <div className="relative h-72 w-full bg-slate-200 shrink-0 overflow-hidden">
                <Image 
                  src={`${c.url}?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`} 
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mandalla-dark/80 via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md text-white border border-white/30 px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-lg">
                  {c.category}
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 text-white/90 text-xs font-black uppercase tracking-widest">
                  <MapPin className="w-5 h-5 text-mandalla-lime drop-shadow-md" /> 
                  <span className="drop-shadow-md">{c.location}</span>
                </div>
              </div>
              <div className="p-8 sm:p-10 flex flex-col flex-1">
                <h3 className="text-2xl sm:text-3xl font-black text-mandalla-dark mb-8 tracking-tighter leading-none">{c.title}</h3>
                
                <div className="space-y-6 mt-auto">
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100/50">
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Desafio Detectado</span>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed">{c.problem}</p>
                  </div>
                  <div className="bg-mandalla-dark/5 p-6 rounded-3xl border border-mandalla-dark/5">
                    <span className="block text-[10px] font-black text-mandalla-lime uppercase tracking-[0.2em] mb-2 drop-shadow-sm">Solução Técnica</span>
                    <p className="text-sm font-medium text-mandalla-dark/90 leading-relaxed">{c.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <a 
            href="https://wa.me/5511911113553" 
            target="_blank"
            className="inline-flex items-center gap-4 bg-mandalla-dark text-white py-6 px-12 rounded-full font-black text-sm hover:bg-mandalla-lime hover:text-mandalla-dark transition-colors tracking-widest uppercase shadow-2xl hover:scale-105"
          >
            Quero Parecer Técnico para minha Obra <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
