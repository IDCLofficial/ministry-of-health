import type { MetadataRoute } from "next";
import { SITE_URL, slugify } from "@/lib/seo";
import { getNewsList } from "./news/newsData";
import { getEventsList } from "./events/events";

export const revalidate = 3600;

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/departments", priority: 0.8, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.7, changeFrequency: "monthly" },
  { path: "/news", priority: 0.8, changeFrequency: "daily" },
  { path: "/events", priority: 0.7, changeFrequency: "weekly" },
  { path: "/data", priority: 0.5, changeFrequency: "monthly" },
  { path: "/media", priority: 0.4, changeFrequency: "monthly" },
  { path: "/contact-us", priority: 0.6, changeFrequency: "yearly" },
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Dynamic content comes from Contentful; failures must not break the sitemap.
  const [news, events] = await Promise.all([getNewsList().catch(() => []), getEventsList().catch(() => [])]);
  const seen = new Set<string>();
  for (const n of news) {
    const slug = slugify(n.title);
    if (!slug || seen.has(`/news/${slug}`)) continue;
    seen.add(`/news/${slug}`);
    const d = new Date(n.date);
    entries.push({ url: `${SITE_URL}/news/${slug}`, ...(isNaN(+d) ? {} : { lastModified: d }), changeFrequency: "yearly", priority: 0.6 });
  }
  for (const e of events) {
    const slug = slugify(e.title);
    if (!slug || seen.has(`/events/${slug}`)) continue;
    seen.add(`/events/${slug}`);
    const d = new Date(e.dateString);
    entries.push({ url: `${SITE_URL}/events/${slug}`, ...(isNaN(+d) ? {} : { lastModified: d }), changeFrequency: "yearly", priority: 0.5 });
  }
  return entries;
}
