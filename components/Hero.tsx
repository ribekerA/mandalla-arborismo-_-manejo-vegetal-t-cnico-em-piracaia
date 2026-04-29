'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Shield, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/4 z-0" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-mandalla-lime/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 pb-32">
        <div className="grid xl:grid-cols-2 gap-16 xl:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            {/* Geo + cert badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-[0.25em] mb-10 border border-slate-100 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-mandalla-lime shrink-0" />
              Piracaia & Região&ensp;·&ensp;Equipe NR-35 Certificada
            </div>
            
            <h1 className="text-[3.25rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] font-black text-mandalla-dark tracking-tighter leading-[0.88] mb-8 max-w-2xl">
              Arborismo Técnico e{' '}
              <span className="text-slate-300 italic font-medium">Poda em Altura</span>{' '}
              <br className="hidden sm:block" />
              com{' '}
              <span className="text-mandalla-lime relative inline-block">
                Risco Zero.
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-mandalla-lime/15 -z-10 rounded-full blur-sm" aria-hidden="true" />
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-500 mb-8 max-w-xl leading-relaxed font-medium">
              Supressão vegetal, manejo arbóreo e avaliação de risco para residências, condomínios, empresas e áreas rurais em Piracaia, Atibaia e região.
            </p>

            {/* Trust tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              {['Seguro de Responsabilidade Civil', 'EPIs Petzl & Camp', 'Laudo Técnico'].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-mandalla-dark bg-mandalla-lime/10 border border-mandalla-lime/25 px-4 py-2 rounded-full"
                >
                  <Shield className="w-3 h-3 text-mandalla-lime" />
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="https://wa.me/5511911113553" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-mandalla-dark text-white px-9 py-5 rounded-[2rem] font-black text-base hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group shadow-[0_16px_32px_-12px_rgba(27,60,53,0.35)] hover:-translate-y-0.5"
              >
                Solicitar Vistoria Técnica
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-mandalla-lime group-hover:text-mandalla-dark transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
              <Link 
                href="/#servicos"
                className="w-full sm:w-auto border border-slate-200 text-slate-600 px-9 py-5 rounded-[2rem] font-black text-base hover:border-mandalla-dark hover:text-mandalla-dark transition-all flex items-center justify-center gap-2"
              >
                Ver Serviços
                <ChevronDown className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative lg:ml-10 mt-16 xl:mt-0"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(27,60,53,0.2)] border-[16px] border-white group bg-slate-50">
              <div className="absolute inset-0 bg-mandalla-dark/10 group-hover:bg-transparent transition-colors duration-1000 z-10" aria-hidden="true" />
              <Image 
                src="https://images.pexels.com/photos/2310483/pexels-photo-2310483.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1200&fit=crop" 
                alt="Técnico da Mandalla Arborismo realizando poda em altura com motosserra e sistema de acesso por corda em Piracaia" 
                width={1000} 
                height={1200} 
                className="object-cover aspect-[4/5] xl:aspect-[3/4] group-hover:scale-105 transition-transform duration-[3s] ease-out brightness-95"
                priority
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mandalla-dark/80 via-mandalla-dark/20 to-transparent z-10" aria-hidden="true" />
              
              <div className="absolute bottom-10 left-10 right-10 p-7 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 z-20">
                <div className="flex items-center gap-5">
                  <div className="bg-mandalla-lime p-3.5 rounded-xl shrink-0">
                    <Shield className="w-6 h-6 text-mandalla-dark" />
                  </div>
                  <div>
                    <span className="block text-white font-black text-lg tracking-tight mb-0.5">Protocolo NR-35 Ativo</span>
                    <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">Seguro &amp; EPIs Certificados</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating stats badge */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-4 xl:-right-12 bg-white px-8 py-7 rounded-[2.5rem] shadow-2xl z-20 hidden md:flex flex-col items-center justify-center border border-slate-100"
              aria-label="+500 projetos executados"
            >
              <span className="block text-5xl font-black text-mandalla-lime tracking-tighter leading-none mb-2">+500</span>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-mandalla-dark text-center leading-snug">Projetos<br />Executados</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
