"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { projects } from "@/data/portfolio";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

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

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject !== null) {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedProject]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setTimeout(() => setIsPaused(false), 100);
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      setTimeout(() => setIsPaused(false), 100);
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    isDragging.current = true;
    startX.current = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    setTimeout(() => setIsPaused(false), 100);
  };

  const row1 = projects.slice(0, 7);
  const row2 = projects.slice(7, 14);

  // Triple the arrays for seamless infinite scroll
  const infiniteRow1 = [...row1, ...row1, ...row1];
  const infiniteRow2 = [...row2, ...row2, ...row2];

  return (
    <section ref={sectionRef} id="work" className="bg-[#f5f0e9] py-20 md:py-20 lg:py-28 overflow-hidden">
      <div className="px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-8 md:mb-12">
          <p className="font-jetbrains text-xs md:text-sm text-[#073742] uppercase tracking-wider mb-4">
            MADE WITH LOVE
          </p>
          <h2 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-[#073742] uppercase leading-[0.9] md:leading-normal">
            OUR PROJECTS
          </h2>
        </div>
      </div>

      {/* Portfolio Carousel - Synchronized Rows */}
      <div
        ref={scrollContainerRef}
        className="space-y-3 md:space-y-6 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Row 1 */}
        <div className="overflow-hidden">
          <div
            className={`flex gap-6 ${isPaused ? '' : 'animate-scroll-rtl'}`}
            style={{
              width: 'fit-content',
            }}
          >
            {infiniteRow1.map((project, index) => {
              const originalIndex = index % row1.length;
              const initialOffset = originalIndex * 30;
              const finalPosition = 0;
              const currentPosition = isVisible ? finalPosition : initialOffset;

              return (
                <button
                  key={`row1-${index}`}
                  type="button"
                  className="flex-shrink-0 group cursor-pointer text-left"
                  style={{
                    transform: `translateY(${currentPosition}px)`,
                    transition: isPaused ? 'none' : `transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${originalIndex * 0.08}s`,
                    willChange: isVisible ? 'auto' : 'transform'
                  }}
                  onClick={() => setSelectedProject(originalIndex)}
                  aria-label={`View ${project.businessType} project details`}
                >
                  {/* Screenshot */}
                  <div className="bg-cream border-2 border-[#073742] rounded-lg overflow-hidden mb-3 w-[300px] md:w-[360px] h-[450px] relative shadow-lg group-hover:scale-95 transition-all duration-300">
                    {/* Skeleton Loader */}
                    {!loadedImages.has(originalIndex) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#f5f0e9] via-[#e5dfd3] to-[#f5f0e9] animate-shimmer bg-[length:200%_100%]" />
                    )}
                    <Image
                      src={project.image}
                      alt={project.businessType}
                      fill
                      sizes="360px"
                      quality={85}
                      loading="lazy"
                      className={`object-cover transition-opacity duration-500 ${loadedImages.has(originalIndex) ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => handleImageLoad(originalIndex)}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden">
          <div
            className={`flex gap-6 ${isPaused ? '' : 'animate-scroll-rtl'}`}
            style={{
              width: 'fit-content',
            }}
          >
            {infiniteRow2.map((project, index) => {
              const originalIndex = index % row2.length;
              const projectIndex = row1.length + originalIndex;
              const initialOffset = originalIndex * 30;
              const finalPosition = 0;
              const currentPosition = isVisible ? finalPosition : initialOffset;

              return (
                <button
                  key={`row2-${index}`}
                  type="button"
                  className="flex-shrink-0 group cursor-pointer text-left"
                  style={{
                    transform: `translateY(${currentPosition}px)`,
                    transition: isPaused ? 'none' : `transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${originalIndex * 0.08}s`,
                    willChange: isVisible ? 'auto' : 'transform'
                  }}
                  onClick={() => setSelectedProject(projectIndex)}
                  aria-label={`View ${project.businessType} project details`}
                >
                  {/* Screenshot */}
                  <div className="bg-cream border-2 border-[#073742] rounded-lg overflow-hidden mb-3 w-[300px] md:w-[360px] h-[450px] relative shadow-lg group-hover:scale-95 transition-all duration-300">
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
                </button>
              );
            })}
          </div>
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
          </div>
        </div>
      )}
    </section>
  );
}
