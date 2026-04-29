'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Search, FileText, HardHat } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Contato e Descrição',
    description:
      'Você nos aciona pelo WhatsApp com fotos e uma breve descrição da situação. Nossa equipe faz uma triagem inicial para entender a urgência e complexidade.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Vistoria Técnica',
    description:
      'Um especialista vai ao local para avaliar a estrutura da árvore, o risco envolvido, as condições de acesso e o impacto sobre pessoas e imóveis.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Proposta e Planejamento',
    description:
      'Enviamos uma proposta detalhada com escopo técnico, cronograma e valor. Operações críticas incluem laudo técnico e orientação sobre licenciamento ambiental.',
  },
  {
    number: '04',
    icon: HardHat,
    title: 'Execução com Segurança',
    description:
      'Equipe completa com EPIs certificados executa a operação com rigging, cordas, planeja­mento de queda e limpeza total da área ao final do serviço.',
  },
];

export const ProcessSection = () => {
  return (
    <section id="processo" className="py-32 bg-mandalla-slate relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-mandalla-lime/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-mandalla-lime mb-6">
            Processo de Atendimento
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-mandalla-dark tracking-tighter leading-[0.9] mb-6">
            Da solicitação à <br />
            <span className="text-slate-300 italic font-medium">execução segura.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
            Cada intervenção arbórea segue um protocolo claro. Nenhuma operação começa sem avaliação técnica e plano de segurança definido.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-mandalla-lime/30 to-transparent pointer-events-none" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-[0_24px_48px_-12px_rgba(27,60,53,0.12)] hover:border-mandalla-lime/40 transition-all duration-500 group flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-mandalla-dark rounded-2xl flex items-center justify-center group-hover:bg-mandalla-lime transition-colors duration-500 shrink-0">
                    <Icon className="w-5 h-5 text-mandalla-lime group-hover:text-mandalla-dark transition-colors duration-500" />
                  </div>
                  <span className="text-6xl font-black text-slate-100 tracking-tighter leading-none group-hover:text-mandalla-lime/20 transition-colors duration-500 select-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-black text-mandalla-dark tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium flex-1">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://wa.me/5511911113553"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-mandalla-dark text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-mandalla-lime hover:text-mandalla-dark transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            Iniciar processo — WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
