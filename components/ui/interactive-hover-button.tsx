"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  href?: string;
}

export function InteractiveHoverButton({
  text,
  className,
  href,
  children,
  ...props
}: InteractiveHoverButtonProps) {
  const content = (
    <>
      {/* Liquid fill effect - starts completely below button, rises up on hover */}
      <div className="absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
        {/* Wave effect at top of liquid */}
        <div
          className="absolute -top-6 left-0 right-0 h-12 bg-cream"
          style={{
            clipPath: "ellipse(100% 50% at 50% 100%)",
          }}
        />
        {/* Main liquid body */}
        <div className="absolute inset-0 bg-cream" />
      </div>
      <span className="relative z-10 inline-flex items-center gap-2 transition-colors duration-500 group-hover:text-[#073742]">
        {children || text}
        <span className="text-lg">→</span>
      </span>
    </>
  );

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#073742] px-6 py-3 font-riposte text-sm uppercase tracking-wide text-cream md:px-8 md:text-base md:py-2",
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
}
