import type { Metadata } from "next";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { GlobalNetwork } from "@/components/sections/GlobalNetwork";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { InquiryCTA } from "@/components/sections/InquiryCTA";

export const metadata: Metadata = {
  title: "Logistics & Global Distribution | Imperial Essence Trading LLC",
  description: "Road, Sea, and Air freight logistics management for luxury perfumery, cosmetics, and beauty across Middle East, Europe, USA, Africa, and duty free channels.",
};

export default function GlobalDistributionPage() {
  return (
    <div>
      <InternalPageHero
        eyebrow="Logistics & Transport Management"
        title="Global Transport & Freight Network"
        copy="Many years of experience in logistics and international transport by road, sea, and air worldwide, working closely with established freight forwarders."
      />
      <GlobalNetwork />
      <ServicesOverview />
      <InquiryCTA />
    </div>
  );
}
