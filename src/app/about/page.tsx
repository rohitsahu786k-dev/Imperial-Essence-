import type { Metadata } from "next";
import { InquiryCTA } from "@/components/sections/InquiryCTA";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Worldwide Supply 28 | Luxury Wholesale & Global Distribution",
  path: "/about",
});

const sections = [
  ["15+ years of wholesale experience", "Worldwide Supply 28 brings practical experience across premium sourcing, international distribution, travel retail, FMCG categories, and B2B relationship management."],
  ["Mission and vision", "Our mission is to connect premium products with responsible international market opportunities through reliable wholesale partnerships and disciplined execution."],
  ["International sourcing approach", "We evaluate category fit, partner needs, availability, market readiness, and supply coordination before recommending any wholesale opportunity."],
  ["Travel retail and duty-free expertise", "The company supports airport retail, destination retail, and duty-free conversations with a premium, channel-aware approach."],
  ["Long-term partnership philosophy", "We prioritize trust, communication, repeatable processes, and commercially realistic expectations over short-term consumer-style selling."],
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])) }} />
      <InternalPageHero eyebrow="About" title="Valencia-based wholesale expertise for global markets" copy="Worldwide Supply 28 specializes in premium products, luxury retail, travel retail, FMCG distribution, and global sourcing." />
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {sections.map(([title, copy]) => (
            <article key={title} className="rounded-md border border-[#123A5A]/10 p-6">
              <h2 className="text-xl font-semibold text-[#123A5A]">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#102033]/72">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <InquiryCTA />
    </>
  );
}
