"use client";

import { useState, useEffect } from "react";
import { trackStartBuildClick } from "@/lib/analytics";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

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
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 pt-32 md:pt-44 lg:pt-52 pb-0 md:pb-32 lg:pb-40">
        {/* Main Headline */}
        <div className="text-center mb-6 md:mb-2 max-w-7xl mx-auto">
          <h1 className="font-axel font-bold text-cream drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] leading-[0.9]">
            <span className="inline text-[4.5rem] md:hidden">
              PROFESSIONAL CUSTOM WEBSITES FOR LOCAL BUSINESS
            </span>
            <span className="hidden md:block md:text-8xl lg:text-9xl mb-[-16px] lg:mb-[-20px]">
              PROFESSIONAL
            </span>
            <span className="hidden md:block md:text-8xl lg:text-9xl mb-[-16px] lg:mb-[-20px]">
              CUSTOM WEBSITES
            </span>
            <span className="hidden md:block md:text-8xl lg:text-9xl">
              FOR LOCAL BUSINESS
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <p className="font-riposte text-[#C8E4DA] text-base md:text-xl lg:text-2xl max-w-4xl text-center mb-8 md:mb-12 leading-relaxed px-2">
          Hand-coded, SEO-ready, and launched in one week — built for trust and visibility
        </p>

        {/* CTA Button */}
        <div className="flex justify-center w-full sm:w-auto mb-8 md:mb-0">
          <InteractiveHoverButton
            href="#contact"
            onClick={() => trackStartBuildClick('hero')}
          >
            Start Your Build
          </InteractiveHoverButton>
        </div>
      </div>
      </div>
    </div>
  );
}