'use client';

import React from 'react';
import { TreePine, Phone, MapPin, Instagram, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Segurança', href: '/#seguranca' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/#contato' },
];

const serviceLinks = [
  { label: 'Poda em Altura', href: '/servicos/poda-em-altura' },
  { label: 'Supressão Vegetal', href: '/servicos/manejo-vegetal' },
  { label: 'Avaliação de Risco', href: '/servicos/acesso-por-corda' },
  { label: 'Reforço Estrutural', href: '/servicos/reforco-estrutural' },
  { label: 'Controle Fitossanitário', href: '/servicos/controle-de-pragas' },
  { label: 'Manutenção Preventiva', href: '/servicos/manutencao' },
];

const areas = [
  'Piracaia, SP',
  'Atibaia, SP',
  'Bragança Paulista, SP',
  'Joanópolis, SP',
  'Vale do Paraíba',
  'Grande São Paulo',
];

export const Footer = () => {
  return (
    <footer id="contato" className="bg-mandalla-dark text-white">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">

          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-mandalla-lime rounded-xl flex items-center justify-center shrink-0">
                <TreePine className="text-mandalla-dark w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tighter">MANDALLA</span>
            </div>
            <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8 max-w-xs">
              Arborismo técnico com planejamento, segurança e precisão. Atendemos residências, condomínios, empresas e propriedades rurais em Piracaia e região.
            </p>
            <a
              href="https://wa.me/5511911113553"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Entrar em contato pelo WhatsApp"
              className="inline-flex items-center gap-3 bg-mandalla-lime text-mandalla-dark px-6 py-3.5 rounded-full font-black text-sm hover:scale-105 transition-transform"
            >
              <WhatsAppIcon /> Fale pelo WhatsApp
            </a>
          </div>

          {/* Col 2 — Navegação */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-mandalla-lime mb-6">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white font-medium text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-mandalla-lime opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-300 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Serviços */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-mandalla-lime mb-6">
              Serviços
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white font-medium text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-mandalla-lime opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-300 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contato e Áreas */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-mandalla-lime mb-6">
              Contato &amp; Áreas
            </h3>

            <div className="space-y-5 mb-8">
              <a
                href="https://wa.me/5511911113553"
                className="flex items-start gap-3 group"
                aria-label="Ligar para a Mandalla Arborismo"
              >
                <Phone className="w-4 h-4 text-mandalla-lime mt-0.5 shrink-0" />
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-0.5">WhatsApp</span>
                  <span className="text-white font-bold text-sm group-hover:text-mandalla-lime transition-colors">
                    +55 11 91111-3553
                  </span>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-mandalla-lime mt-0.5 shrink-0" />
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1.5">Área de Atendimento</span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {areas.map((a) => (
                      <span key={a} className="text-slate-400 text-xs font-medium">{a}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.instagram.com/arbo.mandalla/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Mandalla Arborismo"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-mandalla-lime transition-colors text-sm font-medium"
            >
              <Instagram className="w-4 h-4" />
              @arbo.mandalla
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-medium">
          <p>© {new Date().getFullYear()} Mandalla Arborismo. Todos os direitos reservados.</p>
          <p className="text-center sm:text-right">
            Arborismo técnico com planejamento, segurança e precisão — Piracaia, SP.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


