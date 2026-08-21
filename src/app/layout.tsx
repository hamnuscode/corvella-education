import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f7f6fb",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Corvella Education | UK university admissions support",
    template: "%s | Corvella Education",
  },
  description:
    "Corvella Education helps you get on to a UK university course, even without A levels. Free eligibility check, full admissions support and student finance guidance.",
  keywords: [
    "UK university admissions",
    "study without A levels",
    "mature student university",
    "education consultancy UK",
    "student finance guidance",
    "foundation year",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: "Corvella Education | UK university admissions support",
    description:
      "Free eligibility check, full admissions support and student finance guidance for UK university applicants.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corvella Education | UK university admissions support",
    description:
      "Free eligibility check, full admissions support and student finance guidance for UK university applicants.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${instrument.variable} ${plexMono.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
