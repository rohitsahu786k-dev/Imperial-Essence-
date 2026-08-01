import type { Metadata } from "next";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ title: "Terms", path: "/terms" });

export default function TermsPage() {
  return (
    <>
      <InternalPageHero eyebrow="Legal" title="Terms" copy="This website presents corporate information and B2B wholesale inquiry pathways for qualified business partners." />
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6 text-sm leading-7 text-[#102033]/72">
          <p>Content on this website is provided for general business information and does not represent a retail catalogue, offer to sell to consumers, or product availability guarantee.</p>
          <p>All wholesale discussions are subject to qualification, availability, market requirements, documentation, and direct agreement between parties.</p>
          <p>Brand and group references are used in descriptive business context only and do not imply endorsement, ownership, or formal affiliation unless separately confirmed in writing.</p>
        </div>
      </section>
    </>
  );
}
