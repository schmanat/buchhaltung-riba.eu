import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = false;

const siteUrl = "https://www.buchhaltung-riba.eu";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date("2026-01-01"), // statisch halten (kein new Date())
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/impressum/`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
