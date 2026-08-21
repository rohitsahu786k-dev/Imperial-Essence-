import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Worldwide Supply 28 SL",
  description: "Privacy Policy and data protection guidelines for Worldwide Supply 28 SL.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-white text-[#071321]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-slate-500">Last updated: August 2026</p>
        <div className="prose prose-slate max-w-none space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            Worldwide Supply 28 SL (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), based in Valencia, Spain (CIF: B26703769), respects your privacy and is committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR) and Spanish data protection laws.
          </p>
          <h2 className="text-xl font-bold text-[#071321]">1. Data We Collect</h2>
          <p>
            We collect business inquiry information provided voluntarily through our contact forms, email, or WhatsApp, including name, company name, country, email address, and phone number.
          </p>
          <h2 className="text-xl font-bold text-[#071321]">2. How We Use Data</h2>
          <p>
            Your information is used solely to respond to wholesale inquiries, manage business relationships, arrange international logistics, and fulfill commercial contracts.
          </p>
          <h2 className="text-xl font-bold text-[#071321]">3. Data Security & Contact</h2>
          <p>
            For any inquiries regarding data protection, please contact us at <strong>info@worldwidesupply28.com</strong> or by mail to Calle Carlos Cervera, 14, Bajo, 46006, Valencia, Spain.
          </p>
        </div>
      </div>
    </div>
  );
}
