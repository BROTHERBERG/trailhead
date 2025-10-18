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
  // Signature Package - $2,000
  signature: {
    name: 'Signature Package',
    description: 'Complete website in 6 days with professional design and development',
    price: 2000,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_SIGNATURE || 'price_xxxxxxxxxxxxx', // Replace with your Price ID
    features: [
      'Custom Design & Branding',
      'Up to 5 Pages',
      'Mobile Responsive',
      'SEO Optimized',
      'Contact Form Integration',
      '6-Day Delivery',
      '30-Day Support',
    ],
  },

  // Add-ons (optional - create these in Stripe if needed)
  additionalPage: {
    name: 'Additional Page',
    description: 'Add extra pages to your website',
    price: 300,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ADDITIONAL_PAGE || 'price_xxxxxxxxxxxxx',
  },

  ecommerce: {
    name: 'E-commerce Integration',
    description: 'Full online store with payment processing',
    price: 800,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ECOMMERCE || 'price_xxxxxxxxxxxxx',
  },

  blog: {
    name: 'Blog/CMS Setup',
    description: 'Content management system for easy updates',
    price: 400,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BLOG || 'price_xxxxxxxxxxxxx',
  },
} as const;

export type ProductKey = keyof typeof STRIPE_PRODUCTS;
