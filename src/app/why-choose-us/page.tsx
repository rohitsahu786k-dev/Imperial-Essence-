import type { Metadata } from "next";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { InquiryCTA } from "@/components/sections/InquiryCTA";

export const metadata: Metadata = {
  title: "Why Choose Us | Imperial Essence Trading LLC",
  description: "40+ years family legacy, direct European sourcing (T1 & T2 model), established commercial relationships with LVMH, PUIG, L'Oréal Luxe, COTY, and niche houses.",
};

export default function WhyChooseUsPage() {
  return (
    <div>
      <InternalPageHero
        eyebrow="Why Choose Us"
        title="Your Reliable Partner for Luxury Wholesale & Distribution"
        copy="Speaking to clients looking for a luxury supplier and brands seeking a regional official distributor across Dubai, Europe, and duty free channels."
      />
      <WhyChooseUs />
      <ServicesOverview />
      <InquiryCTA />
    </div>
  );
}
