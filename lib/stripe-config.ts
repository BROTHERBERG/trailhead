/**
 * Stripe Product and Price Configuration
 *
 * After creating products/prices in your Stripe Dashboard (https://dashboard.stripe.com/products),
 * add the Price IDs here to enable checkout buttons.
 *
 * How to get your Price IDs:
 * 1. Go to https://dashboard.stripe.com/products
 * 2. Click on your product
 * 3. Copy the Price ID (starts with "price_")
 * 4. Paste it below
 */

export const STRIPE_PRODUCTS = {
  // Professional Website - $750 one-time
  signature: {
    name: 'Professional Website',
    description: 'Custom one-page website launched in 6 days',
    price: 750,
    priceId: process.env.NEXT_PUBLIC_STRIPE_BUILD_PRICE_ID || 'price_xxxxxxxxxxxxx', // Replace with your Price ID
    features: [
      'Custom one-page website design',
      'Mobile-optimized & lightning-fast performance',
      'Professional SEO & analytics setup',
      'Security, SSL & contact forms configured',
      'Two rounds of revisions included',
      'Launched in 6 days',
    ],
  },

  // Care & Hosting - $18/mo recurring
  maintenance: {
    name: 'Care & Hosting',
    description: 'Required for hosting - includes updates, SSL, and support',
    price: 18,
    priceId: process.env.NEXT_PUBLIC_STRIPE_MAINTENANCE_PRICE_ID || 'price_xxxxxxxxxxxxx', // Replace with your Price ID
    recurring: 'monthly',
    features: [
      'Hosting & SSL certificates',
      'Two content updates per month (up to 30 min each)',
      'Security & performance updates',
      'Uptime monitoring & backups',
      'Priority email support',
      'Additional edits: $10 USD each',
    ],
  },
} as const;

export type ProductKey = keyof typeof STRIPE_PRODUCTS;
