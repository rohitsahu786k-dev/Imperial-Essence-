import { HeroSection } from "@/components/sections/HeroSection";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { GlobalNetwork } from "@/components/sections/GlobalNetwork";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { InquiryCTA } from "@/components/sections/InquiryCTA";

export function HomeContent() {
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
