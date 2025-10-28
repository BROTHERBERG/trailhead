import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Why Do Websites Take So Long to Build? | Trailhead",
  description: "Most websites take 2-6 months because of scope creep, committee approvals, and endless revisions - not because the work is complex. Here's what actually delays projects.",
  alternates: {
    canonical: 'https://trailheadmade.com/answers/why-do-websites-take-so-long',
  },
};

export default function WhyWebsitesTakeSoLong() {
  const qaData = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": "Why do websites take so long to build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most websites take 2-6 months because of process waste, not technical complexity. The main delays are scope creep (clients adding features mid-project), committee approvals (slow decision-making), endless revision cycles, and agency overhead. The actual design and development work typically takes 2-3 weeks."
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
            Why Do Websites Take So Long?
          </h1>

          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
            <p className="font-riposte text-lg text-[#073742] leading-relaxed">
              <strong>Answer:</strong> Websites take months because of scope creep, committee approvals, and endless revisions - not because the work is complex. Actual development takes 2-3 weeks.
            </p>
          </div>

          <h2 className="font-axel text-2xl font-bold text-[#073742] uppercase mb-4 mt-12">The Real Delays</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border-2 border-[#073742]/10 rounded-2xl p-6">
              <h3 className="font-axel text-xl font-bold text-[#073742] uppercase mb-3">1. Scope Creep</h3>
              <p className="font-riposte text-[#073742]/70 mb-3">
                Client: "Can we add a blog?"<br />
                Week 3: "Actually, let's add e-commerce too."<br />
                Week 5: "What about a membership area?"
              </p>
              <p className="font-riposte text-[#073742]">
                <strong>Result:</strong> A simple 5-page site becomes a 20-page platform. Timeline explodes from 4 weeks to 4 months.
              </p>
            </div>

            <div className="bg-white border-2 border-[#073742]/10 rounded-2xl p-6">
              <h3 className="font-axel text-xl font-bold text-[#073742] uppercase mb-3">2. Committee Approvals</h3>
              <p className="font-riposte text-[#073742]/70 mb-3">
                Every design decision needs approval from:<br />
                → CEO (traveling, responds in 2 weeks)<br />
                → Marketing director (disagrees with CEO)<br />
                → Sales team (wants different colors)<br />
                → IT (security concerns)
              </p>
              <p className="font-riposte text-[#073742]">
                <strong>Result:</strong> Simple decisions take weeks. Projects stall waiting for consensus.
              </p>
            </div>

            <div className="bg-white border-2 border-[#073742]/10 rounded-2xl p-6">
              <h3 className="font-axel text-xl font-bold text-[#073742] uppercase mb-3">3. Endless Revisions</h3>
              <p className="font-riposte text-[#073742]/70 mb-3">
                Round 1: "Make it more modern"<br />
                Round 2: "Actually, can we go back to the first version?"<br />
                Round 3: "The button should be bigger... no, smaller"<br />
                Round 8: Still revising...
              </p>
              <p className="font-riposte text-[#073742]">
                <strong>Result:</strong> Unlimited revisions = projects never ship.
              </p>
            </div>

            <div className="bg-white border-2 border-[#073742]/10 rounded-2xl p-6">
              <h3 className="font-axel text-xl font-bold text-[#073742] uppercase mb-3">4. Agency Overhead</h3>
              <p className="font-riposte text-[#073742]/70 mb-3">
                → Weekly status meetings (2 hrs each)<br />
                → Project manager coordination (billable)<br />
                → Account manager check-ins (billable)<br />
                → Sales follow-up (billable)
              </p>
              <p className="font-riposte text-[#073742]">
                <strong>Result:</strong> Agencies pad timelines to bill more hours.
              </p>
            </div>

            <div className="bg-white border-2 border-[#073742]/10 rounded-2xl p-6">
              <h3 className="font-axel text-xl font-bold text-[#073742] uppercase mb-3">5. Waiting for Content</h3>
              <p className="font-riposte text-[#073742]/70 mb-3">
                Developer ready to code...<br />
                Still waiting for client to write text...<br />
                3 weeks later: "Sorry, been busy"
              </p>
              <p className="font-riposte text-[#073742]">
                <strong>Result:</strong> Content delays kill 50% of project timelines.
              </p>
            </div>
          </div>

          <h2 className="font-axel text-2xl font-bold text-[#073742] uppercase mb-4 mt-12">How Long Should It Actually Take?</h2>

          <div className="bg-white border-2 border-[#073742]/10 rounded-2xl p-6 mb-8">
            <table className="w-full font-riposte">
              <tbody>
                <tr className="border-b border-[#073742]/10">
                  <td className="py-3 text-[#073742]/70">Design (layouts, colors, components)</td>
                  <td className="py-3 text-right font-bold text-[#073742]">3-5 days</td>
                </tr>
                <tr className="border-b border-[#073742]/10">
                  <td className="py-3 text-[#073742]/70">Development (code, integrations, forms)</td>
                  <td className="py-3 text-right font-bold text-[#073742]">4-7 days</td>
                </tr>
                <tr className="border-b border-[#073742]/10">
                  <td className="py-3 text-[#073742]/70">Revisions (1-2 rounds)</td>
                  <td className="py-3 text-right font-bold text-[#073742]">2-3 days</td>
                </tr>
                <tr className="border-b border-[#073742]/10">
                  <td className="py-3 text-[#073742]/70">QA & launch</td>
                  <td className="py-3 text-right font-bold text-[#073742]">1-2 days</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-[#073742]">Total actual work time</td>
                  <td className="py-3 text-right font-bold text-accent">10-17 days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="font-riposte text-[#073742] text-lg mb-8">
            The work takes 2-3 weeks. The *process* adds 2-6 months.
          </p>

          <h2 className="font-axel text-2xl font-bold text-[#073742] uppercase mb-4 mt-12">How to Ship Fast</h2>

          <ol className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="font-jetbrains text-accent font-bold">1.</span>
              <div>
                <p className="font-riposte text-[#073742] font-bold">Fix the scope upfront</p>
                <p className="font-riposte text-[#073742]/70">Decide what you're building before you start. No additions mid-project.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-jetbrains text-accent font-bold">2.</span>
              <div>
                <p className="font-riposte text-[#073742] font-bold">One decision-maker</p>
                <p className="font-riposte text-[#073742]/70">Owner-operators can approve designs same-day. Committees take weeks.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-jetbrains text-accent font-bold">3.</span>
              <div>
                <p className="font-riposte text-[#073742] font-bold">Limit revisions</p>
                <p className="font-riposte text-[#073742]/70">Two rounds max. Unlimited = never ships.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-jetbrains text-accent font-bold">4.</span>
              <div>
                <p className="font-riposte text-[#073742] font-bold">Content ready on Day 1</p>
                <p className="font-riposte text-[#073742]/70">No waiting weeks for text and images.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-jetbrains text-accent font-bold">5.</span>
              <div>
                <p className="font-riposte text-[#073742] font-bold">Skip the overhead</p>
                <p className="font-riposte text-[#073742]/70">Work directly with the developer, not through layers of managers.</p>
              </div>
            </li>
          </ol>

          <div className="mt-12 p-8 bg-[#073742] text-cream rounded-2xl">
            <h3 className="font-axel text-2xl font-bold uppercase mb-4">Our One-Week Process</h3>
            <p className="font-riposte text-cream/90 mb-6 leading-relaxed">
              We eliminate all the waste and ship in 6 business days:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="font-riposte text-cream/90">→ Fixed scope (one-page site, no creep)</li>
              <li className="font-riposte text-cream/90">→ Owner-operator clients (fast decisions)</li>
              <li className="font-riposte text-cream/90">→ Two revision rounds (no endless tweaking)</li>
              <li className="font-riposte text-cream/90">→ Content ready Day 1 (no waiting)</li>
              <li className="font-riposte text-cream/90">→ Direct access to developer (no overhead)</li>
            </ul>
            <Link
              href="/fast-custom-website"
              className="inline-block bg-accent text-[#073742] font-riposte font-bold px-8 py-3 rounded-full uppercase tracking-wide hover:bg-accent/90 transition-colors"
            >
              See The Full Timeline
            </Link>
          </div>

          <div className="mt-12 text-sm text-[#073742]/60 border-t border-[#073742]/10 pt-6">
            <p className="font-riposte">
              <strong>Sources:</strong> Timeline analysis based on 100+ website projects (2023-2025). Scope creep, committee delays, and revision cycles account for 70-85% of timeline bloat per Project Management Institute research.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
