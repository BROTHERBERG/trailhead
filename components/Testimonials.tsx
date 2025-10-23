"use client";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Launch in 6 days, calls the same week. We booked 3 new jobs.",
      author: "Sarah M.",
      role: "Owner, Red Deer Roofing",
      location: "Red Deer, AB"
    },
    {
      quote: "Went from zero online presence to ranking page one in 3 weeks. Phone hasn't stopped ringing.",
      author: "Marcus T.",
      role: "Landscaping Services",
      location: "Calgary, AB"
    },
    {
      quote: "Finally ditched the DIY builder. Site loads instantly now and we're getting actual leads.",
      author: "Jordan K.",
      role: "Personal Trainer",
      location: "Edmonton, AB"
    }
  ];

  return (
    <section className="bg-[#073742] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-12">
          <p className="font-jetbrains text-xs md:text-sm text-accent uppercase tracking-wider mb-4">
            CLIENT RESULTS
          </p>
          <h2 className="font-axel font-bold text-3xl md:text-4xl lg:text-5xl text-cream uppercase leading-tight">
            Real Businesses.<br />Real Results.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-cream/5 border border-cream/10 rounded-2xl p-6 md:p-8 hover:bg-cream/10 transition-all duration-300"
            >
              {/* Quote */}
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-accent mb-4 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <p className="font-riposte text-cream text-base md:text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-cream/10 pt-4">
                <p className="font-jetbrains text-sm text-cream font-medium">
                  {testimonial.author}
                </p>
                <p className="font-riposte text-sm text-cream/60">
                  {testimonial.role}
                </p>
                <p className="font-riposte text-xs text-cream/40 mt-1">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
