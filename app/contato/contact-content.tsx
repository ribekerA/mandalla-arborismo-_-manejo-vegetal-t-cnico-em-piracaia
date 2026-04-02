'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Instagram, 
  MapPin, 
  Mail, 
  ExternalLink,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export default function ContactContent() {
  return (
    <main className="min-h-screen bg-white selection:bg-mandalla-lime selection:text-mandalla-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-60 pb-40 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-7xl md:text-[120px] font-black text-mandalla-dark tracking-tighter leading-[0.82] mb-12">
              Fale com um <br />
              <span className="text-slate-300 italic">Especialista.</span>
            </h1>
            <p className="text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Dúvidas técnicas, orçamentos ou vistorias de risco? Nossa equipe está pronta para te atender com agilidade e precisão.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-32">
            {/* Contact Cards */}
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="p-16 bg-slate-50 rounded-[4rem] border border-slate-100 group hover:border-mandalla-lime transition-all duration-700 shadow-sm"
              >
                <div className="flex items-center gap-8 mb-12">
                  <div className="bg-mandalla-dark p-6 rounded-3xl text-mandalla-lime shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <WhatsAppIcon className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-mandalla-dark tracking-tight">WhatsApp</h3>
                    <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Atendimento Comercial</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/5511911113553" 
                  target="_blank"
                  className="block w-full bg-mandalla-dark text-white py-8 rounded-[2rem] text-center font-black text-3xl hover:bg-[#264d44] transition-all shadow-[0_20px_40px_-10px_rgba(27,60,53,0.3)]"
                >
                  (11) 91111-3553
                </a>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-10">
                <div className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-xl group hover:border-mandalla-lime transition-all duration-500">
                  <Instagram className="text-mandalla-lime w-10 h-10 mb-6 group-hover:rotate-12 transition-transform" />
                  <h4 className="font-black text-mandalla-dark text-2xl mb-2 tracking-tight">Instagram</h4>
                  <a href="https://www.instagram.com/arbo.mandalla/" target="_blank" className="text-slate-400 font-bold hover:text-mandalla-dark transition-colors flex items-center gap-2">
                    @arbo.mandalla <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-xl group hover:border-mandalla-lime transition-all duration-500">
                  <Mail className="text-mandalla-lime w-10 h-10 mb-6 group-hover:rotate-12 transition-transform" />
                  <h4 className="font-black text-mandalla-dark text-2xl mb-2 tracking-tight">E-mail</h4>
                  <p className="text-slate-400 font-bold">contato@mandalla.arbo</p>
                </div>
              </div>

              <div className="p-16 bg-white rounded-[4rem] border border-slate-100 shadow-xl flex items-start gap-10 group hover:border-mandalla-lime transition-all duration-500">
                <div className="bg-slate-50 p-6 rounded-3xl text-mandalla-dark group-hover:bg-mandalla-dark group-hover:text-mandalla-lime transition-all duration-500 shadow-sm">
                  <MapPin className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-mandalla-dark mb-4 tracking-tight">Área de Atuação</h3>
                  <p className="text-slate-500 font-bold leading-relaxed text-lg">
                    Sediados em Piracaia/SP, atendemos toda a região bragantina, Vale do Paraíba e Grande São Paulo.
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[800px] rounded-[5rem] overflow-hidden shadow-[0_60px_100px_-20px_rgba(27,60,53,0.2)] border-[20px] border-slate-50 bg-slate-100 group"
            >
              <div className="absolute inset-0 flex items-center justify-center text-center p-16">
                <div className="relative z-10">
                  <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl group-hover:scale-110 transition-transform duration-700">
                    <MapPin className="w-12 h-12 text-mandalla-lime" />
                  </div>
                  <h3 className="text-4xl font-black text-mandalla-dark mb-6 tracking-tighter">Sede em Piracaia</h3>
                  <p className="text-slate-500 font-bold max-w-xs mx-auto text-lg leading-relaxed">
                    Localização estratégica para atender com agilidade o interior e a capital.
                  </p>
                </div>
              </div>
              {/* Abstract Map Background */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mandalla-lime/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mandalla-dark/10 rounded-full blur-[100px]"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
