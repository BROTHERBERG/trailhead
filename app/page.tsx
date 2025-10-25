import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyTrailheadDetailed from "@/components/WhyTrailheadDetailed";
import SimplePricing from "@/components/SimplePricing";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackgroundOverlay from "@/components/BackgroundOverlay";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Trailhead",
    "legalName": "Crush Digital Atelier LLC",
    "description": "Custom website design and development in 6 days. Mobile-first, SEO-optimized, professional websites for small businesses.",
    "url": "https://trailheadmade.com",
    "telephone": "+1-403-404-0014",
    "email": "hello@trailheadmade.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calgary",
      "addressRegion": "AB",
      "addressCountry": "CA"
    },
    "priceRange": "$750+",
    "offers": {
      "@type": "Offer",
      "name": "6-Day Website Launch",
      "description": "One-page custom site launched in 6 days. Mobile-first, baseline SEO, analytics, SSL, contact form.",
      "price": "750",
      "priceCurrency": "USD"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "sameAs": [
      "https://crushhh.co"
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar />
      <BackgroundOverlay />
      <CookieConsent />

      {/* Main content */}
      <main id="main-content" className="relative z-10 bg-[#f5f0e9]">
        <Hero />
        <StatsBar />
        <Services />
        <WhyTrailheadDetailed />
        <Portfolio />
        <SimplePricing />
        <Testimonials />
        <BlogPreview />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
