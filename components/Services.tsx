"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Web Design",
      description: "Conversion-focused designs that captivate your audience",
      color: "#c8e3da",
      textColor: "#073742"
    },
    {
      title: "Development",
      description: "Fast, secure, and scalable sites built with modern tech",
      color: "#ad6fa0",
      textColor: "#ffd4d1"
    },
    {
      title: "Branding",
      description: "Distinctive brand identities that make you memorable",
      color: "#ffe1cc",
      textColor: "#073742"
    },
    {
      title: "Strategy",
      description: "Data-driven plans to grow your digital presence",
      color: "#1e5c5c",
      textColor: "#c8e3da"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f5f0e9] pt-24 pb-20 md:pt-36 md:pb-28 lg:pt-48 lg:pb-36 overflow-hidden">
      <div className="px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-10 md:mb-12">
          <p className="font-jetbrains text-xs md:text-sm text-[#073742] uppercase tracking-wider mb-4">
            SERVICES
          </p>
          <h2 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-[#073742] uppercase leading-[0.9] md:leading-tight">
            HELPING BUSINESSES STAND OUT ONLINE WITH...
          </h2>
        </div>
      </div>

      {/* Services Grid - Stacked Cards */}
      <div className="overflow-x-auto pl-4 md:pl-8 lg:pl-12">
        <div className="relative h-[360px] md:h-[480px]">
          {services.map((service, index) => {
            const cardWidth = typeof window !== 'undefined' && window.innerWidth < 768 ? 280 : 395;
            const gap = typeof window !== 'undefined' && window.innerWidth < 768 ? 12 : 24;
            const initialOffset = index * 30; // Small offset when stacked
            const finalPosition = index * (cardWidth + gap);
            const currentPosition = isVisible ? finalPosition : initialOffset;

            return (
              <div
                key={index}
                className="absolute rounded-2xl p-6 md:p-8 w-[280px] md:w-[395px] h-[340px] md:h-[460px] flex flex-col items-start group overflow-hidden"
                style={{
                  backgroundColor: service.color,
                  transform: `translateX(${currentPosition}px)`,
                  zIndex: services.length - index,
                  transition: `transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.1}s`,
                  willChange: isVisible ? 'auto' : 'transform'
                }}
              >
                <p className="font-riposte text-xl md:text-2xl mb-4 transition-transform duration-300 group-hover:-translate-y-1" style={{ color: service.textColor }}>
                  {service.description}
                </p>
                <div
                  className="border rounded-full px-2.5 py-0.5 w-fit"
                  style={{ borderColor: service.textColor }}
                >
                  <span className="font-riposte text-base" style={{ color: service.textColor }}>
                    {service.title}
                  </span>
                </div>
                {index === 0 && (
                  <div className="absolute bottom-0 right-0 w-[180px] md:w-[320px] h-[180px] md:h-[320px]">
                    <Image
                      src="/card-web.png"
                      alt="Web Design Illustration"
                      fill
                      className="object-contain object-bottom-right"
                      quality={85}
                    />
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute bottom-2 right-0 w-[160px] md:w-[300px] h-[160px] md:h-[300px]">
                    <Image
                      src="/card-dev.png"
                      alt="Development Illustration"
                      fill
                      className="object-contain object-bottom-right"
                      quality={85}
                    />
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute bottom-0 right-0 w-[200px] md:w-[340px] h-[200px] md:h-[340px]">
                    <Image
                      src="/card-branding.png"
                      alt="Branding Illustration"
                      fill
                      className="object-contain object-bottom-right"
                      quality={85}
                    />
                  </div>
                )}
                {index === 3 && (
                  <div className="absolute bottom-0 right-0 w-[180px] md:w-[320px] h-[180px] md:h-[320px]">
                    <Image
                      src="/card-strategy.png"
                      alt="Strategy Illustration"
                      fill
                      className="object-contain object-bottom-right"
                      quality={85}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
