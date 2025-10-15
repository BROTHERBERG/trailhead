# Trailhead Website

A modern, high-performance marketing website built with Next.js 15, TypeScript, and Tailwind CSS. Designed for fast load times, accessibility, and conversion optimization.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or 20+
- Yarn or npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd trailhead

# Install dependencies
yarn install
# or
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Formspree ID

# Run development server
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
trailhead/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout with fonts & metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles & Tailwind
│   └── fonts/             # Local font files
├── components/            # React components
│   ├── Navbar.tsx         # Sticky navigation with mobile menu
│   ├── Hero.tsx           # Hero section with scroll fade
│   ├── StatsBar.tsx       # Statistics showcase
│   ├── Services.tsx       # Services cards
│   ├── Portfolio.tsx      # Work showcase with modal
│   ├── WhyTrailheadDetailed.tsx  # Why choose us section
│   ├── SimplePricing.tsx  # Pricing cards
│   ├── ProcessTimeline.tsx  # Process workflow
│   ├── FAQ.tsx            # Accordion FAQ
│   ├── ContactForm.tsx    # Contact form (Formspree)
│   └── Footer.tsx         # Footer with links
├── hooks/                 # Custom React hooks
│   └── useScrollFade.ts   # Scroll-triggered fade effect
├── public/                # Static assets
│   ├── portfolio/         # Portfolio screenshots
│   ├── service-*.png      # Service images
│   └── trailhead-logo.webp  # Brand logo
├── .env.example           # Environment variables template
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS config with custom theme
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Fonts**: Custom fonts (Axel, JetBrains Mono, Riposte)
- **Form Handling**: [Formspree](https://formspree.io/)
- **Deployment**: Optimized for [Vercel](https://vercel.com/)

## 🎯 Key Features

### Performance
- **117 KB** total bundle size
- Image optimization with Next.js Image component
- Lazy loading for below-the-fold content
- Skeleton loaders for portfolio images
- Request animation frame throttling for scroll events

### Accessibility
- Semantic HTML throughout
- ARIA labels and roles on interactive elements
- Keyboard navigation support
- Screen reader friendly
- Focus management in mobile menu
- Reduced motion support

### Design
- Custom color scheme (primary teal, accent orange, cream)
- Smooth scroll animations
- Responsive breakpoints (mobile, tablet, desktop)
- Hover states and micro-interactions
- Wobble animation on CTA buttons

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```bash
# Required: Contact Form
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id_here

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
```

### Formspree Setup

1. Sign up at [formspree.io](https://formspree.io/)
2. Create a new form named "Trailhead Contact"
3. Copy your form ID (format: `xyzabc123`)
4. Add to `.env.local` as `NEXT_PUBLIC_FORMSPREE_ID`
5. Test the contact form

See [FORMSPREE-SETUP.md](FORMSPREE-SETUP.md) for detailed instructions.

### Custom Fonts

The site uses three custom font families:

- **Axel (Bold)**: Headlines and large text
- **JetBrains Mono**: Section labels and code-style text
- **Riposte (Light)**: Body text and descriptions

Fonts are loaded via `next/font/local` in [app/layout.tsx](app/layout.tsx).

### Tailwind Theme

Custom colors defined in [tailwind.config.ts](tailwind.config.ts):

```ts
colors: {
  primary: { DEFAULT: "#1e5c5b", light: "#398da8" },
  accent: { DEFAULT: "#ff8359" },
  cream: "#fcf6ed",
}
```

## 📦 Scripts

```bash
# Development
yarn dev          # Start dev server at localhost:3000

# Production
yarn build        # Create production build
yarn start        # Start production server

# Code Quality
yarn lint         # Run ESLint
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts to connect your GitHub repo
```

Or use the [Vercel Dashboard](https://vercel.com/new):
1. Import your Git repository
2. Vercel auto-detects Next.js
3. Add environment variables
4. Deploy!

### Deploy to Other Platforms

The site works on any platform supporting Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted Node.js

## 🎨 Customization

### Update Portfolio

Edit the `projects` array in [components/Portfolio.tsx](components/Portfolio.tsx):

```tsx
const projects = [
  {
    image: "/portfolio/1.png",
    businessType: "Restaurant",
    description: "Turn empty tables into bookings",
  },
  // Add more...
];
```

### Update Pricing

Edit pricing tiers in [components/SimplePricing.tsx](components/SimplePricing.tsx).

### Update FAQ

Edit FAQ items in [components/FAQ.tsx](components/FAQ.tsx):

```tsx
const faqs = [
  {
    question: "Your question?",
    answer: "Your answer."
  },
  // Add more...
];
```

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules yarn.lock
yarn install
```

### Image Not Loading

- Ensure images are in `/public` directory
- Check image paths (no leading `/public/`)
- Verify image file extensions match code

### Font Not Loading

- Fonts must be in `/app/fonts/`
- Check font paths in [app/layout.tsx](app/layout.tsx)
- Ensure font files are committed to git

## 📚 Additional Documentation

- [COMPREHENSIVE-IMPROVEMENTS.md](COMPREHENSIVE-IMPROVEMENTS.md) - Full improvement analysis
- [IMPROVEMENTS.md](IMPROVEMENTS.md) - Previous improvements summary
- [FORMSPREE-SETUP.md](FORMSPREE-SETUP.md) - Contact form setup guide
- [READY-TO-LAUNCH.md](READY-TO-LAUNCH.md) - Launch checklist

## 🤝 Contributing

This is a private project for Trailhead. For issues or suggestions, contact the development team.

## 📄 License

Proprietary - All rights reserved by Trailhead.

---

**Built with ❤️ by the Trailhead team**
