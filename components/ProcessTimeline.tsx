export default function ProcessTimeline() {
  const steps = [
    {
      day: "Day 1",
      title: "Discovery Call",
      description: "We learn about your business, goals, and vision. You share content, branding, and any must-haves."
    },
    {
      day: "Days 2-3",
      title: "Design & Build",
      description: "We create your custom design and build out the site with your content, optimized for speed and conversions."
    },
    {
      day: "Day 4",
      title: "First Review",
      description: "You review the site and provide feedback. We make adjustments and refinements based on your input."
    },
    {
      day: "Day 5",
      title: "Final Touches",
      description: "We implement your feedback, test everything across devices, and optimize performance."
    },
    {
      day: "Day 6-7",
      title: "Launch",
      description: "Final approval, domain setup, and we launch your site live. You're now open for business online."
    }
  ];

  return (
    <section className="bg-[#073742] py-12 md:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="font-jetbrains text-xs md:text-sm text-[#c8e3da] uppercase tracking-wider mb-4">
            Our Process
          </p>
          <h2 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-cream uppercase mb-6">
            From Idea To Live<br />In One Week
          </h2>
          <p className="font-riposte text-cream/80 text-lg max-w-2xl mx-auto">
            A proven process that delivers professional websites<br />without the endless revisions and delays
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#c8e3da]/30 md:transform md:-translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-[#f5f0e9] rounded-2xl p-6 md:p-8">
                    <p className="font-jetbrains text-xs md:text-sm text-accent uppercase tracking-wider mb-2">
                      {step.day}
                    </p>
                    <h3 className="font-axel font-bold text-2xl md:text-3xl text-[#073742] mb-3 uppercase">
                      {step.title}
                    </h3>
                    <p className="font-riposte text-base md:text-lg text-[#073742]/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Number Circle */}
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 bg-[#c8e3da] rounded-full flex items-center justify-center border-4 border-[#073742] z-10">
                  <span className="font-axel font-bold text-2xl text-[#073742]">
                    {index + 1}
                  </span>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-accent text-cream font-riposte px-10 py-4 rounded-full text-base md:text-lg uppercase tracking-tight transition-all duration-300 hover:bg-[#ff9770] hover:shadow-xl"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
