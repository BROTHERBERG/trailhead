"use client";

import Link from "next/link";
import CheckoutButton from "./CheckoutButton";
import { STRIPE_PRODUCTS } from "@/lib/stripe-config";

export default function SimplePricing() {
  const websiteFeatures = [
    "Custom one-page website design",
    "Mobile-optimized & lightning-fast performance",
    "Professional SEO & analytics setup",
    "Security, SSL & contact forms configured",
    "Two rounds of revisions included",
    "Launched in 6 days"
  ];

  const maintenanceFeatures = [
    "Hosting, SSL & security updates",
    "Two content updates/month (30 min each)",
    "Uptime monitoring & backups",
    "Performance optimization",
    "Priority email support",
    "Additional edits: $10 each"
  ];

  return (
    <section className="bg-[#f5f0e9] pt-0 pb-12 md:py-20 lg:py-28">
      <div className="px-4 md:px-8 lg:px-12">
        {/* Eyebrow and Title */}
        <div className="mb-12 md:mb-16 max-w-7xl mx-auto">
          <p className="font-jetbrains text-xs md:text-sm text-[#073742] uppercase tracking-wider mb-4">
            PRICING
          </p>
          <h2 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-[#073742] uppercase leading-[0.9] md:leading-tight mb-4">
            One Price.<br />No Hidden Fees.
          </h2>
          <p className="font-riposte text-lg md:text-xl text-[#073742]/70 max-w-2xl">
            Professional websites delivered fast.<br />No complexity, no upsells, no surprises.
          </p>
          <Link
            href="/blog/when-you-need-a-website"
            className="inline-flex items-center gap-2 text-accent font-riposte text-base mt-4 hover:gap-3 transition-all"
          >
            Not sure if you need a website yet? →
          </Link>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Website Package */}
          <div className="bg-[#fff7f0] border-2 border-[#073742] shadow-xl shadow-[#073742]/10 rounded-3xl p-8 md:p-10 relative">
            {/* Top Badge */}
            <div className="absolute -top-3 -right-3 bg-accent text-[#073742] font-jetbrains text-xs font-bold px-4 py-1 rounded-full rotate-6 uppercase shadow-lg">
              Start Here
            </div>

            {/* Price and Badge */}
            <div className="mb-8 pb-6 border-b border-[#073742]/10">
              <div className="mb-4">
                <h3 className="font-axel font-bold text-3xl md:text-4xl text-[#073742] uppercase leading-tight">
                  One-Page Website
                </h3>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="font-axel font-bold text-6xl md:text-7xl text-[#073742]">
                  $750
                </p>
                <p className="font-riposte text-lg text-[#073742]/60">USD</p>
              </div>
              <p className="font-riposte text-base text-[#073742] font-medium mb-1">
                + $18/mo Care & Hosting
              </p>
              <p className="font-riposte text-sm text-[#073742]/60">
                One-time build • Launch in 6 days
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {websiteFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#073742] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-riposte text-sm md:text-base text-[#073742] leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA and Hosting Info */}
            <div className="flex flex-col gap-4">
              <CheckoutButton
                priceId={STRIPE_PRODUCTS.signature.priceId}
                productName="Professional Website"
                className="bg-[#073742] text-cream hover:bg-[#0a4f5f] hover:shadow-xl hover:shadow-[#073742]/20"
              >
                Start Your Build
              </CheckoutButton>
              <p className="font-riposte text-xs text-[#073742]/60 text-center">
                + $18 USD/mo for hosting & maintenance
              </p>
              <p className="font-riposte text-xs text-accent text-center font-medium">
                Need more pages? We'll discuss during your kickoff call.
              </p>
            </div>
          </div>

          {/* Maintenance Package */}
          <div className="bg-[#fcf6ed] border border-[#d1c6bc] shadow-lg shadow-[#073742]/5 rounded-3xl p-8 md:p-10 relative">
            {/* Price and Badge */}
            <div className="mb-8 pb-6 border-b border-[#073742]/10">
              <div className="mb-4">
                <h3 className="font-axel font-bold text-2xl md:text-3xl text-[#073742] uppercase leading-tight">
                  Care & Hosting
                </h3>
              </div>
              <p className="font-axel font-bold text-5xl md:text-6xl text-[#073742] mb-2">
                $18<span className="text-2xl">/mo</span>
              </p>
              <p className="font-riposte text-sm md:text-base text-[#073742] font-medium">
                Required for uptime, SSL, security, updates, 2 content edits/mo, backups, monitoring
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {maintenanceFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#073742] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-riposte text-sm md:text-base text-[#073742] leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA and Info */}
            <div className="flex flex-col gap-4">
              <a
                href="#contact"
                className="border border-[#073742] text-[#073742] font-riposte px-8 py-3.5 rounded-full text-sm md:text-base uppercase tracking-tight transition-all duration-300 hover:bg-[#073742] hover:text-cream text-center"
              >
                Learn More
              </a>
              <p className="font-riposte text-xs text-[#073742]/60 text-center">
                No long-term commitment required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
