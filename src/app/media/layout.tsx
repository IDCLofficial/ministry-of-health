import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Media Gallery",
  description: "Photos and media from Imo State Ministry of Health activities, programmes and events.",
  path: "/media",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
