import type { Metadata } from "next";
import { InquiryCTA } from "@/components/sections/InquiryCTA";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Wholesale Distribution Services | Global Sourcing & Logistics",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])) }} />
      <InternalPageHero eyebrow="Services" title="Wholesale Distribution Services" copy="Global sourcing, luxury wholesale distribution, travel retail supply, duty-free support, FMCG distribution, logistics coordination, and dedicated account management." />
      <ServicesOverview detailed />
      <InquiryCTA />
    </>
  );
}
