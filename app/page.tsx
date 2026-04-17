import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

const siteUrl = "https://www.buchhaltung-riba.eu";
const business = {
  name: "Buchhaltung Riba",
  email: "claudia.riba@buchhaltung-riba.eu",
  phone: "+43 676 9505026",
  street: "Industriestraße 3a / EG",
  postalCode: "6841",
  city: "Mäder",
  region: "Vorarlberg",
  country: "AT",
  openingHours: ["Tu 08:30-11:00", "Fr 08:30-14:00"],
};

export const metadata: Metadata = {
  title: "Buchhalterin in Mäder",
  description:
    "Buchhalterin in Mäder (Vorarlberg) für Buchhaltung, Personalverrechnung & Jahresabschluss. Persönlich, präzise und termintreu.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: business.name,
    url: siteUrl,
    image: `${siteUrl}/og.jpg`,
    email: business.email,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.street,
      postalCode: business.postalCode,
      addressLocality: business.city,
      addressRegion: business.region,
      addressCountry: business.country,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Vorarlberg" },
      { "@type": "City", name: "Mäder" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/Tuesday",
        opens: "08:30",
        closes: "11:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/Friday",
        opens: "08:30",
        closes: "14:00",
      },
    ],
    sameAs: [
      // Falls vorhanden: Google Unternehmensprofil, LinkedIn, etc.
    ],
    priceRange: "€€",
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
}
