import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans"
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-static";
export const revalidate = false;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const siteName = "Buchhaltung Riba";
const siteUrl = "https://buchhaltung-riba.eu"; // ggf. anpassen
const locale = "de_AT";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Buchhalterin in Mäder | Buchhaltung & Personalverrechnung Vorarlberg",
    template: `%s | ${siteName}`,
  },
  description:
    "Professionelle Buchhalterin in Mäder (Vorarlberg). Buchhaltung, Personalverrechnung & Jahresabschluss – persönlich, zuverlässig und kompetent.",
  alternates: {
    canonical: "/",
    languages: {
      "de-AT": "/",
      de: "/",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    locale,
    title: "Buchhalterin in Mäder | Buchhaltung & Personalverrechnung Vorarlberg",
    description:
      "Buchhaltung, Personalverrechnung & Jahresabschluss für Unternehmen und Selbstständige in Vorarlberg. Persönlich & zuverlässig.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Buchhaltung Riba – Bilanzbuchhalterin in Mäder (Vorarlberg)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buchhalterin in Mäder | Buchhaltung & Personalverrechnung Vorarlberg",
    description:
      "Buchhaltung, Personalverrechnung & Jahresabschluss in Vorarlberg – persönlich, kompetent und termintreu.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Accounting",
  keywords: [
    "Buchhalterin Mäder",
    "Buchhaltung Mäder",
    "Bilanzbuchhalterin Mäder",
    "Buchhaltung Vorarlberg",
    "Personalverrechnung Vorarlberg",
    "Lohnverrechnung Mäder",
    "Jahresabschluss Vorarlberg",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} min-h-screen bg-background`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
