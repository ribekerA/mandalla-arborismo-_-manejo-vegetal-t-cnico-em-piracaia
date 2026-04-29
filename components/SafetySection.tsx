'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Shield, AlertTriangle, HardHat, Zap, CheckSquare, BarChart3 } from 'lucide-react';

const pillars = [
  {
    icon: HardHat,
    title: 'Certificação NR-35',
    description:
      'Toda a equipe é treinada e certificada para trabalho em altura conforme a Norma Regulamentadora 35 do Ministério do Trabalho, com registro e validade comprovados.',
  },
  {
    icon: Shield,
    title: 'Seguro de Responsabilidade Civil',
    description:
      'Operamos com apólice ativa de responsabilidade civil que protege sua propriedade, vizinhança e terceiros durante toda a execução do serviço.',
  },
  {
    icon: Zap,
    title: 'Sistema de Rigging (Descida Controlada)',
    description:
      'Galhos pesados são baixados com sistema de polias, cordas e atrito controlado, garantindo que nenhuma peça atinja telhados, veículos ou pessoas abaixo.',
  },
  {
    icon: AlertTriangle,
    title: 'Análise de Risco Prévia',
    description:
      'Antes de qualquer operação, mapeamos pontos críticos: rede elétrica, estruturas adjacentes, perfil do solo e rota de queda segura. Zero improvisação.',
  },
  {
    icon: CheckSquare,
    title: 'EPIs de Qualidade Profissional',
    description:
      'Capacetes, arneses, talabartes e dispositivos de parada em queda das marcas Petzl e Camp — equipamentos utilizados por alpinistas e resgate industrial.',
  },
  {
    icon: BarChart3,
    title: 'Laudo Técnico e ART quando necessário',
    description:
      'Orientamos sobre a necessidade de licenciamento ambiental junto à Prefeitura e CETESB, evitando autuações e garantindo conformidade legal completa.',
  },
];

export const SafetySection = () => {
  return (
    <section id="seguranca" className="py-32 bg-mandalla-dark text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mandalla-lime rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-mandalla-lime rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left column — heading + intro */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-mandalla-lime mb-6">
              Segurança Operacional
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
              Protocolo técnico antes de qualquer corte.
            </h2>
            <p className="text-slate-300 text-lg font-medium leading-relaxed mb-10 max-w-lg">
              Arborismo executado sem critério técnico é risco real para pessoas, imóveis, veículos e rede elétrica. Nossa operação segue protocolos rigorosos de segurança em todas as etapas.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-sm">
              <p className="text-mandalla-lime font-black text-sm uppercase tracking-widest mb-4">
                Área de Atuação
              </p>
              <p className="text-white/80 font-medium leading-relaxed text-base">
                Atendemos residências, condomínios, empresas, fazendas e órgãos públicos em{' '}
                <strong className="text-white">Piracaia, Atibaia, Bragança Paulista, Joanópolis, Vale do Paraíba e Grande SP</strong>.
              </p>
              <a
                href="https://wa.me/5511911113553"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-mandalla-lime text-mandalla-dark px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider hover:scale-105 transition-transform"
              >
                Solicitar Vistoria Técnica
              </a>
            </div>
          </div>

          {/* Right column — pillars */}
          <div className="grid gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-6 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-mandalla-lime/30 rounded-[1.75rem] p-7 transition-all duration-400 group"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-mandalla-lime/10 flex items-center justify-center group-hover:bg-mandalla-lime transition-colors duration-400">
                    <Icon className="w-5 h-5 text-mandalla-lime group-hover:text-mandalla-dark transition-colors duration-400" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-white tracking-tight mb-2">{p.title}</h3>
                    <p className="text-slate-400 font-medium text-sm leading-relaxed">{p.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
