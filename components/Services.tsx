'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Zap, TreePine, Bug, Construction, Clock, CheckCircle2, Ruler, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Services = () => {
  const services = [
    {
      title: "Poda em Altura",
      desc: "Intervenção técnica em galhos com risco de queda sobre telhados, redes elétricas ou áreas de circulação. Acesso por corda com rigging e descida controlada.",
      icon: <Zap className="w-7 h-7" />,
      tag: "Alta Demanda",
      slug: "poda-em-altura"
    },
    {
      title: "Supressão Vegetal",
      desc: "Remoção total de árvores comprometidas com corte segmentado, controle de queda e destinação correta dos resíduos. Orientação sobre licenciamento ambiental.",
      icon: <TreePine className="w-7 h-7" />,
      tag: "Licenciado",
      slug: "manejo-vegetal"
    },
    {
      title: "Avaliação de Risco Arbóreo",
      desc: "Vistoria técnica que identifica falhas estruturais, inclinações críticas, apodrecimento interno e risco real de queda. Laudo com recomendação de intervenção.",
      icon: <AlertTriangle className="w-7 h-7" />,
      tag: "Diagnóstico",
      slug: "acesso-por-corda"
    },
    {
      title: "Reforço Estrutural",
      desc: "Cablagem, ancoragem e escoramento para árvores com bifurcações frágeis ou inclinações perigosas. Preserva o espécime sem necessidade de remoção.",
      icon: <Construction className="w-7 h-7" />,
      tag: "Engenharia",
      slug: "reforco-estrutural"
    },
    {
      title: "Controle Fitossanitário",
      desc: "Diagnóstico e tratamento de cupins, fungos, brocas e doenças que comprometem a integridade estrutural. Injeção sistêmica e tratamento de solo.",
      icon: <Bug className="w-7 h-7" />,
      tag: "Patologia",
      slug: "controle-de-pragas"
    },
    {
      title: "Revitalização de Solo",
      desc: "Aeração profunda e adubação técnica para árvores em declínio ou estresse urbano. Restaura o sistema radicular e devolve vigor ao espécime.",
      icon: <Clock className="w-7 h-7" />,
      tag: "Recuperação",
      slug: "revitalizacao"
    },
    {
      title: "Manutenção Preventiva",
      desc: "Plano de visitas periódicas com poda de limpeza, monitoramento fitossanitário e ajuste em sistemas de reforço. Reduz custos com emergências.",
      icon: <CheckCircle2 className="w-7 h-7" />,
      tag: "Preventivo",
      slug: "manutencao"
    },
    {
      title: "Acesso por Corda",
      desc: "Técnica de alpinismo arborístico (DRT/SRT) para locais onde maquinário não acessa: encostas, fundos de vale, áreas confinadas e próximas a piscinas.",
      icon: <Ruler className="w-7 h-7" />,
      tag: "Especializado",
      slug: "acesso-por-corda"
    }
  ];

  return (
    <section id="servicos" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-mandalla-lime mb-6 block">
              Especialidades Mandalla
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-mandalla-dark tracking-tighter leading-[0.9]">
              Cada serviço com{' '}
              <span className="text-slate-300 italic font-medium">método técnico</span>{' '}
              e planejamento.
            </h2>
          </div>
          <p className="text-slate-400 font-medium text-base max-w-xs leading-relaxed md:text-right">
            Atendimento para residências, condomínios, empresas e propriedades rurais em Piracaia e região.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-7 bg-white border border-slate-100 rounded-[2.5rem] hover:border-mandalla-lime/50 hover:shadow-[0_24px_48px_-12px_rgba(27,60,53,0.12)] transition-all duration-500 group relative flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="bg-slate-50 p-4 rounded-2xl text-mandalla-dark group-hover:bg-mandalla-dark group-hover:text-mandalla-lime transition-all duration-500 shadow-sm shrink-0">
                  {s.icon}
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100 whitespace-nowrap">
                  {s.tag}
                </span>
              </div>
              <h3 className="text-xl font-black text-mandalla-dark mb-3 tracking-tight leading-snug">
                {s.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-8 text-sm flex-1">
                {s.desc}
              </p>
              
              <div className="flex flex-col gap-4 mt-auto">
                <Link 
                  href={`/servicos/${s.slug}`}
                  className="text-mandalla-dark font-black text-[11px] flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-widest"
                >
                  Saiba mais <ArrowRight className="w-4 h-4 text-mandalla-lime shrink-0" />
                </Link>
                <div className="h-px bg-slate-100 w-full" />
                <a 
                  href="https://wa.me/5511911113553" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 font-black text-[10px] hover:text-mandalla-dark transition-colors tracking-widest uppercase"
                >
                  Solicitar orçamento
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
