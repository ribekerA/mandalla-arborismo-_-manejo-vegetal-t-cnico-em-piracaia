'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export const Showreel = () => {
  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[5rem] overflow-hidden aspect-video shadow-[0_60px_120px_-20px_rgba(27,60,53,0.3)] border-[20px] border-slate-50 group cursor-pointer">
          <Image 
            src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=1920&h=1080" 
            alt="Mandalla Showreel" 
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-mandalla-dark/30 flex items-center justify-center group-hover:bg-mandalla-dark/40 transition-colors duration-700">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 sm:w-28 sm:h-28 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-white/20 group/btn relative overflow-hidden transition-all duration-500 hover:border-mandalla-lime/50"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>
              <div className="absolute inset-0 rounded-full border-2 border-mandalla-lime animate-ping opacity-10"></div>
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2 group-hover/btn:border-l-mandalla-lime transition-colors duration-300 relative z-10"></div>
            </motion.div>
          </div>
          <div className="absolute bottom-12 md:bottom-20 left-12 md:left-20 right-12 md:right-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="max-w-xl">
              <span className="text-mandalla-lime font-black uppercase tracking-[0.4em] text-[9px] mb-6 block drop-shadow-md">Showreel Institucional</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-xl">
                A precisão por trás <br className="hidden sm:block" /> <span className="italic font-medium text-white/80">de cada operação.</span>
              </h2>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-5 text-white/50 font-black text-[9px] tracking-widest uppercase">
                <span>0:00</span>
                <div className="w-32 lg:w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 10, delay: 0.5, ease: "linear" }}
                    className="h-full bg-mandalla-lime"
                  ></motion.div>
                </div>
                <span className="text-white">2:30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showreel;
