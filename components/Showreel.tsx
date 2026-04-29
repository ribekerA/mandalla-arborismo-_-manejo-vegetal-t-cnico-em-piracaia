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
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="py-20 sm:py-32 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-[2rem] sm:rounded-[3rem] lg:rounded-[5rem] overflow-hidden aspect-video shadow-[0_60px_120px_-20px_rgba(27,60,53,0.3)] border-4 sm:border-8 lg:border-[20px] border-slate-50 group cursor-pointer"
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

          {/* Overlay escurece quando pausado */}
          <div className={`absolute inset-0 bg-mandalla-dark/40 flex items-center justify-center transition-opacity duration-500 ${playing ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-white/20 relative overflow-hidden transition-all duration-500 hover:border-mandalla-lime/50"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>
              <div className="absolute inset-0 rounded-full border-2 border-mandalla-lime animate-ping opacity-10"></div>
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[17px] border-l-white border-b-[10px] border-b-transparent ml-1.5 sm:border-t-[12px] sm:border-l-[20px] sm:border-b-[12px] sm:ml-2 relative z-10"></div>
            </motion.div>
          </div>

          {/* Label inferior */}
          <div className={`absolute bottom-6 sm:bottom-12 md:bottom-20 left-6 sm:left-12 md:left-20 right-6 sm:right-12 md:right-20 transition-opacity duration-500 ${playing ? 'opacity-0' : 'opacity-100'}`}>
            <span className="text-mandalla-lime font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[8px] sm:text-[9px] mb-3 sm:mb-6 block drop-shadow-md">Showreel Institucional</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-xl">
              A precisão por trás <br className="hidden sm:block" /> <span className="italic font-medium text-white/80">de cada operação.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showreel;
