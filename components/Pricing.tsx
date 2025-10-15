export default function Pricing() {
  const tiers = [
    {
      name: "BASECAMP",
      price: "$3,500",
      description: "Launch your digital authority",
      badge: "3 Spots Currently Available",
      badgeColor: "bg-[#c8e3da] text-[#073742]",
      bgColor: "bg-[#fff7f0]",
      features: [
        "Core message strategy",
        "Single-page website build",
        "Welcome email sequence",
        "Basic social proof setup",
        "30 Days Growth Support"
      ],
      cta: "Join the Waitlist",
      ctaStyle: "bg-[#073742] text-cream hover:bg-[#0a4a5a]"
    },
    {
      name: "THE ASCENT",
      price: "$5,500",
      description: "Build your content engine",
      badge: "Now taking clients for Jan",
      badgeColor: "bg-[#c8e3da] text-[#073742]",
      topBadge: "MOST POPULAR",
      bgColor: "bg-[#bdc6c7]",
      features: [
        "Everything in Basecamp +",
        "Content hub development",
        "Advanced nurture sequences",
        "Content calendar & framework",
        "60 Days Growth Support"
      ],
      cta: "Begin Your Ascent",
      ctaStyle: "bg-[#073742] text-cream hover:bg-[#0a4a5a]"
    },
    {
      name: "THE SUMMIT",
      price: "$8,500",
      description: "Master your digital ecosystem",
      topBadge: "COMPLETE SYSTEM",
      bgColor: "bg-[#073742]",
      textColor: "text-cream",
      features: [
        "Everything in Ascent +",
        "Full automation suite",
        "AI content generation",
        "Systematic scaling framework",
        "90 Days System Support"
      ],
      cta: "Start Your Journey",
      ctaStyle: "border border-cream text-cream hover:bg-cream hover:text-[#073742]"
    }
  ];

  return (
    <section className="bg-[#f5f0e9] py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <p className="font-jetbrains text-[#073742] text-xs md:text-sm uppercase tracking-wide mb-4 text-center">
          Your Investment Options
        </p>

        {/* Heading */}
        <h2 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-[#073742] text-center mb-12 md:mb-16 uppercase">
          Paths to Elevation
        </h2>

        {/* Pricing Grid */}
        <div className="flex flex-col lg:flex-row gap-2">
          {/* Pricing Tiers */}
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`${tier.bgColor} border border-[#d1c6bc] rounded-3xl p-6 flex flex-col relative flex-1`}
            >
              {/* Top Badge */}
              {tier.topBadge && (
                <div className="absolute -top-3 -right-3 bg-[#c8e3da] text-[#073742] font-jetbrains text-xs font-bold px-4 py-1 rounded-full rotate-12 uppercase">
                  {tier.topBadge}
                </div>
              )}

              {/* Title */}
              <h3 className={`font-axel font-bold text-xl md:text-2xl ${tier.textColor || 'text-[#073742]'} mb-3 uppercase`}>
                {tier.name}
              </h3>

              {/* Price */}
              <p className={`font-axel font-bold text-4xl md:text-5xl ${tier.textColor || 'text-[#073742]'} mb-2 tracking-tight`}>
                {tier.price}
              </p>

              {/* Description */}
              <p className={`font-riposte ${tier.textColor || 'text-[#073742]'} mb-4 text-xs`}>
                {tier.description}
              </p>

              {/* Badge */}
              {tier.badge && (
                <div className={`${tier.badgeColor} rounded-full px-3 py-1.5 text-xs font-jetbrains font-bold mb-4 inline-block self-start`}>
                  {tier.badge}
                </div>
              )}

              {/* Mountain Illustration Placeholder */}
              <div className="my-6 flex justify-center opacity-20">
                <span className="text-4xl">⛰</span>
              </div>

              {/* Features List */}
              <ul className="space-y-2 mb-6 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className={`font-riposte text-xs ${tier.textColor || 'text-[#073742]'} flex items-start gap-2`}>
                    <span className="shrink-0 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`${tier.ctaStyle} font-jetbrains font-bold px-6 py-3 rounded-full text-sm uppercase tracking-wide transition-all duration-300 w-full`}>
                {tier.cta}
              </button>
            </div>
          ))}

          {/* Side Cards */}
          <div className="flex flex-col gap-2 lg:w-64">
            {/* Strategy Call Card */}
            <div className="bg-[#c8e3da] border border-[#d1c6bc] rounded-3xl p-6 flex-1 flex flex-col">
              <h3 className="font-axel font-bold text-lg text-[#073742] mb-2 uppercase">
                Book a free strategy call
              </h3>
              <p className="font-riposte text-[#073742] text-xs mb-4 flex-grow">
                Learn about how we can help you transform your digital presence
              </p>
              <button className="bg-[#073742] text-cream font-jetbrains font-bold px-6 py-3 rounded-full text-sm uppercase tracking-wide transition-all duration-300 hover:bg-[#0a4a5a] w-full">
                Schedule Call
              </button>
            </div>

            {/* Referral Card */}
            <div className="bg-[#fcf6ed] border border-[#d1c6bc] rounded-3xl p-6 flex-1 flex flex-col">
              <h3 className="font-axel font-bold text-lg text-[#073742] mb-2 uppercase">
                Refer a friend and get paid
              </h3>
              <p className="font-riposte text-[#073742] text-xs mb-4 flex-grow">
                Earn 5% recurring commissions for each referral
              </p>
              <button className="bg-accent text-cream font-jetbrains font-bold px-6 py-3 rounded-full text-sm uppercase tracking-wide transition-all duration-300 hover:bg-[#ff9770] w-full">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}