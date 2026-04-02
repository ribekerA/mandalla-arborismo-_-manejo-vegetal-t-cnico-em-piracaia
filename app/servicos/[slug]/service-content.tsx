'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Shield, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { servicesData, type ServiceData } from '@/lib/services-data';

interface ServiceContentProps {
  slug: string;
}

export default function ServiceContent({ slug }: ServiceContentProps) {
  const service = servicesData[slug];
  const ServiceIcon = service.icon;
  
  return (
    <main className="min-h-screen bg-white selection:bg-mandalla-lime selection:text-mandalla-dark">
      <Navbar />
      
      {/* Service Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "description": service.description,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Mandalla Arborismo",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Piracaia",
                "addressRegion": "SP",
                "addressCountry": "BR"
              }
            },
            "areaServed": [
              { "@type": "City", "name": "Piracaia" },
              { "@type": "City", "name": "Atibaia" },
              { "@type": "City", "name": "Bragança Paulista" },
              { "@type": "City", "name": "Joanópolis" }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-mandalla-dark text-white">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src={service.image} 
            alt={service.title} 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-mandalla-dark via-mandalla-dark/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            href="/#servicos" 
            className="inline-flex items-center gap-2 text-mandalla-lime font-bold text-sm mb-12 hover:gap-4 transition-all uppercase tracking-widest"
          >
            <ArrowLeft className="w-5 h-5" /> Voltar aos Serviços
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-mandalla-lime/10 border border-mandalla-lime/20 p-4 rounded-2xl w-fit mb-8"
              >
                <ServiceIcon className="w-10 h-10 text-mandalla-lime" />
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8"
              >
                {service.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl text-slate-300 font-medium max-w-xl leading-relaxed"
              >
                {service.subtitle}
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] space-y-6">
                <div className="flex items-center gap-4">
                  <Shield className="w-6 h-6 text-mandalla-lime" />
                  <span className="font-bold text-lg">Segurança Certificada NR-35</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-mandalla-lime" />
                  <span className="font-bold text-lg">Atendimento em Piracaia e Região</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="text-4xl font-black text-mandalla-dark mb-8 tracking-tight">Visão Geral do Serviço</h2>
                <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
                  {service.description}
                </p>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  {service.fullDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
                  <h3 className="text-2xl font-black text-mandalla-dark mb-8">Principais Benefícios</h3>
                  <ul className="space-y-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-mandalla-lime shrink-0 mt-1" />
                        <span className="text-slate-700 font-bold leading-tight">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-mandalla-dark p-12 rounded-[3rem] text-white">
                  <h3 className="text-2xl font-black mb-8 text-mandalla-lime">Diferencial Técnico</h3>
                  <p className="text-slate-300 font-medium leading-relaxed">
                    {service.technicalDetails}
                  </p>
                </div>
              </div>
            </div>

            <aside className="space-y-12">
              <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 sticky top-32">
                <h3 className="text-2xl font-black text-mandalla-dark mb-8">Solicitar Orçamento</h3>
                <p className="text-slate-500 font-bold mb-10 leading-relaxed">
                  Agende uma vistoria técnica em sua propriedade para uma avaliação precisa e segura.
                </p>
                <a 
                  href="https://wa.me/5511911113553" 
                  target="_blank"
                  className="flex items-center justify-center gap-3 w-full bg-mandalla-dark text-white py-6 rounded-2xl text-center font-black text-xl hover:bg-mandalla-dark/90 transition-all shadow-xl mb-6"
                >
                  <WhatsAppIcon className="w-6 h-6" /> WhatsApp
                </a>
                <p className="text-center text-xs text-slate-400 font-black uppercase tracking-widest">
                  Resposta em até 60 minutos
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-mandalla-dark mb-16 tracking-tight text-center">Outras Soluções Técnicas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(servicesData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, s]) => {
                const OtherIcon = s.icon;
                return (
                  <Link 
                    key={key}
                    href={`/servicos/${key}`}
                    className="bg-white p-10 rounded-[3rem] border border-slate-200 hover:border-mandalla-lime transition-all group"
                  >
                    <div className="bg-slate-50 p-5 rounded-2xl w-fit mb-6 group-hover:bg-mandalla-dark group-hover:text-mandalla-lime transition-all">
                      <OtherIcon className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-black text-mandalla-dark mb-4">{s.title}</h4>
                    <p className="text-slate-500 font-bold text-sm leading-relaxed line-clamp-2">
                      {s.description}
                    </p>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
