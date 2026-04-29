'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Shield, Award, MapPin, CheckCircle2, TreePine, Clock, Zap, Ruler } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';

export default function AboutContent() {
  return (
    <main className="min-h-screen bg-white selection:bg-mandalla-lime selection:text-mandalla-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-mandalla-dark text-white">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.pexels.com/photos/35089307/pexels-photo-35089307.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Sobre a Mandalla" 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-mandalla-dark via-mandalla-dark/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-12"
          >
            Nossa <br /> <span className="text-mandalla-lime italic">História.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-slate-300 font-medium max-w-2xl leading-relaxed"
          >
            Fundada em Piracaia, a Mandalla Arborismo nasceu da necessidade de um serviço de manejo vegetal que unisse técnica rigorosa, segurança absoluta e respeito à biologia das árvores.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100">
                <h2 className="text-4xl font-black text-mandalla-dark mb-8 tracking-tight">Nossa Missão</h2>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  Proporcionar segurança e tranquilidade aos nossos clientes através de intervenções técnicas precisas, preservando o patrimônio arbóreo e o meio ambiente com excelência operacional.
                </p>
              </div>
              <div className="bg-mandalla-dark p-16 rounded-[4rem] text-white">
                <h2 className="text-4xl font-black mb-8 tracking-tight text-mandalla-lime">Nossa Visão</h2>
                <p className="text-xl text-slate-300 leading-relaxed font-medium">
                  Ser a principal referência em arboricultura técnica e acesso por corda no interior de São Paulo, reconhecida pela sofisticação do serviço e rigor nos protocolos de segurança.
                </p>
              </div>
            </div>
            <div className="relative h-[600px] rounded-[5rem] overflow-hidden shadow-2xl border-[20px] border-slate-50">
              <Image 
                src="https://images.pexels.com/photos/2310483/pexels-photo-2310483.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop" 
                alt="Equipe Mandalla" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values / Differentials */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-mandalla-lime font-black uppercase tracking-[0.5em] text-xs mb-8">Nossos Valores</h2>
            <p className="text-6xl font-black text-mandalla-dark tracking-tighter">O que nos <span className="italic text-slate-300">define.</span></p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Segurança", desc: "Protocolos NR-35 e equipamentos certificados em todas as operações.", icon: <Shield className="w-8 h-8" /> },
              { title: "Técnica", desc: "Decisões baseadas em biologia vegetal e engenharia de acesso.", icon: <Zap className="w-8 h-8" /> },
              { title: "Respeito", desc: "Preservação da saúde da árvore e do ecossistema local.", icon: <TreePine className="w-8 h-8" /> },
              { title: "Precisão", desc: "Cortes limpos e movimentação controlada em locais confinados.", icon: <Ruler className="w-8 h-8" /> }
            ].map((v, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] border border-slate-200 hover:border-mandalla-lime transition-all group">
                <div className="bg-slate-50 p-6 rounded-2xl w-fit mb-8 group-hover:bg-mandalla-dark group-hover:text-mandalla-lime transition-all">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-black text-mandalla-dark mb-4">{v.title}</h3>
                <p className="text-slate-500 font-bold leading-relaxed text-sm">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-slate-100 border border-slate-200 mb-16">
            <Award className="w-8 h-8 text-mandalla-lime" />
            <span className="text-xl font-black text-mandalla-dark tracking-tight">Certificações e Conformidade</span>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <span className="block text-5xl font-black text-mandalla-dark">NR-35</span>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Trabalho em Altura</p>
            </div>
            <div className="space-y-4">
              <span className="block text-5xl font-black text-mandalla-dark">NR-12</span>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Máquinas e Equipamentos</p>
            </div>
            <div className="space-y-4">
              <span className="block text-5xl font-black text-mandalla-dark">UIAA</span>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Padrão Internacional de Acesso</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
