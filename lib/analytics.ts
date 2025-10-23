// GA4 Event Tracking Utilities

declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Conversion Events
export const trackStartBuildClick = (location: string) => {
  trackEvent('start_build_click', {
    event_category: 'engagement',
    event_label: location,
    value: 1,
  });
};

export const trackContactSubmit = (formName: string = 'contact_form') => {
  trackEvent('contact_form_submit', {
    event_category: 'conversion',
    event_label: formName,
    value: 10,
  });
};

export const trackCheckoutStart = (priceId: string, plan: string) => {
  trackEvent('begin_checkout', {
    event_category: 'ecommerce',
    event_label: plan,
    price_id: priceId,
    value: 750, // base price
  });
};

export const trackBlogPostView = (slug: string, title: string) => {
  trackEvent('blog_post_view', {
    event_category: 'content',
    event_label: title,
    page_path: `/blog/${slug}`,
  });
};

export const trackInternalLinkClick = (destination: string, source: string) => {
  trackEvent('internal_link_click', {
    event_category: 'navigation',
    event_label: `${source} -> ${destination}`,
    destination_url: destination,
  });
};
