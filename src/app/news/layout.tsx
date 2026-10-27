import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Health News and Updates",
  description: "Latest news, announcements and updates from the Imo State Ministry of Health on public health programmes and healthcare in Imo State.",
  path: "/news",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
