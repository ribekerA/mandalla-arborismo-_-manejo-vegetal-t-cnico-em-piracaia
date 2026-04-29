'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

export const Showreel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.volume = 0.3;
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="py-20 sm:py-32 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* No desktop: layout dois-colunas — texto à esq, vídeo retrato à dir */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Texto — visível apenas no desktop */}
          <div className="hidden md:flex flex-col justify-center flex-1 max-w-lg">
            <span className="text-mandalla-lime font-black uppercase tracking-[0.4em] text-[9px] mb-6 block">Showreel Institucional</span>
            <h2 className="text-5xl lg:text-7xl font-black text-mandalla-dark tracking-tighter leading-[0.9] mb-8">
              A precisão por trás <span className="italic font-medium text-mandalla-dark/50">de cada operação.</span>
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              Veja na prática como a Mandalla executa serviços técnicos de arborismo com segurança, rigging profissional e resultado impecável.
            </p>
          </div>

          {/* Vídeo — retrato em mobile e desktop */}
          <div className="w-full md:w-auto md:flex-shrink-0">
            <div
              className="relative mx-auto rounded-[2rem] sm:rounded-[3rem] overflow-hidden aspect-[9/16] w-full max-w-xs sm:max-w-sm md:max-w-[320px] lg:max-w-[380px] shadow-[0_60px_120px_-20px_rgba(27,60,53,0.3)] border-4 sm:border-8 border-slate-50 cursor-pointer"
              onClick={handlePlay}
            >
              <video
                ref={videoRef}
                src="/showreel.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                playsInline
                preload="metadata"
                onEnded={() => setPlaying(false)}
              />

              {/* Overlay com botão play */}
              <div className={`absolute inset-0 bg-mandalla-dark/40 flex items-center justify-center transition-opacity duration-500 ${playing ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-white/20 relative overflow-hidden transition-all duration-500 hover:border-mandalla-lime/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-mandalla-lime animate-ping opacity-10"></div>
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[17px] border-l-white border-b-[10px] border-b-transparent ml-1.5 relative z-10"></div>
                </motion.div>
              </div>

              {/* Label inferior — visível apenas no mobile */}
              <div className={`md:hidden absolute bottom-6 left-6 right-6 transition-opacity duration-500 ${playing ? 'opacity-0' : 'opacity-100'}`}>
                <span className="text-mandalla-lime font-black uppercase tracking-[0.3em] text-[8px] mb-3 block drop-shadow-md">Showreel Institucional</span>
                <h2 className="text-2xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-xl">
                  A precisão por trás <span className="italic font-medium text-white/80">de cada operação.</span>
                </h2>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Showreel;
