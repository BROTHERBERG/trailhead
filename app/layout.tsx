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
  title: "Trailhead | Custom Websites Delivered in 6 Days",
  description: "Hand-crafted for your business, launched in six days. Streamlined builds. Professional presence that performs. One-page websites starting at $750 USD.",
  keywords: ["web design", "website development", "small business websites", "one-page websites", "fast website delivery", "affordable web design"],
  authors: [{ name: "Trailhead" }],
  icons: {
    icon: "/cone-180.png",
    apple: "/cone-180.png",
  },
  metadataBase: new URL('https://trailheadmade.com'),
  openGraph: {
    title: "Trailhead | Custom Websites Delivered in 6 Days",
    description: "Hand-crafted for your business, launched in six days. Professional presence that performs. Starting at $750 USD.",
    url: "https://trailheadmade.com",
    siteName: "Trailhead",
    images: [
      {
        url: "/og-image.png", // We'll need to create this
        width: 1200,
        height: 630,
        alt: "Trailhead - Custom Websites Delivered in 6 Days",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trailhead | Custom Websites Delivered in 6 Days",
    description: "Hand-crafted for your business, launched in six days. Professional presence that performs. Starting at $750 USD.",
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
        {children}
      </body>
    </html>
  );
}