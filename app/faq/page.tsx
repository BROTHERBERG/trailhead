import { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Trailhead",
  description: "Common questions about our 6-day website builds, pricing, hosting, and process. Get answers about our $750 one-page websites and $18/mo Care & Hosting.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e9]">
      {/* Header */}
      <div className="bg-[#073742] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-riposte text-sm text-cream/70 hover:text-accent transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
          <h1 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-cream uppercase mb-6">
            Frequently Asked<br />Questions
          </h1>
          <p className="font-riposte text-lg md:text-xl text-cream/80 max-w-3xl">
            Everything you need to know about our 6-day website builds, pricing, and process.
            Can't find your answer? <a href="/#contact" className="text-accent underline hover:no-underline">Get in touch</a>.
          </p>
        </div>
      </div>

      {/* FAQ Component */}
      <FAQ />

      {/* CTA Section */}
      <div className="bg-[#073742] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h2 className="font-axel font-bold text-3xl md:text-4xl lg:text-5xl text-cream uppercase mb-6">
            Still Have Questions?
          </h2>
          <p className="font-riposte text-lg text-cream/80 mb-8">
            We're here to help. Send us a message and we'll get back to you within 24 hours.
          </p>
          <a
            href="/#contact"
            className="inline-block relative overflow-hidden bg-accent text-[#073742] font-riposte font-bold px-8 py-3 rounded-full text-base tracking-wide transition-all duration-200 uppercase hover:bg-accent/90"
          >
            Start Your Build
          </a>
        </div>
      </div>
    </div>
  );
}
