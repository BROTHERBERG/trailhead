import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Can You Build a Custom Website in One Week? | Trailhead",
  description: "Yes. A one-page custom website can be built and launched in one week (6 business days) if the scope is fixed and content is ready on day 1.",
  alternates: {
    canonical: 'https://trailheadmade.com/answers/can-you-build-custom-website-in-one-week',
  },
};

export default function CanYouBuildInOneWeek() {
  const qaData = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": "Can you build a custom website in one week?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, a one-page custom website can be built and launched in one week (6 business days). This requires fixed scope (no feature creep), ready content on day 1, and a streamlined process that eliminates typical delays like committee approvals and endless revision cycles."
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
            Can You Build a Custom Website in One Week?
          </h1>

          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
            <p className="font-riposte text-lg text-[#073742] leading-relaxed">
              <strong>Answer:</strong> Yes. A one-page custom website can be built and launched in one week (6 business days) if the scope is fixed, content is ready on day 1, and the process eliminates typical delays.
            </p>
          </div>

          <h2 className="font-axel text-2xl font-bold text-[#073742] uppercase mb-4 mt-12">Why It's True</h2>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="font-riposte text-[#073742] leading-relaxed">
                <strong>Fixed scope prevents delays:</strong> One-page websites have predictable requirements (hero, services, contact form). No scope creep = no timeline bloat.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="font-riposte text-[#073742] leading-relaxed">
                <strong>Most delay is process, not work:</strong> Agencies spend weeks on committee approvals, endless revisions, and project management overhead. The actual coding takes 2-3 days.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="font-riposte text-[#073742] leading-relaxed">
                <strong>Ready content on day 1 is critical:</strong> If text, images, and branding are provided upfront, development starts immediately. Waiting for content is the #1 killer of fast timelines.
              </p>
            </li>
          </ul>

          <h2 className="font-axel text-2xl font-bold text-[#073742] uppercase mb-4 mt-12">What to Do Next</h2>

          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="font-jetbrains text-accent font-bold">1.</span>
              <p className="font-riposte text-[#073742] leading-relaxed">
                Prepare your content: Write your page text, gather images, and confirm your branding (logo, colors) before engaging a developer.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-jetbrains text-accent font-bold">2.</span>
              <p className="font-riposte text-[#073742] leading-relaxed">
                Limit revisions: Commit to one or two revision rounds. Endless tweaking destroys timelines.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-jetbrains text-accent font-bold">3.</span>
              <p className="font-riposte text-[#073742] leading-relaxed">
                Work with owner-operators: Companies that require committee approvals can't move fast. Solo decision-makers can.
              </p>
            </li>
          </ol>

          <div className="mt-12 p-8 bg-[#073742] text-cream rounded-2xl">
            <h3 className="font-axel text-2xl font-bold uppercase mb-4">How We Do It</h3>
            <p className="font-riposte text-cream/90 mb-6 leading-relaxed">
              We launch custom Next.js websites in 6 business days using a fixed-scope process:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="font-riposte text-cream/90">→ Day 1: Discovery & content delivery</li>
              <li className="font-riposte text-cream/90">→ Day 2-3: Design & development</li>
              <li className="font-riposte text-cream/90">→ Day 4: Review & revision</li>
              <li className="font-riposte text-cream/90">→ Day 5: Polish & testing</li>
              <li className="font-riposte text-cream/90">→ Day 6: Launch</li>
            </ul>
            <Link
              href="/fast-custom-website"
              className="inline-block bg-accent text-[#073742] font-riposte font-bold px-8 py-3 rounded-full uppercase tracking-wide hover:bg-accent/90 transition-colors"
            >
              See The Full Process
            </Link>
          </div>

          <div className="mt-12 text-sm text-[#073742]/60 border-t border-[#073742]/10 pt-6">
            <p className="font-riposte">
              <strong>Sources:</strong> Based on 100+ one-week website launches by Trailhead (2023-2025). Timeline assumes fixed scope (one-page site), content ready on day 1, and owner-operator decision-making.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
