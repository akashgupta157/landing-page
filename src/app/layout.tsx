import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Landing Page",
  description:
    "A clear and focused landing page that highlights your product and helps visitors take action.",
  keywords: [
    "landing page",
    "startup",
    "SaaS",
    "marketing",
    "product",
    "conversion",
  ],
  openGraph: {
    title: "Landing Page",
    description:
      "A simple and effective landing page that introduces your product to new users.",
    url: "https://landing-page-ten-tau-25.vercel.app",
    siteName: "Landing Page",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page",
    description:
      "A clean landing page built to turn visitors into customers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://landing-page-ten-tau-25.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
