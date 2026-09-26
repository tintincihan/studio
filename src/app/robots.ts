import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://cihantintin.com/sitemap.xml",
    host: "https://cihantintin.com",
  };
}
