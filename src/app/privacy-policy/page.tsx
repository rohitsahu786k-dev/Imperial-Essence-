import type { Metadata } from "next";
import { InternalPageHero } from "@/components/sections/InternalPageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ title: "Privacy Policy", path: "/privacy-policy" });

export default function PrivacyPolicyPage() {
  return (
    <>
      <InternalPageHero eyebrow="Legal" title="Privacy Policy" copy="Worldwide Supply 28 collects business inquiry information only to review and respond to wholesale partnership requests." />
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6 text-sm leading-7 text-[#102033]/72">
          <p>Information submitted through the inquiry form may include name, company, contact details, market, business type, category interests, and message content.</p>
          <p>Submitted details are used for B2B communication, lead qualification, and partnership follow-up. The website does not include consumer checkout or payment processing.</p>
          <p>To request correction or removal of submitted business inquiry information, contact trading@worldwidesupply28.com.</p>
        </div>
      </section>
    </>
  );
}
