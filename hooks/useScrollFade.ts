import { useState, useEffect } from "react";

interface UseScrollFadeOptions {
  fadeStartMultiplier?: number;
  fadeEndMultiplier?: number;
}

export function useScrollFade({
  fadeStartMultiplier = 2.5,
  fadeEndMultiplier = 1.5,
}: UseScrollFadeOptions = {}) {
  const [fadeOpacity, setFadeOpacity] = useState(0);

  useEffect(() => {
    // Check for reduced motion preference with live updates
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let isReducedMotion = mediaQuery.matches;

    const handleMotionPreferenceChange = (e: MediaQueryListEvent) => {
      isReducedMotion = e.matches;
      if (isReducedMotion) {
        setFadeOpacity(1);
      }
    };

    // Listen for preference changes
    mediaQuery.addEventListener('change', handleMotionPreferenceChange);

    if (isReducedMotion) {
      setFadeOpacity(1);
      return () => {
        mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
      };
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;

          // Start fading in the dark overlay as we approach the footer
          const fadeStart = documentHeight - windowHeight * fadeStartMultiplier;
          const fadeEnd = documentHeight - windowHeight * fadeEndMultiplier;

          if (scrollPosition < fadeStart) {
            setFadeOpacity(0);
          } else if (scrollPosition > fadeEnd) {
            setFadeOpacity(1);
          } else {
            const opacity = (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
            setFadeOpacity(opacity);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
    };
  }, [fadeStartMultiplier, fadeEndMultiplier]);

  return fadeOpacity;
}
