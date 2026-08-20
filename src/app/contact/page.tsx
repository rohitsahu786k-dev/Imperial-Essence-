import type { Metadata } from "next";
import { ContactInquirySection } from "@/components/sections/ContactInquirySection";

export const metadata: Metadata = {
  title: "Contact Us | Worldwide Supply 28 SL",
  description: "Contact Worldwide Supply 28 SL in Valencia, Spain. Request wholesale inquiries, distribution proposals, or sourcing partnerships.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactInquirySection />
    </div>
  );
}
