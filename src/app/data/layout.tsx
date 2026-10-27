import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Health Workforce Data",
  description: "Workforce statistics of the Imo State Ministry of Health: staff overview, demographics, qualifications and employment data.",
  path: "/data",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
