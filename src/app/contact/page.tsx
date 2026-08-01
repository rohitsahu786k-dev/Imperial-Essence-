import type { Metadata } from "next";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { site } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Worldwide Supply 28 | Wholesale Inquiry",
  path: "/contact",
});

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Worldwide Supply 28",
    url: `${site.url}/contact`,
    mainEntity: { "@type": "Organization", name: site.name, email: site.email, telephone: site.phone },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <InternalPageHero eyebrow="Contact" title="Wholesale Inquiry" copy="Tell us about your company, market, and category interest. Our team will review your inquiry and respond directly." />
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <aside className="space-y-5">
            <div className="rounded-md bg-[#0B2239] p-6 text-white">
              <h2 className="text-2xl font-semibold">Contact details</h2>
              <div className="mt-5 space-y-3 text-sm leading-6 text-white/78">
                <p>{site.director}, {site.directorTitle}</p>
                <p><a href={site.phoneHref}>{site.phone}</a></p>
                <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
                <p>{site.address}</p>
              </div>
            </div>
            <div className="min-h-64 rounded-md border border-[#123A5A]/10 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#207B68]">Valencia / Spain</p>
              <div className="mt-8 h-36 rounded-md bg-[linear-gradient(135deg,#FFFFFF,#FFFFFF)] p-5 text-sm leading-6 text-[#102033]/70">
                Map-style visual block for the company base at Calle Carlos Cervera, Valencia.
              </div>
            </div>
          </aside>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
