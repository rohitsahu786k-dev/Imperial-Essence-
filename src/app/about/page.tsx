import type { Metadata } from "next";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { AboutCompanyProfile } from "@/components/sections/AboutCompanyProfile";
import { AboutStorySection } from "@/components/sections/AboutStorySection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ContactInquirySection } from "@/components/sections/ContactInquirySection";

export const metadata: Metadata = {
  title: "About Us | Imperial Essence Trading LLC",
  description: "Learn about Imperial Essence Trading LLC, our founders Siddharth Thakker & Sakina Idmouhine, 40+ years family legacy, company mission, vision, and core values.",
};

export default function AboutPage() {
  return (
    <div>
      <InternalPageHero
        eyebrow="About Us"
        title="Dubai Headquarters for Luxury Perfumery & European Sourcing"
        copy="Imperial Essence Trading LLC connects luxury categories, trusted retail partners, duty-free operators, distributors, and direct European T1 & T2 sourcing from Dubai, UAE."
      />
      <AboutCompanyProfile />
      <AboutStorySection />
      <WhyChooseUs compact />
      <ContactInquirySection compact />
    </div>
  );
}
