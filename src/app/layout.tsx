export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalLoader from "@/components/GlobalLoader";


export const metadata: Metadata = {
  title: {
    default: 'Imo State Ministry of Health',
    template: '%s | Imo State Ministry of Health'
  },
  description: 'Official website of the Imo State Ministry of Health - providing healthcare services, health information, and medical facilities across Imo State, Nigeria.',
  keywords: ['Imo State Health', 'Ministry of Health', 'Healthcare Nigeria', 'Medical Services Imo'],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://health.im.gov.ng',
    siteName: 'Imo State Ministry of Health',
    title: 'Imo State Ministry of Health',
    description: 'Official website of the Imo State Ministry of Health',
    images: [
      {
        url: 'https://health.im.gov.ng/images/IMSG-Logo.svg',
        width: 1200,
        height: 630,
        alt: 'Imo State Ministry of Health',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'RHU2Q17XzVZYPJnLxDp0pXBaiblERgGFz8O1VLraDH0',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalLoader/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
