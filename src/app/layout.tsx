import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalLoader from "@/components/GlobalLoader";
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, LOGO_PATH, OG_IMAGE_PATH, jsonLd } from "@/lib/seo";


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} | Healthcare Services in Imo State`, template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_NG",
    title: `${SITE_NAME} | Healthcare Services in Imo State`,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: OG_IMAGE_PATH }],
  },
  twitter: { card: "summary_large_image", title: SITE_NAME, description: DEFAULT_DESCRIPTION, images: [OG_IMAGE_PATH] },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}${LOGO_PATH}`,
  description: DEFAULT_DESCRIPTION,
  areaServed: { "@type": "AdministrativeArea", name: "Imo State, Nigeria" },
  parentOrganization: { "@type": "GovernmentOrganization", name: "Imo State Government" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organizationJsonLd) }} />
        <GlobalLoader/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
