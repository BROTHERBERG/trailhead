"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What's included in the one-page website package?",
      answer: "Everything you need: custom design, mobile optimization, SEO setup, contact forms, analytics, security/SSL, hosting for the first year, and two rounds of revisions. It's a complete, ready-to-launch website."
    },
    {
      question: "How long does it actually take?",
      answer: "Most sites are delivered in 5-7 days. We start as soon as we receive your content (text, images, branding). Rush delivery available if needed."
    },
    {
      question: "Do I need to provide anything?",
      answer: "Yes—we'll need your business information, any existing branding (logo, colors), text content for your pages, and images/photos you want to use. We'll guide you through exactly what we need."
    },
    {
      question: "What if I don't have content or images?",
      answer: "No problem. We can help you source stock images and write basic copy for an additional fee, or we can work with placeholder content initially and you can update it later."
    },
    {
      question: "Can I update the website myself after it's built?",
      answer: "Sites are built for optimal performance and security. For regular content updates, add our maintenance plan for $25/month and we'll handle changes for you. Need a CMS? We can discuss that during your kickoff call."
    },
    {
      question: "What happens after the first year of hosting?",
      answer: "After your first year (which is included), hosting and maintenance is $25/month. No long-term contracts required—cancel anytime."
    },
    {
      question: "What if I need changes after launch?",
      answer: "Your package includes two rounds of revisions during the build process. After launch, minor tweaks are usually free, but larger changes can be added to a maintenance plan or quoted separately."
    },
    {
      question: "Will my site work on mobile phones?",
      answer: "Absolutely. Every site is mobile-first, meaning we design for phones first, then scale up. Over 60% of web traffic is mobile, so this is non-negotiable."
    },
    {
      question: "Do you handle domain names and email?",
      answer: "We can help you register a domain or connect an existing one. For email, we recommend Google Workspace or similar services (not included in our packages, but we can help set it up)."
    },
    {
      question: "What if I need more than one page?",
      answer: "Our $750 package is optimized for one high-converting page. If you need additional pages (About, Services, Blog, etc.), we'll discuss scope and pricing during your kickoff call. Most businesses start with one page and add more later as they grow."
    },
    {
      question: "What makes you different from templates or DIY builders?",
      answer: "Custom code means faster loading, better SEO, unique design tailored to your brand, and no monthly platform fees. Plus, you own everything—no lock-in to a proprietary system."
    }
  ];

  return (
    <section className="bg-[#f5f0e9] py-12 md:py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="font-jetbrains text-xs md:text-sm text-[#073742] uppercase tracking-wider mb-4">
            FAQ
          </p>
          <h2 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-[#073742] uppercase">
            Common<br />Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#073742]/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
              >
                <h3 className="font-axel font-bold text-lg md:text-xl text-[#073742] pr-8">
                  {faq.question}
                </h3>
                <div
                  className={`shrink-0 w-8 h-8 rounded-full bg-[#073742] flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-cream"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <p className="font-riposte text-base md:text-lg text-[#073742]/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center">
          <p className="font-riposte text-[#073742]/70 text-lg mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-block border border-[#073742] text-[#073742] font-riposte px-8 py-3 rounded-full text-base uppercase tracking-tight transition-all duration-200 hover:bg-[#073742] hover:text-cream"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
