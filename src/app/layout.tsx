import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { LanguageProvider } from "@/context/LanguageContext";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
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
    default: "Imperial Essence Trading LLC | Luxury Perfumery, Beauty & Duty Free Distribution Dubai",
    template: "%s | Imperial Essence Trading LLC",
  },
  description: "Dubai-based wholesale and distribution gateway drawing on over 40 years of family legacy in luxury perfumery, niche fragrances, cosmetics, skincare, travel sets, and European T1 & T2 sourcing.",
  alternates: { canonical: site.url },
  openGraph: {
    title: "Imperial Essence Trading LLC | Luxury Wholesale & Duty Free Distribution",
    description: "Dubai-based wholesale and distribution gateway drawing on over 40 years of family legacy in luxury perfumery, niche fragrances, cosmetics, skincare, travel sets, and European T1 & T2 sourcing.",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/banner/imperial-essence-trading-llc/desktop/imperial-essence-dubai-luxury-products-banner-desktop-01.png", width: 1920, height: 900, alt: "Imperial Essence Trading LLC luxury product portfolio" }],
    type: "website",
  },
  icons: {
    icon: "/imperial-essence-logo.png",
    shortcut: "/imperial-essence-logo.png",
    apple: "/imperial-essence-logo.png",
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
      <body className="min-h-full bg-white text-[#071321]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <LanguageProvider>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
