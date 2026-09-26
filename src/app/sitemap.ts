import type { MetadataRoute } from "next";

const SITE = "https://cihantintin.com";

/**
 * Yeni sayfa eklendiğinde buraya da eklenir (ör. ilçe sayfaları, "Canlı Şantiye",
 * "Vekâletname ile ruhsat süreci" rehberi).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const simdi = new Date();
  return [
    { url: `${SITE}/`, lastModified: simdi, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/gizlilik`, lastModified: simdi, changeFrequency: "yearly", priority: 0.2 },
  ];
}
