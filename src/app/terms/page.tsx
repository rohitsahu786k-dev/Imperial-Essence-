import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Worldwide Supply 28 SL",
  description: "Terms and conditions of business for Worldwide Supply 28 SL.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-white text-[#071321]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Terms & Conditions</h1>
        <p className="text-sm text-slate-500">Last updated: August 2026</p>
        <div className="prose prose-slate max-w-none space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            Welcome to the official website of Worldwide Supply 28 SL (CIF: B26703769), located at Calle Carlos Cervera, 14, Bajo, 46006, Valencia, Spain.
          </p>
          <h2 className="text-xl font-bold text-[#071321]">1. Scope of Business</h2>
          <p>
            Worldwide Supply 28 SL operates exclusively as an international wholesale distributor, travel retail partner, and sourcing entity. We do not provide direct retail selling or consumer e-commerce checkout on this website.
          </p>
          <h2 className="text-xl font-bold text-[#071321]">2. Wholesale Inquiries & Quotations</h2>
          <p>
            All product categories listed are subject to availability, minimum order quantities (MOQ), customs regulations, and formal sales agreements.
          </p>
          <h2 className="text-xl font-bold text-[#071321]">3. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of Spain. Any disputes shall be submitted to the courts of Valencia, Spain.
          </p>
        </div>
      </div>
    </div>
  );
}
