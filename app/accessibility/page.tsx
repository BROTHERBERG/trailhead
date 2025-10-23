import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | Trailhead",
  description: "Trailhead's commitment to web accessibility and WCAG 2.1 compliance.",
};

export default function AccessibilityPage() {
  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-[#f5f0e9] py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="mb-12">
          <h1 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-[#073742] uppercase mb-6">
            Accessibility Statement
          </h1>
          <p className="font-riposte text-lg text-[#073742]/70">
            <strong>Last Updated:</strong> January 1, 2025
          </p>
        </div>

        <div className="font-riposte text-[#073742] space-y-8">
          <section>
            <p className="text-lg leading-relaxed">
              Crush Digital Atelier LLC (Trailhead) is committed to ensuring digital accessibility for people with disabilities.
              We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
          </section>

          <section>
            <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">Conformance Status</h2>
            <p className="mb-4">
              We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1</strong> at the <strong>AA level</strong>.
              These guidelines explain how to make web content more accessible for people with disabilities and user-friendly for everyone.
            </p>
            <p>
              The WCAG 2.1 AA standard has three levels of conformance: A, AA, and AAA. We strive to meet Level AA across all pages.
            </p>
          </section>

          <section>
            <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">Accessibility Features</h2>
            <p className="mb-4">Our website includes the following accessibility features:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Keyboard Navigation:</strong> All interactive elements can be accessed using keyboard only</li>
              <li><strong>Screen Reader Support:</strong> Semantic HTML5 and ARIA labels for assistive technologies</li>
              <li><strong>Color Contrast:</strong> Text meets WCAG AA contrast ratios (minimum 4.5:1 for normal text)</li>
              <li><strong>Responsive Design:</strong> Content adapts to different screen sizes and zoom levels up to 200%</li>
              <li><strong>Alt Text:</strong> Images include descriptive alternative text</li>
              <li><strong>Focus Indicators:</strong> Visible focus states on all interactive elements</li>
              <li><strong>Form Labels:</strong> All form fields have descriptive labels</li>
              <li><strong>Heading Structure:</strong> Logical heading hierarchy (H1-H6) for easy navigation</li>
              <li><strong>Skip Links:</strong> Skip-to-content links for keyboard users</li>
            </ul>
          </section>

          <section>
            <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">Known Limitations</h2>
            <p className="mb-4">Despite our efforts, some limitations may exist:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Third-Party Content:</strong> Embedded content (Google Analytics, Stripe checkout) may not be fully accessible</li>
              <li><strong>Portfolio Images:</strong> Some portfolio screenshots may have limited alt text descriptions</li>
              <li><strong>Animation:</strong> Some decorative animations may not respect prefers-reduced-motion settings</li>
            </ul>
            <p className="mt-4">We are actively working to address these issues.</p>
          </section>

          <section>
            <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">Assistive Technologies</h2>
            <p className="mb-4">Our website is designed to be compatible with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
              <li>Browser text size adjustments</li>
            </ul>
          </section>

          <section>
            <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">Feedback & Contact</h2>
            <p className="mb-4">
              We welcome your feedback on the accessibility of trailheadmade.com. Please let us know if you encounter accessibility barriers:
            </p>
            <div className="bg-[#073742] text-cream p-6 rounded-xl">
              <p className="font-jetbrains mb-2"><strong>Report Accessibility Issues</strong></p>
              <p className="font-riposte">Email: <a href="mailto:accessibility@trailheadmade.com" className="text-accent underline">accessibility@trailheadmade.com</a></p>
              <p className="font-riposte mt-4">Please include:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
                <li>The specific page or feature with the issue</li>
                <li>Your assistive technology (if applicable)</li>
                <li>A description of the problem</li>
              </ul>
              <p className="font-riposte mt-4">We aim to respond within 3 business days.</p>
            </div>
          </section>

          <section>
            <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">Remediation Timeline</h2>
            <p>
              When accessibility issues are reported, we commit to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Critical Issues:</strong> Fixed within 5 business days</li>
              <li><strong>Moderate Issues:</strong> Fixed within 15 business days</li>
              <li><strong>Minor Issues:</strong> Fixed within 30 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">Ongoing Efforts</h2>
            <p>
              We are continuously working to improve accessibility:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Regular accessibility audits using automated and manual testing</li>
              <li>Training our team on accessibility best practices</li>
              <li>Incorporating accessibility into our design and development process</li>
              <li>Testing with real assistive technologies and users</li>
            </ul>
          </section>

          <section>
            <h2 className="font-axel text-3xl font-bold text-[#073742] uppercase mb-4 mt-10">Standards & Guidelines</h2>
            <p className="mb-4">This accessibility statement is based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" className="text-accent underline" target="_blank" rel="noopener noreferrer">WCAG 2.1 Guidelines</a></li>
              <li><a href="https://www.ada.gov/" className="text-accent underline" target="_blank" rel="noopener noreferrer">Americans with Disabilities Act (ADA)</a></li>
              <li><a href="https://www.w3.org/WAI/standards-guidelines/aria/" className="text-accent underline" target="_blank" rel="noopener noreferrer">WAI-ARIA Authoring Practices</a></li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#073742]/10">
          <a href="/" className="font-jetbrains text-sm text-accent uppercase hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
