"use client";

import Image from "next/image";
import { useState, useEffect, Fragment, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key and focus trap for mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !mobileMenuRef.current) return;

      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    window.addEventListener('keydown', handleEscape);
    window.addEventListener('keydown', handleTab);

    // Focus first menu item when opened
    const firstLink = mobileMenuRef.current?.querySelector('a') as HTMLElement;
    firstLink?.focus();

    return () => {
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('keydown', handleTab);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Fragment>
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-cream focus:rounded"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'mx-4 md:mx-8 lg:mx-12 mt-4' : 'mx-2 md:mx-3 lg:mx-4 mt-2 md:mt-3'
        }`}
      >
        <nav
          className={`flex items-center justify-between px-2 md:px-4 lg:px-5 py-1.5 md:py-2 transition-all duration-300 ${
            scrolled ? 'bg-[#073742] rounded-full shadow-xl' : 'bg-transparent'
          }`}
          aria-label="Main navigation"
        >
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/trailhead-logo.webp"
            alt="Trailhead"
            width={200}
            height={60}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <a
            href="#why"
            className="font-riposte text-white hover:text-accent transition-colors duration-200 text-sm lg:text-base uppercase"
          >
            Why Trailhead
          </a>
          <a
            href="#work"
            className="font-riposte text-white hover:text-accent transition-colors duration-200 text-sm lg:text-base uppercase"
          >
            Our Work
          </a>
        </div>

        {/* Desktop CTA Button */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 md:gap-3 group"
        >
          <span className="font-riposte text-white text-sm lg:text-base uppercase">Contact Us</span>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-accent rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-cream" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
          </div>
        </a>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="md:hidden fixed inset-0 top-20 bg-[#073742] z-40 px-4 py-8"
          >
            <div className="flex flex-col gap-6">
              <a
                href="#why"
                onClick={handleLinkClick}
                className="font-riposte text-white hover:text-accent transition-colors duration-200 text-lg uppercase py-3 border-b border-white/10"
              >
                Why Trailhead
              </a>
              <a
                href="#work"
                onClick={handleLinkClick}
                className="font-riposte text-white hover:text-accent transition-colors duration-200 text-lg uppercase py-3 border-b border-white/10"
              >
                Our Work
              </a>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="bg-accent text-cream font-riposte px-8 py-4 rounded-full text-base uppercase tracking-tight text-center mt-4"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </header>
    </Fragment>
  );
}
