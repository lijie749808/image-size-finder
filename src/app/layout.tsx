import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Image Size Finder - Check Image Dimensions, File Size & Info",
  description: "Free online tool to instantly find image dimensions (width × height), file size, resolution, MIME type, and metadata.",
  keywords: "image size finder, image dimensions, check image size, picture size finder",
  authors: [{ name: "Image Size Finder" }],
  creator: "Image Size Finder",
  publisher: "Image Size Finder",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://imagesizefinder.org'),
  alternates: {
    canonical: 'https://imagesizefinder.org/',
    languages: {
      'en': 'https://imagesizefinder.org/',
      'zh': 'https://imagesizefinder.org/zh/',
      'ja': 'https://imagesizefinder.org/ja/',
      'es': 'https://imagesizefinder.org/es/',
    },
  },
  openGraph: {
    title: "Image Size Finder - Check Image Dimensions, File Size & Info Online",
    description: "Free online tool to instantly find image dimensions (width × height), file size, resolution, MIME type, and metadata. Works with PNG, JPEG, WebP, GIF.",
    url: 'https://imagesizefinder.org',
    siteName: 'Image Size Finder',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Image Size Finder - Online Image Analyzer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Image Size Finder - Check Image Dimensions, File Size & Info Online",
    description: "Free online tool to instantly find image dimensions, file size, resolution, and metadata. Works with all image formats.",
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
        <meta name="theme-color" content="#3B82F6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1E293B" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JEM3LVCJH7"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', 'G-JEM3LVCJH7');
        `}</Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
