import type { Metadata } from "next";

// Verified production domain (Vercel project domain). Override per environment if needed.
export const SITE_URL = (process.env.NEXT_PUBLIC_SEO_SITE_URL || "https://health.im.gov.ng").replace(/\/$/, "");
export const SITE_NAME = "Imo State Ministry of Health";
export const DEFAULT_DESCRIPTION =
  "Official website of the Imo State Ministry of Health: public health programmes, healthcare services, departments, news and events for citizens of Imo State, Nigeria.";
export const LOGO_PATH = "/images/IMSG-Logo.svg";
export const OG_IMAGE_PATH = "/og-image.jpg";

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function pageMetadata(opts: {
  title: NonNullable<Metadata["title"]>;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
}): Metadata {
  const image = opts.image || OG_IMAGE_PATH;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      title: typeof opts.title === "string" ? opts.title : (opts.title as { absolute?: string }).absolute,
      description: opts.description,
      url: opts.path,
      siteName: SITE_NAME,
      locale: "en_NG",
      type: opts.type || "website",
      images: [{ url: image }],
    },
    twitter: { card: "summary_large_image", title: typeof opts.title === "string" ? opts.title : (opts.title as { absolute?: string }).absolute, description: opts.description, images: [image] },
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export function jsonLd(data: Record<string, unknown>) {
  // Escape "<" so content can never close the script tag.
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
