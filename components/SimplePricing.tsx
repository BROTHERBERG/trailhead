export default function SimplePricing() {
  const onePageFeatures = [
    "Custom one-page website design",
    "Mobile-optimized & lightning-fast performance",
    "Professional SEO & analytics setup",
    "First year hosting & maintenance included",
    "Security, SSL & contact forms configured",
    "Two rounds of revisions included"
  ];

  const multiPageFeatures = [
    "Custom multi-page website (up to 10 pages)",
    "Mobile-optimized & lightning-fast performance",
    "Advanced SEO & analytics setup",
    "First year hosting & maintenance included",
    "Security, SSL & contact forms configured",
    "Three rounds of revisions included",
    "Content management system (CMS)"
  ];

  const maintenanceFeatures = [
    "Hosting & security updates",
    "Content updates (up to 2 per month)",
    "Performance monitoring",
    "Backup & recovery",
    "Email support"
  ];

  return (
    <section className="bg-[#f5f0e9] py-12 md:py-20 lg:py-28">
      <div className="px-4 md:px-8 lg:px-12">
        {/* Eyebrow and Title */}
        <div className="mb-12 md:mb-16">
          <p className="font-jetbrains text-xs md:text-sm text-[#073742] uppercase tracking-wider mb-4">
            PRICING
          </p>
          <h2 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-[#073742] uppercase leading-tight">
            Simple, Transparent<br />Pricing That Works
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* One-Page Package */}
          <div className="bg-[#fff7f0] border border-[#d1c6bc] shadow-lg shadow-[#073742]/5 rounded-3xl p-8 md:p-10 relative">
            {/* Top Badge */}
            <div className="absolute -top-3 -right-3 bg-[#c8e3da] text-[#073742] font-jetbrains text-xs font-bold px-4 py-1 rounded-full rotate-12 uppercase">
              Most Popular
            </div>

            {/* Price and Badge */}
            <div className="mb-8 pb-6 border-b border-[#073742]/10">
              <div className="mb-4">
                <h3 className="font-axel font-bold text-2xl md:text-3xl text-[#073742] uppercase">
                  One-Page Site
                </h3>
              </div>
              <p className="font-axel font-bold text-5xl md:text-6xl text-[#073742] mb-2">
                $750
              </p>
              <p className="font-riposte text-sm md:text-base text-[#073742]/60">
                Perfect for most businesses
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {onePageFeatures.map((feature, index) => (
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
              <a
                href="#contact"
                className="bg-[#073742] text-cream font-riposte px-8 py-3.5 rounded-full text-sm md:text-base uppercase tracking-tight transition-all duration-300 hover:bg-[#0a4f5f] hover:shadow-xl hover:shadow-[#073742]/20 text-center"
              >
                Get Started Today
              </a>
              <p className="font-riposte text-xs text-[#073742]/60 text-center">
                Then $25/month for hosting & support
              </p>
            </div>
          </div>

          {/* Multi-Page Package */}
          <div className="bg-[#bdc6c7] border border-[#d1c6bc] shadow-lg shadow-[#073742]/5 rounded-3xl p-8 md:p-10 relative">
            {/* Price and Badge */}
            <div className="mb-8 pb-6 border-b border-[#073742]/10">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-axel font-bold text-2xl md:text-3xl text-[#073742] uppercase">
                  Multi-Page Site
                </h3>
              </div>
              <p className="font-axel font-bold text-5xl md:text-6xl text-[#073742] mb-2">
                $1,500
              </p>
              <p className="font-riposte text-sm md:text-base text-[#073742]/60">
                For larger content needs
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {multiPageFeatures.map((feature, index) => (
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
              <a
                href="#contact"
                className="border border-[#073742] text-[#073742] font-riposte px-8 py-3.5 rounded-full text-sm md:text-base uppercase tracking-tight transition-all duration-300 hover:bg-[#073742] hover:text-cream text-center"
              >
                Contact Us
              </a>
              <p className="font-riposte text-xs text-[#073742]/60 text-center">
                Then $35/month for hosting & support
              </p>
            </div>
          </div>

          {/* Maintenance Package */}
          <div className="bg-[#fcf6ed] border border-[#d1c6bc] shadow-lg shadow-[#073742]/5 rounded-3xl p-8 md:p-10 relative">
            {/* Price and Badge */}
            <div className="mb-8 pb-6 border-b border-[#073742]/10">
              <div className="mb-4">
                <h3 className="font-axel font-bold text-2xl md:text-3xl text-[#073742] uppercase">
                  Maintenance
                </h3>
              </div>
              <p className="font-axel font-bold text-5xl md:text-6xl text-[#073742] mb-2">
                $25<span className="text-2xl">/mo</span>
              </p>
              <p className="font-riposte text-sm md:text-base text-[#073742]/60">
                For existing sites only
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
