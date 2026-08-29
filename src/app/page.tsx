import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeAboutBrief } from "@/components/sections/HomeAboutBrief";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { LogisticsTargetMarkets } from "@/components/sections/LogisticsTargetMarkets";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ContactInquirySection } from "@/components/sections/ContactInquirySection";

export const metadata: Metadata = {
  title: "Imperial Essence Trading LLC | Luxury Perfumery, Beauty & Duty Free Distribution Dubai",
  description:
    "Dubai-based wholesale and distribution gateway drawing on over 40 years of family legacy in luxury perfumery, niche fragrances, cosmetics, skincare, travel sets, and European T1 & T2 sourcing.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeAboutBrief />
      <CategoryGrid />
      <ServicesSection compact />
      <LogisticsTargetMarkets compact />
      <WhyChooseUs />
      <ContactInquirySection />
    </>
  );
}
