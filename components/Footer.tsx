'use client';

import React from 'react';
import { TreePine, Phone, MapPin, Instagram, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer id="contato" className="bg-mandalla-slate pt-32 pb-16 border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-mandalla-dark mb-8 tracking-tighter leading-tight">
                Eleve o padrão <br className="hidden md:block" /> da sua <span className="text-mandalla-lime">propriedade.</span>
              </h2>
              <p className="text-lg text-slate-500 mb-16 max-w-md">
                Soluções definitivas em manejo técnico, combinando engenharia e acesso por corda para as operações mais exigentes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white shadow-xl rounded-2xl flex items-center justify-center text-mandalla-dark border border-slate-100 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] text-mandalla-dark/50 uppercase font-black tracking-[0.2em] mb-1">WhatsApp Tech</span>
                  <a href="https://wa.me/5511911113553" className="text-2xl font-black text-mandalla-dark hover:text-mandalla-lime transition-colors">
                    +55 11 91111-3553
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white shadow-xl rounded-2xl flex items-center justify-center text-mandalla-dark border border-slate-100 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] text-mandalla-dark/50 uppercase font-black tracking-[0.2em] mb-1">Base de Operações</span>
                  <span className="block text-lg font-black text-mandalla-dark">Piracaia, SP</span>
                  <span className="text-slate-500 text-sm">Raio de 100km</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-mandalla-dark p-16 rounded-[4rem] text-white flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-mandalla-lime/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-mandalla-lime">Áreas Operacionais</h3>
              <ul className="grid grid-cols-2 gap-y-6 gap-x-4 text-white/80 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-mandalla-lime shrink-0" /> Piracaia</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-mandalla-lime shrink-0" /> Atibaia</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-mandalla-lime shrink-0" /> Bragança Paulista</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-mandalla-lime shrink-0" /> Joanópolis</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-mandalla-lime shrink-0" /> Vale do Paraíba</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-mandalla-lime shrink-0" /> Grande SP</li>
              </ul>
            </div>
            <div className="mt-16 relative z-10">
              <a 
                href="https://wa.me/5511911113553" 
                className="w-full bg-mandalla-lime text-mandalla-dark py-6 rounded-full text-lg font-black hover:scale-105 transition-all flex items-center justify-center gap-4 group"
              >
                Solicitar Viabilidade Técnica
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-mandalla-dark rounded-xl flex items-center justify-center shadow-lg">
              <TreePine className="text-mandalla-lime w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-mandalla-dark">
              MANDALLA
            </span>
          </div>
          <p className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} Mandalla Arborismo. Qualidade Técnica e Segurança.
          </p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/arbo.mandalla/" target="_blank" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-mandalla-dark hover:border-mandalla-dark hover:bg-slate-50 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
