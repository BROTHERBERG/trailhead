import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "Trailhead | Professional Websites That Make You Money",
  description: "Custom-designed websites for your business, delivered in less than a week, priced at $750. One-page sites optimized for conversions, not complexity.",
  keywords: ["web design", "website development", "small business websites", "one-page websites", "fast website delivery", "affordable web design"],
  authors: [{ name: "Trailhead" }],
  openGraph: {
    title: "Trailhead | Professional Websites That Make You Money",
    description: "Custom-designed websites delivered in less than a week, priced at $750—not $5,000.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trailhead | Professional Websites That Make You Money",
    description: "Custom-designed websites delivered in less than a week, priced at $750—not $5,000.",
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
        {children}
      </body>
    </html>
  );
}