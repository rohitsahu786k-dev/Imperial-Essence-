import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions | Imperial Essence Trading LLC",
  description: "Terms and conditions of business for Imperial Essence Trading LLC.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-[#fffdf7] text-[#1f190f]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#1f190f]">Terms & Conditions</h1>
        <p className="text-sm font-bold text-[#8a640f]">Last updated: August 2026</p>
        <div className="prose prose-slate max-w-none space-y-4 text-sm leading-relaxed text-[#4a3c28] font-medium">
          <p>
            Welcome to the official website of Imperial Essence Trading LLC, located at {site.address}.
          </p>
          <h2 className="text-xl font-extrabold text-[#1f190f]">1. Scope of Business</h2>
          <p>
            Imperial Essence Trading LLC operates exclusively as a B2B international wholesale distributor, duty-free partner, and sourcing entity. We do not provide direct retail selling or consumer e-commerce checkout on this website.
          </p>
          <h2 className="text-xl font-extrabold text-[#1f190f]">2. Direct Sourcing & Wholesale Inquiries</h2>
          <p>
            All product categories listed across luxury perfumery, cosmetics, skincare, niche fragrances, fashion, and accessories are subject to market availability, European clean T2 or non-European T1 supply conditions, minimum order quantities (MOQ), and formal commercial agreements.
          </p>
          <h2 className="text-xl font-extrabold text-[#1f190f]">3. Trademark & Group Disclaimer</h2>
          <p>
            References to major luxury groups (including LVMH, PUIG, L&apos;Oréal Luxe, COTY) and niche perfume houses represent commercial sourcing capabilities and do not imply official brand representation unless explicitly authorized.
          </p>
          <h2 className="text-xl font-extrabold text-[#1f190f]">4. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the United Arab Emirates and the Emirate of Dubai.
          </p>
        </div>
      </div>
    </div>
  );
}
