"use client";

import { useEffect, useState } from "react";

export default function BlogTableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract all h2 and h3 elements from the blog content
    const contentArea = document.querySelector('.blog-prose');
    if (!contentArea) return;

    const headingElements = contentArea.querySelectorAll('h2, h3');
    const headingData = Array.from(headingElements).map((heading, index) => {
      // Create ID if it doesn't exist
      if (!heading.id) {
        const id = heading.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '') || `heading-${index}`;
        heading.id = id;
      }

      return {
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.substring(1))
      };
    });

    setHeadings(headingData);

    // Track active heading on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66% 0px' }
    );

    headingElements.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="bg-white border-2 border-[#073742]/10 rounded-2xl p-6">
      <h3 className="font-jetbrains text-sm uppercase text-[#073742] tracking-wider mb-4">
        Table of Contents
      </h3>
      <ul className="space-y-2 list-none">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`relative ${heading.level === 3 ? 'ml-4 pl-6' : 'pl-6'}`}
          >
            <span className={`absolute left-0 text-accent font-bold leading-none ${
              heading.level === 2 ? 'top-[0.35rem] text-base' : 'top-[0.3rem] text-sm'
            }`}>•</span>
            <a
              href={`#${heading.id}`}
              className={`block font-riposte transition-colors ${
                heading.level === 2 ? 'text-[15px] font-medium' : 'text-sm'
              } ${
                activeId === heading.id
                  ? 'text-accent font-semibold'
                  : 'text-[#073742]/70 hover:text-accent'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
