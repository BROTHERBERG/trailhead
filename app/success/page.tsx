"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const productName = searchParams.get("product");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className="min-h-screen bg-[#073742] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-accent rounded-full mb-6 animate-bounce">
            <svg
              className="w-16 h-16 text-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-cream uppercase mb-4">
            Payment Successful!
          </h1>

          <p className="font-riposte text-lg md:text-xl text-cream/80 mb-8">
            {productName
              ? `Thank you for purchasing ${productName}!`
              : "Thank you for your purchase!"}
          </p>
        </div>

        {/* Next Steps Card */}
        <div className="bg-cream rounded-3xl p-8 md:p-10 mb-6">
          <h2 className="font-axel font-bold text-2xl md:text-3xl text-dark uppercase mb-6">
            What Happens Next?
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1">
                <span className="font-axel font-bold text-dark">1</span>
              </div>
              <div>
                <h3 className="font-riposte font-bold text-lg text-dark mb-1">
                  Check Your Email
                </h3>
                <p className="font-riposte text-dark/70">
                  You'll receive a confirmation email with your receipt and next steps within the next few minutes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1">
                <span className="font-axel font-bold text-dark">2</span>
              </div>
              <div>
                <h3 className="font-riposte font-bold text-lg text-dark mb-1">
                  We'll Reach Out
                </h3>
                <p className="font-riposte text-dark/70">
                  Our team will contact you within 24 hours to schedule your project kickoff call and gather requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1">
                <span className="font-axel font-bold text-dark">3</span>
              </div>
              <div>
                <h3 className="font-riposte font-bold text-lg text-dark mb-1">
                  Build Begins
                </h3>
                <p className="font-riposte text-dark/70">
                  We'll get to work on your website immediately, delivering your finished site within 6 days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Session Info (for debugging - remove in production) */}
        {sessionId && (
          <div className="bg-cream/10 rounded-lg p-4 mb-6">
            <p className="font-jetbrains text-xs text-cream/60">
              Session ID: {sessionId}
            </p>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-accent text-dark font-riposte px-8 py-4 rounded-full text-base uppercase tracking-tight transition-all duration-200 hover:bg-[#b5d4c8] hover:scale-105 text-center"
          >
            Back to Home
          </Link>

          <a
            href="mailto:hello@trailheadmade.com"
            className="border border-cream text-cream font-riposte px-8 py-4 rounded-full text-base uppercase tracking-tight transition-all duration-200 hover:bg-cream hover:text-dark text-center"
          >
            Contact Us
          </a>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-8">
          <p className="font-riposte text-sm text-cream/60">
            Questions? Email us at{" "}
            <a
              href="mailto:hello@trailheadmade.com"
              className="text-accent hover:underline"
            >
              hello@trailheadmade.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
