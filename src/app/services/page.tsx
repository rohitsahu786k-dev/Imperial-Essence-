import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { LogisticsTargetMarkets } from "@/components/sections/LogisticsTargetMarkets";
import { ContactInquirySection } from "@/components/sections/ContactInquirySection";

export const metadata: Metadata = {
  title: "Services & Logistics | Worldwide Supply 28 SL",
  description: "Global Distribution, Logistics Management, Brand Introduction, and Sourcing & Supplier Development.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesSection />
      <LogisticsTargetMarkets />
      <ContactInquirySection />
    </div>
  );
}
