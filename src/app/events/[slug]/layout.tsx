import type { Metadata } from "next";
import { getEventsList } from "../events";
import { SITE_NAME, SITE_URL, jsonLd, pageMetadata, slugify } from "@/lib/seo";

type Props = { children: React.ReactNode; params: Promise<{ slug: string }> };

async function findEvent(slug: string) {
  const list = await getEventsList().catch(() => []);
  return list.find((e) => slugify(e.title) === slug);
}

const clip = (t: string, n = 160) => (t.length > n ? `${t.slice(0, n - 1).trimEnd()}…` : t);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = await findEvent(slug);
  if (!event) return pageMetadata({ title: "Events", description: "Events from the Imo State Ministry of Health.", path: `/events/${slug}`, noindex: true });
  return pageMetadata({
    title: event.title,
    description: clip(event.description.replace(/\s+/g, " ").trim()),
    path: `/events/${slug}`,
    image: event.img?.startsWith("http") ? event.img : undefined,
  });
}

export default async function EventLayout({ children, params }: Props) {
  const { slug } = await params;
  const event = await findEvent(slug);
  const start = event && !isNaN(+new Date(event.dateString)) ? new Date(event.dateString).toISOString() : undefined;
  return (
    <>
      {event && start && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              "@context": "https://schema.org",
              "@type": "Event",
              name: event.title,
              description: event.description,
              startDate: start,
              ...(event.location && event.location !== "Location TBD" ? { location: { "@type": "Place", name: event.location } } : {}),
              ...(event.img?.startsWith("http") ? { image: [event.img] } : {}),
              url: `${SITE_URL}/events/${slug}`,
              organizer: { "@type": "GovernmentOrganization", name: SITE_NAME, url: SITE_URL },
            }),
          }}
        />
      )}
      {children}
    </>
  );
}
