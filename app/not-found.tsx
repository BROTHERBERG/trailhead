import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Trailhead',
  description: "The page you're looking for doesn't exist. Get back on track with Trailhead.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f5f0e9] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 illustration */}
        <div className="mb-8">
          <h1 className="font-axel font-bold text-[10rem] md:text-[12rem] text-[#073742]/10 leading-none">
            404
          </h1>
        </div>

        {/* Error message */}
        <h2 className="font-axel font-bold text-3xl md:text-4xl text-[#073742] mb-4 uppercase">
          Trail Not Found
        </h2>

        <p className="font-riposte text-lg text-[#073742]/80 mb-8 leading-relaxed max-w-lg mx-auto">
          Looks like you&apos;ve wandered off the beaten path. The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Navigation suggestions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-xl mx-auto">
          <Link
            href="/"
            className="bg-white border-2 border-[#073742]/10 hover:border-[#073742] rounded-xl p-4 transition-all duration-200 hover:shadow-lg group"
          >
            <div className="text-2xl mb-2">🏠</div>
            <div className="font-jetbrains text-xs text-[#073742] uppercase">Home</div>
          </Link>

          <Link
            href="/#work"
            className="bg-white border-2 border-[#073742]/10 hover:border-[#073742] rounded-xl p-4 transition-all duration-200 hover:shadow-lg group"
          >
            <div className="text-2xl mb-2">💼</div>
            <div className="font-jetbrains text-xs text-[#073742] uppercase">Our Work</div>
          </Link>

          <Link
            href="/#contact"
            className="bg-white border-2 border-[#073742]/10 hover:border-[#073742] rounded-xl p-4 transition-all duration-200 hover:shadow-lg group"
          >
            <div className="text-2xl mb-2">📧</div>
            <div className="font-jetbrains text-xs text-[#073742] uppercase">Contact</div>
          </Link>
        </div>

        {/* Main CTA */}
        <Link
          href="/"
          className="inline-block bg-accent text-cream font-riposte px-8 py-3 rounded-full text-base uppercase tracking-tight transition-all duration-300 hover:bg-accent/90 hover:shadow-xl"
        >
          Back to Trailhead →
        </Link>

        {/* Fun fact */}
        <p className="font-riposte text-sm text-[#073742]/40 mt-8 italic">
          Fun fact: Even the best explorers sometimes take wrong turns.
        </p>
      </div>
    </div>
  );
}
