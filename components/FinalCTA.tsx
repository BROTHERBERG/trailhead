"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section className="bg-[#f5f0e9] py-16 md:py-24 lg:py-32">
      <div className="w-full mx-auto px-8 md:px-16 lg:px-24">
        <div className="border border-[#073742] rounded-3xl p-12 md:p-16 lg:p-20 flex flex-col items-center justify-center">
          {/* Headline */}
          <h2 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-[#073742] text-center mb-12 md:mb-16 uppercase leading-tight">
            YOUR EXPERTISE DESERVES<br />ITS DIGITAL DESTINY
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8 md:mb-12 w-full sm:w-auto max-w-2xl">
            <button
              onMouseEnter={() => setHoveredButton("portfolio")}
              onMouseLeave={() => setHoveredButton(null)}
              className="relative overflow-hidden border border-[#073742] text-[#073742] font-jetbrains px-8 md:px-10 py-3 md:py-3.5 rounded-full text-sm md:text-base tracking-wide transition-all duration-200 uppercase group"
            >
              <span className="absolute inset-0 bg-[#073742] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 group-hover:text-cream transition-colors duration-300">View Portfolio</span>
            </button>
            <button
              onMouseEnter={() => setHoveredButton("talk")}
              onMouseLeave={() => setHoveredButton(null)}
              className="relative overflow-hidden bg-accent text-cream font-jetbrains px-8 md:px-10 py-3 md:py-3.5 rounded-full text-sm md:text-base tracking-wide transition-all duration-200 uppercase group border border-transparent hover:border-accent"
            >
              <span className="absolute inset-0 bg-cream transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 group-hover:text-accent transition-colors duration-300">Let's Talk</span>
            </button>
          </div>

          {/* Tagline */}
          <p className="font-jetbrains text-[#073742] text-sm md:text-base">
            Crafting Digital Excellence Since 2024
          </p>
        </div>
      </div>
    </section>
  );
}
