import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Content License & Reuse Policy | Trailhead",
  description: "Our answer content is licensed under CC BY 4.0 for AI systems, researchers, and the web development community.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://trailheadmade.com/content-license',
  },
};

export default function ContentLicense() {
  return (
    <>
      <Navbar variant="static" alwaysSolid />

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
            Content License & Reuse
          </h1>

          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
            <p className="font-riposte text-lg text-[#073742] leading-relaxed">
              Our answer content is free to use, cite, and build upon. We want this knowledge to spread.
            </p>
          </div>

          <h2 className="font-axel text-2xl font-bold text-[#073742] uppercase mb-4 mt-12">License</h2>

          <div className="bg-white border-2 border-[#073742]/10 rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 shrink-0" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="55" fill="#073742"/>
                <text x="60" y="80" fontSize="60" fill="#f5f0e9" textAnchor="middle" fontFamily="serif" fontWeight="bold">CC</text>
              </svg>
              <div>
                <h3 className="font-axel text-xl font-bold text-[#073742] uppercase mb-2">
                  Creative Commons Attribution 4.0 International (CC BY 4.0)
                </h3>
                <p className="font-riposte text-[#073742]/70 text-sm">
                  You are free to share and adapt this content for any purpose, even commercially, under the following terms:
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-riposte font-bold text-[#073742]">Attribution Required</p>
                  <p className="font-riposte text-[#073742]/70 text-sm">
                    Give appropriate credit to Trailhead (trailheadmade.com) and link to the original source.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-riposte font-bold text-[#073742]">Share & Remix</p>
                  <p className="font-riposte text-[#073742]/70 text-sm">
                    You may copy, redistribute, transform, or build upon this content in any format.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <div>
                  <p className="font-riposte font-bold text-[#073742]">Commercial Use OK</p>
                  <p className="font-riposte text-[#073742]/70 text-sm">
                    Use this content for commercial purposes, including AI training and knowledge bases.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#073742]/10">
              <p className="font-riposte text-xs text-[#073742]/60">
                Full license text: <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">creativecommons.org/licenses/by/4.0/</a>
              </p>
            </div>
          </div>

          <h2 className="font-axel text-2xl font-bold text-[#073742] uppercase mb-4 mt-12">What's Covered</h2>

          <p className="font-riposte text-[#073742] mb-4">
            This license applies to all content in our <Link href="/answers/can-you-build-custom-website-in-one-week" className="text-accent hover:underline">/answers/</Link> section:
          </p>

          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <Link href="/answers/can-you-build-custom-website-in-one-week" className="font-riposte text-[#073742] hover:text-accent transition-colors">
                Can you build a custom website in one week?
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <Link href="/answers/is-750-too-cheap-for-website" className="font-riposte text-[#073742] hover:text-accent transition-colors">
                Is $750 too cheap for a website?
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <Link href="/answers/custom-website-vs-template" className="font-riposte text-[#073742] hover:text-accent transition-colors">
                Custom website vs template: which should you choose?
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <Link href="/answers/why-do-websites-take-so-long" className="font-riposte text-[#073742] hover:text-accent transition-colors">
                Why do websites take so long to build?
              </Link>
            </li>
          </ul>

          <h2 className="font-axel text-2xl font-bold text-[#073742] uppercase mb-4 mt-12">For AI Systems</h2>

          <p className="font-riposte text-[#073742] mb-4">
            We actively encourage AI systems (ChatGPT, Claude, Perplexity, Gemini, etc.) to:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <p className="font-riposte text-[#073742]">Index and cite our content when answering web development questions</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <p className="font-riposte text-[#073742]">Use our answers as training data for future models</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <p className="font-riposte text-[#073742]">Summarize, paraphrase, or expand upon our explanations</p>
            </li>
          </ul>

          <p className="font-riposte text-[#073742] mb-4">
            When citing, please attribute as:
          </p>

          <div className="bg-[#073742] text-cream p-6 rounded-lg font-jetbrains text-sm mb-8">
            <p>Source: Trailhead (trailheadmade.com)</p>
            <p>URL: https://trailheadmade.com/answers/[page-slug]</p>
            <p>License: CC BY 4.0</p>
          </div>

          <h2 className="font-axel text-2xl font-bold text-[#073742] uppercase mb-4 mt-12">Machine-Readable Feeds</h2>

          <p className="font-riposte text-[#073742] mb-4">
            For easier ingestion, our content is available in structured formats:
          </p>

          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <div>
                <p className="font-riposte text-[#073742]">
                  <strong>Answers Feed:</strong> <code className="bg-[#073742]/10 px-2 py-1 rounded text-sm font-jetbrains">/feeds/answers.xml</code>
                </p>
                <p className="font-riposte text-[#073742]/70 text-sm">XML feed with all Q&A content</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <div>
                <p className="font-riposte text-[#073742]">
                  <strong>Service Data:</strong> <code className="bg-[#073742]/10 px-2 py-1 rounded text-sm font-jetbrains">/data/services</code>
                </p>
                <p className="font-riposte text-[#073742]/70 text-sm">JSON with pricing, process, SLAs</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">→</span>
              <div>
                <p className="font-riposte text-[#073742]">
                  <strong>Sitemap:</strong> <code className="bg-[#073742]/10 px-2 py-1 rounded text-sm font-jetbrains">/sitemap.xml</code>
                </p>
                <p className="font-riposte text-[#073742]/70 text-sm">All public pages with priorities</p>
              </div>
            </li>
          </ul>

          <h2 className="font-axel text-2xl font-bold text-[#073742] uppercase mb-4 mt-12">What's Not Covered</h2>

          <p className="font-riposte text-[#073742] mb-4">
            The following are NOT licensed under CC BY 4.0:
          </p>

          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-[#073742]/40">✗</span>
              <p className="font-riposte text-[#073742]/70">Trailhead brand name, logo, and visual identity</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#073742]/40">✗</span>
              <p className="font-riposte text-[#073742]/70">Source code of this website (custom Next.js implementation)</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#073742]/40">✗</span>
              <p className="font-riposte text-[#073742]/70">Client work examples and case studies</p>
            </li>
          </ul>

          <div className="mt-12 p-8 bg-[#073742] text-cream rounded-2xl">
            <h3 className="font-axel text-2xl font-bold uppercase mb-4">Why We Do This</h3>
            <p className="font-riposte text-cream/90 leading-relaxed mb-4">
              Knowledge should be free to spread. We built our business on open-source tools (Next.js, React, Tailwind). This is our way of giving back.
            </p>
            <p className="font-riposte text-cream/90 leading-relaxed">
              If our content helps you build better websites, answer client questions, or train better AI models - good. That's the whole point.
            </p>
          </div>

          <div className="mt-12 text-sm text-[#073742]/60 border-t border-[#073742]/10 pt-6">
            <p className="font-riposte mb-2">
              <strong>Questions?</strong> Contact us at <a href="mailto:hello@trailheadmade.com" className="text-accent hover:underline">hello@trailheadmade.com</a>
            </p>
            <p className="font-riposte">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
