"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,          // Scroll duration (higher = slower/smoother)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      orientation: "vertical", // Scroll direction
      gestureOrientation: "vertical",
      smoothWheel: true,       // Enable smooth scrolling for mouse wheel
      wheelMultiplier: 1,      // Mouse wheel sensitivity
      touchMultiplier: 2,      // Touch scroll sensitivity
      infinite: false,         // No infinite scroll
    });

    // Update scroll on each frame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links (smooth scroll to sections)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;

      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            lenis.scrollTo(element, {
              offset: 0,
              duration: 1.5,
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Cleanup
    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null; // This component doesn't render anything
}
