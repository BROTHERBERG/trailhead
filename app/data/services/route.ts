import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    "services": [
      {
        "id": "one-week-website",
        "name": "One-Week Website Launch",
        "type": "WebDesignService",
        "description": "Professional one-page custom website, hand-coded in Next.js, launched in 6 business days",
        "price": {
          "amount": 750,
          "currency": "CAD",
          "billingType": "one-time"
        },
        "deliveryTime": "P6D",
        "sla": "6 business days from content delivery to live launch",
        "includes": [
          "Custom Next.js development (no templates)",
          "Mobile-responsive design",
          "SEO setup (meta tags, sitemap, structured data)",
          "Contact form integration",
          "SSL certificate",
          "Analytics setup (Google Analytics 4)",
          "Lighthouse 90+ performance score",
          "Two rounds of revisions"
        ],
        "requirements": [
          "All content (text, images, branding) ready on Day 1",
          "Single decision-maker (owner-operator preferred)",
          "Fixed scope (one-page site, no feature additions mid-project)"
        ],
        "limitations": [
          "One page only (additional pages available as add-on)",
          "Two revision rounds maximum",
          "No custom CMS (content updates via developer)",
          "No e-commerce or membership features"
        ],
        "process": [
          {
            "day": 1,
            "name": "Discovery & Setup",
            "activities": ["Content delivery", "Brand review", "Technical setup"]
          },
          {
            "day": 2,
            "name": "Design",
            "activities": ["Layout design", "Component creation", "Brand application"]
          },
          {
            "day": 3,
            "name": "Development",
            "activities": ["Code implementation", "Form integration", "SEO setup"]
          },
          {
            "day": 4,
            "name": "Review Round 1",
            "activities": ["Client review", "Revision implementation"]
          },
          {
            "day": 5,
            "name": "Review Round 2 & Polish",
            "activities": ["Final revisions", "Performance optimization", "QA testing"]
          },
          {
            "day": 6,
            "name": "Launch",
            "activities": ["Domain configuration", "Go live", "Post-launch verification"]
          }
        ],
        "targetCustomers": [
          "Small business owners",
          "Service-based businesses (contractors, consultants, local services)",
          "Businesses outgrowing DIY website builders",
          "Startups needing fast professional web presence"
        ]
      },
      {
        "id": "care-hosting",
        "name": "Care & Hosting",
        "type": "MaintenanceService",
        "description": "Ongoing hosting, maintenance, updates, and monthly content edits",
        "price": {
          "amount": 18,
          "currency": "CAD",
          "billingType": "monthly"
        },
        "includes": [
          "Vercel Pro hosting",
          "SSL certificate renewal",
          "Security updates",
          "Weekly automated backups",
          "Uptime monitoring",
          "2 content edits per month (text or image changes)",
          "Email support (24hr response SLA)"
        ],
        "requirements": [
          "Required for one-week launch SLA",
          "Commitment: Month-to-month (no long-term contract)"
        ],
        "cancellation": "Cancel anytime with 30 days notice. Site code ownership transfers to client upon request."
      },
      {
        "id": "additional-pages",
        "name": "Additional Pages",
        "type": "WebDesignService",
        "description": "Add-on pages beyond the initial one-page site",
        "price": {
          "amount": 250,
          "currency": "CAD",
          "billingType": "per-page"
        },
        "deliveryTime": "P3D",
        "includes": [
          "Custom page design matching existing site",
          "SEO optimization",
          "Mobile-responsive layout",
          "One revision round"
        ]
      }
    ],
    "serviceArea": {
      "primary": {
        "city": "Calgary",
        "province": "Alberta",
        "country": "Canada"
      },
      "secondary": "Remote clients worldwide (English-speaking markets)"
    },
    "businessModel": {
      "approach": "Efficiency-optimized",
      "differentiators": [
        "Fixed scope eliminates timeline bloat",
        "Direct client-developer communication (no account managers)",
        "Limited revisions prevent endless tweaking",
        "Ready content on Day 1 enables immediate start",
        "Owner-operator clients ensure fast decisions"
      ],
      "overhead": "Minimal (solo developer, no sales team, no project managers)"
    },
    "qualityMetrics": {
      "lighthouse": {
        "performance": "90+",
        "accessibility": "90+",
        "seo": "100",
        "bestPractices": "100"
      },
      "frameworks": ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
      "hosting": "Vercel (edge network, sub-second TTFB)"
    },
    "version": "1.0",
    "lastUpdated": new Date().toISOString()
  };

  return NextResponse.json(data, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
