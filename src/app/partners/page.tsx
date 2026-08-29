import type { Metadata } from "next";
import { InquiryCTA } from "@/components/sections/InquiryCTA";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { PartnerGroups } from "@/components/sections/PartnerGroups";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Wholesale Partnership Opportunities | Imperial Essence Trading LLC",
  path: "/partners",
});

export default function PartnersPage() {
  const groups = ["Retailers", "Duty-Free Operators", "Distributors", "Wholesalers", "Strategic Brand Owners"];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Partners", path: "/partners" }])) }} />
      <InternalPageHero eyebrow="Partners" title="Wholesale partnership opportunities" copy="Imperial Essence Trading LLC works with qualified retailers, duty-free operators, distributors, wholesalers, importers, buying offices, and strategic business partners." />
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
          {groups.map((group) => (
            <article key={group} className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm hover:border-[#D4AF37] transition">
              <h2 className="text-lg font-extrabold text-[#071321]">{group}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Partnership discussions are shaped around market needs, category fit, direct European T1 & T2 sourcing, and long-term distribution potential.</p>
            </article>
          ))}
        </div>
      </section>
      <PartnerGroups />
      <InquiryCTA />
    </>
  );
}
