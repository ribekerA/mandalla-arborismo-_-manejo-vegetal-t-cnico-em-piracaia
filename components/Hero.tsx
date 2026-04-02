'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Shield } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/4 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-mandalla-lime/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 cursor-default"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 pb-32">
        <div className="grid xl:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-12 border border-slate-100 shadow-sm">
              <MapPin className="w-4 h-4 text-mandalla-lime" /> Operações Técnicas • Piracaia & Região
            </div>
            
            <h1 className="text-[3.5rem] sm:text-7xl lg:text-[80px] xl:text-[90px] font-black text-mandalla-dark tracking-tighter leading-[0.9] mb-10 max-w-2xl">
              Engenharia em <span className="text-slate-300 italic font-medium whitespace-nowrap">Áreas Verdes</span> <br className="hidden sm:block" /> & <span className="text-mandalla-lime relative inline-block">
                Risco Zero.
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-mandalla-lime/20 -z-10 rounded-full blur-md"></div>
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-500 mb-14 max-w-xl leading-relaxed font-medium">
              Especialistas em supressão de grande porte, preservação ambiental e acesso por corda para as operações operacionais mais complexas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 items-center w-full sm:w-auto">
              <a 
                href="https://wa.me/5511911113553" 
                target="_blank"
                className="w-full sm:w-auto bg-mandalla-dark text-white px-10 py-6 rounded-[2rem] font-black text-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-4 group shadow-[0_20px_40px_-15px_rgba(27,60,53,0.3)] hover:-translate-y-1"
              >
                Viabilidade Técnica
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-mandalla-lime group-hover:text-mandalla-dark transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
              
              <div className="flex items-center gap-5 sm:ml-4">
                <div className="flex -space-x-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-[3px] border-white bg-slate-100 overflow-hidden shadow-md">
                      <Image src={`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100&seed=${i+10}`} alt="Client" width={48} height={48} referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-black text-mandalla-dark leading-tight flex flex-col">
                  <span className="text-lg tracking-tight">Referência</span>
                  <span className="text-slate-400 text-[9px] uppercase tracking-widest mt-1">100% Satisfação</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative lg:ml-10 mt-16 xl:mt-0"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(27,60,53,0.2)] border-[16px] border-white group bg-slate-50">
              <div className="absolute inset-0 bg-mandalla-dark/10 group-hover:bg-transparent transition-colors duration-1000 z-10"></div>
              <Image 
                src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=1000&h=1200" 
                alt="Arborismo Profissional" 
                width={1000} 
                height={1200} 
                className="object-cover aspect-[4/5] xl:aspect-[3/4] group-hover:scale-105 transition-transform duration-[3s] ease-out brightness-95"
                priority
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mandalla-dark/80 via-mandalla-dark/20 to-transparent z-10"></div>
              
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20 z-20">
                <div className="flex items-center gap-6">
                  <div className="bg-mandalla-lime p-4 rounded-2xl shrink-0">
                    <Shield className="w-8 h-8 text-mandalla-dark" />
                  </div>
                  <div>
                    <span className="block text-white font-black text-2xl tracking-tighter mb-1">Padrão Operacional</span>
                    <span className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em]">Corda & Segurança NR-35</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-8 xl:-right-16 bg-white p-10 rounded-[3rem] shadow-2xl z-20 hidden md:flex flex-col items-center justify-center border border-slate-100"
            >
              <span className="block text-6xl font-black text-mandalla-lime tracking-tighter leading-none mb-3">5+</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-mandalla-dark text-center leading-relaxed">Anos de <br /> Excelência</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
