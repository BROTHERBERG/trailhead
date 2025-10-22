"use client";

import Script from 'next/script';
import { useEffect } from 'react';

export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || 'G-KBP3LGE8ZQ';

  useEffect(() => {
    // Check if user has consented to analytics cookies
    const consent = localStorage.getItem("cookie_consent");
    if (consent) {
      try {
        const preferences = JSON.parse(consent);
        if (!preferences.analytics) {
          // User opted out - disable analytics
          (window as any)[`ga-disable-${measurementId}`] = true;
        }
      } catch {
        console.error("Error reading cookie preferences");
      }
    }
  }, [measurementId]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
            });
          `,
        }}
      />
    </>
  );
}
