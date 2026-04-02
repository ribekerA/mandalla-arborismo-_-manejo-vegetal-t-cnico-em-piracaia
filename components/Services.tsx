'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Zap, TreePine, Bug, Construction, Clock, CheckCircle2, Ruler, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Services = () => {
  const services = [
    {
      title: "Poda em Altura",
      desc: "Descida guiada de galhos em áreas de risco (próximo a telhados ou redes) com acesso por corda seguro.",
      icon: <Zap className="w-8 h-8" />,
      tag: "Risco Controlado",
      slug: "poda-em-altura"
    },
    {
      title: "Supressão Técnica",
      desc: "Remoção controlada de árvores comprometidas, com laudo técnico e total conformidade ambiental.",
      icon: <TreePine className="w-8 h-8" />,
      tag: "Segurança",
      slug: "manejo-vegetal"
    },
    {
      title: "Diagnóstico e Tratamento",
      desc: "Avaliação fitossanitária e combate especializado a cupins, fungos e brocas que comprometem a estrutura celular.",
      icon: <Bug className="w-8 h-8" />,
      tag: "Patologia",
      slug: "controle-de-pragas"
    },
    {
      title: "Engenharia Arbórea",
      desc: "Cablagem, ancoragem e escoramento para impedir rupturas iminentes em matrizes centenárias.",
      icon: <Construction className="w-8 h-8" />,
      tag: "Estrutural",
      slug: "reforco-estrutural"
    },
    {
      title: "Descompactação de Solo",
      desc: "Técnica avançada de aeração que revitaliza o sistema radicular e previne queda por tombamento.",
      icon: <Clock className="w-8 h-8" />,
      tag: "Resgate",
      slug: "revitalizacao"
    },
    {
      title: "Laudos Técnicos",
      desc: "Vistoria técnica profunda, documentação fotográfica e embasamento jurídico para liberação ambiental.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      tag: "Consultoria",
      slug: "manutencao"
    },
    {
      title: "Acesso por Corda",
      desc: "Técnicas de alpinismo industrial garantem intervenções perfeitas onde maquinário pesado não chega.",
      icon: <Ruler className="w-8 h-8" />,
      tag: "Operacional",
      slug: "acesso-por-corda"
    }
  ];

  return (
    <section id="servicos" className="py-40 bg-[#fcfdfd] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <h2 className="text-mandalla-lime font-black uppercase tracking-[0.5em] text-xs mb-10">Especialidades Mandalla</h2>
            <p className="text-6xl sm:text-7xl md:text-8xl font-black text-mandalla-dark tracking-tighter leading-[0.9]">
              Não é jardinagem. <br />
              <span className="text-slate-300 italic font-medium">É ciência aplicada.</span>
            </p>
          </div>
          <p className="text-slate-400 font-bold text-xl max-w-sm leading-relaxed">
            Garantimos a segurança do seu imóvel e a longevidade do seu patrimônio vegetal com técnica rigorosa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -15 }}
              className="p-8 sm:p-10 xl:p-10 bg-white border border-slate-100 rounded-[3rem] hover:border-mandalla-lime hover:shadow-[0_40px_80px_-20px_rgba(27,60,53,0.12)] transition-all duration-700 group relative flex flex-col"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
                <div className="bg-slate-50 p-5 rounded-2xl text-mandalla-dark group-hover:bg-mandalla-dark group-hover:text-mandalla-lime transition-all duration-700 shadow-sm shrink-0">
                  {s.icon}
                </div>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-mandalla-dark/50 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 whitespace-nowrap">
                  {s.tag}
                </span>
              </div>
              <h3 className="text-3xl lg:text-2xl xl:text-3xl font-black text-mandalla-dark mb-5 tracking-tighter leading-[1.1] break-words">
                {s.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-10 text-base flex-1">{s.desc}</p>
              
              <div className="flex flex-col gap-5 mt-auto">
                <Link 
                  href={`/servicos/${s.slug}`}
                  className="text-mandalla-dark font-black text-xs flex items-center gap-3 group-hover:gap-5 transition-all"
                >
                  DETALHES TÉCNICOS <ArrowRight className="w-5 h-5 text-mandalla-lime" />
                </Link>
                <div className="h-px bg-slate-100 w-full"></div>
                <a 
                  href="https://wa.me/5511911113553" 
                  target="_blank"
                  className="text-slate-400 font-black text-[10px] hover:text-mandalla-dark transition-colors tracking-widest uppercase"
                >
                  Solicitar Avaliação Rápida
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
