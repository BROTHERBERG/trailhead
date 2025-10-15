"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { projects } from "@/data/portfolio";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const row1 = projects.slice(0, 7);
  const row2 = projects.slice(7, 14);

  return (
    <section ref={sectionRef} id="work" className="bg-[#f5f0e9] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <p className="font-jetbrains text-xs md:text-sm text-[#073742] uppercase tracking-wider mb-4">
            MADE WITH LOVE
          </p>
          <h2 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-[#073742] uppercase">
            OUR PROJECTS
          </h2>
        </div>
      </div>

      {/* Portfolio Cards - Two Rows */}
      <div className="overflow-x-auto pl-4 md:pl-8 lg:px-12 space-y-6">
        {/* Row 1 */}
        <div className="relative h-[540px]">
          {row1.map((project, index) => {
            const cardWidth = 360;
            const gap = 24;
            const initialOffset = index * 30;
            const finalPosition = index * (cardWidth + gap);
            const currentPosition = isVisible ? finalPosition : initialOffset;

            return (
              <button
                key={index}
                type="button"
                className="absolute group cursor-pointer text-left"
                style={{
                  transform: `translateX(${currentPosition}px)`,
                  zIndex: row1.length - index,
                  transition: `transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.08}s`,
                  willChange: isVisible ? 'auto' : 'transform'
                }}
                onClick={() => setSelectedProject(index)}
                aria-label={`View ${project.businessType} project details`}
              >
                {/* Screenshot */}
                <div className="bg-cream border-2 border-[#073742] rounded-lg overflow-hidden mb-3 w-[360px] h-[450px] relative shadow-lg group-hover:-translate-y-2 transition-all duration-300">
                  {/* Skeleton Loader */}
                  {!loadedImages.has(index) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f5f0e9] via-[#e5dfd3] to-[#f5f0e9] animate-shimmer bg-[length:200%_100%]" />
                  )}
                  <Image
                    src={project.image}
                    alt={project.businessType}
                    fill
                    sizes="360px"
                    quality={85}
                    loading="lazy"
                    className={`object-cover transition-opacity duration-500 ${loadedImages.has(index) ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => handleImageLoad(index)}
                  />
                </div>

                {/* Project Info */}
                <div className="w-[360px]">
                  <h3 className="font-jetbrains font-bold text-[#073742] text-sm uppercase mb-1 tracking-wide">
                    {project.businessType}
                  </h3>
                  <p className="font-riposte text-[#073742] text-sm">
                    {project.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Row 2 */}
        <div className="relative h-[540px]">
          {row2.map((project, index) => {
            const cardWidth = 360;
            const gap = 24;
            const initialOffset = index * 30;
            const finalPosition = index * (cardWidth + gap);
            const currentPosition = isVisible ? finalPosition : initialOffset;
            const projectIndex = row1.length + index;

            return (
              <button
                key={index}
                type="button"
                className="absolute group cursor-pointer text-left"
                style={{
                  transform: `translateX(${currentPosition}px)`,
                  zIndex: row2.length - index,
                  transition: `transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.08}s`,
                  willChange: isVisible ? 'auto' : 'transform'
                }}
                onClick={() => setSelectedProject(projectIndex)}
                aria-label={`View ${project.businessType} project details`}
              >
                {/* Screenshot */}
                <div className="bg-cream border-2 border-[#073742] rounded-lg overflow-hidden mb-3 w-[360px] h-[450px] relative shadow-lg group-hover:-translate-y-2 transition-all duration-300">
                  {/* Skeleton Loader */}
                  {!loadedImages.has(projectIndex) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f5f0e9] via-[#e5dfd3] to-[#f5f0e9] animate-shimmer bg-[length:200%_100%]" />
                  )}
                  <Image
                    src={project.image}
                    alt={project.businessType}
                    fill
                    sizes="360px"
                    quality={85}
                    loading="lazy"
                    className={`object-cover transition-opacity duration-500 ${loadedImages.has(projectIndex) ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => handleImageLoad(projectIndex)}
                  />
                </div>

                {/* Project Info */}
                <div className="w-[360px]">
                  <h3 className="font-jetbrains font-bold text-[#073742] text-sm uppercase mb-1 tracking-wide">
                    {project.businessType}
                  </h3>
                  <p className="font-riposte text-[#073742] text-sm">
                    {project.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-[#073742]/95 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div className="relative max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-3 -right-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-cream hover:scale-110 transition-transform duration-200 z-10"
              aria-label="Close preview"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Screenshot */}
            <div className="bg-cream border-2 border-accent rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={projects[selectedProject].image}
                alt={projects[selectedProject].businessType}
                width={400}
                height={300}
                quality={90}
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Project Info */}
            <div className="mt-3 text-center">
              <h3 className="font-axel font-bold text-lg md:text-xl text-cream uppercase mb-1">
                {projects[selectedProject].businessType}
              </h3>
              <p className="font-riposte text-sm md:text-base text-cream/90">
                {projects[selectedProject].description}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="px-4 md:px-8 lg:px-12 mt-8 flex justify-center">
        <a
          href="#work"
          className="relative overflow-hidden border border-[#073742] text-[#073742] font-riposte px-8 py-3 rounded-full text-base uppercase tracking-tight transition-all duration-200 group hover:bg-[#073742] hover:text-cream"
        >
          <span className="relative z-10">See All Our Projects</span>
        </a>
      </div>
    </section>
  );
}