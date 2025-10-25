import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  searchParams: Promise<{ type?: string }>;
};

export default async function SegmentThankYouPage({ searchParams }: Props) {
  const params = await searchParams;
  const segment = params.type || 'no-website';

  const messages = {
    'no-website': {
      title: "Perfect! I'll send you website launch tips",
      description: "Over the next week, you'll get actionable advice on launching your first website fast—without overthinking it.",
      cta: "In the meantime, check out our 6-day launch guide"
    },
    'has-website': {
      title: "Got it! I'll send you optimization strategies",
      description: "You'll receive tips on improving conversions, speed, and SEO—turning your existing site into a customer magnet.",
      cta: "See how we've helped businesses improve their sites"
    },
    'social-only': {
      title: "Smart! I'll show you why you need both",
      description: "You'll learn how to keep your social momentum while building a platform you actually own (so algorithms can't kill your business).",
      cta: "Read: Website vs Social Media"
    }
  };

  const message = messages[segment as keyof typeof messages] || messages['no-website'];

  return (
    <>
      <Navbar variant="static" />
      <div className="min-h-screen bg-[#f5f0e9] flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white border-2 border-[#073742] rounded-3xl p-10 md:p-16 shadow-xl">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-[#073742]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="font-axel font-bold text-3xl md:text-4xl lg:text-5xl text-[#073742] uppercase mb-6 leading-tight">
              {message.title}
            </h1>

            <p className="font-riposte text-lg md:text-xl text-[#073742]/80 mb-8 leading-relaxed">
              {message.description}
            </p>

            <div className="bg-[#c8e3da]/30 border border-[#073742]/10 rounded-2xl p-6 mb-8">
              <p className="font-jetbrains text-xs uppercase text-[#073742] tracking-wider mb-2">
                What Happens Next
              </p>
              <p className="font-riposte text-[#073742] text-sm">
                Check your inbox in the next few minutes for your first personalized email.
                Then expect more targeted insights over the next 9 days.
              </p>
            </div>

            <div className="space-y-4">
              <Link
                href={
                  segment === 'no-website' ? '/blog/when-you-need-a-website' :
                  segment === 'has-website' ? '/#work' :
                  '/blog/website-vs-social-media'
                }
                className="block bg-[#ff6b35] text-cream font-riposte font-bold px-8 py-4 rounded-full text-base uppercase tracking-wide transition-all duration-200 hover:bg-[#ff6b35]/90 hover:shadow-xl"
              >
                {message.cta}
              </Link>

              <Link
                href="/"
                className="block border-2 border-[#073742] text-[#073742] font-riposte px-8 py-4 rounded-full text-base uppercase tracking-wide transition-all duration-200 hover:bg-[#073742] hover:text-cream"
              >
                Back to Homepage
              </Link>
            </div>
          </div>

          <p className="font-riposte text-sm text-[#073742]/60 mt-8">
            Didn't mean to click that? No worries—just reply to any email and I'll adjust your preferences.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
