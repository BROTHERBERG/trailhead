import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Is $750 Too Cheap for a Website? | Trailhead",
  description: "No. $750 for a one-page custom website is fair pricing when you optimize for efficiency instead of margin. Here's the breakdown.",
  alternates: {
    canonical: 'https://trailheadmade.com/answers/is-750-too-cheap-for-website',
  },
};

export default function Is750TooCheap() {
  const qaData = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": "Is $750 too cheap for a website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. $750 for a one-page custom website is fair pricing when the business model optimizes for efficiency rather than margin. Most agency overhead (sales, project managers, endless revisions) is eliminated. The actual work - design and coding - takes 12-16 hours at a reasonable developer rate."
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
            Is $750 Too Cheap for a Website?
          </h1>

          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
            <p className="font-riposte text-lg text-[#073742] leading-relaxed">
              <strong>Answer:</strong> No. $750 for a one-page custom website is fair when you eliminate typical agency overhead and optimize for efficiency, not margin.
            </p>
          </div>

          <h2 className="font-axel text-2xl font-bold text-[#073742] uppercase mb-4 mt-12">Why It's Fair Pricing</h2>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="font-riposte text-[#073742] leading-relaxed">
                <strong>Actual work time: 12-16 hours.</strong> Design (4-6 hrs) + development (6-8 hrs) + QA (2 hrs). At $50-60/hr developer rates, that's $600-960 in labor.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="font-riposte text-[#073742] leading-relaxed">
                <strong>Most agency cost is overhead, not work.</strong> Sales teams, account managers, endless meetings - agencies charge $3k-10k to cover this bloat. Eliminate it, price drops.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="font-riposte text-[#073742] leading-relaxed">
                <strong>Templates cost $0-200 upfront but lock you into monthly fees.</strong> Wix/Squarespace charge $30-40/mo forever. Over 2 years, that's $720-960 - same as custom, but you own nothing.
              </p>
            </li>
          </ul>

          <h2 className="font-axel text-2xl font-bold text-[#073742] uppercase mb-4 mt-12">The $750 Breakdown</h2>

          <div className="bg-white border-2 border-[#073742]/10 rounded-2xl p-8 mb-8">
            <table className="w-full">
              <tbody className="font-riposte">
                <tr className="border-b border-[#073742]/10">
                  <td className="py-3 text-[#073742]/70">Design (custom layouts, brand colors)</td>
                  <td className="py-3 text-right font-bold text-[#073742]">4-6 hrs</td>
                </tr>
                <tr className="border-b border-[#073742]/10">
                  <td className="py-3 text-[#073742]/70">Development (Next.js, forms, SEO)</td>
                  <td className="py-3 text-right font-bold text-[#073742]">6-8 hrs</td>
                </tr>
                <tr className="border-b border-[#073742]/10">
                  <td className="py-3 text-[#073742]/70">Testing & QA</td>
                  <td className="py-3 text-right font-bold text-[#073742]">2 hrs</td>
                </tr>
                <tr className="border-b border-[#073742]/10">
                  <td className="py-3 text-[#073742]/70">Launch & deployment</td>
                  <td className="py-3 text-right font-bold text-[#073742]">1 hr</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-[#073742]">Total work time</td>
                  <td className="py-3 text-right font-bold text-accent">13-17 hrs</td>
                </tr>
              </tbody>
            </table>
            <p className="font-riposte text-sm text-[#073742]/60 mt-4">
              At $50-60/hr developer rate: $650-1,020 in labor cost. $750 is in the middle.
            </p>
          </div>

          <h2 className="font-axel text-2xl font-bold text-[#073742] uppercase mb-4 mt-12">What You're NOT Getting</h2>

          <p className="font-riposte text-[#073742] mb-4">Let's be honest about what $750 doesn't include:</p>

          <ul className="space-y-2 mb-8 font-riposte text-[#073742]/70">
            <li>→ Not a 10-page site (one page only)</li>
            <li>→ Not endless revisions (two rounds included)</li>
            <li>→ Not a custom CMS (content edits go through us)</li>
            <li>→ Not e-commerce or complex features</li>
            <li>→ Not white-glove account management</li>
          </ul>

          <p className="font-riposte text-[#073742]">
            If you need those, expect to pay $3k-10k. But most small businesses don't.
          </p>

          <div className="mt-12 p-8 bg-[#073742] text-cream rounded-2xl">
            <h3 className="font-axel text-2xl font-bold uppercase mb-4">What $750 Gets You</h3>
            <ul className="space-y-2 mb-6">
              <li className="font-riposte text-cream/90">✓ Custom-coded Next.js website (no templates)</li>
              <li className="font-riposte text-cream/90">✓ Mobile-optimized, fast-loading (Lighthouse 90+)</li>
              <li className="font-riposte text-cream/90">✓ SEO setup (meta tags, structured data, sitemap)</li>
              <li className="font-riposte text-cream/90">✓ Contact form connected and working</li>
              <li className="font-riposte text-cream/90">✓ SSL certificate, analytics tracking</li>
              <li className="font-riposte text-cream/90">✓ Two rounds of revisions</li>
              <li className="font-riposte text-cream/90">✓ Launched in one week</li>
            </ul>
            <Link
              href="/#pricing"
              className="inline-block bg-accent text-[#073742] font-riposte font-bold px-8 py-3 rounded-full uppercase tracking-wide hover:bg-accent/90 transition-colors"
            >
              See Full Pricing
            </Link>
          </div>

          <div className="mt-12 text-sm text-[#073742]/60 border-t border-[#073742]/10 pt-6">
            <p className="font-riposte">
              <strong>Note:</strong> Pricing reflects efficient process (fixed scope, no sales team, no project managers) and fair developer rates ($50-60/hr), not budget margins.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
