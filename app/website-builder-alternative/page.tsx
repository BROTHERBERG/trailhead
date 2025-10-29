import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Custom Website Alternative to Wix & Squarespace | Trailhead Calgary",
  description: "Outgrown your website builder? Get a faster, custom-coded site for less than you're paying now. No templates, better SEO, launched in one week.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function WebsiteBuilderAlternative() {
  const comparison = [
    {
      feature: "Page Load Speed",
      builder: "3-8 seconds (lots of bloat)",
      custom: "Under 1 second (optimized code)"
    },
    {
      feature: "Monthly Cost",
      builder: "$30-40/mo (forever)",
      custom: "$18/mo (hosting + updates)"
    },
    {
      feature: "Design Uniqueness",
      builder: "Template (looks like competitors)",
      custom: "100% custom (your brand)"
    },
    {
      feature: "SEO Control",
      builder: "Limited (locked to template)",
      custom: "Full control (every meta tag)"
    },
    {
      feature: "Code Ownership",
      builder: "You own nothing",
      custom: "You own everything"
    },
    {
      feature: "Mobile Optimization",
      builder: "Auto (often breaks)",
      custom: "Hand-coded (tested on real devices)"
    },
    {
      feature: "Time to Launch",
      builder: "Hours (if you know what you're doing)",
      custom: "One week (we do the work)"
    },
    {
      feature: "Making Updates",
      builder: "Fight the editor yourself",
      custom: "We handle it (2 free/month)"
    }
  ];

  const migrations = [
    {
      from: "Squarespace Business",
      was: "$33/mo, slow load times, template design",
      now: "$18/mo, Lighthouse 94, custom brand",
      business: "Yoga Instructor, Canmore"
    },
    {
      from: "Wix Premium",
      was: "$32/mo, couldn't rank in Google, looked DIY",
      now: "$18/mo, page 1 rankings, professional look",
      business: "Roofing Contractor, Airdrie"
    },
    {
      from: "Shopify (didn't need e-commerce)",
      was: "$39/mo, paying for features they didn't use",
      now: "$18/mo, just hosting + contact form",
      business: "Consulting Firm, Calgary"
    }
  ];

  return (
    <>
      <Navbar variant="static" alwaysSolid />

      <div className="min-h-screen bg-[#f5f0e9]">
        {/* Hero */}
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
              Outgrown Your<br />
              Website Builder?
            </h1>

            <p className="font-riposte text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl leading-relaxed">
              Get a faster, custom-coded site for less than you're paying Wix or Squarespace right now.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-cream/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-jetbrains text-sm text-accent uppercase">No Templates</span>
              </div>
              <div className="bg-cream/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-jetbrains text-sm text-accent uppercase">Better SEO</span>
              </div>
              <div className="bg-cream/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-jetbrains text-sm text-accent uppercase">Faster Loading</span>
              </div>
              <div className="bg-cream/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-jetbrains text-sm text-accent uppercase">Lower Cost</span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block bg-accent text-[#073742] font-riposte font-bold px-8 py-4 rounded-full uppercase tracking-wide hover:bg-accent/90 transition-colors duration-300"
            >
              Make the Switch
            </a>
          </div>
        </div>

        {/* The Problem */}
        <div className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="font-axel text-3xl md:text-4xl font-bold text-[#073742] uppercase mb-6">
              You Started Smart, But Now You're Stuck
            </h2>

            <p className="font-riposte text-lg text-[#073742]/70 mb-8 leading-relaxed">
              Wix and Squarespace are great for getting started. Drag, drop, site's live in an hour. No code, no developer, no hassle.
            </p>

            <p className="font-riposte text-lg text-[#073742]/70 mb-8 leading-relaxed">
              But now you're hitting walls:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Your site loads slower than competitors",
                "You're buried in Google search results",
                "Every design change breaks something else",
                "You're paying $30+/mo for features you don't use",
                "Your site looks like every other template",
                "You can't customize what you actually need",
                "You're embarrassed to send people there",
                "Editing content is a 2-hour ordeal"
              ].map((problem, index) => (
                <div key={index} className="flex items-start gap-3 bg-white border-2 border-[#073742]/10 rounded-xl p-4">
                  <div className="text-red-600 text-xl">✗</div>
                  <p className="font-riposte text-[#073742]">{problem}</p>
                </div>
              ))}
            </div>

            <p className="font-riposte text-xl text-[#073742] font-bold">
              Sound familiar? It's time to upgrade.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="font-axel text-3xl md:text-4xl font-bold text-[#073742] uppercase mb-12 text-center">
              Builder vs. Custom: The Truth
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#073742]">
                    <th className="font-jetbrains text-sm uppercase text-left pb-4 pr-4">Feature</th>
                    <th className="font-jetbrains text-sm uppercase text-left pb-4 px-4">Wix/Squarespace</th>
                    <th className="font-jetbrains text-sm uppercase text-left pb-4 pl-4 text-accent">Custom (Trailhead)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-[#073742]/10">
                      <td className="font-riposte font-bold text-[#073742] py-4 pr-4">{row.feature}</td>
                      <td className="font-riposte text-[#073742]/70 py-4 px-4">{row.builder}</td>
                      <td className="font-riposte text-[#073742] font-bold py-4 pl-4 text-accent">{row.custom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 text-center">
              <p className="font-riposte text-2xl text-[#073742] font-bold mb-2">$750 build + $18/mo</p>
              <p className="font-riposte text-[#073742]/70">
                Less than 2 months of your current Squarespace subscription
              </p>
            </div>
          </div>
        </div>

        {/* Migration Process */}
        <div className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="font-axel text-3xl md:text-4xl font-bold text-[#073742] uppercase mb-6">
              The Migration Is Painless
            </h2>

            <p className="font-riposte text-lg text-[#073742]/70 mb-12 leading-relaxed">
              We've migrated 50+ sites from builders. Here's exactly what happens:
            </p>

            <div className="space-y-6">
              {[
                {
                  step: "Day 1",
                  title: "Export Your Content",
                  detail: "We pull your existing content, images, and branding. You keep your domain."
                },
                {
                  step: "Day 2-5",
                  title: "Build Your Custom Site",
                  detail: "We code your new site from scratch. Same content, better design, faster performance."
                },
                {
                  step: "Day 6",
                  title: "Set Up Redirects",
                  detail: "301 redirects from old URLs to new ones. Your SEO transfers automatically."
                },
                {
                  step: "Day 7",
                  title: "Go Live",
                  detail: "We connect your domain to the new site. No downtime. Your old builder stays live until cutover."
                },
                {
                  step: "Day 8",
                  title: "Cancel Your Builder",
                  detail: "You're live on custom. Cancel Wix/Squarespace. Save $15/mo immediately."
                }
              ].map((phase, index) => (
                <div key={index} className="bg-white border-l-4 border-accent p-6 md:p-8 rounded-r-2xl">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-24 flex-shrink-0">
                      <span className="font-jetbrains text-xl text-accent font-bold">{phase.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-axel text-xl font-bold text-[#073742] uppercase mb-2">{phase.title}</h3>
                      <p className="font-riposte text-[#073742]/70 leading-relaxed">{phase.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real Migrations */}
        <div className="bg-[#073742] text-cream py-20 md:py-32">
          <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="font-axel text-3xl md:text-4xl font-bold uppercase mb-12">
              Real Migrations
            </h2>

            <div className="space-y-8">
              {migrations.map((migration, index) => (
                <div key={index} className="bg-cream/5 border border-cream/10 rounded-2xl p-8">
                  <p className="font-jetbrains text-sm uppercase text-accent mb-4">Migrated From: {migration.from}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-riposte text-sm uppercase text-cream/60 mb-2">Before</h3>
                      <p className="font-riposte text-cream">{migration.was}</p>
                    </div>
                    <div>
                      <h3 className="font-riposte text-sm uppercase text-accent mb-2">After</h3>
                      <p className="font-riposte text-cream font-bold">{migration.now}</p>
                    </div>
                  </div>
                  <p className="font-riposte text-sm text-cream/40 mt-4">{migration.business}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="font-axel text-3xl md:text-4xl font-bold text-[#073742] uppercase mb-12">
              Migration Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Will I lose my Google rankings?",
                  a: "No. We set up 301 redirects from your old URLs to new ones. Google follows these and transfers your rankings. Most clients see *improved* rankings within 2-3 weeks due to faster page speed."
                },
                {
                  q: "Can I keep my domain name?",
                  a: "Yes. You own your domain. We just point it to the new site. No transfer required."
                },
                {
                  q: "What about my blog posts?",
                  a: "We can migrate simple blogs (text + images). Complex blogs with comments, categories, and 100+ posts are a separate project."
                },
                {
                  q: "Do I need to rewrite all my content?",
                  a: "No. We port your existing content as-is. Light editing usually helps conversions, but it's not required."
                },
                {
                  q: "What if I'm mid-contract with my builder?",
                  a: "Most builder subscriptions are month-to-month. You can cancel anytime. If you're on an annual plan, you'll overlap for a month or two. Still worth it."
                },
                {
                  q: "Can I cancel my builder subscription right away?",
                  a: "Wait until after we launch. We need your old site live while we build the new one. Once we go live, cancel immediately."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white border-2 border-[#073742]/10 rounded-2xl p-6 md:p-8">
                  <h3 className="font-axel text-xl font-bold text-[#073742] mb-3">{faq.q}</h3>
                  <p className="font-riposte text-[#073742]/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div id="contact" className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-axel text-3xl md:text-4xl font-bold text-[#073742] uppercase mb-4">
                Ready to Upgrade?
              </h2>
              <p className="font-riposte text-lg text-[#073742]/70 max-w-2xl mx-auto">
                Tell us about your current builder site. We'll show you exactly what a custom upgrade would look like.
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
