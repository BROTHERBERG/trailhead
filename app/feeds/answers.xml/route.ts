import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trailheadmade.com';

  const answers = [
    {
      question: "Can you build a custom website in one week?",
      answer: "Yes. A one-page custom website can be built and launched in one week (6 business days) if the scope is fixed, content is ready on day 1, and the process eliminates typical delays like committee approvals and endless revision cycles.",
      url: `${baseUrl}/answers/can-you-build-custom-website-in-one-week`,
      lastmod: new Date().toISOString()
    },
    {
      question: "Is $750 too cheap for a website?",
      answer: "No. $750 for a one-page custom website is fair pricing when the business model optimizes for efficiency rather than margin. Most agency overhead (sales, project managers, endless revisions) is eliminated. The actual work - design and coding - takes 12-16 hours at a reasonable developer rate.",
      url: `${baseUrl}/answers/is-750-too-cheap-for-website`,
      lastmod: new Date().toISOString()
    },
    {
      question: "Custom website vs template: which should you choose?",
      answer: "Choose custom if you want full design control, better performance, unique branding, and own your code. Choose templates if you need a site live in hours, have zero budget, or are testing a business idea. Custom costs more upfront but performs better long-term.",
      url: `${baseUrl}/answers/custom-website-vs-template`,
      lastmod: new Date().toISOString()
    },
    {
      question: "Why do websites take so long to build?",
      answer: "Most websites take 2-6 months because of process waste, not technical complexity. The main delays are scope creep (clients adding features mid-project), committee approvals (slow decision-making), endless revision cycles, and agency overhead. The actual design and development work typically takes 2-3 weeks.",
      url: `${baseUrl}/answers/why-do-websites-take-so-long`,
      lastmod: new Date().toISOString()
    }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:answer="http://trailheadmade.com/schemas/answer/1.0">
  ${answers.map(item => `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <answer:question>${item.question}</answer:question>
    <answer:answer>${item.answer}</answer:answer>
  </url>`).join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
