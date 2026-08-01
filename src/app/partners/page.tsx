import type { Metadata } from "next";
import { InquiryCTA } from "@/components/sections/InquiryCTA";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { PartnerGroups } from "@/components/sections/PartnerGroups";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Wholesale Partnership Opportunities | Worldwide Supply 28",
  path: "/partners",
});

export default function PartnersPage() {
  const groups = ["Retailers", "Duty-free operators", "Distributors", "Wholesalers", "Strategic groups"];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Partners", path: "/partners" }])) }} />
      <InternalPageHero eyebrow="Partners" title="Wholesale partnership opportunities" copy="Worldwide Supply 28 works with qualified retailers, duty-free operators, distributors, wholesalers, importers, buying offices, and strategic business partners." />
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
          {groups.map((group) => (
            <article key={group} className="rounded-md border border-[#123A5A]/10 p-5">
              <h2 className="text-lg font-semibold text-[#123A5A]">{group}</h2>
              <p className="mt-3 text-sm leading-7 text-[#102033]/72">Partnership discussions are shaped around market needs, category fit, availability, and long-term wholesale potential.</p>
            </article>
          ))}
        </div>
      </section>
      <PartnerGroups />
      <InquiryCTA />
    </>
  );
}
