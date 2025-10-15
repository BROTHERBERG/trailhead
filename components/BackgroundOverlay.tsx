"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

export default function BackgroundOverlay() {
  const fadeOpacity = useScrollFade();

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        backgroundColor: '#073742',
        opacity: fadeOpacity,
        transition: 'opacity 0.3s ease'
      }}
    />
  );
}
