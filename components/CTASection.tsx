'use client';

import React from 'react';
import { MapPin, Award, Shield, Instagram } from 'lucide-react';
import Image from 'next/image';

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const CTASection = () => {
  return (
    <section id="contato" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-mandalla-dark rounded-[5rem] p-20 md:p-32 text-center relative overflow-hidden shadow-[0_60px_120px_-20px_rgba(27,60,53,0.5)] border-[12px] border-slate-50">
          <div className="absolute inset-0 opacity-10">
            <Image src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&q=80&w=1200&h=800" alt="Fundo" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-[0.85]">
              Risco Zero. <br />
              <span className="text-mandalla-lime">Execução Técnica.</span>
            </h2>
            <p className="text-slate-400 text-2xl mb-20 max-w-3xl mx-auto font-bold leading-relaxed">
              Não entregue a segurança do seu patrimônio na mão de amadores. Conte com nossa equipe especializada para vistorias, laudos e intervenções severas com acesso por corda.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <a 
                href="https://wa.me/5511911113553" 
                target="_blank"
                className="w-full md:w-auto bg-mandalla-lime text-mandalla-dark px-16 py-8 rounded-[2.5rem] font-black text-3xl hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(181,211,52,0.4)] transition-all flex items-center justify-center gap-5 shadow-2xl"
              >
                <WhatsAppIcon className="w-10 h-10" /> WhatsApp
              </a>
              <div className="text-left">
                <span className="block text-white font-black text-2xl tracking-tight">Atendimento Imediato</span>
                <span className="text-slate-500 font-black uppercase tracking-widest text-xs">Resposta em até 60 minutos</span>
              </div>
            </div>
            
            <div className="mt-32 pt-20 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-16">
              <div className="text-center group">
                <MapPin className="text-mandalla-lime w-10 h-10 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <span className="block text-white text-[11px] font-black uppercase tracking-[0.3em]">Atendimento Regional</span>
              </div>
              <div className="text-center group">
                <Award className="text-mandalla-lime w-10 h-10 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <span className="block text-white text-[11px] font-black uppercase tracking-[0.3em]">Equipe Certificada</span>
              </div>
              <div className="text-center group">
                <Shield className="text-mandalla-lime w-10 h-10 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <span className="block text-white text-[11px] font-black uppercase tracking-[0.3em]">Seguro Total</span>
              </div>
              <div className="text-center group">
                <Instagram className="text-mandalla-lime w-10 h-10 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <span className="block text-white text-[11px] font-black uppercase tracking-[0.3em]">@arbo.mandalla</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
