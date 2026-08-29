import type { Metadata } from "next";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ContactInquirySection } from "@/components/sections/ContactInquirySection";

export const metadata: Metadata = {
  title: "Why Choose Us | Imperial Essence Trading LLC",
  description: "Why Imperial Essence Trading LLC is your trusted partner in luxury perfumery, cosmetics, travel retail, and European T1 & T2 sourcing.",
};

export default function WhyChooseUsPage() {
  return (
    <div>
      <InternalPageHero
        eyebrow="Why Choose Us"
        title="Built for trust, consistency, and long-term distribution"
        copy="A Dubai-based wholesale partner combining over 40 years of family legacy, brand relationships, direct European T1 & T2 sourcing, and international logistics discipline."
      />
      <WhyChooseUs compact />
      <ContactInquirySection compact />
    </div>
  );
}
