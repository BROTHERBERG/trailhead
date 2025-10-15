export default function WhyTrailhead() {
  const reasons = [
    {
      title: "No templates, custom design",
      description: "Every project built from scratch to match your brand and goals"
    },
    {
      title: "Modern tech stack (fast, secure)",
      description: "Built with Next.js for lightning-fast performance and bulletproof security"
    },
    {
      title: "Week-long turnaround vs months",
      description: "Get your website live in days, not waiting around for months"
    },
    {
      title: "Transparent pricing vs agency markup",
      description: "No hidden fees or surprise invoices. You know exactly what you're paying for"
    }
  ];

  return (
    <section className="bg-[#f5f0e9] py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-[#073742] text-center mb-12 md:mb-16 uppercase">
          Why Trailhead?
        </h2>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-cream border border-[#d1c6bc] rounded-2xl p-6 md:p-8">
              <h3 className="font-jetbrains font-bold text-[#073742] text-sm md:text-base uppercase mb-3 tracking-wide">
                {reason.title}
              </h3>
              <p className="font-riposte text-[#073742] text-sm md:text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}