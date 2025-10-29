import LaunchBanner from "@/components/LaunchBanner";
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
    "description": "Professional custom website design and development in one week. Mobile-first, SEO-optimized websites for small businesses in Calgary and beyond.",
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
      "name": "One-Week Website Launch",
      "description": "One-page custom website launched in one week (6 business days). Hand-coded, mobile-first, SEO-ready, analytics, SSL, contact form.",
      "price": "750",
      "priceCurrency": "USD"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Calgary",
        "containedIn": {
          "@type": "State",
          "name": "Alberta"
        }
      },
      {
        "@type": "Country",
        "name": "Canada"
      }
    ],
    "sameAs": [
      "https://crushhh.co",
      "https://github.com/crushdigitalatelier",
      "https://www.linkedin.com/company/trailhead-made"
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <LaunchBanner />
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
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
