'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Showreel from '@/components/Showreel';
import Gallery from '@/components/Gallery';
import Services from '@/components/Services';
import ProcessSection from '@/components/ProcessSection';
import SafetySection from '@/components/SafetySection';
import TrustSection from '@/components/TrustSection';
import CTASection from '@/components/CTASection';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-mandalla-lime selection:text-mandalla-dark">
      <Navbar />
      <Hero />
      <Showreel />
      <Services />
      <ProcessSection />
      <Gallery />
      <SafetySection />
      <TrustSection />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
