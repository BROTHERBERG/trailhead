"use client";

import { useState, useEffect } from "react";

export default function StatsBar() {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // On mobile, trigger fade AFTER the Services section (much later)
      // On desktop, keep the original behavior
      const fadeStart = window.innerWidth < 768 ? windowHeight * 1.5 : windowHeight * 0.5;
      const fadeEnd = window.innerWidth < 768 ? windowHeight * 2.0 : windowHeight * 0.9;

      if (scrollPosition < fadeStart) {
        setScrollOpacity(0);
      } else if (scrollPosition > fadeEnd) {
        setScrollOpacity(1);
      } else {
        const opacity = (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
        setScrollOpacity(opacity);
      }
    };

    // Call once on mount to handle mid-page reloads
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stats = [
    {
      percentage: "94%",
      text: "of first impressions\nare design related"
    },
    {
      percentage: "88%",
      text: "won't return to a website\nafter a bad experience"
    },
    {
      percentage: "75%",
      text: "judge a company's credibility\nbased on their website design"
    },
    {
      percentage: "38%",
      text: "stop engaging with a website\nif the content or layout sucks"
    }
  ];

  return (
    <section
      className="relative border-t-2 border-b-2 py-3 md:py-6 mt-0 transition-all duration-300"
      style={{ borderColor: scrollOpacity > 0.5 ? '#073742' : '#fcf6ed' }}
    >
      <div className="max-w-7xl mx-auto pl-8 pr-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-2 md:gap-3">
              <h3
                className="font-riposte font-bold text-xl md:text-4xl shrink-0 tracking-tighter transition-colors duration-300"
                style={{ color: scrollOpacity > 0.5 ? '#073742' : '#fcf6ed' }}
              >
                {stat.percentage}
              </h3>
              <p
                className="font-riposte text-[9px] md:text-sm leading-tight whitespace-pre-line transition-colors duration-300"
                style={{ color: scrollOpacity > 0.5 ? '#073742' : '#fcf6ed' }}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}