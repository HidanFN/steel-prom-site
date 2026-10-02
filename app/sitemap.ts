import type { MetadataRoute } from "next";
import { categories } from "@/content/catalog";
import { directions } from "@/content/directions";
import { projects } from "@/content/portfolio";
import { articles, news } from "@/content/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://steel-prom.ru";
  const staticPages = [
    "",
    "/catalog/",
    "/directions/",
    "/company/",
    "/company/production/",
    "/company/history/",
    "/company/portfolio/",
    "/company/awards/",
    "/company/vacancy/",
    "/company/documents/",
    "/company/gallery/",
    "/company/news/",
    "/company/articles/",
    "/suppliers/",
    "/contacts/",
    "/search/",
    "/privacy-policy/",
    "/user-agreement/",
  ].map((path) => ({ url: `${base}${path || "/"}`, changeFrequency: "weekly" as const }));

  const extra = [
    ...categories.flatMap((c) => [
      { url: `${base}/catalog/${c.slug}/` },
      ...c.children.flatMap((s) => [
        { url: `${base}/catalog/${c.slug}/${s.slug}/` },
        ...s.products.map((p) => ({ url: `${base}/catalog/${c.slug}/${s.slug}/${p.slug}/` })),
      ]),
    ]),
    ...directions.map((d) => ({ url: `${base}/directions/${d.slug}/` })),
    ...projects.map((p) => ({ url: `${base}/company/portfolio/${p.slug}/` })),
    ...news.map((n) => ({ url: `${base}/company/news/${n.slug}/` })),
    ...articles.map((a) => ({ url: `${base}/company/articles/${a.slug}/` })),
  ];

  return [...staticPages, ...extra];
}
