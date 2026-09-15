import { HeroSection } from "@/components/sections/HeroSection";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { GlobalNetwork } from "@/components/sections/GlobalNetwork";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { InquiryCTA } from "@/components/sections/InquiryCTA";

// The real homepage, parked while the site shows the under-construction notice.
// To bring it back: render <HomeContent /> from src/app/page.tsx instead of
// <UnderConstruction />, and drop the pathname check in SiteChrome.
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
