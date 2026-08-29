import type { Metadata } from "next";
import { GlobalNetwork } from "@/components/sections/GlobalNetwork";
import { InquiryCTA } from "@/components/sections/InquiryCTA";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Global Distribution Network | Imperial Essence Trading LLC",
  path: "/global-distribution",
});

export default function GlobalDistributionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Global Distribution", path: "/global-distribution" }])) }} />
      <InternalPageHero eyebrow="Global Distribution" title="Supply chain support from Dubai HQ to international markets" copy="From European sourcing review to delivery coordination, Imperial Essence Trading LLC supports partners with a practical, compliance-aware, B2B distribution mindset." />
      <GlobalNetwork />
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {["Dubai-based international operations", "Direct European T1 & T2 sourcing", "Global market expansion"].map((title) => (
            <article key={title} className="rounded-3xl border border-amber-200 bg-white p-7 shadow-sm hover:border-[#D4AF37] transition">
              <h2 className="text-xl font-extrabold text-[#071321]">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {title === "Global market expansion"
                  ? "Imperial Essence Trading LLC is expanding across international markets by building new collaborations and strategic partnerships with distributors, duty-free operators, and retailers worldwide."
                  : "Our process focuses on partner qualification, luxury category availability, European T1 & T2 sourcing flexibility, logistics coordination, and ongoing communication."}
              </p>
            </article>
          ))}
        </div>
      </section>
      <InquiryCTA />
    </>
  );
}
