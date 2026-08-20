import type { Metadata } from "next";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ContactInquirySection } from "@/components/sections/ContactInquirySection";

export const metadata: Metadata = {
  title: "Why Choose Us | Worldwide Supply 28 SL",
  description: "Why Worldwide Supply 28 SL is your trusted partner in luxury wholesale, retail distribution, and global supply.",
};

export default function WhyChooseUsPage() {
  return (
    <div className="pt-20">
      <WhyChooseUs />
      <ContactInquirySection />
    </div>
  );
}
