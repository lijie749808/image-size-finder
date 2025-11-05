import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./structured-data";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Squared Symbol (²) - Copy, Type & Use Superscript 2 Symbol",
  // 149 characters, includes target keyword "Squared Symbol"
  description: "Copy the Squared Symbol (²) instantly and learn fast ways to type it on Windows, Mac and mobile. Clear guides, examples, and a quick symbol library for daily use.",
  keywords: "Squared Symbol, superscript 2, ², mathematical symbols, copy squared symbol, type squared symbol, superscript characters, math symbols, Unicode U+00B2",
  authors: [{ name: "SquaredSymbol" }],
  creator: "SquaredSymbol",
  publisher: "SquaredSymbol",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://squaredsymbol.org'),
  alternates: {
    canonical: 'https://squaredsymbol.org/',
  },
  openGraph: {
    title: "Squared Symbol (²) - Copy, Type & Use Superscript 2 Symbol",
    description: "Copy the Squared Symbol (²) instantly and learn fast ways to type it on Windows, Mac and mobile. Clear guides, examples, and a quick symbol library for daily use.",
    url: 'https://squaredsymbol.org',
    siteName: 'SquaredSymbol',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Squared Symbol (²) - Mathematical Symbol Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Squared Symbol (²) - Copy, Type & Use Superscript 2 Symbol",
    description: "Copy the Squared Symbol (²) instantly and learn fast ways to type it on Windows, Mac and mobile. Clear guides, examples, and a quick symbol library for daily use.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
        <link rel="icon" href="/favicon.ico?v=1" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FQYENBZ518"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', 'G-FQYENBZ518');
        `}</Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StructuredData />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
