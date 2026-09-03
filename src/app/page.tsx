import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { GlobalNetwork } from "@/components/sections/GlobalNetwork";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { InquiryCTA } from "@/components/sections/InquiryCTA";

export const metadata: Metadata = {
  title: "Imperial Essence Trading LLC | Luxury Perfumery, Beauty & Duty Free Distribution Dubai",
  description:
    "Dubai-based wholesale and distribution gateway drawing on over 40 years of family legacy in luxury perfumery, niche fragrances, cosmetics, skincare, travel sets, and direct European T1 & T2 sourcing.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <ServicesOverview />
      <GlobalNetwork />
      <WhyChooseUs />
      <InquiryCTA />
    </>
  );
}
