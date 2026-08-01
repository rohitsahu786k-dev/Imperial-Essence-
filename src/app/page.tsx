import type { Metadata } from "next";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { AnimatedCTA } from "@/components/sections/AnimatedCTA";
import { BlogSection } from "@/components/sections/BlogSection";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { ClientShowcase } from "@/components/sections/ClientShowcase";
import { GlobalNetwork } from "@/components/sections/GlobalNetwork";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnerGroups } from "@/components/sections/PartnerGroups";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Worldwide Supply 28 | Luxury Wholesale & International Distribution",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutIntro />
      <CategoryGrid />
      <ServicesOverview />
      <GlobalNetwork />
      <PartnerGroups />
      <ClientShowcase />
      <WhyChooseUs />
      <BlogSection />
      <AnimatedCTA />
    </>
  );
}
