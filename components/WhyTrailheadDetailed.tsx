import Image from "next/image";
import Link from "next/link";

export default function WhyTrailheadDetailed() {
  const features = [
    {
      title: "CUSTOM-BUILT, NO TEMPLATES",
      description: "Every line of code crafted specifically for your brand and business goals",
      icon: "/service-1.png"
    },
    {
      title: "ONE-WEEK DELIVERY",
      description: "Get your professional website live in one week, not months of waiting",
      icon: "/service-2.png",
      link: "/blog/why-6-day-launches-win"
    },
    {
      title: "MODERN TECH STACK",
      description: "Built with Next.js for lightning-fast performance and rock-solid security",
      icon: "/service-3.png"
    },
    {
      title: "TRANSPARENT PRICING",
      description: "No hidden fees or surprise invoices—you know exactly what you're paying for",
      icon: "/service-4.png"
    }
  ];

  return (
    <section id="why" className="bg-[#f5f0e9] py-0">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start border border-[#073742] rounded-3xl p-8 md:p-12 lg:p-16">
          {/* Left Column - Headline */}
          <div>
            <p className="font-jetbrains text-xs md:text-sm text-[#073742] uppercase tracking-wider mb-4">
              WHY TRAILHEAD
            </p>
            <h2 className="font-axel font-bold text-[2.5rem] md:text-5xl lg:text-6xl text-[#073742] leading-[0.85]">
              <span className="md:hidden">WHAT MAKES US UNIQUE, MAKES YOUR BRAND UNIQUE</span>
              <span className="hidden md:inline">WHAT MAKES US<br />UNIQUE, MAKES YOUR<br />BRAND UNIQUE</span>
            </h2>
            <div className="mt-12 md:mt-16">
              <p className="font-jetbrains text-xs md:text-sm text-[#073742] uppercase tracking-wider border-b-2 border-[#073742] inline-block pb-1">
                WHY CHOOSE TRAILHEAD
              </p>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr] gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex md:flex-col gap-4 md:gap-0 md:space-y-3">
                {/* Icon */}
                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={64}
                    height={64}
                    quality={90}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-axel font-bold text-[#073742] text-base md:text-lg uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="font-riposte text-[#073742] text-sm md:text-base leading-relaxed mt-2 md:mt-0">
                    {feature.description}
                  </p>
                  {feature.link && (
                    <Link
                      href={feature.link}
                      className="inline-flex items-center gap-1 text-accent font-riposte text-sm mt-2 hover:gap-2 transition-all"
                    >
                      Learn why →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
