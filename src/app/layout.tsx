import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileDock } from "@/components/layout/MobileDock";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Worldwide Supply 28 | Luxury Wholesale & International Distribution",
    template: "%s | Worldwide Supply 28",
  },
  description: site.description,
  alternates: { canonical: site.url },
  openGraph: {
    title: "Worldwide Supply 28 | Luxury Wholesale & International Distribution",
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: site.logo, width: 1536, height: 864, alt: `${site.name} logo` }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full bg-white text-[#102033]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <SmoothScroll />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <MobileDock />
        <Footer />
      </body>
    </html>
  );
}
