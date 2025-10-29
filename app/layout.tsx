import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const axel = localFont({
  src: "./fonts/BNAxelGrotesk-Bold.otf",
  variable: "--font-axel",
  weight: "700",
});

const jetbrains = localFont({
  src: [
    {
      path: "./fonts/JetBrainsMono-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/JetBrainsMono-Medium.woff2",
      weight: "500",
    },
    {
      path: "./fonts/JetBrainsMono-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-jetbrains",
});

const riposte = localFont({
  src: "./fonts/RiposteLight.ttf",
  variable: "--font-riposte",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Affordable Custom Websites Calgary | Fast Launch in One Week | Trailhead",
  description: "Professional custom websites for small businesses. Hand-coded, SEO-ready, launched in one week. Starting at $750 USD. No templates, no surprises.",
  keywords: ["affordable custom website", "professional website under $1000", "small business website designer", "fast custom website design", "website in a week", "Calgary web design", "affordable web design Calgary", "custom website Calgary"],
  authors: [{ name: "Trailhead" }],
  icons: {
    icon: "/cone-180.png",
    apple: "/cone-180.png",
  },
  metadataBase: new URL('https://trailheadmade.com'),
  alternates: {
    canonical: 'https://trailheadmade.com',
  },
  openGraph: {
    title: "Affordable Custom Websites Calgary | Launched in One Week",
    description: "Professional custom websites for small businesses. Hand-coded, SEO-ready, launched in one week. Starting at $750 USD.",
    url: "https://trailheadmade.com",
    siteName: "Trailhead",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trailhead - Affordable Custom Websites Launched in One Week",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Custom Websites Calgary | Launched in One Week",
    description: "Professional custom websites for small businesses. Hand-coded, SEO-ready, launched in one week. Starting at $750 USD.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/portfolio/1.png" />
        <link rel="preload" as="image" href="/portfolio/2.png" />
        <link rel="preload" as="image" href="/service-1.png" />
      </head>
      <body
        className={`${axel.variable} ${jetbrains.variable} ${riposte.variable} font-riposte antialiased`}
      >
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', { send_page_view: true });
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
