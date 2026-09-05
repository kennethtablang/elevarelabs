import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { legalDocs } from "@/content/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    /* The appendices change when the site's behaviour changes, not on a
       schedule, so lastModified is the document's own revision date rather
       than the build time — a crawler should see a stable date until one
       actually changes. */
    ...legalDocs.map((doc) => ({
      url: `${site.url}/${doc.slug}`,
      lastModified: new Date(`${doc.updated}T00:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
