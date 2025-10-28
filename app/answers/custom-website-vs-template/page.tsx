import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Custom Website vs Template: Which Should You Choose? | Trailhead",
  description: "Custom websites offer full control, faster speeds, and unique branding. Templates are faster to launch but limit customization. Here's how to decide.",
  alternates: {
    canonical: 'https://trailheadmade.com/answers/custom-website-vs-template',
  },
};

export default function CustomVsTemplate() {
  const qaData = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": "Custom website vs template: which should you choose?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Choose custom if you want full design control, better performance, unique branding, and own your code. Choose templates if you need a site live in hours, have zero budget, or are testing a business idea. Custom costs more upfront but performs better long-term."
      }
    }
  };

  return (
    <>
      <Navbar variant="static" alwaysSolid />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(qaData) }}
      />

      <div className="min-h-screen bg-[#f5f0e9]">
        <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-32">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-riposte text-sm text-[#073742]/60 hover:text-accent transition-colors"
            >
              ← Back to Home
            </Link>
          </div>

          <h1 className="font-axel font-bold text-4xl md:text-5xl text-[#073742] uppercase mb-6">
            Custom Website vs Template
          </h1>

          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
            <p className="font-riposte text-lg text-[#073742] leading-relaxed">
              <strong>Answer:</strong> Choose custom for control, performance, and unique branding. Choose templates for speed and low cost. Custom wins long-term for serious businesses.
            </p>
          </div>

          <h2 className="font-axel text-2xl font-bold text-[#073742] uppercase mb-4 mt-12">Key Differences</h2>

          <div className="bg-white border-2 border-[#073742]/10 rounded-2xl overflow-hidden mb-8">
            <table className="w-full">
              <thead className="bg-[#073742] text-cream">
                <tr>
                  <th className="font-jetbrains text-sm uppercase p-4 text-left">Factor</th>
                  <th className="font-jetbrains text-sm uppercase p-4 text-left">Template</th>
                  <th className="font-jetbrains text-sm uppercase p-4 text-left">Custom</th>
                </tr>
              </thead>
              <tbody className="font-riposte">
                <tr className="border-b border-[#073742]/10">
                  <td className="p-4 font-bold text-[#073742]">Speed</td>
                  <td className="p-4 text-[#073742]/70">3-8 seconds load time</td>
                  <td className="p-4 text-accent font-bold">Under 1 second</td>
                </tr>
                <tr className="border-b border-[#073742]/10">
                  <td className="p-4 font-bold text-[#073742]">Uniqueness</td>
                  <td className="p-4 text-[#073742]/70">Shared with 1000s of sites</td>
                  <td className="p-4 text-accent font-bold">100% unique to you</td>
                </tr>
                <tr className="border-b border-[#073742]/10">
                  <td className="p-4 font-bold text-[#073742]">SEO Control</td>
                  <td className="p-4 text-[#073742]/70">Limited</td>
                  <td className="p-4 text-accent font-bold">Full control</td>
                </tr>
                <tr className="border-b border-[#073742]/10">
                  <td className="p-4 font-bold text-[#073742]">Launch Time</td>
                  <td className="p-4 text-accent font-bold">Same day (if DIY)</td>
                  <td className="p-4 text-[#073742]/70">One week (with us)</td>
                </tr>
                <tr className="border-b border-[#073742]/10">
                  <td className="p-4 font-bold text-[#073742]">Upfront Cost</td>
                  <td className="p-4 text-accent font-bold">$0-200</td>
                  <td className="p-4 text-[#073742]/70">$750-10,000</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#073742]">Ownership</td>
                  <td className="p-4 text-[#073742]/70">Platform owns your site</td>
                  <td className="p-4 text-accent font-bold">You own everything</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-axel text-2xl font-bold text-[#073742] uppercase mb-4 mt-12">When Templates Make Sense</h2>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <p className="font-riposte text-[#073742]">Testing a business idea (not committed yet)</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <p className="font-riposte text-[#073742]">Need a site live in the next 24 hours</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <p className="font-riposte text-[#073742]">Zero budget (literally can't afford $750)</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <p className="font-riposte text-[#073742]">Don't care about SEO or page speed</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <p className="font-riposte text-[#073742]">Planning to rebuild in 6 months anyway</p>
            </li>
          </ul>

          <h2 className="font-axel text-2xl font-bold text-[#073742] uppercase mb-4 mt-12">When Custom Wins</h2>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <p className="font-riposte text-[#073742]">You're serious about your business (not just testing)</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <p className="font-riposte text-[#073742]">You need to rank in Google (SEO matters)</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <p className="font-riposte text-[#073742]">You want your brand to stand out (not look like everyone else)</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <p className="font-riposte text-[#073742]">Fast load times matter (Google cares, customers care)</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <p className="font-riposte text-[#073742]">You want to own your code (not rent a platform)</p>
            </li>
          </ul>

          <div className="mt-12 p-8 bg-[#073742] text-cream rounded-2xl">
            <h3 className="font-axel text-2xl font-bold uppercase mb-4">Our Custom Approach</h3>
            <p className="font-riposte text-cream/90 mb-6 leading-relaxed">
              We build custom Next.js sites with the speed of templates but none of the limitations:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="font-riposte text-cream/90">→ Launched in one week (faster than most agencies)</li>
              <li className="font-riposte text-cream/90">→ $750 one-time (competitive with template annual costs)</li>
              <li className="font-riposte text-cream/90">→ Hand-coded (no templates, full control)</li>
              <li className="font-riposte text-cream/90">→ Lighthouse 90+ (faster than any builder)</li>
            </ul>
            <Link
              href="/fast-custom-website"
              className="inline-block bg-accent text-[#073742] font-riposte font-bold px-8 py-3 rounded-full uppercase tracking-wide hover:bg-accent/90 transition-colors"
            >
              See How We Do It
            </Link>
          </div>

          <div className="mt-12 text-sm text-[#073742]/60 border-t border-[#073742]/10 pt-6">
            <p className="font-riposte">
              <strong>Sources:</strong> Performance comparison based on PageSpeed Insights testing of 100+ template sites (Wix, Squarespace, Shopify) vs custom Next.js builds (2024).
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
