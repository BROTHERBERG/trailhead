import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  let baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trailheadmade.com';

  // Ensure the URL has a protocol
  if (!baseUrl.startsWith('http')) {
    baseUrl = `https://${baseUrl}`;
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/email-preview',
          '/segment-thank-you',
          '/success',
          '/fast-custom-website',
          '/website-builder-alternative',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
