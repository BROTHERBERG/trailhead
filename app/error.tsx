'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#f5f0e9] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error icon */}
        <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-12 h-12 text-cream"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        {/* Error message */}
        <h1 className="font-axel font-bold text-4xl md:text-5xl text-[#073742] mb-4 uppercase">
          Oops! Something Broke
        </h1>

        <p className="font-riposte text-lg text-[#073742]/80 mb-8 leading-relaxed">
          We encountered an unexpected error. Don&apos;t worry, our team has been notified and we&apos;re working on it.
        </p>

        {/* Error details (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-[#073742]/5 border-2 border-[#073742]/10 rounded-lg p-6 mb-8 text-left">
            <p className="font-jetbrains text-sm text-[#073742] break-words">
              <strong>Error:</strong> {error.message}
            </p>
            {error.digest && (
              <p className="font-jetbrains text-xs text-[#073742]/60 mt-2">
                <strong>Digest:</strong> {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-[#073742] text-cream font-riposte px-8 py-3 rounded-full text-base uppercase tracking-tight transition-all duration-300 hover:bg-[#0a4f5f] hover:shadow-xl"
          >
            Try Again
          </button>

          <button
            onClick={() => window.location.href = '/'}
            className="bg-accent text-cream font-riposte px-8 py-3 rounded-full text-base uppercase tracking-tight transition-all duration-300 hover:bg-accent/90 hover:shadow-xl"
          >
            Go Home
          </button>
        </div>

        {/* Contact support */}
        <p className="font-riposte text-sm text-[#073742]/60 mt-8">
          Still having issues?{' '}
          <a href="#contact" className="text-accent hover:underline">
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
}
