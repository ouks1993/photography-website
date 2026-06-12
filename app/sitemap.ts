import type { MetadataRoute } from "next";
import { posts } from "./blog/page";
import { printsMeta } from "./store/page";

const BASE = "https://elouks.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/portfolio", "/about", "/blog", "/store", "/contact"].map(
    (path) => ({
      url: `${BASE}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const blogPages = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const printPages = printsMeta.map((p) => ({
    url: `${BASE}/store/${p.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...blogPages, ...printPages];
}
