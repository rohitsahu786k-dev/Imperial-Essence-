import type { Metadata } from "next";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { LogisticsTargetMarkets } from "@/components/sections/LogisticsTargetMarkets";
import { ContactInquirySection } from "@/components/sections/ContactInquirySection";

export const metadata: Metadata = {
  title: "Services & Logistics | Imperial Essence Trading LLC",
  description: "Global Wholesale & Distribution, Logistics Management, Direct European Sourcing, Official Brand Representation, and Duty Free Supply.",
};

export default function ServicesPage() {
  return (
    <div>
      <InternalPageHero
        eyebrow="Services"
        title="Wholesale, European Sourcing, and Logistics Management"
        copy="End-to-end B2B capabilities for global distribution, multi-modal transport management, direct European T1 & T2 sourcing, and duty-free supply."
      />
      <ServicesSection compact />
      <LogisticsTargetMarkets compact />
      <ContactInquirySection compact />
    </div>
  );
}
