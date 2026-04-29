'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';

export default function ProjectsContent() {
  const projects = [
    {
      title: "Residência em Piracaia",
      category: "Poda em Altura & Rigging",
      description: "Remoção de galhos de grande porte sobre telhado colonial sem danos à estrutura.",
      image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800&h=1000",
      location: "Piracaia, SP",
      year: "2025"
    },
    {
      title: "Condomínio em Atibaia",
      category: "Manejo Vegetal Técnico",
      description: "Supressão de 15 espécimes com laudo ambiental e destinação correta de resíduos.",
      image: "https://images.pexels.com/photos/7812847/pexels-photo-7812847.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      location: "Atibaia, SP",
      year: "2024"
    },
    {
      title: "Fazenda Histórica",
      category: "Reforço Estrutural & Revitalização",
      description: "Cablagem de Jequitibá centenário e tratamento fitossanitário profundo.",
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=800&h=1000",
      location: "Joanópolis, SP",
      year: "2025"
    },
    {
      title: "Propriedade Particular",
      category: "Acesso por Corda",
      description: "Poda de limpeza em local de difícil acesso sobre piscina e deck de madeira.",
      image: "https://images.pexels.com/photos/2905995/pexels-photo-2905995.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      location: "Bragança Paulista, SP",
      year: "2024"
    },
    {
      title: "Área Industrial",
      category: "Manejo de Risco",
      description: "Remoção controlada de árvore morta próxima a transformadores de alta tensão.",
      image: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&q=80&w=800&h=1000",
      location: "Itatiba, SP",
      year: "2025"
    },
    {
      title: "Jardim Botânico Privado",
      category: "Revitalização Nutricional",
      description: "Programa de nutrição e descompactação de solo para coleção de palmeiras raras.",
      image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800&h=1000",
      location: "Piracaia, SP",
      year: "2024"
    }
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-mandalla-lime selection:text-mandalla-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-mandalla-dark text-white">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1920&h=1080" 
            alt="Projetos Mandalla" 
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
            Portfólio de <br /> <span className="text-mandalla-lime italic">Execução.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-slate-300 font-medium max-w-2xl leading-relaxed"
          >
            Conheça alguns dos nossos trabalhos mais desafiadores, onde a técnica e a segurança se encontram para entregar resultados impecáveis.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden mb-8 shadow-2xl border-[12px] border-slate-50">
                  <Image 
                    src={p.image} 
                    alt={p.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mandalla-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-4 group-hover:translate-y-0">
                    <div className="bg-mandalla-lime p-4 rounded-2xl">
                      <ArrowRight className="w-8 h-8 text-mandalla-dark" />
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <div className="flex items-center gap-3 text-mandalla-lime font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                    <MapPin className="w-4 h-4" /> {p.location} • {p.year}
                  </div>
                  <h3 className="text-3xl font-black text-mandalla-dark mb-4 tracking-tight group-hover:text-mandalla-lime transition-colors">{p.title}</h3>
                  <p className="text-slate-500 font-bold leading-relaxed text-sm mb-6">
                    {p.description}
                  </p>
                  <span className="inline-block px-6 py-2 rounded-full bg-slate-100 text-slate-400 font-black uppercase tracking-widest text-[9px] border border-slate-200">
                    {p.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-mandalla-dark mb-12 tracking-tight">Tem um desafio para nós?</h2>
          <p className="text-xl text-slate-500 font-bold mb-16 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe está pronta para avaliar sua propriedade e propor a melhor solução técnica para o seu manejo vegetal.
          </p>
          <a 
            href="https://wa.me/5511911113553" 
            target="_blank"
            className="inline-flex items-center gap-4 bg-mandalla-dark text-white px-16 py-8 rounded-[2.5rem] font-black text-2xl hover:bg-mandalla-dark/90 transition-all shadow-2xl"
          >
            Solicitar Orçamento <ArrowRight className="w-7 h-7 text-mandalla-lime" />
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
