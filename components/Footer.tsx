"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function Footer() {
  const [wobble, setWobble] = useState<string>("");
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const fromLeft = x < centerX / 2;
    const fromRight = x > (centerX * 1.5);
    const fromTop = y < centerY / 2;
    const fromBottom = y > (centerY * 1.5);

    if (fromLeft) setWobble("wobble-left");
    else if (fromRight) setWobble("wobble-right");
    else if (fromTop) setWobble("wobble-top");
    else if (fromBottom) setWobble("wobble-bottom");
    else setWobble("wobble-center");
  };

  const handleAnimationEnd = () => {
    setWobble("");
  };

  return (
    <footer id="footer" className="bg-[#073742] text-cream">
      {/* Top Section */}
      <div className="px-6 md:px-10 lg:px-14 pt-8 md:pt-12 lg:pt-16 pb-6 md:pb-8 lg:pb-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8 mb-12 md:mb-16">
          {/* Logo & CTA */}
          <div className="flex items-end gap-2 md:gap-3 lg:mr-auto lg:-ml-8 -mx-4 md:mx-0">
            <div className="shrink-0 translate-y-6">
              <Image
                src="/trailhead-icon.png"
                alt="Trailhead"
                width={220}
                height={220}
                quality={85}
                loading="lazy"
                className="w-48 md:w-48 lg:w-56 h-auto"
              />
            </div>
            <div className="flex flex-col justify-end">
              <h2 className="font-axel font-bold text-[2rem] md:text-6xl lg:text-7xl mb-5 uppercase" style={{ lineHeight: '0.85', color: '#fff5e0' }}>
                LEVEL UP YOUR<br />
                PRESENCE TODAY
              </h2>
              <a
                href="#contact"
                ref={buttonRef}
                onMouseEnter={handleMouseEnter}
                onAnimationEnd={handleAnimationEnd}
                className={`border border-cream text-cream font-riposte px-8 py-3 rounded-full text-base uppercase tracking-wide transition-all duration-200 hover:bg-accent hover:border-accent w-fit ${wobble}`}
              >
                Start Your Build
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-12 md:gap-16 lg:gap-20 lg:ml-auto lg:mr-16 mt-8 md:mt-0">
            {/* Sitemap */}
            <div>
              <h3 className="font-jetbrains text-base uppercase tracking-wider mb-3 md:mb-4 hidden md:block">
                Sitemap
              </h3>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                <li>
                  <a href="/" className="font-riposte text-base hover:text-accent transition-colors">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="#why" className="font-riposte text-base hover:text-accent transition-colors">
                    WHY TRAILHEAD
                  </a>
                </li>
                <li>
                  <a href="#work" className="font-riposte text-base hover:text-accent transition-colors">
                    OUR WORK
                  </a>
                </li>
                <li>
                  <a href="/blog" className="font-riposte text-base hover:text-accent transition-colors">
                    BLOG
                  </a>
                </li>
                <li>
                  <a href="/faq" className="font-riposte text-base hover:text-accent transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="font-riposte text-base hover:text-accent transition-colors">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>

            {/* Social - Remove this section or update with real links */}
            {/*
            <div className="mr-8 md:mr-12 lg:mr-16">
              <h3 className="font-jetbrains text-base uppercase tracking-wider mb-3 md:mb-4">
                Social
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="font-riposte text-base hover:text-accent transition-colors">
                    INSTAGRAM
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="font-riposte text-base hover:text-accent transition-colors">
                    TWITTER
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="font-riposte text-base hover:text-accent transition-colors">
                    LINKEDIN
                  </a>
                </li>
              </ul>
            </div>
            */}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/30 mb-6 md:mb-8"></div>

        {/* Contact Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 flex-wrap">
            {/* Send Note */}
            <div className="font-riposte text-base uppercase tracking-wide hidden md:block">
              Send us a note
            </div>

            {/* Email */}
            <a
              href="mailto:hello@trailheadmade.com"
              className="flex items-center gap-2 hover:text-accent transition-colors"
              aria-label="Email us at hello@trailheadmade.com"
            >
              <div className="w-8 h-8 bg-cream rounded-md flex items-center justify-center shrink-0" aria-hidden="true">
                <svg className="w-4 h-4 text-[#073742]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-riposte text-base uppercase">hello@trailheadmade.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:4034040014"
              className="flex items-center gap-3 hover:text-accent transition-colors"
              aria-label="Call us at (403) 404-0014"
            >
              <div className="w-8 h-8 bg-cream rounded-md flex items-center justify-center shrink-0" aria-hidden="true">
                <svg className="w-4 h-4 text-[#073742]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="font-riposte text-base">(403) 404-0014</span>
            </a>
          </div>

          {/* Location - aligned with sitemap/social */}
          <div className="flex items-center gap-8">
            <div className="font-jetbrains font-medium text-base uppercase tracking-wide">
              HQ IN<br />
              CALGARY
            </div>
            <div className="border-l-2 border-cream/30 h-20"></div>
            <Image
              src="/alberta.png"
              alt="Alberta Map"
              width={80}
              height={120}
              quality={85}
              loading="lazy"
              className="w-auto h-20 object-contain"
            />
            <div className="border-l-2 border-cream/30 h-20"></div>
            <Image
              src="/hiker.png"
              alt="Hiker"
              width={60}
              height={80}
              quality={85}
              loading="lazy"
              className="w-[60px] h-20"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/30 mb-6 md:mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 order-2 md:order-2">
            <a href="/privacy" className="font-riposte text-sm text-cream/70 hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="/terms" className="font-riposte text-sm text-cream/70 hover:text-accent transition-colors">
              Terms
            </a>
            <a href="/refund-policy" className="font-riposte text-sm text-cream/70 hover:text-accent transition-colors">
              Refunds
            </a>
            <a href="/cookies" className="font-riposte text-sm text-cream/70 hover:text-accent transition-colors">
              Cookies
            </a>
            <a href="/accessibility" className="font-riposte text-sm text-cream/70 hover:text-accent transition-colors">
              Accessibility
            </a>
            <a href="/legal" className="font-riposte text-sm text-cream/70 hover:text-accent transition-colors">
              Legal
            </a>
          </div>

          {/* Copyright */}
          <div className="font-jetbrains font-medium text-[10px] md:text-sm text-cream/80 order-3 md:order-1">
            © 2025 Trailheadmade.com · A Crush Digital Atelier LLC Company
          </div>
        </div>
      </div>
    </footer>
  );
}