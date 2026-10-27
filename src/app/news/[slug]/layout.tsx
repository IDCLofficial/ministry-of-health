import type { Metadata } from "next";
import { getNewsList } from "../newsData";
import { SITE_NAME, SITE_URL, LOGO_PATH, jsonLd, pageMetadata, slugify } from "@/lib/seo";

type Props = { children: React.ReactNode; params: Promise<{ slug: string }> };

async function findArticle(slug: string) {
  const list = await getNewsList().catch(() => []);
  return list.find((n) => slugify(n.title) === slug);
}

const clip = (t: string, n = 160) => (t.length > n ? `${t.slice(0, n - 1).trimEnd()}…` : t);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await findArticle(slug);
  // Unknown slug: keep generic title and stay out of the index.
  if (!article) return pageMetadata({ title: "News", description: "News from the Imo State Ministry of Health.", path: `/news/${slug}`, noindex: true });
  return pageMetadata({
    title: article.title,
    description: clip(article.description.replace(/\s+/g, " ").trim()),
    path: `/news/${slug}`,
    image: article.image?.startsWith("http") ? article.image : undefined,
    type: "article",
  });
}

export default async function NewsArticleLayout({ children, params }: Props) {
  const { slug } = await params;
  const article = await findArticle(slug);
  const iso = article && !isNaN(+new Date(article.date)) ? new Date(article.date).toISOString() : undefined;
  return (
    <>
      {article && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: article.title,
              mainEntityOfPage: `${SITE_URL}/news/${slug}`,
              ...(iso ? { datePublished: iso } : {}),
              ...(article.image?.startsWith("http") ? { image: [article.image] } : {}),
              ...(article.author && article.author !== "Unknown Author" ? { author: { "@type": "Person", name: article.author } } : {}),
              publisher: { "@type": "GovernmentOrganization", name: SITE_NAME, logo: { "@type": "ImageObject", url: `${SITE_URL}${LOGO_PATH}` } },
            }),
          }}
        />
      )}
      {children}
    </>
  );
}
