"use client";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

type EventParams = Record<string, unknown> & {
  category?: string;
  label?: string;
  value?: number;
};

function sendEvent(action: string, params: EventParams = {}) {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === "undefined") return;
  const gtag = (window as typeof window & { gtag?: (...args: any[]) => void }).gtag;
  if (!gtag) return;
  gtag("event", action, params);
}

export function trackEvent(action: string, params: EventParams = {}) {
  sendEvent(action, params);
}

export function trackCheckoutStart(priceId: string, productName: string) {
  sendEvent("begin_checkout", {
    category: "ecommerce",
    label: productName,
    value: 750,
    price_id: priceId,
  });
}

export function trackCtaClick(location: string, label: string) {
  sendEvent("cta_click", {
    category: "engagement",
    label: `${location} – ${label}`,
  });
}

export function trackStartBuildClick(location: string) {
  trackCtaClick(location, "Start Your Build");
}

export function trackFormSubmission(formName: string) {
  sendEvent("form_submit", {
    category: "engagement",
    label: formName,
  });
}

export function trackContactSubmit(formName: string) {
  trackFormSubmission(formName);
}
