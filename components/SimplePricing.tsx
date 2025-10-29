"use client";

import Link from "next/link";
import CheckoutButton from "./CheckoutButton";
import { STRIPE_PRODUCTS } from "@/lib/stripe-config";
import PriceDisplay from "./PriceDisplay";

export default function SimplePricing() {
  const websiteFeatures = [
    "Custom one-page website design",
    "Mobile-optimized & lightning-fast performance",
    "Professional SEO & analytics setup",
    "Security, SSL & contact forms configured",
    "Two rounds of revisions included",
    "Launched in one week"
  ];

  const maintenanceFeatures = [
    "Hosting, SSL & security updates",
    { text: "Two content updates/month (30 min each)", breakBefore: "2" },
    "Uptime monitoring & backups",
    "Performance optimization",
    "Priority email support",
    "Additional edits: $10 each"
  ];

  return (
    <section id="pricing" className="bg-[#f5f0e9] pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-28">
      <div className="px-4 md:px-8 lg:px-12">
        {/* Eyebrow and Title */}
        <div className="mb-10 md:mb-12">
          <p className="font-jetbrains text-xs md:text-sm text-[#073742] uppercase tracking-wider mb-4">
            PRICING
          </p>
          <h2 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-[#073742] uppercase leading-[0.9] md:leading-tight">
            One Price.<br />No Hidden Fees.
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <PriceDisplay cadAmount={750} showCurrency={false} />
                </p>
              </div>
              <p className="font-riposte text-base text-[#073742] font-medium mb-1">
                + <PriceDisplay cadAmount={18} showCurrency={false} />/mo Care & Hosting
              </p>
              <p className="font-riposte text-sm text-[#073742]/60">
                One-time build • Launch in one week
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
            <div className="flex flex-col gap-4 mt-auto">
              <CheckoutButton
                priceId={STRIPE_PRODUCTS.signature.priceId}
                productName="Professional Website"
                className="bg-[#073742] text-cream hover:bg-[#0a4f5f] hover:shadow-xl hover:shadow-[#073742]/20 w-full px-8 py-4"
              >
                Start Your Build
              </CheckoutButton>
              <p className="font-riposte text-xs text-[#073742]/60 text-center">
                + <PriceDisplay cadAmount={18} showCurrency={false} />/mo for hosting & maintenance
              </p>
            </div>
          </div>

          {/* Maintenance Package */}
          <div className="bg-[#fcf6ed] border border-[#d1c6bc] shadow-lg shadow-[#073742]/5 rounded-3xl p-8 md:p-10 relative flex flex-col">
            {/* Price and Badge */}
            <div className="mb-8 pb-6 border-b border-[#073742]/10">
              <div className="mb-4">
                <h3 className="font-axel font-bold text-2xl md:text-3xl text-[#073742] uppercase leading-tight">
                  Care & Hosting
                </h3>
              </div>
              <p className="font-axel font-bold text-5xl md:text-6xl text-[#073742] mb-2">
                <PriceDisplay cadAmount={18} showCurrency={false} /><span className="text-2xl">/mo</span>
              </p>
              <p className="font-riposte text-sm md:text-base text-[#073742] font-medium">
                Required for uptime, SSL, security, updates, 2 content edits/mo, backups, monitoring
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-4">
              {maintenanceFeatures.map((feature, index) => {
                const isObject = typeof feature === 'object';
                const text = isObject ? feature.text : feature;
                const breakBefore = isObject ? feature.breakBefore : null;

                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#073742] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-riposte text-sm md:text-base text-[#073742] leading-relaxed">
                      {breakBefore ? (
                        <>
                          Two content updates/month<br className="hidden md:block" /> (30 min each)
                        </>
                      ) : text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA and Info */}
            <div className="flex flex-col gap-4 mt-auto">
              <a
                href="#contact"
                className="border border-[#073742] text-[#073742] font-riposte px-8 py-4 rounded-full text-sm md:text-base uppercase tracking-tight transition-all duration-300 hover:bg-[#073742] hover:text-cream text-center"
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
