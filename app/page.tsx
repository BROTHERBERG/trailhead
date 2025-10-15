"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyTrailheadDetailed from "@/components/WhyTrailheadDetailed";
import SimplePricing from "@/components/SimplePricing";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useScrollFade } from "@/hooks/useScrollFade";

export default function Home() {
  const fadeOpacity = useScrollFade();

  return (
    <>
      <Navbar />

      {/* Fixed background overlay that fades in */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundColor: '#073742',
          opacity: fadeOpacity,
          transition: 'opacity 0.3s ease'
        }}
      />

      {/* Main content */}
      <main id="main-content" className="relative z-10 bg-[#f5f0e9]">
        <Hero />
        <StatsBar />
        <Services />
        <WhyTrailheadDetailed />
        <Portfolio />
        <SimplePricing />
        <ProcessTimeline />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}