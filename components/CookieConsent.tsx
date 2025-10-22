"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent);
        setPreferences(saved);
      } catch {
        console.error("Error loading cookie preferences");
      }
    }
  }, []);

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem("cookie_consent", JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);

    // Apply preferences
    const measurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || 'G-KBP3LGE8ZQ';
    if (!prefs.analytics) {
      // Disable Google Analytics
      (window as any)[`ga-disable-${measurementId}`] = true;
    } else {
      // Re-enable if it was previously disabled
      (window as any)[`ga-disable-${measurementId}`] = false;
    }

    // Reload to ensure tracking state is applied
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      functional: true,
    });
  };

  const acceptNecessary = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      functional: false,
    });
  };

  const saveCustom = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#073742] text-cream shadow-2xl border-t-2 border-accent">
        <div className="max-w-7xl mx-auto px-4 py-6 md:px-8 md:py-8">
          {!showSettings ? (
            // Simple Banner
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h3 className="font-axel text-xl md:text-2xl font-bold uppercase mb-2">
                  We Value Your Privacy
                </h3>
                <p className="font-riposte text-sm md:text-base text-cream/80">
                  We use cookies to improve your experience, analyze site traffic, and personalize content.
                  <br className="hidden md:block" />
                  You can customize your preferences or accept all cookies.{" "}
                  <a href="/cookies" className="text-accent underline hover:no-underline">
                    Learn more
                  </a>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="font-riposte px-6 py-3 rounded-full border border-cream text-cream hover:bg-cream/10 transition-colors text-sm uppercase tracking-wide"
                >
                  Customize
                </button>
                <button
                  onClick={acceptNecessary}
                  className="font-riposte px-6 py-3 rounded-full border border-cream text-cream hover:bg-cream/10 transition-colors text-sm uppercase tracking-wide"
                >
                  Necessary Only
                </button>
                <button
                  onClick={acceptAll}
                  className="font-riposte px-6 py-3 rounded-full bg-accent text-[#073742] hover:bg-accent/90 transition-colors text-sm uppercase tracking-wide font-bold"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-axel text-2xl font-bold uppercase">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-cream/60 hover:text-cream"
                  aria-label="Close settings"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between gap-4 p-4 bg-cream/5 rounded-lg border border-cream/10">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-jetbrains text-sm uppercase font-bold">
                        Strictly Necessary
                      </h4>
                      <span className="text-xs bg-accent text-[#073742] px-2 py-0.5 rounded-full font-bold">
                        Always Active
                      </span>
                    </div>
                    <p className="font-riposte text-sm text-cream/70">
                      Essential for the website to function. Cannot be disabled.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <div className="w-12 h-6 bg-accent rounded-full opacity-50 cursor-not-allowed"></div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between gap-4 p-4 bg-cream/5 rounded-lg border border-cream/10">
                  <div className="flex-1">
                    <h4 className="font-jetbrains text-sm uppercase font-bold mb-1">
                      Analytics
                    </h4>
                    <p className="font-riposte text-sm text-cream/70">
                      Help us understand how visitors use our site (Google Analytics).
                    </p>
                  </div>
                  <button
                    onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                    className={`shrink-0 w-12 h-6 rounded-full transition-colors ${
                      preferences.analytics ? 'bg-accent' : 'bg-cream/20'
                    }`}
                    aria-label="Toggle analytics cookies"
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        preferences.analytics ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    ></div>
                  </button>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between gap-4 p-4 bg-cream/5 rounded-lg border border-cream/10">
                  <div className="flex-1">
                    <h4 className="font-jetbrains text-sm uppercase font-bold mb-1">
                      Functional
                    </h4>
                    <p className="font-riposte text-sm text-cream/70">
                      Remember your preferences and settings for a better experience.
                    </p>
                  </div>
                  <button
                    onClick={() => setPreferences({ ...preferences, functional: !preferences.functional })}
                    className={`shrink-0 w-12 h-6 rounded-full transition-colors ${
                      preferences.functional ? 'bg-accent' : 'bg-cream/20'
                    }`}
                    aria-label="Toggle functional cookies"
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        preferences.functional ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    ></div>
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={saveCustom}
                  className="flex-1 font-riposte px-6 py-3 rounded-full bg-accent text-[#073742] hover:bg-accent/90 transition-colors text-sm uppercase tracking-wide font-bold"
                >
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 font-riposte px-6 py-3 rounded-full border border-cream text-cream hover:bg-cream/10 transition-colors text-sm uppercase tracking-wide"
                >
                  Accept All
                </button>
              </div>

              <p className="text-xs text-cream/50 mt-4 text-center">
                Read our{" "}
                <a href="/cookies" className="text-accent underline hover:no-underline">
                  Cookie Policy
                </a>{" "}
                for more information
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {showBanner && (
        <div className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"></div>
      )}
    </>
  );
}
