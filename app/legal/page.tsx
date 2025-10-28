import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Information | Trailhead",
  description: "Legal policies and terms for Trailheadmade.com - Privacy, Terms of Service, Refunds, and more.",
  alternates: {
    canonical: 'https://trailheadmade.com/legal',
  },
};

export default function LegalPage() {
  const legalDocs = [
    {
      title: "Privacy Policy",
      href: "/privacy",
      description: "How we collect, use, and protect your personal information. Covers PIPEDA, PIPA, CCPA, and GDPR compliance.",
      icon: "🔒"
    },
    {
      title: "Terms of Service",
      href: "/terms",
      description: "Legal terms governing our website design and hosting services. Includes payment terms, warranties, and dispute resolution.",
      icon: "📋"
    },
    {
      title: "Refund Policy",
      href: "/refund-policy",
      description: "Our commitment to client satisfaction. Refund eligibility, cancellation terms, and dispute resolution process.",
      icon: "💰"
    },
    {
      title: "Cookie Policy",
      href: "/cookies",
      description: "How we use cookies and tracking technologies. Includes opt-out instructions and third-party service details.",
      icon: "🍪"
    },
    {
      title: "Accessibility Statement",
      href: "/accessibility",
      description: "Our commitment to WCAG 2.1 AA compliance and making our website accessible to everyone.",
      icon: "♿"
    }
  ];

  return (
    <>
      <Navbar variant="static" />
    <div className="min-h-screen bg-[#f5f0e9]">
      {/* Hero Section */}
      <div className="bg-[#073742] text-cream py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
          <h1 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl uppercase mb-6">
            Legal Information
          </h1>
          <p className="font-riposte text-lg md:text-xl text-cream/80 max-w-2xl">
            Transparency and trust are core to how we operate. Here you'll find all our legal policies, terms, and commitments.
          </p>
        </div>
      </div>

      {/* Legal Documents Grid */}
      <div className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {legalDocs.map((doc, index) => (
              <Link
                key={index}
                href={doc.href}
                className="group bg-white border-2 border-[#073742]/10 rounded-2xl p-8 hover:border-[#073742] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{doc.icon}</div>
                  <div className="flex-1">
                    <h2 className="font-axel text-2xl font-bold text-[#073742] uppercase mb-3 group-hover:text-accent transition-colors">
                      {doc.title}
                    </h2>
                    <p className="font-riposte text-[#073742]/70 leading-relaxed">
                      {doc.description}
                    </p>
                    <div className="mt-4 font-jetbrains text-sm text-accent uppercase flex items-center gap-2">
                      Read More
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="bg-[#073742] text-cream py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="font-axel text-3xl font-bold uppercase mb-8">Company Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-riposte">
            <div>
              <h3 className="font-jetbrains text-sm uppercase text-accent mb-3">Legal Entity</h3>
              <p className="text-cream/90">
                <strong>Crush Digital Atelier LLC</strong><br />
                Wyoming, United States<br />
                Operating as: Trailhead<br />
                <a href="https://crushhh.co" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm">crushhh.co</a>
              </p>
            </div>

            <div>
              <h3 className="font-jetbrains text-sm uppercase text-accent mb-3">Contact</h3>
              <p className="text-cream/90">
                General: <a href="mailto:hello@trailheadmade.com" className="text-accent hover:underline">hello@trailheadmade.com</a><br />
                Privacy: <a href="mailto:privacy@trailheadmade.com" className="text-accent hover:underline">privacy@trailheadmade.com</a><br />
                Accessibility: <a href="mailto:accessibility@trailheadmade.com" className="text-accent hover:underline">accessibility@trailheadmade.com</a>
              </p>
            </div>

            <div>
              <h3 className="font-jetbrains text-sm uppercase text-accent mb-3">Website</h3>
              <p className="text-cream/90">
                <a href="https://trailheadmade.com" className="text-accent hover:underline">trailheadmade.com</a>
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-cream/20">
            <h3 className="font-jetbrains text-sm uppercase text-accent mb-4">Last Updated</h3>
            <p className="text-cream/70 text-sm">
              All legal documents were last updated on January 1, 2025. We review and update our policies regularly to ensure
              compliance with applicable laws and to reflect changes in our business practices.
            </p>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h2 className="font-axel text-3xl md:text-4xl font-bold text-[#073742] uppercase mb-6">
            Have Questions?
          </h2>
          <p className="font-riposte text-lg text-[#073742]/70 mb-8 max-w-2xl mx-auto">
            If you have questions about any of our legal policies or need clarification, we're here to help.
          </p>
          <a
            href="mailto:hello@trailheadmade.com"
            className="inline-block bg-[#073742] text-cream font-riposte font-bold px-8 py-4 rounded-full uppercase tracking-wide hover:bg-accent transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Back to Home */}
      <div className="pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="pt-8 border-t border-[#073742]/10 text-center">
            <a href="/" className="font-jetbrains text-sm text-accent uppercase hover:underline">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
