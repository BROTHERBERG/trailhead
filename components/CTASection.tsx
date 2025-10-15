"use client";

import { useState } from "react";

export default function CTASection() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="px-6 md:px-12 lg:px-20 flex justify-center">
        <div className="bg-white rounded-3xl p-12 md:p-16 lg:p-20 shadow-2xl flex flex-col items-center justify-center text-center max-w-3xl">
          {/* Headline */}
          <h2 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-[#073742] mb-6 uppercase leading-tight">
            Ready to Stand Out<br />
            From The Competition?
          </h2>
          
          {/* Subheading */}
          <p className="font-riposte text-[#073742] text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl">
            Join the growing businesses that trust us<br />to elevate their digital presence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <button
              onMouseEnter={() => setHoveredButton("portfolio")}
              onMouseLeave={() => setHoveredButton(null)}
              className="relative overflow-hidden border-2 border-[#073742] text-[#073742] font-jetbrains px-8 md:px-10 py-3 md:py-3.5 rounded-full text-sm md:text-base tracking-tight transition-all duration-200 uppercase group"
            >
              <span className="absolute inset-0 bg-[#073742] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Our Work</span>
            </button>
            <button
              onMouseEnter={() => setHoveredButton("talk")}
              onMouseLeave={() => setHoveredButton(null)}
              className="relative overflow-hidden bg-accent text-white font-jetbrains px-8 md:px-10 py-3 md:py-3.5 rounded-full text-sm md:text-base tracking-tight transition-all duration-200 uppercase group border-2 border-transparent hover:border-accent"
            >
              <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 group-hover:text-accent transition-colors duration-300">Start Your Project</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}