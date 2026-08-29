import type { Metadata } from "next";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { ContactInquirySection } from "@/components/sections/ContactInquirySection";

export const metadata: Metadata = {
  title: "Contact Us | Imperial Essence Trading LLC",
  description: "Contact Imperial Essence Trading LLC in Dubai, UAE. Request wholesale inquiries, distribution proposals, or European T1 & T2 sourcing partnerships.",
};

export default function ContactPage() {
  return (
    <div>
      <InternalPageHero
        eyebrow="Contact Us"
        title="Start a qualified wholesale & distribution conversation"
        copy="Send your sourcing requirement, distribution proposal, or partnership inquiry to the Imperial Essence Trading LLC team at our Dubai headquarters."
      />
      <ContactInquirySection compact />
    </div>
  );
}
