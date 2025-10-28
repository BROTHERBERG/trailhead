import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Fast Custom Website Design | Launched in One Week | Trailhead",
  description: "Professional custom websites launched in one week. Hand-coded Next.js sites starting at $750. No templates, no corners cut. See how we do it.",
  keywords: ["fast custom website", "website in a week", "quick professional website", "express web design", "fast website design", "custom website fast delivery"],
  alternates: {
    canonical: 'https://trailheadmade.com/fast-custom-website',
  },
  openGraph: {
    title: "Fast Custom Website Design | Launched in One Week",
    description: "Professional custom websites launched in one week. Hand-coded Next.js sites starting at $750. No templates, no corners cut.",
    type: "website",
  },
};

export default function FastCustomWebsite() {
  // Structured data for Service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fast Custom Website Design",
    "description": "Professional custom websites launched in one week. Hand-coded Next.js sites with SEO, forms, and analytics included.",
    "provider": {
      "@type": "Organization",
      "name": "Trailhead",
      "url": "https://trailheadmade.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Calgary, Alberta, Canada"
    },
    "offers": {
      "@type": "Offer",
      "price": "750",
      "priceCurrency": "USD",
      "description": "One-page custom website delivered in one week",
      "availability": "https://schema.org/InStock"
    }
  };

  // HowTo schema for the process
  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How We Launch Custom Websites in One Week",
    "description": "Our proven 6-day process for launching professional custom websites without templates or shortcuts.",
    "totalTime": "P6D",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Day 1: Discovery & Strategy",
        "text": "We start with a focused kickoff call to understand your business, target audience, and goals. You provide content and brand assets. We map out the site structure and design direction."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Day 2-3: Design & Development",
        "text": "We design and code your custom Next.js website. No templates - every line is written specifically for your business. We build in forms, analytics, and SEO foundations."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Day 4: Review & Revision",
        "text": "You review the first version. We incorporate your feedback in one focused revision round. No endless back-and-forth - just clear, actionable changes."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Day 5: Polish & Testing",
        "text": "Final adjustments, cross-browser testing, mobile optimization, performance tuning, and accessibility checks. We ensure everything works perfectly."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Day 6: Launch",
        "text": "Your site goes live with SSL, analytics tracking, form submissions connected, and baseline SEO configured. You're ready to capture leads immediately."
      }
    ]
  };

  const timeline = [
    {
      day: "Day 1",
      title: "Discovery & Strategy",
      description: "Focused kickoff call. You provide content and brand assets. We map site structure and design direction.",
      deliverable: "Sitemap & style direction confirmed"
    },
    {
      day: "Day 2-3",
      title: "Design & Development",
      description: "We design and code your custom Next.js website. No templates—every line written for your business.",
      deliverable: "Working prototype with your content"
    },
    {
      day: "Day 4",
      title: "Review & Revision",
      description: "You review the first version. We incorporate your feedback in one focused revision round.",
      deliverable: "Revised site ready for polish"
    },
    {
      day: "Day 5",
      title: "Polish & Testing",
      description: "Final adjustments, cross-browser testing, mobile optimization, performance tuning, accessibility checks.",
      deliverable: "Production-ready website"
    },
    {
      day: "Day 6",
      title: "Launch",
      description: "Your site goes live with SSL, analytics, forms connected, and baseline SEO configured.",
      deliverable: "Live, lead-ready website"
    }
  ];

  const qualityProof = [
    {
      myth: "Fast means template-based",
      reality: "Every site is custom-coded in Next.js. Zero templates. We're fast because our process is lean, not because we cut corners.",
      proof: "View our portfolio",
      proofLink: "/#work"
    },
    {
      myth: "One week isn't enough time",
      reality: "Most agencies take 2-6 months because of scope creep, committee approvals, and endless revisions. We eliminate waste.",
      proof: "Fixed scope (one page), two revision rounds, owner-operator clients who can make decisions fast."
    },
    {
      myth: "Cheap and fast = low quality",
      reality: "$750 isn't cheap for a one-page site—it's fair. We optimize for efficiency, not margin. You get professional work at transparent pricing.",
      proof: "Lighthouse scores 90+, mobile-optimized, SEO-configured, form submissions working day one."
    }
  ];

  return (
    <>
      <Navbar variant="static" alwaysSolid />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
      />

      <div className="min-h-screen bg-[#f5f0e9]">
        {/* Hero Section */}
        <div className="bg-[#073742] text-cream py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-riposte text-sm text-cream/70 hover:text-accent transition-colors"
              >
                ← Back to Home
              </Link>
            </div>

            <h1 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl uppercase mb-6">
              Professional Custom Websites<br />
              Launched in One Week
            </h1>

            <p className="font-riposte text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl leading-relaxed">
              Hand-coded Next.js sites starting at $750. No templates, no corners cut, no surprises.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-cream/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-jetbrains text-sm text-accent uppercase">Custom Code</span>
              </div>
              <div className="bg-cream/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-jetbrains text-sm text-accent uppercase">6-Day Process</span>
              </div>
              <div className="bg-cream/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-jetbrains text-sm text-accent uppercase">Fixed Price</span>
              </div>
              <div className="bg-cream/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-jetbrains text-sm text-accent uppercase">Lead-Ready</span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block bg-accent text-[#073742] font-riposte font-bold px-8 py-4 rounded-full uppercase tracking-wide hover:bg-accent/90 transition-colors duration-300"
            >
              Start Your Project
            </a>
          </div>
        </div>

        {/* Fast ≠ Sloppy Section */}
        <div className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="font-axel text-3xl md:text-4xl font-bold text-[#073742] uppercase mb-4">
              Fast Doesn't Mean Sloppy
            </h2>
            <p className="font-riposte text-lg text-[#073742]/70 mb-12 max-w-2xl">
              Most people think "one week" means corners were cut. Here's the truth:
            </p>

            <div className="space-y-8">
              {qualityProof.map((item, index) => (
                <div key={index} className="bg-white border-2 border-[#073742]/10 rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-jetbrains text-sm uppercase text-red-600 mb-2">❌ The Myth</h3>
                      <p className="font-riposte text-[#073742] font-bold">{item.myth}</p>
                    </div>
                    <div>
                      <h3 className="font-jetbrains text-sm uppercase text-green-600 mb-2">✓ The Reality</h3>
                      <p className="font-riposte text-[#073742] mb-3">{item.reality}</p>
                      <p className="font-riposte text-sm text-[#073742]/60 italic">
                        {'proofLink' in item ? (
                          <Link href={item.proofLink} className="text-accent underline hover:no-underline">
                            {item.proof}
                          </Link>
                        ) : (
                          item.proof
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-[#073742] text-cream py-20 md:py-32">
          <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="font-axel text-3xl md:text-4xl font-bold uppercase mb-4">
              How We Launch in One Week
            </h2>
            <p className="font-riposte text-xl text-cream/80 mb-16 max-w-2xl">
              Our proven 6-day process. No wasted time, no scope creep, no endless revisions.
            </p>

            <div className="space-y-6">
              {timeline.map((step, index) => (
                <div
                  key={index}
                  className="bg-cream/5 backdrop-blur-sm border-l-4 border-accent p-6 md:p-8 rounded-r-2xl hover:bg-cream/10 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-32 flex-shrink-0">
                      <span className="font-jetbrains text-2xl text-accent font-bold">{step.day}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-axel text-2xl font-bold uppercase mb-3">{step.title}</h3>
                      <p className="font-riposte text-lg text-cream/80 mb-4 leading-relaxed">{step.description}</p>
                      <div className="inline-block bg-accent/20 px-4 py-2 rounded-full">
                        <span className="font-jetbrains text-sm text-accent">→ {step.deliverable}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-accent/10 border-2 border-accent/30 rounded-2xl p-8">
              <p className="font-riposte text-lg text-cream/90 leading-relaxed">
                <strong className="text-accent">Why this works:</strong> We eliminate the typical delays—scope creep, committee approvals, endless revision cycles.
                You work directly with the developer. Fixed scope means focused execution. Two revision rounds keep us moving forward without perfection paralysis.
              </p>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="font-axel text-3xl md:text-4xl font-bold text-[#073742] uppercase mb-4">
              What You Get on Day 6
            </h2>
            <p className="font-riposte text-lg text-[#073742]/70 mb-12 max-w-2xl">
              Your site goes live fully functional and ready to capture leads immediately.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Custom Next.js Code", detail: "Hand-written, optimized, no templates" },
                { title: "Mobile-Optimized Design", detail: "Looks perfect on every screen size" },
                { title: "Contact Form", detail: "Connected and tested, submissions working" },
                { title: "Google Analytics", detail: "Tracking configured, data flowing" },
                { title: "Baseline SEO", detail: "Meta tags, sitemap, robots.txt, structured data" },
                { title: "SSL Certificate", detail: "Secure HTTPS, trust indicators" },
                { title: "Performance Tuned", detail: "Lighthouse scores 90+, fast loading" },
                { title: "Two Revisions", detail: "Focused feedback rounds included" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-white border-2 border-[#073742]/10 rounded-xl p-6">
                  <div className="text-2xl">✓</div>
                  <div>
                    <h3 className="font-axel text-lg font-bold text-[#073742] uppercase mb-1">{item.title}</h3>
                    <p className="font-riposte text-[#073742]/70">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="font-riposte text-2xl text-[#073742] font-bold mb-2">Starting at $750 USD</p>
              <p className="font-riposte text-[#073742]/70">
                Add Care & Hosting for $18/month (SSL, updates, backups, monitoring, 2 content edits)
              </p>
            </div>
          </div>
        </div>

        {/* Case Study Teaser */}
        <div className="bg-white py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="font-axel text-3xl md:text-4xl font-bold text-[#073742] uppercase mb-12">
              Recent Launch
            </h2>

            <div className="bg-[#f5f0e9] border-2 border-[#073742]/10 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <p className="font-jetbrains text-sm uppercase text-[#073742]/60 mb-2">Industry</p>
                  <p className="font-axel text-xl text-[#073742] uppercase">Landscaping</p>
                </div>
                <div>
                  <p className="font-jetbrains text-sm uppercase text-[#073742]/60 mb-2">Timeline</p>
                  <p className="font-axel text-xl text-accent uppercase">6 Days</p>
                </div>
                <div>
                  <p className="font-jetbrains text-sm uppercase text-[#073742]/60 mb-2">First Lead</p>
                  <p className="font-axel text-xl text-accent uppercase">Day 7</p>
                </div>
              </div>

              <blockquote className="font-riposte text-lg text-[#073742] italic mb-6 leading-relaxed">
                "We had a quote booked within 24 hours of going live. The site looks professional, loads fast, and I can actually update my own content. Worth every penny."
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#073742] rounded-full flex items-center justify-center text-cream font-axel">
                  RC
                </div>
                <div>
                  <p className="font-riposte font-bold text-[#073742]">Ryan C.</p>
                  <p className="font-riposte text-sm text-[#073742]/60">Owner, Calgary Landscaping Co.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/#work"
                className="inline-block font-jetbrains text-sm text-accent uppercase hover:underline"
              >
                View More Projects →
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div id="contact" className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-axel text-3xl md:text-4xl font-bold text-[#073742] uppercase mb-4">
                Ready to Launch?
              </h2>
              <p className="font-riposte text-lg text-[#073742]/70 max-w-2xl mx-auto">
                Tell us about your project. If we're a good fit, we can have your site live in one week.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
