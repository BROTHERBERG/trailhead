"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setScrollOpacity(0);
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          const fadeStart = windowHeight * 0.5;
          const fadeEnd = windowHeight * 0.9;

          if (scrollPosition < fadeStart) {
            setScrollOpacity(1);
          } else if (scrollPosition > fadeEnd) {
            setScrollOpacity(0);
          } else {
            const opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
            setScrollOpacity(opacity);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    // Call once on mount to handle mid-page reloads
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Color Overlay with Fade */}
      <div
        className="fixed inset-0 bg-primary pointer-events-none transition-opacity duration-300 z-0"
        style={{ opacity: scrollOpacity }}
      ></div>
      <div className="relative z-10">

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 pt-36 md:pt-44 lg:pt-52 pb-0 md:pb-32 lg:pb-40">
        {/* Main Headline */}
        <div className="text-center mb-4 md:mb-2 max-w-5xl mx-auto">
          <h1 className="font-axel font-bold text-cream drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <span className="block text-[3rem] sm:text-7xl md:text-8xl lg:text-9xl mb-[-22px] sm:mb-[-12px] md:mb-[-16px] lg:mb-[-20px]">
              READY TO
            </span>
            <span className="block text-[3rem] sm:text-7xl md:text-8xl lg:text-9xl mb-[-22px] sm:mb-[-12px] md:mb-[-16px] lg:mb-[-20px]">
              LEVEL UP YOUR
            </span>
            <span className="block text-[3rem] sm:text-7xl md:text-8xl lg:text-9xl">
              ONLINE&nbsp;PRESENCE?
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <p className="font-riposte text-[#C8E4DA] text-lg md:text-xl lg:text-2xl max-w-2xl text-center mb-4 md:mb-12 leading-relaxed px-2">
          The no-nonsense website: one week, $750. Streamlined build process.<br />Clean design. Professional presence that performs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0 max-w-md sm:max-w-none mb-6 md:mb-0 mt-8 md:mt-0">
          <a
            href="#work"
            className="relative overflow-hidden border border-cream text-cream font-riposte px-6 md:px-8 py-1.5 md:py-2 rounded-full text-sm md:text-base tracking-tight transition-all duration-200 uppercase group"
          >
            <span className="absolute inset-0 bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10 transition-colors duration-300">View Portfolio</span>
          </a>
          <a
            href="#contact"
            className="relative overflow-hidden bg-accent text-cream font-riposte px-6 md:px-8 py-1.5 md:py-2 rounded-full text-sm md:text-base tracking-tight transition-all duration-200 uppercase flex items-center justify-center gap-2 group border border-transparent hover:border-accent"
          >
            <span className="absolute inset-0 bg-cream transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10 group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
              Let's Talk
              <span className="text-lg">→</span>
            </span>
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}